import styled from "styled-components";
import { SectionHeader } from "../styles/styles";
import color from "../styles/color";

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

const SubmitButton = styled.button`
  background-color: transparent;
  color: ${color.primaryText};
  padding: 0.5em 3em;
  border: 1px solid ${color.primaryText};
  outline: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    color: ${color.softWhite};
    background-color: ${color.primaryText};
  }
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

const Wishes = () => {
  return (
    <Section>
      <SectionHeader
        style={{ marginBottom: "0.1em" }}
        $textColor={color.primaryText}
      >
        Pray and Wishes
      </SectionHeader>
      <p style={{ marginBottom: "0.6em" }}>
        Please leave your sincere prayers and wishes to us and our family:
      </p>

      <Input placeholder='Your Name' />
      <Input placeholder='The Relationship' />
      <TextArea
        placeholder='Your Pray and Wishes'
        style={{ marginBottom: "12px" }}
      />
      <SubmitButton>Submit</SubmitButton>
    </Section>
  );
};

export default Wishes;
