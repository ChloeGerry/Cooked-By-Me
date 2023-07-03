import styled from 'styled-components';
import { secondaryColor, borderRadiusSmall } from '../../style/variables';

export const TemplateStyled = styled.section`
  border: 1px solid ${secondaryColor};
  border-radius: 15px;
  padding-bottom: 32px;
`;

export const TemplateTitle = styled.h2`
  display: flex;
  justify-content: center;
`;

export const TemplateWraper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const TemplateCard = styled.article`
  border: 1px solid ${secondaryColor};
  border-radius: ${borderRadiusSmall};
  padding: 0px 16px;
`;
