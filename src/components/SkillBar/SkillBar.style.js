import styled from "styled-components";

export const Box = styled.div`
  border: 3px solid black;
  opacity: 0.7;

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.01);
    opacity: 1;
  }
`;

export const Percentage = styled.div`
  font-weight: bold;
  text-align: center;

  background-color: ${({color}) => color};
  width: ${({percentage}) => percentage}%;
  height: 30px;
`;
