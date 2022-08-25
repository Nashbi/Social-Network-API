const router = require("express").Router();

const {
  getAllUsers, //GET all users
  getUserById, //GET a single user by its _id and populated thought and friend data
  createUser, //POST a new user:
  updateUser, //PUT to update a user by its _id
  deleteUser, //DELETE to remove user by its _id

} = require("../../controllers/userControllers");

// /api/users --> get all users + creates new user
router.route("/").get(getUsers).post(createUser);

// /api/users/:user_Id --> gets single user + update/modify user info + delete user
router.route("/:user_Id").get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:user_Id/friends/:friendId
router
  .route("/:user_Id/friends/:friendId")
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;