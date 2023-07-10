import styled from 'styled-components';
import {
  primaryColor,
  secondaryColor,
  tertiaryColor,
} from '../../style/variables';

export const ButtonWrapper = styled.button`
  background-color: white;
  border: 1px solid ${secondaryColor};
  border-radius: 4px;
  color: ${primaryColor};
  padding: 4px 8px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: box-shadow 200ms ease-in-out;

  &:hover {
    box-shadow: 5px 5px 5px ${tertiaryColor};
  }
`;
