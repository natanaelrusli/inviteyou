import styled from "styled-components";
import { SectionHeader } from "../styles/styles";
import color from "../styles/color";
import { Link, useSearchParams } from "react-router-dom";
import { useContext } from "react";
import { GuestContext } from "../context/GuestNameContext";

const BaseInput = styled.input`
  padding: 1em;
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

const Input = styled(BaseInput).attrs({ type: "text" })``;

const TextArea = styled(BaseInput).attrs({ as: "textarea" })`
  height: 100px;
`;

const Button = styled.button<{ $active?: boolean }>`
  background-color: ${(props) =>
    props.$active ? color.primaryBrown : color.softWhite};
  color: ${(props) => (props.$active ? color.softWhite : color.primaryBrown)};
  padding: 0.5em 3em;
  border: 1px solid ${color.primaryText};
  outline: none;
  border-radius: 8px;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${color.primaryBrown};
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  padding: 3em;
  background-color: ${color.softWhite};
`;

const RSVPButtonDiv = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
  gap: 1em;

  Button {
    width: 50%;
    padding: 0.5em;
  }
`;

const RSVPSectionDiv = styled.div`
  width: 300px;

  p {
    color: ${color.primaryBrown};
    font-weight: 500;
    margin-bottom: 1em;
  }
`;

const Wishes = () => {
  const [searchParams] = useSearchParams();
  const { setGuest, guest } = useContext(GuestContext);

  const guestName = searchParams.get("name");

  return (
    <Section>
      <SectionHeader
        style={{ marginBottom: "0.1em" }}
        $textColor={color.primaryText}
      >
        Pray and Wishes from {guestName}
      </SectionHeader>
      <p style={{ marginBottom: "0.6em" }}>
        Please leave your sincere prayers and wishes to us and our family:
      </p>

      {/* form start */}
      <Input
        placeholder='Your Name'
        value={guest.name}
        onChange={(e) => setGuest({ ...guest, name: e.target.value })}
      />
      <Input
        placeholder='Phone Number'
        onChange={(e) => setGuest({ ...guest, phone: e.target.value })}
      />
      <Input placeholder='The Relationship' />

      <RSVPSectionDiv>
        <p>
          We'd love to hear from you! Please fill out the confirmation below:
        </p>
        <RSVPButtonDiv>
          <Button
            $active={!guest.RSVP}
            onClick={() => setGuest({ ...guest, RSVP: false })}
          >
            Unable to Attend
          </Button>
          <Button
            $active={guest.RSVP}
            onClick={() => setGuest({ ...guest, RSVP: true })}
          >
            Gladly Attend
          </Button>
        </RSVPButtonDiv>
      </RSVPSectionDiv>
      <TextArea
        placeholder='Your Pray and Wishes'
        style={{ marginBottom: "12px" }}
        onChange={(e) => setGuest({ ...guest, wishes: e.target.value })}
      />

      <StyledLink
        style={{
          textDecoration: "none",
          color: "black",
        }}
        to={`/confirm?name=${guest.name}&rsvp=${guest.RSVP}`}
      >
        <Button>SUBMIT</Button>
      </StyledLink>
      {/* form ends */}
    </Section>
  );
};

export default Wishes;
