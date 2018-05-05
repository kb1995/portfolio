import styled, { css } from "styled-components";
import ReactPlayer from "react-player";

export const Title = styled.h1`
  margin-top: 0;
  color: black;
`;

export const Question = styled.h3`
  flex: 1;
  text-align: center;
  margin-right: 10px;
`;

export const Answer = styled.div`
  position: relative;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    cursor: pointer;

    transform-origin: left;
    transform: rotateY(90deg);
    transition: transform 1.5s ease-in-out;

    @keyframes example {
      0% {
        background-color: black;
      }
      50% {
        background-color: #333;
      }
      100% {
        background-color: black;
      }
    }

    animation-name: example;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }

  ${({ hide }) =>
    hide &&
    css`
      &:after {
        transform: rotateY(0deg);
      }
    `};
`;

export const ReactP = styled(ReactPlayer)`
  margin: 5px;
`;

export const Img = styled.img`
  border: 3px solid black;
  &:hover {
    opacity: 0.9;
    transform: scale(1.025);
  }
`;
