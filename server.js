const express = require("express");
const mongoose = require("mongoose");
const passport = require("./config/passport");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./models");
const session = require("express-session")

 
  // app.use(express.static('./public'));
  app.use(express.urlencoded({extended:true}));
  app.use(express.json());
  app.use(session({ secret: 'keyboard cat' }));
  app.use(passport.initialize());
  app.use(passport.session());
  // app.use(app.router);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

 require("./routes/api/api-routes")(app);                     

// Connect to the Mongo DB
mongoose.connect('mongodb://localhost/Board' ),{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true,
  useFindAndModify:false
}
 

// db.Board.create({ name: "" })
//   .then(dbboard => {
//     console.log(dbboard);
//   })
//   .catch(({ message }) => {
//     console.log(message);
//   });

// app.use(routes);


// Start the server
app.listen(PORT, function() {
  console.log(`Server now listening on PORT ${PORT}!`);
});
