import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../screens/Home/Home";
import Workspace from "../screens/Workspace/Workspace";
import MainNavigator from "./MainNavigator";

const Routes = (
  <Router>
    <Switch>
      <MainNavigator>
        <Route exact path="/" component={Home} />
        <Route exact path="/workspace" component={Workspace} />
      </MainNavigator>
    </Switch>
  </Router>
);
export default Routes;
