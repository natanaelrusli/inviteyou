import styled from "styled-components";

const Section = styled.section`
  background-image: url("https://alexandra.bridestory.com/image/upload/f_webp/v1/assets/maria-orlova-12yiylq49bi-unsplash2x-Hyj7ryFt6.webp");
  height: fit-content;
  object-fit: cover;
  background-position: center;
`;

const SectionContainer = styled.div`
  width: 90%;
  max-width: 900px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em;
  flex-direction: column;
`;

const SectionHeader = styled.h1`
  font-size: 3rem;
  font-family: "Alex Brush", cursive;
  font-weight: 400;
  font-style: normal;
  color: white;

  span {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 2.8rem;
    text-align: center;

    span {
      font-size: 1.2rem;
    }
  }
`;

const DateText = styled.div`
  font-size: 1rem;
  color: white;
  font-weight: 500;
  margin-top: 1em;
`;

const ScheduleCard = styled.div<{ $reversed?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 2em;

  img {
    width: 100%;
    max-width: 300px;
    height: auto;
    object-fit: cover;
    border-radius: 1em;
  }

  .schedule-description {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1em;

    h1 {
      color: white;
      font-size: 1.5rem;
      letter-spacing: 2px;
    }

    .date,
    .time,
    .address {
      color: white;
      font-weight: 400;
      font-size: 0.8rem;
    }

    button {
      background-color: transparent;
      border: 1px solid white;
      color: white;
      width: fit-content;
      padding: 0.5em 1em;
      border-radius: 1em;
      cursor: pointer;
      font-weight: bold;
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      justify-content: center;
      align-items: center;
      margin-bottom: 2em;

      .schedule-description {
      }
    }
  }

  /* Media query for mobile responsiveness */
  @media (max-width: 768px) {
    padding: 1em;

    img {
      max-width: 250px;
    }

    .schedule-description {
      h1 {
        font-size: 1.2rem;
      }

      .date,
      .time,
      .address {
        font-size: 0.7rem;
      }

      button {
        padding: 0.3em 0.8em;
        font-size: 0.8rem;
      }
    }
  }
`;

const CountingDays = () => {
  return (
    <Section>
      <SectionContainer>
        <SectionHeader>
          Counting <span>the</span> Days
        </SectionHeader>
        <DateText>Saturday, 03 February 2024</DateText>

        <ScheduleCard>
          <img
            src='https://unsplash.com/photos/w5_xJ13Ryf0/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzB8fGJyaWRlJTIwYW5kJTIwZ3Jvb218ZW58MHx8fHwxNzEwMjkxMDQ4fDA&force=true&w=640'
            alt='bride and groom image'
          />
          <div className='schedule-description'>
            <h1>AKAD NIKAH</h1>
            <div className='date'>20 February 2023</div>
            <div className='time'>01:00 - 02:00 WIB</div>
            <div className='address'>
              Assembly Hall Menara Mandiri Lt.10 Jl. Jenderal Sudirman No.Kav
              54-55, Senayan - Jakarta Selatan
            </div>
            <button>Open in Maps</button>
          </div>
        </ScheduleCard>
        <ScheduleCard $reversed={true}>
          <img
            src='https://unsplash.com/photos/w5_xJ13Ryf0/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzB8fGJyaWRlJTIwYW5kJTIwZ3Jvb218ZW58MHx8fHwxNzEwMjkxMDQ4fDA&force=true&w=640'
            alt='bride and groom image'
          />
          <div className='schedule-description'>
            <h1>RESEPSI</h1>
            <div className='date'>20 February 2023</div>
            <div className='time'>19:00 - 21:00 WIB</div>
            <div className='address'>
              Assembly Hall Menara Mandiri Lt.10 Jl. Jenderal Sudirman No.Kav
              54-55, Senayan - Jakarta Selatan
            </div>
            <button>Open in Maps</button>
          </div>
        </ScheduleCard>
      </SectionContainer>
    </Section>
  );
};

export default CountingDays;
