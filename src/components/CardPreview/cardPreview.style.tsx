import styled from 'styled-components';
import { pictureSizeSmall } from '../../style/variables';

export const CardTitle = styled.h3`
  display: flex;
  justify-content: center;
`;

export const CardImage = styled.img`
  width: ${pictureSizeSmall};
  height: ${pictureSizeSmall};
  object-fit: cover;
`;
