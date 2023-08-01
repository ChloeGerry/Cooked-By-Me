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
  width: 200px;
  height: 215px;
`;

export const CardPlannerImage = styled.img`
  object-fit: cover;
  width: 125px;
  height: 125px;
`;

export const CardPlannerIcon = styled.i`
  display: flex;
  justify-content: end;
  padding: 0 8px 8px 0;
  font-size: 24px;
`;
