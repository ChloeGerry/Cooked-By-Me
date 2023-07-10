import { ButtonWrapper } from './button.style';
import React from 'react';

interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <ButtonWrapper type="button" onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
