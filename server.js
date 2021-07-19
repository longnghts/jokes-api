const express = require("express");
const app = express();
const port = 8000;

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended:true }));

// This is where we import the users routes function from our user.routes.js file
const AllMyRoutes = require("./server/routes/joke.route");
AllMyRoutes(app);

app.listen(port, () => console.log(`Running on port ${port}!!`));
