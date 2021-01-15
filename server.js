const express = require("express");
const mongoose = require("mongoose");
const passport = require("./config/passport");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./models");
const session = require("express-session")

// app.configure(function() {
  app.use(express.static('public'));
  app.use(express.urlencoded({extended:true}));
  app.use(express.json());
  // app.use(express.cookieParser());
  // app.use(express.bodyParser());
  app.use(session({ secret: 'keyboard cat' }));
  app.use(passport.initialize());
  app.use(passport.session());
  // app.use(app.router);
// });


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
    res.redirect('/' + req.user.username);
  });                                       

// Connect to the Mongo DB
mongoose.connect('mongodb://localhost/test' )
 

// db.Board.create({ name: "" })
//   .then(dbboard => {
//     console.log(dbboard);
//   })
//   .catch(({ message }) => {
//     console.log(message);
//   });

app.use(routes);


// Start the server
app.listen(PORT, function() {
  console.log(`Server now listening on PORT ${PORT}!`);
});
