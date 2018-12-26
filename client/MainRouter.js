import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./core/Home";
import Users from "./user/Users";
import SignUp from "./user/Signup";
import Signin from "./auth/Signin";
import Menu from "./core/Menu";

class MainRouter extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={Signin} />
        </Switch>
      </div>
    );
  }
}

export default MainRouter;
