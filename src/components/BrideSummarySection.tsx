import styled from "styled-components";

const bgColor = "#E2EAF4";

const Section = styled.section`
  background-color: ${bgColor};
`;

const SectionContainer = styled.div`
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  margin: auto;

  img {
    width: 300px;
  }
`;

const BrideSummary = styled.div`
  display: flex;
  gap: 7em;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 100%;
    border: 0.5em solid white;
  }

  div.bride-nickname {
    margin-top: 0.5em;
    font-size: 4rem;
    font-family: "Alex Brush", cursive;
    font-weight: 400;
    font-style: normal;
    color: #696361;
  }

  div.bride-name {
    color: #696361;
    font-size: 1.3em;
    font-weight: bold;
    margin-top: 0.3em;
    padding-bottom: 1em;
    border-bottom: 3px solid white;
  }

  div.bride-description {
    color: #696361;
    margin: auto;
    margin-top: 1.5em;
    justify-content: center;
    font-size: 1.1rem;
    font-weight: 500;
    width: 160px;
  }
`;

const BrideCard = () => {
  return (
    <Card>
      <img
        src='https://unsplash.com/photos/MMNgGsFEbuI/download?force=true&w=2400'
        alt='bride photo'
      />
      <div className='bride-nickname'>Joe</div>
      <div className='bride-name'>Jonathan Wijaya</div>
      <div className='bride-description'>
        Putra kedua dari Andrian Wijaya & Susan Widjatmoko
      </div>
    </Card>
  );
};

const BrideSummarySection = () => {
  return (
    <Section>
      <SectionContainer>
        <img
          src='https://www.bridestory.com/_next/image?url=https%3A%2F%2Falexandra.bridestory.com%2Fimage%2Fupload%2Fdpr_1.0%2Cf_auto%2Cfl_progressive%2Cq_80%2Fv1%2Fassets%2Fgroup-282x-n71nYQ2ew.png&w=384&q=75'
          alt='bride summary leafs'
        />
        <BrideSummary>
          <BrideCard />
          <BrideCard />
        </BrideSummary>
      </SectionContainer>
    </Section>
  );
};

export default BrideSummarySection;
