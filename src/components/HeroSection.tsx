import { useRef } from "react";
import styled, { keyframes } from "styled-components";
import { data, images } from "../constants/data";
import { SectionContainer } from "../styles/styles";
import color from "../styles/color";

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
  background-color: rgba(0, 0, 0, 0.3);
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
        .getElementById("bride-summary-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SectionContainer $bgImg={images.heroImage}>
      <SubHeader>The marriage of</SubHeader>
      <Header>
        {data.groomsNickname} & {data.bridesNickname}
      </Header>
      <DateSubHeader>{data.weddingDate}</DateSubHeader>
      <HashtagText>#{data.hashtag}</HashtagText>
      <div
        onClick={handleScrollClick}
        className='absolute bottom-4 right-2 flex justify-end w-full font-semibold cursor-pointer animate-fadeDownDelay opacity-0'
      >
        <p className='animate-bounce hover:bg-[#FDFBF9] p-3 rounded-xl transition-all text-gray-700 text-xl max-lg:text-sm'>
          Click to see more details <i className='fa-solid fa-chevron-down'></i>
        </p>
      </div>
      <div ref={nextSectionRef} />
    </SectionContainer>
  );
};

export default HeroSection;
