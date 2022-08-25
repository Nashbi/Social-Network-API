
const router = require("express").Router();

const {
  getAllThoughts, //gets all thoughts
  getThoughtById, //GET to get a single thought by its _id
  postThought, // POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
  updateThought, //PUT to update a thought by its _id
  deleteThought, // DELETE to remove a thought by its _id

} = require("../../controllers/thoughtControllers");

router.route("/").get(getAllThoughts).post(postThought);

router
  .route("/:thoughtId")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);


module.exports = router;