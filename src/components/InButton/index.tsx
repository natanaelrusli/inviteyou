import { ReactNode } from "react";
import { Button as StyledButton } from "./style";
import { HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  onClick?: () => void;
}

const Index: React.FC<ButtonProps> = ({ children, onClick, ...props }) => {
  return (
    <StyledButton
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Index;
