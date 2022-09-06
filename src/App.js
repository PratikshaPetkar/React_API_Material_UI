import React, { components } from "react";
import "./App.css";
import Fetchdata from "./components/Fetchdata";

class App extends components() {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        <Fetchdata />
      </div>
    );
  }
}

export default App