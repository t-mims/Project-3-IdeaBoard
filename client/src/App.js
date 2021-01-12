import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer"
import Inspo from  "./pages/Inspo";
import myBoard from "./pages/myBoard";
import Search from "./pages/Search";
import Home from "./pages/Home";

const express = require('express');
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
const expressEjsLayout = require('express-ejs-layouts')

//mongoose
mongoose.connect('mongodb://localhost/test',{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log('connected,,'))
.catch((err)=> console.log(err));
//EJS
// app.set('view engine','ejs');
// app.use(expressEjsLayout);
//BodyParser
app.use(express.urlencoded({extended : false}));

//Routes
app.use('/',require('../routes/api/index'));
app.use('/users',require('../routes/api/users'));

app.listen(3000);

//and import other necessary pages (which will correspond to the routes) and compnents
function App() {
  return (
    <Router>
      <div>
        <Navbar />
    {/* these components still need to be defined */}
          <Route exact path="/" component={Home} />
          <Route exact path="/myBoard" component={myBoard} />
          <Route exact path="/inspo" component={Inspo} />
          <Route exact path="/search" component={Search} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
