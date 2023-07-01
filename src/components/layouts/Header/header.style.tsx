import styled from 'styled-components';
import { pictureSizeSmall } from '../../../style/variables';

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  margin-bottom: 16px;
`;

export const Logo = styled.img`
  width: ${pictureSizeSmall};
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
`;
