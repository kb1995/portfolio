import React, { Component } from "react";
import NavigationBar from "components/NavigationBar/NavigationBar";
import SocialMedia from "components/SocialMedia/SocialMedia";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        {this.props.children}
        <SocialMedia />
      </div>
    );
  }
}

export default App;
