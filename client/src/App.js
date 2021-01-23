import React from "react";
import {useHistory} from "react-router";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import NewBoard from "./pages/newBoard";
import UserBoard from "./pages/UserBoard";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/register";
import Masonry from "./pages/UserBoard";
import Logout from "./pages/logout";


//and import other necessary pages (which will correspond to the routes) and compnents
function App() {
  let history= useHistory();
  return (
    <Router>
      <div>
        <Navbar />
        {/* these components still need to be defined */}
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/UserBoard" component={UserBoard} />
        <Route path="/newBoard" component={NewBoard} />
        <Route path="/search" component={Search} />
        <Route path="/myBoard" component={Masonry} />
        <Route path="/logout" component={Logout} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;