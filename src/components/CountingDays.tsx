import styled from "styled-components";
import { data } from "../constants/data";

const Section = styled.section`
  background-image: url(https://alexandra.bridestory.com/image/upload/f_webp/v1/assets/maria-orlova-12yiylq49bi-unsplash2x-Hyj7ryFt6.webp);
  height: fit-content;
  object-fit: cover;
  background-position: center;
`;

const SectionContainer = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4em;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 85%;
  }
`;

const SectionHeader = styled.h1`
  font-size: 5.5rem;
  font-family: "Alex Brush", cursive;
  font-weight: 400;
  font-style: normal;
  color: white;

  @media (max-width: 768px) {
    text-align: center;
  }

  span {
    font-size: 3rem;
    font-family: "Alex Brush", cursive;
    font-weight: 400;
    font-style: normal;
  }
`;

const DateText = styled.div`
  font-size: 1.3rem;
  color: white;
  font-weight: 500;
  margin-top: 1em;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ScheduleDiv = styled.div<{ $reversed?: boolean }>`
  display: flex;
  justify-content: space-between;
  margin: 3em;
  gap: 5em;
  flex-direction: ${(props) =>
    props.$reversed === true ? "row-reverse" : "row"};

  @media (max-width: 768px) {
    margin: 2em 1em;
    flex-direction: column;
    align-items: center;
    gap: 2.2em;
  }

  img {
    width: 270px;
    height: 270px;
    object-fit: cover;
    border-radius: 1em;
  }

  .schedule-description {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1em;
    font-size: 0.8;

    @media (max-width: 768px) {
      width: 85%;
    }

    h1 {
      color: white;
      letter-spacing: 3px;
    }

    .date,
    .time,
    .address {
      color: white;
      font-weight: 400;
    }

    button {
      background-color: transparent;
      border: 1px solid white;
      color: white;
      width: fit-content;
      margin: 0 auto;
      padding: 1em 3em;
      border-radius: 1em;
      cursor: pointer;
      font-weight: bold;
    }
  }
`;

const CountingDays = () => {
  const openMaps = (url: string) => {
    window.open(url);
  };

  return (
    <Section>
      <SectionContainer>
        <SectionHeader>
          Counting <span>the</span> Days
        </SectionHeader>
        <DateText>Saturday, 03 February 2024</DateText>

        <ScheduleDiv>
          <img
            src='https://unsplash.com/photos/w5_xJ13Ryf0/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzB8fGJyaWRlJTIwYW5kJTIwZ3Jvb218ZW58MHx8fHwxNzEwMjkxMDQ4fDA&force=true&w=640'
            alt='bride and groom image'
          />
          <div className='schedule-description'>
            <h1>Pemberkatan Pernikahan</h1>
            <div className='date'>{data.weddingDate}</div>
            <div className='time'>{data.blessingTime}</div>
            <div className='address'>{data.blessingLocation}</div>
            <button
              onClick={() =>
                openMaps("https://maps.app.goo.gl/C3HWf7TsJvMzwLb27")
              }
            >
              Open in Maps
            </button>
          </div>
        </ScheduleDiv>
        <ScheduleDiv $reversed={true}>
          <img
            src='https://unsplash.com/photos/w5_xJ13Ryf0/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzB8fGJyaWRlJTIwYW5kJTIwZ3Jvb218ZW58MHx8fHwxNzEwMjkxMDQ4fDA&force=true&w=640'
            alt='bride and groom image'
          />
          <div className='schedule-description'>
            <h1>Resepsi</h1>
            <div className='date'>{data.weddingDate}</div>
            <div className='time'>{data.receptionTime}</div>
            <div className='address'>{data.receptionLocation}</div>
            <button
              onClick={() =>
                openMaps("https://maps.app.goo.gl/NoUdZD1XFS2q7Hdz6")
              }
            >
              Open in Maps
            </button>
          </div>
        </ScheduleDiv>
      </SectionContainer>
    </Section>
  );
};

export default CountingDays;
