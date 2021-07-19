const Joke = require("../models/joke.model");
// BASIC CRUD COMMANDS

// CREATE
module.exports.createJoke = (req, res) => {
  Joke.create(req.body)
  .then(newJoke => res.json(newJoke))
  .catch(err => res.json({message: "joke creation failed!", error: err}))
};

//READ ONE
module.exports.findOneJoke = (req, res) => {
  Joke.find({_id: req.params._id})
  .then(oneJoke => res.json(oneJoke))
  .catch(err => res.json({message: "something went wrong when finding one joke!", error: err}))
};
//READ ALL
module.exports.findAllJokes = (req, res) => {
  Joke.find()
  .then(allJokes => res.json(allJokes))
  .catch(err => res.json({message: "something went wrong when finding all jokes!", error: err}))
};
//UPDATE
module.exports.updateJoke = (req, res) => {
  Joke.findOneAndUpdate({_id: req.params._id}, req.body, {new: true})
  .then(updatedJoke => res.json(updatedJoke))
  .catch(err => res.json({message: "something went wrong when updating joke!", error: err}))
};
//DELETE
module.exports.deleteJoke = (req, res) => {
  Joke.deleteOne({_id: req.params._id})
  .then(deletedJoke => res.json(deletedJoke))
  .catch(err => res.json({message: "something went wrong when deleting joke!", error: err}))
};