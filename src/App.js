import React, { Component } from "react";
import "./App.css";

import Facebook from "./components/Facebook.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Facebook Auth</h1>
          <p className="App-into">To get started authencticate Facebook </p>
          <Facebook className="App-into" />
        </header>
      </div>
    );
  }
}

export default App;
