import styled, { keyframes } from "styled-components";
import { data } from "../constants/data";
import { SectionContainer } from "../styles/styles";
import color from "../styles/color";
import { useRef } from "react";

const fadeDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const bounceDown = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const ScrollButton = styled.button`
  position: absolute;
  bottom: 60px;
  transform: translateX(-50%);
  padding: 10px 20px;
  background-color: #ffffff;
  color: #333333;
  border: 1px solid #333333;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  opacity: 0;
  animation: ${fadeDown} 1s ease-in-out 2s forwards, ${bounceDown} 2s infinite;
  background-color: transparent;
  border: none;
  font-size: 1.2rem;
  font-weight: bold;

  &:hover {
    background-color: #333333;
    color: #ffffff;
  }
`;

const SubHeader = styled.p`
  font-size: 1.5rem;
  color: ${color.primaryBrown};
  opacity: 0;
  animation: ${fadeDown} 1s ease-in-out 0.5s forwards;
`;

const Header = styled.h1`
  font-size: 5.5rem;
  color: #8e8e8e;
  font-family: "Alex Brush", cursive;
  font-weight: 400;
  font-style: normal;
  animation: ${fadeDown} 1s ease-in-out forwards;

  @media (max-width: 768px) {
    font-size: 4rem;
    flex-direction: column;
  }

  @media (max-width: 468px) {
    margin: 0.2em 0;
    font-size: 3rem;
    flex-direction: column;
  }
`;

const DateSubHeader = styled.p`
  font-size: 1.5rem;
  color: #525252;
  font-weight: 400;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out 2s forwards;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    flex-direction: column;
  }

  @media (max-width: 468px) {
    font-size: 1.3rem;
    flex-direction: column;
  }
`;

const HashtagText = styled.p`
  font-size: 1.4rem;
  color: ${color.softWhite};
  background-color: rgba(0, 0, 0, 0.2);
  padding: 1em;
  border-radius: 16px;
  margin-top: 0.7em;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out 2s forwards;
`;

const HeroSection = () => {
  const nextSectionRef = useRef(null);

  const handleScrollClick = () => {
    if (nextSectionRef.current) {
      document
        .getElementById("verse-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SectionContainer $bgImg='https://images.unsplash.com/photo-1605985687770-2e2e82c9b5f1?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>
      <SubHeader>The marriage of</SubHeader>
      <Header>
        {data.groomsNickname} & {data.bridesNickname}
      </Header>
      <DateSubHeader>{data.weddingDate}</DateSubHeader>
      <HashtagText>#{data.hashtag}</HashtagText>
      <ScrollButton onClick={handleScrollClick}>
        Click to see more details <i className='fa-solid fa-chevron-down'></i>
      </ScrollButton>
      <div ref={nextSectionRef} />
    </SectionContainer>
  );
};

export default HeroSection;
