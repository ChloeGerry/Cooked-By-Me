import styled from 'styled-components';
import { fontSizeSmall } from '../../style/variables';

export const HomeMain = styled.main`
  margin: 0 16px;
`;

export const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 48px 0;

  @media (max-width: 768px) {
    text-align: center;
    margin: 48px 24px;
  }
`;

export const HomeParagraph = styled.p`
  font-size: ${fontSizeSmall};
  margin: 0 0 16px 0;
`;
