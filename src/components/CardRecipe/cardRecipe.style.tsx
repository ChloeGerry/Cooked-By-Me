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
  margin: 64px 0;
`;

export const CardRecipeWrapper = styled.article`
  margin: 40px 88px;

  @media (max-width: 1000px) {
    margin: 40px 24px;
  }
`;

export const RecipeHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
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

  @media (max-width: 1000px) {
    margin: 0 0 32px 0px;
  }

  @media (max-width: 500px) {
    width: -webkit-fill-available;
  }
`;

export const RecipeInformationsWrapper = styled.div`
  display: flex;

  @media (max-width: 1300px) {
    justify-content: space-between;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
  }
`;

export const RecipeInformationsContainer = styled.div`
  display: flex;
  gap: 48px;
  width: 54%;

  @media (max-width: 1350px) {
    flex-direction: column;
  }

  @media (max-width: 1000px) {
    flex-direction: row;
    width: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const RecipeInformations = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1000px) {
    align-items: center;
  }
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
  font-size: 1.1rem;
`;

export const RecipeStepsTitle = styled.h4`
  font-size: ${fontSizeSmall};
  text-align: justify;
`;

export const RecipeSteps = styled.p`
  text-align: justify;
  font-size: 1.1rem;
`;
