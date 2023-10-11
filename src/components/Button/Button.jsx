import { StyledButton } from './Button.styled';

export const Button = ({ onClick, children }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);
