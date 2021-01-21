import React from "react";
import { Link } from "react-router-dom";
import'./nbstyle.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Make It Happen
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/UserBoard"
              className={
                window.location.pathname === "/UserBoard"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              MyBoard
            </Link>
          </li>
         
            <li className="nav-item">
              <Link
                to="/register"
                className={
                  window.location.pathname === "/register"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Sign-Up/Sign-In
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/home"
                className={
                  window.location.pathname === "/home"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Logout
              </Link>
            </li>
          
        </ul>
      </div>
    </nav>
  );
}


export default Navbar;
