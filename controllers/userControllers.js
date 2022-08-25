const { User, Thought } = require('../models');

module.exports = {
  // Get all users
  async getAllUsers(req, res) {
    const users = await User.find()
      .select("-__v")
      .populate("thoughts");
    res.status(200).json(users);
  },

    // GET a SINGLE user by id
    getUserById(req, res) {
        User.findOne({ _id: req.params.user_Id })
          .populate({ path: "thoughts", select: "-__v" })
          .then((user) =>
            !user
              ? res.status(404).json({ message: "No user with that ID" })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
      },
    
      // creating a user
      postUser(req, res) {
        User.create(req.body)
          .then((userDb) => res.json(userDb))
          .catch((err) => res.status(500).json(err));
      },
      // updating a user
      updateUser(req, res) {
        User.updateOne({ _id: req.params.user_Id }, req.body)
          .then((user) =>
            !user
              ? res.status(400).json({
                  message: "Cannot update user because user does not exist",
                })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
      },
      // deleting the user
      deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.user_Id })
          .then((user) =>
            !user
              ? res.status(404).json({
                  message: "Cannot delete user because user does not exist",
                })
              : Thought.deleteMany({ _id: { $in: user.thoughts } })
          )
          .then(() =>
            res.json({ message: "User and associated thoughts/reactions deleted!" })
          )
    
          .catch((err) => res.status(500).json(err));
      },
    };