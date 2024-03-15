import styled from "styled-components";

interface GuestsListProps {
  guestNames: string[];
}

const Section = styled.section`
  background-color: #e1eaf4;
`;

const SectionContainer = styled.div`
  width: 50%;
  padding: 3em;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .name-list {
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }
`;

const Header = styled.p`
  font-family: "Alex Brush", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 5rem;
`;

const GuestsList = ({ guestNames }: GuestsListProps) => {
  return (
    <Section>
      <SectionContainer>
        <Header>Attendees List</Header>

        <div className='name-list'>
          {guestNames.map((guestName) => (
            <p>{guestName}</p>
          ))}
        </div>
      </SectionContainer>
    </Section>
  );
};

export default GuestsList;
