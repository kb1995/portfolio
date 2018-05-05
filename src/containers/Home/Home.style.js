import styled, { css } from "styled-components";

export const Image = styled.img`
  width: 100%;
`;

export const MainImage = styled.div`
    height: 100vh;
    background-image: url('${require("../../assets/me.jpg")}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    font-weight: bold;
    font-size: 1.5em;

    h2 {
        margin-bottom: 0;
        padding: 5px;
        border: 3px solid #333;
        align-self: center;
        background-color: white;
    }
    
`;

export const RevealP = styled.p`
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;

    transform-origin: left;
    transform: rotateY(90deg);

    transition: transform 1.5s ease-in-out;
  }

  ${({ hide }) =>
    hide &&
    css`
      &:after {
        transform: rotateY(0deg);
      }
    `};
`;

export const Parallax = styled.div`
    position: relative;
    opacity: 0.9;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;

    background-image: ${({bgImage}) => bgImage};
    min-height: 400px;

    text-align: center;
    display:flex;
    flex-direction: column;
    justify-content: center;

    margin: 5px 0;

    p {
        padding: 30px;
        border: 3px solid #333;
        align-self: center;
        background-color: white;
        font-weight: bold;
    }
`;
