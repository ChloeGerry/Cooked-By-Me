import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  secondaryColor,
  tertiaryColor,
  fontSizeSmall,
  borderRadiusSmall,
} from '../../style/variables';

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
