const express = require("express");
const mongoose = require("mongoose");
const passportLocal= require("passport-local");
const passport= require ("passport");
const routes = require("./routes");
const app = express();
const db = require("./models");

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
    //----(./models/user) file path to connect passport to USER model 
  });                                       

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactIdeaBoard",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);
//We may want to create a seed file for testing
db.User.create({ name: "Jane Doe", password:"xvgau3", username:"testJane", userID:1})
  .then(dbUser => {
    console.log(dbUser);
  })
  .catch(({ message }) => {
    console.log(message);
  });

app.use(routes);


// Start the server
app.listen(PORT, function() {
  console.log(`Server now listening on PORT ${PORT}!`);
});
