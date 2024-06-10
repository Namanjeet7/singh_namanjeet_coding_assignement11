import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
};

const StyledButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  font-size: 16px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${props => (props.disabled ? 'grey' : 'blue')};
  color: white;
  border: none;
  border-radius: 5px;
`;

const Button: React.FC<ButtonProps> = ({ label, disabled, onClick }) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default Button;
