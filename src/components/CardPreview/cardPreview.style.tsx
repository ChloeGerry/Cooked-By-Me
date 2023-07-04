import styled, { keyframes } from 'styled-components';
import {
  secondaryColor,
  tertiaryColor,
  borderRadiusMedium,
  pictureSizeSmall,
} from '../../style/variables';
import { Link } from 'react-router-dom';

const slide = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`;

export const CardStyled = styled.article`
  border: 1px solid ${secondaryColor};
  border-radius: ${borderRadiusMedium};
  margin: 0 16px;
  transition: box-shadow 200ms ease-in-out;
  animation: ${slide} 200ms ease-in-out;

  &:hover {
    box-shadow: 5px 5px 5px ${tertiaryColor};
  }
`;

export const CardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const CardTitle = styled.h3`
  display: flex;
  justify-content: center;
`;

export const CardImage = styled.img`
  width: ${pictureSizeSmall};
  height: ${pictureSizeSmall};
  object-fit: cover;
`;
