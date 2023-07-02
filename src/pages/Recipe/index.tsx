import Banner from '../../components/Banner';
import CardRecipe from '../../components/CardRecipe';
import { useParams } from 'react-router-dom';
import { recipes, RecipeType } from '../../recipesData';
import { useState, useEffect } from 'react';

type recipeId = {
  id: string;
};

const Recipe = () => {
  const recipeId = useParams<recipeId>();
  const [filteredRecipe, setFilteredRecipe] = useState<Array<RecipeType>>([]);

  useEffect(() => {
    setFilteredRecipe([]);
    const choosenRecipe = recipes.filter(
      (recipe) => recipeId.id === recipe.id.toString()
    );

    if (choosenRecipe.length) {
      setFilteredRecipe(choosenRecipe);
    }
  }, [recipeId.id]);

  return (
    <main>
      {filteredRecipe[0]?.type === 'salty' ? (
        <Banner
          bannerPicture={`${process.env.PUBLIC_URL}/assets/salty-banner.jpg`}
        />
      ) : (
        <Banner
          bannerPicture={`${process.env.PUBLIC_URL}/assets/sweet-banner.jpg`}
        />
      )}
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
              image={image}
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
    </main>
  );
};

export default Recipe;
