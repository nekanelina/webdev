const dogs = [];

let nextDogId = 1;

function getNewDogId() {
  const newDogId = nextDogId;
  nextDogId++;
  return newDogId;
}

//  HANDLERS

// GET /dogs
const getAllDogs = (req, res) => {
  console.log(dogs);
  res.json(dogs);
};

// POST /dogs
const createDog = (req, res) => {
  const name = req.body.name;
  const newDog = {
    dogId: getNewDogId(),
    name,
  };
  dogs.push(newDog);
  res.json(newDog);
};

// GET /dogs/:dogId
const getDogById = (req, res) => {
  const dogId = req.params.dogId;
  const dog = dogs.find((dog) => dog.dogId == dogId);
  res.json(dog);
};

// PUT /dogs/:dogId
const updateDog = (req, res) => {
  const name = req.body.name;
  const dogId = req.params.dogId;
  const dog = dogs.find((dog) => dog.dogId == dogId);
  dog.name = name;
  res.json(dog);
};

// DELETE /dogs/:dogId
const deleteDog = (req, res) => {
  const dogId = req.params.dogId;
  const dogIdx = dogs.findIndex((dog) => dog.dogId == dogId);
  dogs.splice(dogIdx, 1);
  res.json({ message: "success" });
};

module.exports = {
  getAllDogs,
  getDogById,
  createDog,
  updateDog,
  deleteDog,
};