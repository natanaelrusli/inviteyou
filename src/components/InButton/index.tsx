import { ReactNode } from "react";
import { Button as StyledButton } from "./style";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const Index = ({ children, onClick, ...restProps }: ButtonProps) => {
  return (
    <StyledButton
      {...restProps}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Index;
