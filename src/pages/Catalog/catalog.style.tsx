import styled, { keyframes } from 'styled-components';

import {
  fontSizeSmall,
  fontSizeMedium,
  secondaryColor,
  tertiaryColor,
  borderRadiusMedium,
} from '../../style/variables';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const slide = keyframes`
  0% {
    transform: translateX(300px);
    opacity: 0.2;
  }
  25% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.6;
  }
  75% {
    opacity: 0.8;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
`;

export const CatalogMain = styled.main`
  margin: 0 16px;
`;

export const CatalogSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`;

export const Label = styled.label`
  padding-right: 16px;
  font-size: ${fontSizeMedium};
`;

export const Input = styled.input`
  border: 1px solid ${secondaryColor};
  border-radius: 5px;
  font-size: ${fontSizeSmall};
`;

export const CatalogWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 64px 0;
  align-items: center;
  gap: 48px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  border: 1px solid ${secondaryColor};
  border-radius: ${borderRadiusMedium};
  /* animation: ${slide} 0.3s ease; */
  transition: box-shadow 200ms ease-in-out;

  &:hover {
    box-shadow: 5px 5px 5px ${tertiaryColor};
  }
`;

export const CardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 0px 16px 16px 16px;
`;

export const PaginationWrapper = styled.nav`
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  align-items: center;
`;

export const Pagination = styled(NavLink)`
  font-size: ${fontSizeSmall};
  padding: 5px 11px;

  &.isSelected {
    background-color: ${tertiaryColor};
    border-radius: 50%;
  }
`;
