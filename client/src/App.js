import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Inspo from "./pages/Inspo";
import myBoard from "./pages/myBoard";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/register";
import Masonry from "./pages/masonryCards";


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
        <Route exact path="/myBoard" component={myBoard} />
        <Route exact path="/inspo" component={Inspo} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/masonry" component={Masonry} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
