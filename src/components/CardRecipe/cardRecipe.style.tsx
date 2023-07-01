import styled from 'styled-components';
import {
  secondaryColor,
  borderRadiusLarge,
  fontSizeLarge,
  pictureSizeLarge,
  fontSizeSmall,
} from '../../style/variables';

export const CardRecipeStyled = styled.section`
  border: 1px solid ${secondaryColor};
  border-radius: ${borderRadiusLarge};
  margin-top: 64px;
`;

export const CardRecipeWrapper = styled.article`
  margin: 40px 88px;
`;

export const RecipeHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const RecipeTitle = styled.h3`
  font-size: ${fontSizeLarge};
  margin: 0;
`;

export const RecipeImage = styled.img`
  width: ${pictureSizeLarge};
  height: ${pictureSizeLarge};
  object-fit: cover;
  margin: 0px 32px 32px 0px;
`;

export const RecipeInformationsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RecipeInformations = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

export const RecipeUl = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  margin: 0;
`;

export const RecipeLi = styled.li`
  margin-bottom: 8px;
  list-style: none;
`;

export const RecipeStepsTitle = styled.h4`
  font-size: ${fontSizeSmall};
`;
