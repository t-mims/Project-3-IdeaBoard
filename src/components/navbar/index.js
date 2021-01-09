import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      IdeaBoard
    </Link>
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="/"
            className={
              window.location.pathname === "/" || window.location.pathname === "/home"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Homepage
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/inpso"
            className={window.location.pathname === "/inspo" ? "nav-link active" : "nav-link"}
          >
            Finding Inspo
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/myBoard"
            className={window.location.pathname === "/myBoard" ? "nav-link active" : "nav-link"}
          >
            MyBoard
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/search"
            className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
          >
            InspoSearch
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;