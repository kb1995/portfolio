import React, { Component } from "react";
import { Answer } from "containers/Aboutme/Aboutme.style";
import { Div } from "./WhenClicked.style";

// need to learn how to pass props to {this.props.children}, which will make this component way more efficient
export default class WhenClicked extends Component {
  state = { visible: false };

  handleClick() {
    this.setState({
      visible: true
    });
  }

  render() {
    return (
      <Div>
        <Answer
          onClick={this.handleClick.bind(this)}
          hide={!this.state.visible}
        >
          {this.props.text}
        </Answer>
      </Div>
    );
  }
}
