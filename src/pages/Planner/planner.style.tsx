import styled from 'styled-components';
import {
  fontSizeSmall,
  fontSizeMedium,
  secondaryColor,
  tertiaryColor,
} from '../../style/variables';
import { NavLink } from 'react-router-dom';

export const CardSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 56px;
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

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 64px auto;
  align-items: center;
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
