import {
  CardSection,
  InputWrapper,
  Label,
  Input,
  CardWrapper,
  PaginationWrapper,
  Pagination,
} from './planner.style';
import { RecipeType } from '../../type';
import React, { useState, useContext } from 'react';
import CardPreview from '../../components/CardPreview';
import Template from '../../components/Template';
import { RecipesContext, RecipeContextType } from '../../context';
import Loader from '../../components/layouts/Loader';

export const imagesPath: string = `${process.env.PUBLIC_URL}/assets/`;

const Planner = () => {
  const [filteredRecipes, updateFilteredRecipes] = useState<Array<RecipeType>>(
    []
  );
  const recipePerPage: number = 5;
  let totalPages: number = 0;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [choosenRecipe, setChoosenRecipe] = useState<Array<RecipeType>>([]);
  const { recipesData } = useContext<RecipeContextType>(RecipesContext);

  if (!recipesData) {
    return <Loader />;
  }

  const recipes: Array<RecipeType> | undefined = recipesData?.recipes;

  const handleInput = (event: React.FormEvent<HTMLInputElement>): void => {
    const target = event.target as HTMLInputElement;
    updateFilteredRecipes([]);
    setCurrentPage(1);
    if (target) {
      const matchingRecipes: Array<RecipeType> | undefined = recipes?.filter(
        (recipe) => recipe.title.toLowerCase().match(target.value)
      );
      if (matchingRecipes?.length && target.value) {
        updateFilteredRecipes(matchingRecipes);
      }
    }
  };

  const displayRecipes: RecipeType[] | undefined = filteredRecipes?.length
    ? filteredRecipes
    : recipes;

  const slidedFilteredRecipes: Array<RecipeType> | undefined =
    displayRecipes?.slice(
      (currentPage - 1) * recipePerPage,
      currentPage * recipePerPage
    );

  const slicesRecipes: Array<RecipeType> | undefined = displayRecipes?.slice(
    (currentPage - 1) * recipePerPage,
    currentPage * recipePerPage
  );

  totalPages = Math.ceil(displayRecipes!.length / recipePerPage);

  const handleOnDrag = (
    event: React.DragEvent,
    choosenRecipeType: RecipeType
  ) => {
    event.dataTransfer.setData('text/plain', JSON.stringify(choosenRecipeType));
  };

  const handleOnDrop = (event: React.DragEvent) => {
    const choosenRecipeType = JSON.parse(
      event.dataTransfer.getData('text/plain')
    ) as RecipeType;
    setChoosenRecipe([...choosenRecipe, choosenRecipeType]);
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

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
                    draggable
                    onDragStart={(event, choosenRecipeType) =>
                      handleOnDrag(event, choosenRecipeType)
                    }
                    id={id}
                    key={id}
                    title={title}
                    image={imagesPath + image}
                    rate={rate}
                  />
                );
              })
            : slicesRecipes?.map(({ title, id, image, rate }) => {
                return (
                  <CardPreview
                    draggable
                    onDragStart={(event, choosenRecipeType) =>
                      handleOnDrag(event, choosenRecipeType)
                    }
                    id={id}
                    key={id}
                    title={title}
                    image={imagesPath + image}
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
      <Template onDrop={handleOnDrop} onDragOver={handleDragOver}>
        {choosenRecipe?.map(({ id, title, image, rate }) => {
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
      </Template>
    </main>
  );
};

export default Planner;
