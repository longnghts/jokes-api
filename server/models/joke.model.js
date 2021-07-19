const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
	joke: String
});

const Joke = mongoose.model("joke", JokesSchema);

module.exports = Joke;