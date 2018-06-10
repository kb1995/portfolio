import React, { Component } from "react";
import { NavigationContainer, NavItem } from "./NavigationBar.style";

export default class NavigationBar extends Component {
  render() {
    return (
      <NavigationContainer>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/projects">Projects</NavItem>
        <NavItem to="/aboutme">About me</NavItem>
        <NavItem href="https://standardresume.co/kristiyanbogdanov" target="_blank">
          CV
        </NavItem>
      </NavigationContainer>
    );
  }
}
