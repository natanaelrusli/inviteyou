import styled from "styled-components";
import color from "../styles/color";

import { SectionHeader } from "../styles/styles";
import { useState } from "react";
import { data } from "../constants/data";
import { motion } from "framer-motion";

const Button = styled(motion.button)<{ $active?: boolean }>`
  background-color: ${(props) =>
    props.$active ? color.primaryBrown : color.softWhite};
  color: ${(props) => (props.$active ? color.softWhite : color.primaryBrown)};
  padding: 1em 3em;
  border: 1px solid ${color.primaryText};
  outline: none;
  border-radius: 8px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Section = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  padding: 3em;

  @media (max-width: 768px) {
    padding: 3em;
  }

  background-color: ${color.primaryBrown};
`;

const FormCaption = styled.p`
  color: ${color.primaryBrown};
  font-weight: 500;
`;

const AngpaoSection = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <Section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
    >
      <SectionHeader
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        style={{ marginBottom: "0.1em" }}
        $textColor={color.softWhite}
      >
        Wedding Gift
      </SectionHeader>
      <FormCaption style={{ color: color.softWhite, marginBottom: "0.6em" }}>
        We appreciate your gift, if you want to send gift to us, you can click
        the button below
      </FormCaption>

      <Button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShow(!show)}
      >
        Send Gift
      </Button>
      {/* form ends */}

      {show && (
        <motion.div
          style={{
            backgroundColor: color.softWhite,
            textAlign: "center",
            padding: "1em",
            borderRadius: "16px",
          }}
        >
          <h1>{data.bank}</h1>
          <p>{data.bankAccountName}</p>
          <p>{data.bankAccountNumber}</p>
        </motion.div>
      )}
    </Section>
  );
};

export default AngpaoSection;
