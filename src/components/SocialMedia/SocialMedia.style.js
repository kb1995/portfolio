import styled from "styled-components";
import { SocialIcon } from "react-social-icons";
import media from "theme/media";

export const Footer = styled.ul`
  display: flex;
  justify-content: center;
  

  li{
    list-style-type: none;
  }
  

  ${media.desktop`
  width: auto;
  display: inline;
  justify-content: initial;
  
  position: fixed;
  top: 45%;

  li {
    padding: 20px 0;
  }
  `};
`;

export const Social = styled(SocialIcon) `
   margin: 0 10px;

  ${media.desktop`
    margin: 0;
  `};

  border-radius: 50%;
  -webkit-transition: -webkit-transform 0.8s ease-in-out;
  transition: transform 0.6s ease-in-out;

  &:hover {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;
