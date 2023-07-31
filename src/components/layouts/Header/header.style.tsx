import styled from 'styled-components';
import { pictureSizeSmall } from '../../../style/variables';

export const HeaderStyled = styled.header`
  display: flex;
  /* justify-content: flex-start; */
  align-items: center;
  margin: 32px 0px 32px 16px;

  @media (max-width: 768px) {
    justify-content: center;
    margin: 32px 0px;
  }
`;

export const LogoWrapper = styled.div`
  width: 97%;
  display: flex;
  justify-content: center;
`;

export const Logo = styled.img`
  width: ${pictureSizeSmall};
`;

export const Icon = styled.i`
  font-size: 24px;
`;
