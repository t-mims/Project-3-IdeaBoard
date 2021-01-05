import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer"
//and import other necessary pages (which will correspond to the routes) and compnents
function App() {
  return (
    return (
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            <Route exact path="/" component={Home} />
            <Route exact path="/myBoard" component={myBoard} />
            <Route exact path="/Inspo" component={Inspo} />
            <Route exact path="/search" component={Search} />
          </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  );
}

export default App;
