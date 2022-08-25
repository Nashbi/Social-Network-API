const { User, Thought } = require("../models");

module.exports = {
  getAllThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },


  getThoughtById(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .populate({ path: "reactions", select: "-__v" })
      .then((thought) =>
        !thought
          ? res.status(400).json({ message: "Thought doesn't exist" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },


  postThought(req, res) {
    Thought.create(req.body)
      .then((thoughtDB) => res.json(thoughtDB))
      .catch((err) => res.status(500).json(err));
  },


  updateThought(req, res) {
    Thought.updateOne({ _id: req.params.thoughtId }, req.body)
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "Thought doesn't exist" })
          : res.json(thought)
      )
      .catch((err) => res.statu(500).json(err));
  },


  deleteThought(req, res) {
    Thought.deleteOne({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "Thought doesn't exist" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

};