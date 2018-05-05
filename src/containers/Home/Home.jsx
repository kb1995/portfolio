import React, { Component } from "react";
import { Container, P, Grid } from "theme/grid";
import { hot } from "react-hot-loader";
import WhenInView from "components/WhenInView/WhenInView";
import { MainImage, RevealP, Parallax } from "./Home.style";
import SkillBar from "components/SkillBar/SkillBar";

class Home extends Component {
  render() {
    return (
      <Container>
        <MainImage>
          <h2>Kristiyan Bogdanov</h2>
          <h2>Web developer</h2>
        </MainImage>

        <WhenInView>
          {({ isInView }) => (
            <RevealP hide={!isInView}>
              <p>
                My favourite professor at university once said to the entire
                class: "Mathematicians are the laziest people in the world -
                they will work as hard as possible just to find a solution where
                they don't have to work anymore"
              </p>
            </RevealP>
          )}
        </WhenInView>

        <Parallax bgImage={`url('${require("../../assets/image-1.jpeg")}')`}>
          <p>React</p>
        </Parallax>

        <WhenInView>
          {({ isInView }) => (
            <RevealP hide={!isInView}>
              <p>
                My ideal job is described with 3 adjectives - rewarding,
                challenging and interesting.
              </p>
              <p>Web development is:</p>
              <ul>
                <li>
                  Rewarding: seeing the results you have been working for the
                  last weeks. Even more rewarding is when you see that the
                  people who use your project are satisfied.
                </li>
                <li>
                  Challenging: you always encounter new problems you haven't
                  seen before. You challenge yourself with every project you do.
                </li>
                <li>
                  Interesting: constantly evolving and discovering new and
                  exciting parts of web development. The community around web
                  development is huge, which makes it even more interesting.
                </li>
              </ul>
            </RevealP>
          )}
        </WhenInView>

        <Parallax bgImage={`url('${require("../../assets/image-2.jpeg")}')`}>
          <p>Responsive Design</p>
        </Parallax>

        <WhenInView>
          {({ isInView }) => (
            <RevealP hide={!isInView}>
              <p>Here are some of my skills:</p>
              <Grid>
                <SkillBar percentage = {90} color = "red" >HTML</SkillBar>
                <SkillBar percentage = {70} color = "red">CSS</SkillBar>
                <SkillBar percentage = {60} color = "lightblue">Javascript / ES6</SkillBar>
                <SkillBar percentage = {70} color = "lightblue">ReactJS</SkillBar>
                <SkillBar percentage = {50} color = "orange">Data analysis</SkillBar>
                <SkillBar percentage = {40} color = "orange">Machine Learning</SkillBar>
              </Grid>
            </RevealP>
          )}
        </WhenInView>

        <Parallax bgImage={`url('${require("../../assets/image-3.jpeg")}')`}>
          <p>Interactive websites</p>
        </Parallax>

        <WhenInView>
          {({ isInView }) => (
            <RevealP hide={!isInView}>
              <P align="center">
                If you would like to work together or just chat with me, feel
                free to email me at:
              </P>
              <P align="center">kristiyan.r.bogdanov@gmail.com</P>
            </RevealP>
          )}
        </WhenInView>
      </Container>
    );
  }
}

export default hot(module)(Home);
