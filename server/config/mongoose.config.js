const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/jokesapi", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("ive found the mongoose"))
	.catch(err => console.log("oh no, ive lost the mongoose", err));