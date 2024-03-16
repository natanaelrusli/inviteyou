import styled, { useTheme } from "styled-components";
import { data } from "../constants/data";

const Section = styled.section`
  background-color: #fefbf9;
  background-color: ${(props) => props.theme.backgroundColor};
  padding: 5em 2em;

  @media (max-width: 768px) {
    padding: 3em 1em;
  }
`;

const SectionContainer = styled.div`
  width: 40%;
  margin: auto;
  display: flex;
  align-items: center;
  gap: 2em;
  min-width: 600px;

  @media (max-width: 768px) {
    min-width: 0px;
    width: 80%;
    flex-direction: column;
  }
`;

const RoundedImage = styled.img`
  box-shadow: rgba(0, 0, 0, 0.17) 8px 16px 24px 0px;
  border-radius: 40px;
  width: 362px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;

const VerseDiv = styled.div`
  img {
    margin-bottom: 0.5em;
  }

  div.verse {
    margin-top: 1em;
    font-weight: bold;
    letter-spacing: 4px;
    color: ${(props) => props.theme.textColor};
  }
  text-align: center;
  color: ${(props) => props.theme.textColorSecondary};

  @media (max-width: 768px) {
    font-size: 1.1em;
  }
`;

const VerseSection = () => {
  const theme = useTheme();

  return (
    <Section>
      <SectionContainer>
        <RoundedImage
          src='https://unsplash.com/photos/WJc87MVcDaA/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzEwMzQxODY4fA&force=true&w=2400'
          alt='bride image'
        />
        <VerseDiv theme={theme}>
          <img
            src='https://www.bridestory.com/_next/image?url=https%3A%2F%2Falexandra.bridestory.com%2Fimage%2Fupload%2Fdpr_1.0%2Cf_auto%2Cfl_progressive%2Cq_80%2Fv1%2Fassets%2Fbranches-GWZDtNSgR.png&w=96&q=75'
            alt='verse'
          />
          <p>“{data.verseContents}”</p>
          <div className='verse'>{data.verse}</div>
        </VerseDiv>
      </SectionContainer>
    </Section>
  );
};

export default VerseSection;
