import Banner from '../../components/Banner';
import CardRecipe from '../../components/CardRecipe';
import { useParams } from 'react-router-dom';
import { RecipeType } from '../../type';
import { useState, useEffect, useContext } from 'react';
import { RecipesContext, RecipeContextType } from '../../context';
import { imagesPath } from '../Planner';
import Loader from '../../components/layouts/Loader';
import { RecipeMain } from './recipe.style';
import Header from '../../components/layouts/Header';

type recipeId = {
  id: string;
};

const Recipe = () => {
  const recipeId = useParams<recipeId>();
  const [filteredRecipe, setFilteredRecipe] = useState<Array<RecipeType>>([]);
  const { recipesData } = useContext<RecipeContextType>(RecipesContext);
  const recipes: Array<RecipeType> | undefined = recipesData?.recipes;

  useEffect(() => {
    if (!recipesData) {
      return;
    }
    setFilteredRecipe([]);
    const choosenRecipe = recipes?.filter(
      (recipe: RecipeType) => recipeId.id === recipe.id.toString()
    );
    if (choosenRecipe?.length) {
      setFilteredRecipe(choosenRecipe);
    }
  }, [recipeId.id, recipes, recipesData]);

  if (!recipesData) {
    return <Loader />;
  }

  return (
    <>
      <Header isRecipePageLoaded={true} />
      <RecipeMain>
        <Banner />
        {filteredRecipe?.map(
          ({
            title,
            id,
            image,
            ingredients,
            rate,
            preparation,
            cooking,
            rest,
            portions,
            steps,
          }) => {
            return (
              <CardRecipe
                id={id}
                key={id}
                title={title}
                image={imagesPath + image}
                preparation={preparation}
                cooking={cooking}
                rest={rest}
                portions={portions}
                ingredients={ingredients}
                steps={steps}
                rate={rate}
              />
            );
          }
        )}
      </RecipeMain>
    </>
  );
};

export default Recipe;
