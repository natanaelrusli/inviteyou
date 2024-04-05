import { useContext } from "react";
import styled from "styled-components";
import { Link, useSearchParams } from "react-router-dom";

import MessagesCarousel from "./MessagesCarousel";
import InButton from "./InButton";

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
        <InButton className='w-[384px]'>Send</InButton>
      </Link>
      {/* form ends */}

      <div className='mt-12 w-5/12 max-xl:w-8/12'>
        <MessagesCarousel />
      </div>
    </Section>
  );
};

export default Wishes;
