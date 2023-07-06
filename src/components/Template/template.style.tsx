import styled from 'styled-components';
import {
  secondaryColor,
  tertiaryColor,
  borderRadiusSmall,
} from '../../style/variables';

export const TemplateStyled = styled.section`
  border: 1px solid ${secondaryColor};
  border-radius: 15px;
  padding-bottom: 16px;
  margin-top: 40px;
`;

export const TemplateTitle = styled.h2`
  display: flex;
  justify-content: center;
`;

export const TemplateWraper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const TemplateCard = styled.article`
  border: 1px solid ${tertiaryColor};
  border-radius: ${borderRadiusSmall};
  padding: 0px 16px;
  margin-bottom: 32px;
`;

export const TemplateRecipeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  border: 1px solid ${tertiaryColor};
  border-radius: 5px;
  padding: 0 16px 16px 16px;
  margin-bottom: 24px;
`;
