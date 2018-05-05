import styled from "styled-components";
import { blue } from "theme/variables";
import media from "theme/media";

export const Title = styled.h1`
  margin-top: 0;
  color: black;
`;

export const Project = styled.div`
  position: relative;
  padding: 50px;
  border: 3px solid black;
  height: 200px;

  transition: background-color 1.5s;

  p {
    font-weight: bold;
    text-align: center;
    margin-top: 10%;
    visibility: visible;
  }

  .SocialIcon {
    visibility: visible;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    
  }



  .SocialIcon * {
    margin-right: 20px;
  }

  ${media.desktop`


  .SocialIcon {
    visibility: hidden;
    position: absolute;
    left: 40%;
    top: 40%;
    transform: translateX(0);
  }

  &:hover {
    background-color: ${blue};
    opacity: 0.9;

    .SocialIcon {
      visibility: visible;
    }
    p {
      visibility: hidden;
    }
  }
  `};
`;
