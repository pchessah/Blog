import React from "react";
import {NavLink} from "react-router-dom"

function Navigation() {
  return (
    <div >
      <nav style={{padding:"20px"}} className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 navbar-fixed-top">
        <div className="container">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                exact
                className="nav-link"
                activeClassName="active"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/articles"
              >
                Articles
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
