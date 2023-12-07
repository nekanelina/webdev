const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const User = require("../models/userModel");
const Workout = require("../models/workoutModel");
const workouts = require("./data/workouts.js");

let userToken;

beforeAll(async () => {
  // Delete all users and create a new user for testing
  await User.deleteMany({});
  const userResponse = await api.post("/api/user/signup").send({
    email: "mattiv@matti.fi",
    password: "R3g5T7#gh",
  });
  userToken = userResponse.body.token;
});

describe("Workouts API", () => {
  beforeEach(async () => {
    // Delete all workouts and add some initial workouts
    await Workout.deleteMany({});
    await api
      .post("/api/workouts")
      .set("Authorization", `bearer ${userToken}`)
      .send(workouts[0])
      .send(workouts[1]);
  });

  test("should return workouts as JSON", async () => {
    await api
      .get("/api/workouts")
      .set("Authorization", `bearer ${userToken}`)
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("should add a new workout successfully", async () => {
    const newWorkout = {
      title: "testworkout",
      reps: 10,
      load: 100,
    };
    await api
      .post("/api/workouts")
      .set("Authorization", `bearer ${userToken}`)
      .send(newWorkout)
      .expect(201);
  });

  test("should delete a workout successfully", async () => {
    const workoutsResponse = await api
      .get("/api/workouts")
      .set("Authorization", `bearer ${userToken}`);
    const workoutId = workoutsResponse.body[0]._id;

    await api
      .delete(`/api/workouts/${workoutId}`)
      .set("Authorization", `bearer ${userToken}`)
      .expect(200);
  });

  test("should update a workout successfully", async () => {
    const workoutsResponse = await api
      .get("/api/workouts")
      .set("Authorization", `bearer ${userToken}`);
    const workoutId = workoutsResponse.body[0]._id;

    const updatedWorkout = {
      title: "updatedworkout",
      reps: 15,
      load: 150,
    };

    await api
      .patch(`/api/workouts/${workoutId}`)
      .set("Authorization", `bearer ${userToken}`)
      .send(updatedWorkout)
      .expect(200);
  });
});

test("should read a single workout successfully", async () => {
  const workoutsResponse = await api
    .get("/api/workouts")
    .set("Authorization", `bearer ${userToken}`);
  const workoutId = workoutsResponse.body[0]._id;

  await api
    .get(`/api/workouts/${workoutId}`)
    .set("Authorization", `bearer ${userToken}`)
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

afterAll(() => {
  // Close the MongoDB connection after all tests are finished
  mongoose.connection.close();
});
