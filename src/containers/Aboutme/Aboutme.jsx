import React, { Component } from "react";
import { Container, Flex, Grid, H3 } from "theme/grid";
import { hot } from "react-hot-loader";
import { Title, Question, Answer, ReactP, Img } from "./Aboutme.style";
import WhenInView from "components/WhenInView/WhenInView";
import WhenClicked from "components/WhenClicked/WhenClicked";

// listing answers like this is temporary - need to fix it when I figure it out how
const answers = [
  <div>
    <ReactP
      url={"https://www.youtube.com/watch?v=bhd2mvrlezE"}
      config={{
        youtube: {
          playerVars: { showinfo: 1 }
        }
      }}
      height="100px"
      width="85%"
    />
    <ReactP
      url={"https://soundcloud.com/robsteez/robi-street-memoirs"}
      config={{
        soundcloud: {}
      }}
      height="100px"
      width="85%"
    />
    <ReactP
      url={"https://www.youtube.com/watch?v=3nRE1FlU2i4"}
      config={{
        youtube: {
          playerVars: { showinfo: 1 }
        }
      }}
      height="100px"
      width="85%"
    />
  </div>,
  <div>
    <p>
      Actually yes - thank you for asking. I play guitar and ukulele. I have
      tried to play a bit of harmonica, but not a lot of luck with this one.
    </p>
    <p>
      Check out this old video of young me playing Stand by me (with some errors
      of course)
    </p>
    <p>
      My friend and I were so proud of each other, because this was our first
      video we ever edited
    </p>
    <ReactP
      url={"https://www.youtube.com/watch?v=rpjIFmNbiI4"}
      config={{
        youtube: {
          playerVars: { showinfo: 1 }
        }
      }}
      width="85%"
    />
  </div>,
  <div>
    <p>
      Yes! Editing was the first skill for which I got paid - a couple from the
      USA hired me to edit their wedding. It was an incredible fun!
    </p>
    <p>
      Currently, video editing has been put on a hold in order to concentrate on
      web development, but I will explore ways to use it again in the near
      future.
    </p>
    <p>Programming tutorials? Vlogging? The world is full of possibilities</p>
  </div>,
  <Grid>
    <a
      href="https://www.youtube.com/channel/UCvK4bOhULCpmLabd2pDMtnA"
      target="_blank"
    >
      <Img
        src={require("../../assets/yestheory.jpeg")}
        alt="yes_theory"
        height="200"
        width="150"
        srcset=""
      />
    </a>
    <a
      href="https://www.youtube.com/channel/UC68TLK0mAEzUyHx5x5k-S1Q"
      target="_blank"
    >
      <Img
        src={require("../../assets/jeff.jpg")}
        alt="jeff"
        height="200"
        width="150"
        srcset=""
      />
    </a>
    <a
      href="https://www.youtube.com/channel/UCBJycsmduvYEL83R_U4JriQ"
      target="_blank"
    >
      <Img
        src={require("../../assets/Marques Brownlee.jpg")}
        alt="marques"
        height="200"
        width="150"
        srcset=""
      />
    </a>
    <a href="https://www.youtube.com/user/enyay" target="_blank">
      <Img
        src={require("../../assets/tom scott.jpg")}
        alt="Tom Scott"
        height="200"
        width="150"
        srcset=""
      />
    </a>
  </Grid>
];

class Aboutme extends Component {
  render() {
    return (
      <Container>
        <Title>About me - outside of web development</Title>
        <H3 align={"center"}>Hello World! So you want to learn a bit more about me? Ask me some questions:</H3>
        <Flex>
          <Question>
            What type of music do you like to listen while working on these cool
            websites?
          </Question>
          <WhenClicked text={answers[0]} />
        </Flex>

        <Flex>
          <Question>
            With such an awesome taste in music, do you play any instruments?
          </Question>
          <WhenClicked text={answers[1]} />
        </Flex>

        <Flex>
          <Question>Did you say video editing?</Question>
          <WhenClicked text={answers[2]} />
        </Flex>

        <Flex>
          <Question>
            Any YouTubers that inspire you and make your life a bit better every
            day?
          </Question>
          <WhenClicked text={answers[3]} />
        </Flex>
      </Container>
    );
  }
}

export default hot(module)(Aboutme);
