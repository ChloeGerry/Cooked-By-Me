import styled from 'styled-components';
import { pictureSizeSmall } from '../../../style/variables';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: flex-start;
  margin: 32px 0px 32px 32px;

  @media (max-width: 768px) {
    justify-content: center;
    margin: 32px 0px;
  }
`;

export const Logo = styled.img`
  width: ${pictureSizeSmall};
`;
