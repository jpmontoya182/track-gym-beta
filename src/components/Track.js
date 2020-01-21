import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./login/Login";
import Home from "./home/Home";

import "./Track.scss";

const Track = () => {
  return (
    <Router>
      <section>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </section>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
    </Router>
  );
};

export default Track;
