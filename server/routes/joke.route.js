const JokesController = require("../controllers/joke.controller.js");

module.exports = app => {
//CREATE
app.post("/api/jokes/create", JokesController.createJoke)
//READ ALL
app.get('/api/jokes', JokesController.findAllJokes)
//READ ONE
app.get('/api/jokes/:_id', JokesController.findOneJoke)
//UPDATE
app.put('/api/jokes/update/:_id', JokesController.updateJoke)
//DELETE
app.delete('/api/jokes/delete/:_id', JokesController.deleteJoke)
};