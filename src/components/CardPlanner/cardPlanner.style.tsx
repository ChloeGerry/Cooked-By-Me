import styled from 'styled-components';
import { borderRadiusSmall, tertiaryColor } from '../../style/variables';
import { Link } from 'react-router-dom';

export const CardPlannerWrapper = styled.div`
  padding: 0px 8px 16px 8px;
  border: 1px solid ${tertiaryColor};
  border-radius: ${borderRadiusSmall};
  min-width: 150px;
`;

export const LinkStyled = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardPlannerImage = styled.img`
  object-fit: cover;
  width: 125px;
  height: 125px;
`;
