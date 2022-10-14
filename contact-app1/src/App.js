import React from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";

import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="App">
      {/**TOAST FOR APP */}
      <ToastContainer />
      <Navbar />
    </div>
  );
};

export default App;
