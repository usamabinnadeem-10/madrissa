import React from "react";
import Container from "react-bootstrap/Container";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/home" component={Dashboard}></Route>
      </Switch>
    </div>
  );
}

export default App;
