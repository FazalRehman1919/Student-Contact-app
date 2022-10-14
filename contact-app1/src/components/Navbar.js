//MAKE THE NAVBAR AND IMORT THEM IN MAIN APP JS

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
        <Link to="/" className="navbar-brand ms-5">
          React Redux Contact App
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
