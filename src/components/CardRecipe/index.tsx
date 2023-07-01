import {
  CardRecipeStyled,
  CardRecipeWrapper,
  RecipeHeader,
  RecipeTitle,
  RecipeImage,
  RecipeInformationsWrapper,
  RecipeInformations,
  RecipeUl,
  RecipeLi,
  RecipeStepsTitle,
} from './cardRecipe.style';
import Ratings from '../Ratings';
import Text from '../Text';

interface Props {
  title: string;
  id: number;
  image: string;
  preparation?: string;
  cooking?: string;
  rest?: string;
  portions?: string;
  ingredients?: Array<string>;
  steps?: Array<string>;
  rate: number;
  type?: string;
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
          <RecipeInformations>
            <Text title="Temps de préparation :" text={preparation} />
            <Text title="Temps de cuisson :" text={cooking} />
            <Text title="Temps de repos :" text={rest} />
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
        </RecipeInformationsWrapper>
        <RecipeStepsTitle>Instructions :</RecipeStepsTitle>
        {steps?.map((step, index) => {
          return (
            <p key={index}>
              {step}
              <br />
            </p>
          );
        })}
      </CardRecipeWrapper>
    </CardRecipeStyled>
  );
};

export default CardRecipe;
