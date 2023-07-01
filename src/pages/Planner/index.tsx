import {
  CardSection,
  InputWrapper,
  Label,
  Input,
  CardWrapper,
} from './planner.style';
import { recipes, RecipeType } from '../../recipesData';
import { useState } from 'react';
import CardPreview from '../../components/CardPreview';
import Template from '../../components/Template';

const Planner = () => {
  const [isRecipeVisible, setRecipeVisible] = useState<boolean>(false);
  const [filteredRecipes, updateFilteredRecipes] = useState<Array<RecipeType>>(
    []
  );

  const handleInput = (event: React.FormEvent<HTMLInputElement>): void => {
    const target = event.target as HTMLInputElement;
    updateFilteredRecipes([]);

    if (target) {
      const matchingRecipes = recipes.filter((recipe) =>
        recipe.title.toLowerCase().match(target.value)
      );

      if (matchingRecipes.length && target.value) {
        updateFilteredRecipes(matchingRecipes);
        setRecipeVisible(true);
      }
    }
  };

  return (
    <main>
      <CardSection>
        <InputWrapper>
          <Label>Trouvez vos plats :</Label>
          <Input onChange={handleInput} type="search" />
        </InputWrapper>
        <CardWrapper>
          {isRecipeVisible &&
            filteredRecipes?.map(({ title, id, image, rate }) => {
              return (
                <CardPreview
                  id={id}
                  key={id}
                  title={title}
                  image={image}
                  rate={rate}
                />
              );
            })}
        </CardWrapper>
      </CardSection>
      <Template />
    </main>
  );
};

export default Planner;
