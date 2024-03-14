import styled, { keyframes } from "styled-components";
import heroImg from "../assets/hero-image.jpg";
import { Link } from "react-router-dom";
import color from "../styles/color";
import { useContext, useState } from "react";
import { GuestContext } from "../context/GuestNameContext";
import { GuestDataItf } from "../types";

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

const SectionContainer = styled.div`
  background-image: url(${heroImg});
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
  animation: ${fadeDown} 1s ease-in-out 0.5s forwards;
`;

const Header = styled.h1`
  font-size: 5.5rem;
  color: #8e8e8e;
  font-family: "Alex Brush", cursive;
  font-weight: 400;
  font-style: normal;
  animation: ${fadeDown} 1s ease-in-out forwards;
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

const TopSection = styled.div`
  margin-bottom: 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LandingButton = styled(Link)`
  padding: 1em 3em;
  background-color: transparent;
  border: 2px solid black;
  color: black;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: ${color.primaryBrown};
    border-color: ${color.primaryBrown};
    color: white;
  }
`;

const InputContainer = styled.div`
  margin-bottom: 2em;
`;

const Input = styled.input.attrs({ type: "text" })`
  padding: 1.5em;
  border-radius: 13px;
  border: none;
  outline: none;
  background-color: ${color.primaryText};
  color: ${color.softWhite};
  width: 300px;

  &::placeholder {
    color: #b1b1b1;
  }
`;

const Landing = () => {
  const [guestData, setGuestData] = useState<GuestDataItf>({
    name: "",
    age: 0,
    phone: "",
    RSVP: false,
    wishes: "",
  });
  const { setGuest } = useContext(GuestContext);

  const handleInputChange = (name: string) => {
    setGuestData({ ...guestData, name: name });
  };

  return (
    <SectionContainer>
      <TopSection>
        <SubHeader>The marriage of</SubHeader>
        <Header>Joe & Christy</Header>
        <DateSubHeader>03.02.2024</DateSubHeader>
        <HashtagText>#JoefindChristy</HashtagText>
      </TopSection>
      <InputContainer>
        <Input
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder='Please input your name...'
        />
      </InputContainer>
      <LandingButton
        to={`/invitation?name=${guestData.name}`}
        onClick={() => setGuest(guestData)}
      >
        Open Invitation
      </LandingButton>
    </SectionContainer>
  );
};

export default Landing;
