import styled from 'styled-components';
import { secondaryColor, tertiaryColor } from '../../../style/variables';

export const LoaderWrapper = styled.div`
  margin: 100px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoaderContent = styled.div`
  display: block;
  position: relative;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 7px solid transparent;
  border-top-color: ${secondaryColor};
  animation: spin 2s linear infinite;
  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    border: 7px solid transparent;
  }
  &::before {
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    border-top-color: #96ad85;
    animation: spin 3s linear infinite;
  }
  &::after {
    top: 25px;
    left: 25px;
    right: 25px;
    bottom: 25px;
    border-top-color: ${tertiaryColor};
    animation: spin 1.5s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
