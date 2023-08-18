import {
  CatalogSection,
  InputWrapper,
  Label,
  Input,
  CatalogWrapper,
  PaginationWrapper,
  Pagination,
  CardLink,
  CardWrapper,
} from './recipesCatalog.style';
import { RecipeType } from '../../type';
import React, { useState, useContext } from 'react';
import CardPreview from '../../components/CardPreview';
import { RecipesContext, RecipeContextType } from '../../context';
import Loader from '../../components/layouts/Loader';

export const imagesPath: string = `${process.env.PUBLIC_URL}/assets/`;

const RecipesCatalog = () => {
  const [filteredRecipes, updateFilteredRecipes] = useState<Array<RecipeType>>(
    []
  );
  const recipePerPage: number = 5;
  let totalPages: number = 0;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { recipesData } = useContext<RecipeContextType>(RecipesContext);

  if (!recipesData) {
    return <Loader />;
  }

  const recipes: Array<RecipeType> | undefined = recipesData?.recipes;

  const handleInput = (event: React.FormEvent<HTMLInputElement>): void => {
    const eventElement = event.target as HTMLInputElement;
    updateFilteredRecipes([]);
    setCurrentPage(1);
    if (eventElement) {
      const matchingRecipes: Array<RecipeType> | undefined = recipes?.filter(
        (recipe) => recipe.title.toLowerCase().match(eventElement.value)
      );
      if (matchingRecipes?.length && eventElement.value) {
        updateFilteredRecipes(matchingRecipes);
      }
    }
  };

  const handleTouchInput = (
    event: React.TouchEvent<HTMLInputElement>
  ): void => {
    const eventElement = event.target as HTMLInputElement;
    const value = eventElement.value;
    handleInput(value);
  };

  const displayRecipes: RecipeType[] | undefined = filteredRecipes?.length
    ? filteredRecipes
    : recipes;

  const slicedRecipes: Array<RecipeType> | undefined = displayRecipes?.slice(
    (currentPage - 1) * recipePerPage,
    currentPage * recipePerPage
  );

  totalPages = Math.ceil(displayRecipes!.length / recipePerPage);

  return (
    <CatalogSection>
      <InputWrapper>
        <Label htmlFor="recipe">Trouvez vos plats :</Label>
        <Input
          onChange={handleInput}
          onTouchStart={handleTouchInput}
          onTouchEnd={handleTouchInput}
          type="search"
          id="recipe"
          name="recipe"
        />
      </InputWrapper>
      <CatalogWrapper id="cardRecipe">
        {slicedRecipes?.map(({ title, id, image, rate }) => {
          return (
            <CardWrapper key={id} className={`card-wrapper-${id}`}>
              <CardLink to={`/recipe/${id}/${title}`}>
                <CardPreview
                  id={id}
                  title={title}
                  image={imagesPath + image}
                  rate={rate}
                />
              </CardLink>
            </CardWrapper>
          );
        })}
      </CatalogWrapper>
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
    </CatalogSection>
  );
};

export default RecipesCatalog;
