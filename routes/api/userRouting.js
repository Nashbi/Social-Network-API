const router = require("express").Router();

const {
  getAllUsers, //GET all users
  getUserById, //GET a single user by its _id and populated thought and friend data
  postUser, //POST a new user:
  updateUser, //PUT to update a user by its _id
  deleteUser, //DELETE to remove user by its _id

} = require("../../controllers/userControllers");

router.route("/").get(getAllUsers).post(postUser);

router.route("/:user_Id").get(getUserById).put(updateUser).delete(deleteUser);


module.exports = router;