import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  secondaryColor,
  tertiaryColor,
  fontSizeSmall,
  borderRadiusSmall,
} from '../../style/variables';

export const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 48px 0;
`;

export const HomeParagraph = styled.p`
  font-size: ${fontSizeSmall};
  margin: 0 0 8px 0;
`;

export const LinkStyled = styled(Link)`
  margin: 16px 0;
  font-size: ${fontSizeSmall};
  border: 1px solid ${secondaryColor};
  padding: 8px;
  border-radius: ${borderRadiusSmall};
  transition: box-shadow 200ms ease-in-out;

  &:hover {
    box-shadow: 5px 5px 5px ${tertiaryColor};
  }
`;
