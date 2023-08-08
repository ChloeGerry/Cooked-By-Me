import styled from 'styled-components';
import { borderRadiusSmall, tertiaryColor } from '../../style/variables';
import { Link } from 'react-router-dom';

export const CardPlannerWrapper = styled.div`
  border: 1px solid ${tertiaryColor};
  border-radius: ${borderRadiusSmall};
`;

export const LinkStyled = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 215px;
`;

export const CardPlannerTitle = styled.h3`
  text-align: center;
`;

export const CardPlannerImage = styled.img`
  object-fit: cover;
  width: 125px;
  height: 125px;
`;

export const CardPlannerIconWrapper = styled.span`
  display: flex;
  justify-content: end;
  padding: 0 8px 8px 0;
`;

export const CardPlannerIcon = styled.i`
  cursor: pointer;
  font-size: 24px;
`;
