import { ReactNode } from "react";
import { Button as StyledButton } from "./style";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const Index = ({ children, onClick, className }: ButtonProps) => {
  return (
    <StyledButton
      className={className}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Index;
