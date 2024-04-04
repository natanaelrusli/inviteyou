import { useContext } from "react";
import styled from "styled-components";
import { Link, useSearchParams } from "react-router-dom";

import MessagesCarousel from "./MessagesCarousel";

import { GuestContext } from "../context/GuestNameContext";

import { SectionHeader } from "../styles/styles";
import color from "../styles/color";

const BaseInput = styled.input`
  padding: 1em;
  border-radius: 13px;
  border: 2px solid ${color.primaryBrown};
  outline: none;
  background-color: ${color.softWhite};
  color: ${color.primaryText};
  width: 40%;
  min-width: 300px;
  max-width: 400px;

  @media (max-width: 921px) {
    width: 60%;
  }

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
  padding: 1em 3em;
  border: 1px solid ${color.primaryText};
  outline: none;
  border-radius: 8px;
  cursor: pointer;
  width: 30%;
  min-width: 300px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  padding: 3em;

  @media (max-width: 768px) {
    padding: 3em;
  }

  background-color: ${color.softWhite};
`;

const FormCaption = styled.p`
  color: ${color.primaryBrown};
  font-weight: 500;
`;

const Wishes = () => {
  const [searchParams] = useSearchParams();
  const { setGuest, guest } = useContext(GuestContext);

  const guestName = searchParams.get("name") || guest.name || "you";

  return (
    <Section>
      <SectionHeader
        style={{ marginBottom: "0.1em" }}
        $textColor={color.primaryText}
      >
        Pray and Wishes from {guestName}
      </SectionHeader>
      <FormCaption style={{ marginBottom: "0.6em" }}>
        Please leave your sincere prayers and wishes to us and our family
      </FormCaption>

      {/* form start */}
      <Input
        placeholder='Your Name'
        value={guest.name}
        // rest operator
        onChange={(e) => setGuest({ ...guest, name: e.target.value })}
      />
      <Input
        placeholder='Phone Number'
        onChange={(e) => setGuest({ ...guest, phone: e.target.value })}
      />
      <Input placeholder='The Relationship' />
      <TextArea
        placeholder='Your Pray and Wishes'
        style={{ marginBottom: "12px" }}
        onChange={(e) => setGuest({ ...guest, wishes: e.target.value })}
      />

      <Link
        style={{
          textDecoration: "none",
          color: "black",
          width: "80%",
          display: "flex",
          justifyContent: "center",
        }}
        to={`/confirm?name=${guest.name}&rsvp=${guest.RSVP}`}
      >
        <Button>SUBMIT</Button>
      </Link>
      {/* form ends */}

      <MessagesCarousel />
    </Section>
  );
};

export default Wishes;
