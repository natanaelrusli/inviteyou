import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SectionContainer = styled.div`
  background-image: url(https://unsplash.com/photos/IfjHaIoAoqE/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8d2VkZGluZ3xlbnwwfHx8fDE3MTAyNjgwNzd8MA&force=true&w=2400);
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SubHeader = styled.p`
  font-size: 1.5rem;
  color: #8e8e8e;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out 0.5s forwards;
`;

const Header = styled.h1`
  font-size: 5.5rem;
  color: #8e8e8e;
  font-family: "Alex Brush", cursive;
  font-weight: 400;
  font-style: normal;
  animation: ${fadeIn} 1s ease-in-out forwards;
`;

const DateSubHeader = styled.p`
  font-size: 1.5rem;
  color: #525252;
  font-weight: 400;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out 2s forwards;
`;

const HashtagText = styled.p`
  font-size: 1.4rem;
  color: #8e8e8e;
  margin-top: 0.7em;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out 2s forwards;
`;

const HeroSection = () => {
  return (
    <SectionContainer>
      <SubHeader>The marriage of</SubHeader>
      <Header>Joe & Christy</Header>
      <DateSubHeader>03.02.2024</DateSubHeader>
      <HashtagText>#JoefindChristy</HashtagText>
    </SectionContainer>
  );
};

export default HeroSection;
