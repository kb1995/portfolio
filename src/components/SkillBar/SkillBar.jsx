import React, { Component } from "react";
import { Box, Percentage } from "./SkillBar.style";

export default class SkillBar extends Component {
  render() {
    return (
      <Box>
        <Percentage color = {this.props.color} percentage = {this.props.percentage}>{this.props.children}</Percentage>
      </Box>
    );
  }
}


