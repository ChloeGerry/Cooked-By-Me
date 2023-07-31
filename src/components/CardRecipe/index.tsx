import {
  CardRecipeStyled,
  CardRecipeWrapper,
  RecipeHeader,
  RecipeTitle,
  RecipeImage,
  RecipeInformationsWrapper,
  RecipeInformationsContainer,
  RecipeInformations,
  RecipeUl,
  RecipeLi,
  RecipeStepsTitle,
  RecipeSteps,
} from './cardRecipe.style';
import Ratings from '../Ratings';
import Text from '../Text';

interface Props {
  title: string;
  id: number;
  image: string;
  preparation: string;
  cooking?: string;
  rest?: string;
  portions: string;
  ingredients: Array<string>;
  steps: Array<string>;
  rate: number;
}

const CardRecipe = ({
  title,
  id,
  image,
  preparation,
  cooking,
  rest,
  portions,
  ingredients,
  steps,
  rate,
}: Props) => {
  return (
    <CardRecipeStyled>
      <CardRecipeWrapper>
        <RecipeHeader>
          <RecipeTitle>{title}</RecipeTitle>
          <Ratings rate={rate} />
        </RecipeHeader>
        <RecipeInformationsWrapper>
          <RecipeImage src={image} alt="Recette" />
          <RecipeInformationsContainer>
            <RecipeInformations>
              <Text title="Temps de préparation :" text={preparation} />
              {cooking && <Text title="Temps de cuisson :" text={cooking} />}
              {rest && <Text title="Temps de repos :" text={rest} />}
              <Text title="Nombre de portion :" text={portions} />
            </RecipeInformations>
            <RecipeInformations>
              <Text title="Ingrédients :" />
              <RecipeUl>
                {ingredients?.map((ingredient, index) => {
                  return <RecipeLi key={index}>{ingredient}</RecipeLi>;
                })}
              </RecipeUl>
            </RecipeInformations>
          </RecipeInformationsContainer>
        </RecipeInformationsWrapper>
        <RecipeStepsTitle>Instructions :</RecipeStepsTitle>
        {steps?.map((step, index) => {
          return (
            <RecipeSteps key={index}>
              {step}
              <br />
            </RecipeSteps>
          );
        })}
      </CardRecipeWrapper>
    </CardRecipeStyled>
  );
};

export default CardRecipe;
