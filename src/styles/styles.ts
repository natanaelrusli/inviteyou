import styled from "styled-components";
import heroImg from "../assets/hero-image.jpg";

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

  @media (max-width: 768px) {
    font-size: 3rem;
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 921px) {
    font-size: 4rem;
  }
`;

export const SectionContainer = styled.div<{
  $bgImg?: string;
  $textColor?: string;
}>`
  background-image: ${(props) => `url(${props.$bgImg})` || `url(${heroImg})`};
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
