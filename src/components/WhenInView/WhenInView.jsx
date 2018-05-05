import React, { Component } from "react";
import Waypoint from "react-waypoint";

export default class WhenInView extends Component {
  state = { isInView: false };

  onEnter({ previousPosition }) {
    if (previousPosition === Waypoint.below) {
      this.setState({
        isInView: true
      });
    }
  }

  render() {
    return (
      <div>
        <Waypoint onEnter={this.onEnter.bind(this)} />
        {this.props.children({ isInView: this.state.isInView })}
      </div>
    );
  }
}
