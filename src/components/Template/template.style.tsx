import styled, { css } from 'styled-components';
import {
  secondaryColor,
  tertiaryColor,
  borderRadiusSmall,
} from '../../style/variables';

interface TemplateRecipeWrapperProps {
  $hideBorder?: boolean;
}

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
  gap: 24px;
  padding: 32px;
`;

export const TemplateCard = styled.article`
  border: 1px solid ${tertiaryColor};
  border-radius: ${borderRadiusSmall};
  padding: 0px 16px;
  margin-bottom: 32px;
`;

export const TemplateRecipeWrapper = styled.div<TemplateRecipeWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 0 16px 32px 16px;
  margin-bottom: 24px;
  max-width: 355px;
  flex-wrap: wrap;
  ${(props) =>
    !props.$hideBorder &&
    css`
      border-bottom: 1px solid ${secondaryColor};
    `}
`;

export const TemplateSubtitle = styled.h4`
  margin-right: 8px;
`;
