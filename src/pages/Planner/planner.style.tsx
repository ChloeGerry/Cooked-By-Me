import styled from 'styled-components';
import { secondaryColor, borderRadiusMedium } from '../../style/variables';

export const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 24px;
`;

export const Icon = styled.i`
  color: ${secondaryColor};
  font-size: 2.2rem;
  cursor: pointer;
`;

export const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  border: 1px solid ${secondaryColor};
  border-radius: ${borderRadiusMedium};
  padding: 0px 16px 16px 16px;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  margin-top: 16px;
`;

export const ChoosenRecipeWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 8px;
`;
