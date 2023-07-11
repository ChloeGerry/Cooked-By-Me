import { RecipeType } from '../../type';
import {
  CatalogSection,
  InputWrapper,
  Label,
  Input,
  CatalogWrapper,
  PaginationWrapper,
  Pagination,
} from '../Catalog/catalog.style';
import React, { useState, useContext } from 'react';
import CardPreview from '../../components/CardPreview';
import Template from '../../components/Template';
import Modal from 'react-modal';
import { RecipesContext, RecipeContextType } from '../../context';
import Loader from '../../components/layouts/Loader';
import CardPlanner from '../../components/CardPlanner';
import {
  CardWrapper,
  Icon,
  IconWrapper,
  ButtonWrapper,
  ChoosenRecipeWrapper,
} from './planner.style';
import Button from '../../components/Button';

export const imagesPath: string = `${process.env.PUBLIC_URL}/assets/`;

Modal.setAppElement('#root');

const Planner = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [filteredRecipes, updateFilteredRecipes] = useState<Array<RecipeType>>(
    []
  );
  const recipePerPage: number = 5;
  let totalPages: number = 0;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [choosenRecipe, setChoosenRecipe] = useState<Array<RecipeType>>([]);
  const [choosenDay, setChoosenDay] = useState<string>('');
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

  const slidedRecipes: Array<RecipeType> | undefined = displayRecipes?.slice(
    (currentPage - 1) * recipePerPage,
    currentPage * recipePerPage
  );

  totalPages = Math.ceil(displayRecipes!.length / recipePerPage);

  const addMealToPlanner = (id: number) => {
    // setChoosenRecipe([]);
    slidedRecipes.forEach((slidedRecipe: RecipeType): void => {
      if (slidedRecipe.id === id) {
        setModalIsOpen(false);
        setChoosenRecipe([...choosenRecipe, slidedRecipe]);
      }
    });
  };

  return (
    <main>
      <Modal isOpen={modalIsOpen}>
        <IconWrapper>
          <Icon
            onClick={() => setModalIsOpen(false)}
            className="fa-regular fa-circle-xmark"
          ></Icon>
        </IconWrapper>
        <CatalogSection>
          <InputWrapper>
            <Label>Trouvez vos plats :</Label>
            <Input onChange={handleInput} type="search" />
          </InputWrapper>
          <CatalogWrapper id="cardRecipe">
            {filteredRecipes.length
              ? slidedFilteredRecipes?.map(({ title, id, image }) => {
                  return (
                    <CardWrapper key={id}>
                      <CardPreview
                        id={id}
                        title={title}
                        image={imagesPath + image}
                      />
                      <ButtonWrapper>
                        <Button onClick={() => addMealToPlanner(id)}>
                          Sélectionnez ce plat
                        </Button>
                      </ButtonWrapper>
                    </CardWrapper>
                  );
                })
              : slidedRecipes?.map(({ title, id, image }) => {
                  return (
                    <CardWrapper key={id}>
                      <CardPreview
                        id={id}
                        title={title}
                        image={imagesPath + image}
                      />
                      <ButtonWrapper>
                        <Button onClick={() => addMealToPlanner(id)}>
                          Sélectionnez ce plat
                        </Button>
                      </ButtonWrapper>
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
      </Modal>
      <Template>
        <Button onClick={() => setModalIsOpen(true)}>
          Choisissez votre plat
        </Button>
        <ChoosenRecipeWrapper>
          {choosenRecipe.length
            ? choosenRecipe?.map(({ id, title, image }) => {
                return (
                  <CardPlanner
                    key={id}
                    id={id}
                    title={title}
                    image={imagesPath + image}
                  />
                );
              })
            : null}
        </ChoosenRecipeWrapper>
      </Template>
    </main>
  );
};

export default Planner;
