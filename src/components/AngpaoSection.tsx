import styled from "styled-components";
import color from "../styles/color";

import { SectionHeader } from "../styles/styles";
import { useState } from "react";
import { data } from "../constants/data";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button";

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

      <Button onClick={() => setShow(!show)}>Send Gift</Button>

      <AnimatePresence>
        {show && (
          <motion.div
            style={{
              backgroundColor: color.softWhite,
              textAlign: "center",
              padding: "1em",
              borderRadius: "16px",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: "1s" }}
          >
            <h1>{data.bank}</h1>
            <p>{data.bankAccountName}</p>
            <p>{data.bankAccountNumber}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default AngpaoSection;
