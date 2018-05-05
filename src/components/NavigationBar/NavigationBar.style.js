import styled from "styled-components";
import { blue } from "theme/variables";
import { Link } from "react-router";

export const NavigationContainer = styled.div`
  display: flex;
  flex-position: row;
  justify-content: flex-end;
  margin: 1em 90px;
`;

export const NavItem = styled(Link)`
  margin-right: 30px;
  font-size: 1em;
  color: ${blue};
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;

  position: relative;
  &:hover {
    color: white;

    &:after {
      content: " ";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      z-index: -1;
      transform: scale(1.1);
    }
  }
`;
