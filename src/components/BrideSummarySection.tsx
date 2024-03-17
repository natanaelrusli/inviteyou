import styled from "styled-components";
import { data, images } from "../constants/data";

const bgColor = "#E2EAF4";

const Section = styled.section`
  background-color: ${bgColor};
`;

const SectionContainer = styled.div`
  padding: 3em;
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

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4em;
  }
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
    font-size: 5rem;
    font-family: "Alex Brush", cursive;
    font-weight: 400;
    font-style: normal;
    color: #696361;
  }

  div.bride-name {
    color: #696361;
    font-size: 1.6em;
    font-weight: bold;
    margin-top: 0.3em;
    padding-bottom: 1em;
    border-bottom: 3px solid white;
  }

  div.bride-description {
    font-size: 1.3rem;
    color: #696361;
    margin: auto;
    margin-top: 1.5em;
    justify-content: center;
    font-weight: 400;
    width: 190px;
  }

  div.social-icon {
    background-color: pink;
    width: fit-content;
    margin: auto;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    margin-top: 1em;
    cursor: pointer;

    i {
      color: white;
      font-size: 1.8em;
    }
  }

  /* Media query for mobile responsiveness */
  @media (max-width: 768px) {
    img {
      width: 200px;
      height: 200px;
    }

    div.bride-nickname {
      font-size: 3rem;
    }

    div.bride-name {
      font-size: 1.2em;
    }

    div.bride-description {
      font-size: 1rem;
    }

    div.social-icon {
      width: 40px;
      height: 40px;

      i {
        font-size: 1.2em;
      }
    }
  }
`;

interface BridesCardProps {
  image: string;
  nickname: string;
  name: string;
  biodata: string;
}

const BrideCard = ({ image, nickname, name, biodata }: BridesCardProps) => {
  return (
    <Card>
      <img
        // https://unsplash.com/photos/MMNgGsFEbuI/download?force=true&w=2400
        src={image}
        alt='bride photo'
      />
      <div className='bride-nickname'>{nickname}</div>
      <div className='bride-name'>{name}</div>
      <div className='bride-description'>{biodata}</div>
      {/* <div className='social-icon'>
        <i className='fa-brands fa-instagram'></i>
      </div> */}
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
          <BrideCard
            image={images.groomsBiodataPhoto}
            nickname={data.groomsNickname}
            name={data.groomsName}
            biodata={data.groomsBiodata}
          />
          <BrideCard
            image={images.bridesBiodataPhoto}
            nickname={data.bridesNickname}
            name={data.bridesName}
            biodata={data.bridesBiodata}
          />
        </BrideSummary>
      </SectionContainer>
    </Section>
  );
};

export default BrideSummarySection;
