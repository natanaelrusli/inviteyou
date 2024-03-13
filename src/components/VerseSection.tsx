import styled from "styled-components";

const Section = styled.section`
  background-color: #fefbf9;
  padding: 5em 2em;
`;

const SectionContainer = styled.div`
  width: 40%;
  margin: auto;
  display: flex;
  align-items: center;
  gap: 2em;
`;

const RoundedImage = styled.img`
  box-shadow: rgba(0, 0, 0, 0.17) 8px 16px 24px 0px;
  border-radius: 40px;
  width: 362px;
`;

const VerseDiv = styled.div`
  img {
    margin-bottom: 0.5em;
  }

  div.verse {
    margin-top: 1em;
    color: #525252;
    font-weight: bold;
    letter-spacing: 4px;
  }
  text-align: center;
  color: #8e8e8e;
`;

const VerseSection = () => {
  return (
    <Section>
      <SectionContainer>
        <RoundedImage
          src='https://unsplash.com/photos/WJc87MVcDaA/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzEwMzQxODY4fA&force=true&w=2400'
          alt='bride image'
        />
        <VerseDiv>
          <img
            src='https://www.bridestory.com/_next/image?url=https%3A%2F%2Falexandra.bridestory.com%2Fimage%2Fupload%2Fdpr_1.0%2Cf_auto%2Cfl_progressive%2Cq_80%2Fv1%2Fassets%2Fbranches-GWZDtNSgR.png&w=96&q=75'
            alt='verse'
          />
          <p>
            “At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas to odio dignissimos ducimus”
          </p>
          <div className='verse'>PASAL 1:1</div>
        </VerseDiv>
      </SectionContainer>
    </Section>
  );
};

export default VerseSection;
