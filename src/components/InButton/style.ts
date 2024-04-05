import { motion } from "framer-motion";
import styled from "styled-components";
import color from "../../styles/color";

export const Button = styled(motion.button)<{ $active?: boolean }>`
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
    min-width: 300px;
  }
`;
