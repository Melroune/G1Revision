import React from "react";
import { Switch, Route } from "react-router-dom";

import Characters from "./screen/Characters";
import Header from "./components/Header";
import Home from "./screen/Home";
import "./App.css";

class App extends React.Component {
  render() {
    // console.log(this);
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/characters" component={Characters} />
        </Switch>
      </div>
    );
  }
}

export default App;
