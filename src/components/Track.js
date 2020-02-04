import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./login/Login";
import Home from "./home/Home";

const Track = () => {
  return (
    <Router data-test="track-component">
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home} />
    </Router>
  );
};

export default Track;
