import {
  CardSection,
  InputWrapper,
  Label,
  Input,
  CardWrapper,
  PaginationWrapper,
  Pagination,
} from './planner.style';
import { recipes, RecipeType } from '../../recipesData';
import { useState } from 'react';
import CardPreview from '../../components/CardPreview';
import Template from '../../components/Template';

const Planner = () => {
  const [filteredRecipes, updateFilteredRecipes] = useState<Array<RecipeType>>(
    []
  );

  const recipePerPage: number = 5;

  let totalPages: number = 0;

  const [currentPage, setCurrentPage] = useState(1);

  const handleInput = (event: React.FormEvent<HTMLInputElement>): void => {
    const target = event.target as HTMLInputElement;
    updateFilteredRecipes([]);

    if (target) {
      const matchingRecipes = recipes.filter((recipe) =>
        recipe.title.toLowerCase().match(target.value)
      );

      if (matchingRecipes.length && target.value) {
        updateFilteredRecipes(matchingRecipes);
      }
    }
  };

  const slidedFilteredRecipes = filteredRecipes.slice(
    (currentPage - 1) * recipePerPage,
    currentPage * recipePerPage
  );

  const slicesRecipes = recipes.slice(
    (currentPage - 1) * recipePerPage,
    currentPage * recipePerPage
  );

  if (slidedFilteredRecipes.length) {
    totalPages = Math.ceil(filteredRecipes.length / recipePerPage);
  } else if (slicesRecipes.length) {
    totalPages = Math.ceil(recipes.length / recipePerPage);
  }

  return (
    <main>
      <CardSection>
        <InputWrapper>
          <Label>Trouvez vos plats :</Label>
          <Input onChange={handleInput} type="search" />
        </InputWrapper>
        <CardWrapper id="cardRecipe">
          {filteredRecipes.length
            ? slidedFilteredRecipes?.map(({ title, id, image, rate }) => {
                return (
                  <CardPreview
                    id={id}
                    key={id}
                    title={title}
                    image={image}
                    rate={rate}
                  />
                );
              })
            : slicesRecipes?.map(({ title, id, image, rate }) => {
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
        <PaginationWrapper>
          {[...Array(totalPages)].map((_, index) => {
            return (
              <Pagination
                className={currentPage === index + 1 ? 'isSelected' : ''}
                key={index}
                to="#cardRecipe"
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </Pagination>
            );
          })}
        </PaginationWrapper>
      </CardSection>
      <Template />
    </main>
  );
};

export default Planner;
