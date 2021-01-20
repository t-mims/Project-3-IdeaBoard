import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import NewBoard from "./pages/newBoard";
import UserBoard from "./pages/UserBoard";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/register";
import Masonry from "./pages/UserBoard";


//and import other necessary pages (which will correspond to the routes) and compnents
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* these components still need to be defined */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/UserBoard" component={UserBoard} />
        <Route exact path="/newBoard" component={NewBoard} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/masonry" component={Masonry} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;