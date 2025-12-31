import React from 'react';
import styled from 'styled-components';

const Button = ({ 
  children, 
  onClick, 
  variant = 'number', 
  wide = false,
  ...props 
}) => {
  return (
    <ButtonStyled 
      onClick={onClick} 
      variant={variant}
      wide={wide}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;

const ButtonStyled = styled.button`
  font-size: 1.5rem;
  padding: 15px 0;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 500;
  grid-column: ${({ wide }) => (wide ? 'span 2' : 'auto')};
  color: ${({ theme, variant }) => 
    variant === 'operator' ? theme.operatorColor : theme.buttonText};
  background: ${({ theme, variant }) => 
    variant === 'operator' 
      ? theme.operatorBackground 
      : variant === 'function' 
        ? theme.functionBackground 
        : theme.buttonBackground};

  &:active {
    transform: scale(0.95);
  }

  &:hover {
    opacity: 0.9;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.focusColor};
  }
`;
