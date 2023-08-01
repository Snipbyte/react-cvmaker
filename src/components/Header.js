import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          CV-Maker
        </Link>
        <form className="d-flex">
          <button className="btn btn-dark mx-1 " type="submit">
            Login
          </button>
          <button className="btn btn-outline-dark" type="submit">
            Signup
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
