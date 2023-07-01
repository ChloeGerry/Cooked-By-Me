import styled from 'styled-components';
import { tertiaryColor } from '../../style/variables';

export const RatingsStyled = styled.span`
  margin-top: 16px;
`;

export const Stars = styled.i`
  color: ${({ color }) => color || tertiaryColor};
`;
