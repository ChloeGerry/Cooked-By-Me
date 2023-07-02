import styled from 'styled-components';
import { pictureSizeSmall, borderRadiusLarge } from '../../style/variables';

export const BannerStyled = styled.img`
  max-height: ${pictureSizeSmall};
  border-radius: ${borderRadiusLarge};
  width: 100%;
  object-fit: cover;
  margin: auto;
  display: flex;
`;