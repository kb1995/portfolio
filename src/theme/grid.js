import styled from "styled-components";
import media from "theme/media";

// I should wrap every container with this, so we have some margins
export const Container = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 15px;

  ${media.tablet`
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 30px;
  `};

  ${media.desktop`
    padding-left: 120px;
    padding-right: 120px;
    padding-top: 60px;
    `};
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5px;

  ${media.desktop`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  `};
`;

// if you want to align text, just use this as it is more readable
export const [H1, H2, H3, P] = ["h1", "h2", "h3", "p"].map(
  tag => styled[tag]`
    ${({ align }) => align && `text-align: ${align};`};
  `
);
