import React from "react";
import { useSelector } from "react-redux";  //state ko read krne ke liye..we use 'useSelector' hook
// useSelector hook is used to access the Redux store state in a functional component.

const Navbar = () => {
  const amount=useSelector(state=>state.amount)
  return (
    <div> 
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Bank of Children
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
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
              </ul>
              <button type="button" className="btn btn-primary">Balance: {amount}</button>
            </div>
          </div>
        </nav>
      </>
    </div>
  );
};

export default Navbar;
