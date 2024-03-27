import styled from "styled-components";
import { data } from "../constants/data";
import CountdownTimer from "./CountdownTimer";

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
  padding: 2em;
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
        <DateText>Saturday, {data.weddingDateUTC}</DateText>

        <div className='mt-6 flex justify-center items-center gap-5'>
          <CountdownTimer date='November 25, 2024' />
        </div>

        <div className='mt-8 flex gap-5 justify-center items-center max-lg:flex-col'>
          <div className='mb-4 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-gray-600 transition-shadow duration-700'>
            <img
              className='shadow-lg shadow-gray-500 w-[700px] hover:scale-110 transition-all duration-700'
              src='https://unsplash.com/photos/w5_xJ13Ryf0/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzB8fGJyaWRlJTIwYW5kJTIwZ3Jvb218ZW58MHx8fHwxNzEwMjkxMDQ4fDA&force=true&w=640'
              alt='bride and groom image'
            />
          </div>

          <div className='schedule-description flex flex-col h-fit gap-4 my-8 border border-soft-brown p-3 bg-soft-white rounded-lg'>
            <h1 className='text-2xl text-center text-soft-brown font-bold'>
              Pemberkatan Pernikahan
            </h1>
            <div className='flex flex-col gap-2 text-soft-brown'>
              <div className='flex justify-between pb-2 border-b border-b-soft-brown'>
                <div className='date'>{data.weddingDate}</div>
                <div className='time'>{data.blessingTime}</div>
              </div>
              <div className='address'>{data.blessingLocation}</div>
              <button
                className='bg-soft-brown p-3 rounded-lg text-white'
                onClick={() =>
                  openMaps("https://maps.app.goo.gl/C3HWf7TsJvMzwLb27")
                }
              >
                Open in Maps
              </button>
            </div>
          </div>
        </div>

        <div className='mt-8 flex flex-row-reverse gap-5 justify-center items-center max-lg:flex-col'>
          <div className='mb-4 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-gray-600 transition-shadow duration-700'>
            <img
              className='shadow-lg shadow-gray-500 w-[700px] hover:scale-110 transition-all duration-700'
              src='https://unsplash.com/photos/w5_xJ13Ryf0/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzB8fGJyaWRlJTIwYW5kJTIwZ3Jvb218ZW58MHx8fHwxNzEwMjkxMDQ4fDA&force=true&w=640'
              alt='bride and groom image'
            />
          </div>

          <div className='schedule-description flex flex-col h-fit gap-4 my-8 border border-soft-brown p-3 bg-soft-white rounded-lg'>
            <h1 className='text-2xl text-center text-soft-brown font-bold'>
              Resepsi
            </h1>
            <div className='flex flex-col gap-2 text-soft-brown'>
              <div className='flex justify-between pb-2 border-b border-b-soft-brown'>
                <div className='date'>{data.weddingDate}</div>
                <div className='time'>{data.blessingTime}</div>
              </div>
              <div className='address'>{data.blessingLocation}</div>
              <button
                className='bg-soft-brown p-3 rounded-lg text-white'
                onClick={() =>
                  openMaps("https://maps.app.goo.gl/NoUdZD1XFS2q7Hdz6")
                }
              >
                Open in Maps
              </button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </Section>
  );
};

export default CountingDays;
