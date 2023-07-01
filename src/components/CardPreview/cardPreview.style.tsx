import styled from 'styled-components';
import {
  secondaryColor,
  tertiaryColor,
  borderRadiusMedium,
  pictureSizeSmall,
} from '../../style/variables';

export const CardStyled = styled.article`
  display: flex;
  flex-direction: column;
  border: 1px solid ${secondaryColor};
  border-radius: ${borderRadiusMedium};
  margin: 0 16px;
  padding: 16px;
  transition: box-shadow 200ms ease-in-out;

  &:hover {
    box-shadow: 5px 5px 5px ${tertiaryColor};
  }
`;

export const CardTitle = styled.h3`
  display: flex;
  justify-content: center;
`;

export const CardImage = styled.img`
  width: ${pictureSizeSmall};
  height: ${pictureSizeSmall};
  object-fit: cover;
`;
