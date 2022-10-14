import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//IMPORT THE BROWSER ROUTER FOR ROUTING
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

//IMPORT THE BOOTSRAP
import "bootstrap/dist/css/bootstrap.min.css";

//IMPORT THE TOASTYFY FOR TOASTING
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <App />
                <Home />
              </>
            }
          />
          <Route
            path="/add"
            element={
              <>
                <App />
                <AddContact />
              </>
            }
          />
          <Route
            path="/edit/:id"
            element={
              <>
                <App />
                <EditContact />
              </>
            }
          />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
