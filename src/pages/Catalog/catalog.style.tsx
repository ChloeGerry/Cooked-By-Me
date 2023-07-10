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
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`;

export const CatalogMain = styled.main`
  margin-top: 56px;
`;

export const CatalogSection = styled.section`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
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
  margin: 64px auto;
  align-items: center;
  gap: 32px;
`;

export const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  border: 1px solid ${secondaryColor};
  border-radius: ${borderRadiusMedium};
  transition: box-shadow 200ms ease-in-out;
  animation: ${slide} 200ms ease-in-out;

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
`;

export const Pagination = styled(NavLink)`
  margin-left: 16px;
  font-size: ${fontSizeSmall};
  padding: 5px 10px;

  &.isSelected {
    background-color: ${tertiaryColor};
    border-radius: 55%;
  }
`;
