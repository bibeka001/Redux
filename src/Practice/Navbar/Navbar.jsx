import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <h1>Hello This is Navbar</h1>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/index" className="navbar-brand">
          React Redux
        </Link>
        <div className="ml-auto">
          <div className="navbar-nav">
            <li className="nav-item">
              <Link to="/message" className="navbar-brand">
                 Message 
              </Link>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
