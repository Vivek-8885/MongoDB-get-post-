import React from "react";
import PropTypes from "prop-types";
export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {/* here we use {} because we need to find the specific elements from  */}
            {/* thw values or arguments that are passed */}
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  {/* here we have used the function arguments that are passed */}
                  {props.About}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.prototype = {
  title: PropTypes.string.isRequired,
  About: PropTypes.string.isRequired,
};
// if we need to have any default names to the function we declare as below.
// Navbar.defaultProps={
//     title:"Defualt title",
//     About:"Default About"
// }