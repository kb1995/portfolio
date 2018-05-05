import React, { Component } from "react";
import { Footer, Social } from "./SocialMedia.style";

export default class SocialMedia extends Component {
  render() {
    return (
      <Footer>
        <li>
          <Social url="https://www.instagram.com/kris_b_95/" />
        </li>
        <li>
          <Social url="https://www.facebook.com/kristiyan.bogdanov.3" />
        </li>
        <li>
          <Social url="https://www.linkedin.com/in/kristiyan-bogdanov-563b3212b/" />
        </li>
        <li>
          <Social color={"black"} url="https://github.com/kb1995" />
        </li>
      </Footer>
    );
  }
}
