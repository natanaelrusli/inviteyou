import styled from "styled-components";

export const SectionHeader = styled.h1<{ $textColor?: string }>`
  font-size: 5.5rem;
  font-family: "Alex Brush", cursive;
  font-weight: 400;
  font-style: normal;
  color: ${(props) => props.$textColor || "#ffffff"};

  span {
    font-size: 3rem;
    font-family: "Alex Brush", cursive;
    font-weight: 400;
    font-style: normal;
  }
`;