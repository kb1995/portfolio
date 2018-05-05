import React, { Component } from "react";
import { Title, Project } from "./Projects.style";
import { Grid, Container } from "theme/grid";
import { hot } from "react-hot-loader";
import { SocialIcon } from "react-social-icons";

class Projects extends Component {
  render() {
    return (
      <div>
        <Container>
          <Title>Projects</Title>

          <Grid>
            <Project>
              <p>
                Teach a machine to change the color of the text given a
                background!
              </p>
              <div className="SocialIcon">
                <SocialIcon
                  network="sharethis"
                  color={"black"}
                  url="http://kb1995-machine-learning-text.surge.sh"
                />
                <SocialIcon color={"black"} url="https://github.com/kb1995" />
              </div>
            </Project>
            <Project>
              <p>Wikipedia Search</p>

              <div className="SocialIcon">
                <SocialIcon
                  network="sharethis"
                  color={"black"}
                  url="http://kb1995-wikipedia.surge.sh"
                />
                <SocialIcon color={"black"} url="https://github.com/kb1995" />
              </div>
            </Project>
            <Project>
              <p>Worldwide current weather</p>

              <div className="SocialIcon">
                <SocialIcon
                  network="sharethis"
                  color={"black"}
                  url="http://kb1995-weatherapp.surge.sh"
                />
                <SocialIcon color={"black"} url="https://github.com/kb1995" />
              </div>
            </Project>
            <Project>
              <p>Easy list app</p>

              <div className="SocialIcon">
                <SocialIcon
                  network="sharethis"
                  color={"black"}
                  url="http://kb1995-listapp.surge.sh"
                />
                <SocialIcon color={"black"} url="https://github.com/kb1995" />
              </div>
            </Project>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default hot(module)(Projects);
