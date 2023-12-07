const { request, expect } = require("./config");

describe("POST /favorites", function () {
  describe("Authentication", function () {
    it("requires authentication", async function () {
      const response = await request.post("/favorites").send({
        airport_id: "YBR",
        note: "Going to Canada",
      });

      expect(response.status).to.eql(401);
    });
  });

  describe("Get Favorite Airports", function () {
    it("allows a user to get their favorite airports", async function () {
      const postResponse = await request
        .get("/favorites")
        .set("Authorization", "Bearer token=NTyqLpqBW2dqg1Fq7ud17n1x");

      expect(postResponse.status).to.eql(200);
    });
  });

  describe("Save and Delete Favorite Airports", function () {
    it("allows a user to save and delete their favorite airports", async function () {
      // Save a favorite
      const postResponse = await request
        .post("/favorites")
        .set("Authorization", "Bearer token=NTyqLpqBW2dqg1Fq7ud17n1x")
        .send({
          airport_id: "YBR",
          note: "Going to Canada",
        });

      expect(postResponse.status).to.eql(201);

      const favoriteId = postResponse.body.data.id;

      // Update the note of the created favorite
      const putResponse = await request
        .put(`/favorites/${favoriteId}`)
        .set("Authorization", "Bearer token=NTyqLpqBW2dqg1Fq7ud17n1x")
        .send({
          note: "My usual layover when visiting family and friends",
        });

      expect(putResponse.status).to.eql(200);
      expect(putResponse.body.data.attributes.note).to.eql(
        "My usual layover when visiting family and friends"
      );

      // Delete the created favorite
      const deleteResponse = await request
        .delete(`/favorites/${favoriteId}`)
        .set("Authorization", "Bearer token=NTyqLpqBW2dqg1Fq7ud17n1x");

      expect(deleteResponse.status).to.eql(204);

      // Verify that the record was deleted
      const getResponse = await request
        .get(`/favorites/${favoriteId}`)
        .set("Authorization", "Bearer token=NTyqLpqBW2dqg1Fq7ud17n1x");

      expect(getResponse.status).to.eql(404);
    });
  });
});
