import { RecipeType } from '../../type';
import {
  CatalogSection,
  InputWrapper,
  Label,
  Input,
  CatalogWrapper,
  PaginationWrapper,
  Pagination,
} from '../../components/RecipesCatalog/recipesCatalog.style';
import React, { useState, useContext } from 'react';
import CardPreview from '../../components/CardPreview';
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
  DeleteButtonWrapper,
} from './planner.style';
import Button from '../../components/Button';
import { DAYS } from '../../components/Template';
import {
  TemplateStyled,
  TemplateTitle,
  TemplateWraper,
  TemplateCard,
  TemplateRecipeWrapper,
  TemplateSubtitle,
} from '../../components/Template/template.style';
import Header from '../../components/layouts/Header';

export const imagesPath: string = `${process.env.PUBLIC_URL}/assets/`;

Modal.setAppElement('#root');

type Moment = 'midi' | 'soir';
interface WeekPlanner {
  day: string;
  moment: Moment;
  recipe: RecipeType;
}

const Planner = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [filteredRecipes, updateFilteredRecipes] = useState<Array<RecipeType>>(
    []
  );
  const recipePerPage: number = 5;
  let totalPages: number = 0;

  const storageRecipes =
    JSON.parse(localStorage.getItem('choosenRecipe')!) || [];

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [choosenRecipes, setChoosenRecipes] =
    useState<Array<WeekPlanner>>(storageRecipes);
  const [choosenMoment, setChoosenMoment] = useState<Moment>();
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

  const slicedRecipes: Array<RecipeType> | undefined = displayRecipes?.slice(
    (currentPage - 1) * recipePerPage,
    currentPage * recipePerPage
  );

  totalPages = Math.ceil(displayRecipes!.length / recipePerPage);

  const updateChoosenRecipesState = (id: number): void => {
    slicedRecipes.forEach((slidedRecipe: RecipeType): void => {
      if (slidedRecipe.id === id) {
        const newRecipe = slicedRecipes.find((recipe) => recipe.id === id)!;
        setChoosenRecipes([
          ...choosenRecipes,
          {
            day: choosenDay,
            moment: choosenMoment!,
            recipe: newRecipe,
          },
        ]);

        setModalIsOpen(false);
      }
    });
  };

  const addMealToPlanner = (id: number): void => {
    if (choosenRecipes.length > 0) {
      const allFilteredChoosenRecipes: Array<WeekPlanner> = [];
      const filteredChoosenRecipesByDay: WeekPlanner | undefined =
        choosenRecipes.find((recipe: WeekPlanner) => recipe.day === choosenDay);

      if (
        filteredChoosenRecipesByDay &&
        !allFilteredChoosenRecipes.includes(filteredChoosenRecipesByDay)
      ) {
        allFilteredChoosenRecipes.push(filteredChoosenRecipesByDay);
      }

      if (allFilteredChoosenRecipes.length > 0) {
        allFilteredChoosenRecipes.forEach((choosenRecipe) => {
          if (
            choosenRecipe.moment === choosenMoment &&
            choosenRecipe.recipe.id === id
          ) {
            setModalIsOpen(false);
          } else {
            updateChoosenRecipesState(id);
          }
        });
      } else {
        updateChoosenRecipesState(id);
      }
    } else {
      slicedRecipes.forEach((slidedRecipe: RecipeType): void => {
        if (slidedRecipe.id === id) {
          updateChoosenRecipesState(id);
        }
      });
    }
  };

  if (choosenRecipes.length > 0) {
    localStorage.setItem('choosenRecipe', JSON.stringify(choosenRecipes));
  }

  const deleteMealFromPlanner = (
    id: number,
    day: string,
    moment: 'midi' | 'soir'
  ): void => {
    const filteredChoosenRecipesByDay: WeekPlanner = choosenRecipes.find(
      (choosenRecipe: WeekPlanner) =>
        choosenRecipe.day === day &&
        choosenRecipe.moment === moment &&
        choosenRecipe.recipe.id === id
    )!;

    for (let i = 0; i < choosenRecipes.length; i++) {
      if (
        filteredChoosenRecipesByDay.recipe.id === choosenRecipes[i].recipe.id
      ) {
        choosenRecipes.splice(i, 1);
        setChoosenRecipes([...choosenRecipes]);
        localStorage.setItem('choosenRecipe', JSON.stringify(choosenRecipes));
      }
    }
  };

  const deleteAllMealFromPlanner = (): void => {
    choosenRecipes.length = 0;
    setChoosenRecipes([]);
    localStorage.setItem('choosenRecipe', JSON.stringify(choosenRecipes));
  };

  return (
    <>
      <Header isRecipePageLoaded={false} />
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
              <Label htmlFor="recipe">Trouvez vos plats :</Label>
              <Input
                onInput={handleInput}
                // onChange={handleInput}
                type="search"
                id="recipe"
                name="recipe"
              />
            </InputWrapper>
            <CatalogWrapper id="cardRecipe">
              {slicedRecipes?.map(({ title, id, image }) => {
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
        <TemplateStyled>
          <TemplateTitle>Semaine 1</TemplateTitle>
          <TemplateWraper>
            {DAYS.map((day) => (
              <TemplateCard key={day}>
                <h3>{day}</h3>
                <TemplateRecipeWrapper>
                  <TemplateSubtitle>Déjeuner :</TemplateSubtitle>
                  <Button
                    onClick={() => {
                      setChoosenDay(day);
                      setChoosenMoment('midi');
                      setModalIsOpen(true);
                    }}
                  >
                    Choisissez votre plat
                  </Button>
                  <ChoosenRecipeWrapper>
                    {choosenRecipes.length > 0 &&
                      choosenRecipes.map((choosenRecipe) => {
                        return (
                          day === choosenRecipe.day &&
                          choosenRecipe.moment === 'midi' && (
                            <CardPlanner
                              key={choosenRecipe.recipe.id}
                              id={choosenRecipe.recipe.id}
                              title={choosenRecipe.recipe.title}
                              image={imagesPath + choosenRecipe.recipe.image}
                              onClick={() =>
                                deleteMealFromPlanner(
                                  choosenRecipe.recipe.id,
                                  day,
                                  'midi'
                                )
                              }
                            />
                          )
                        );
                      })}
                  </ChoosenRecipeWrapper>
                </TemplateRecipeWrapper>
                <TemplateRecipeWrapper $hideBorder={true}>
                  <TemplateSubtitle>Dîner :</TemplateSubtitle>
                  <Button
                    onClick={() => {
                      setChoosenDay(day);
                      setChoosenMoment('soir');
                      setModalIsOpen(true);
                    }}
                  >
                    Choisissez votre plat
                  </Button>
                  <ChoosenRecipeWrapper>
                    {choosenRecipes.length > 0 &&
                      choosenRecipes.map((choosenRecipe) => {
                        return (
                          day === choosenRecipe.day &&
                          choosenRecipe.moment === 'soir' && (
                            <CardPlanner
                              key={choosenRecipe.recipe.id}
                              id={choosenRecipe.recipe.id}
                              title={choosenRecipe.recipe.title}
                              image={imagesPath + choosenRecipe.recipe.image}
                              onClick={() =>
                                deleteMealFromPlanner(
                                  choosenRecipe.recipe.id,
                                  day,
                                  'soir'
                                )
                              }
                            />
                          )
                        );
                      })}
                  </ChoosenRecipeWrapper>
                </TemplateRecipeWrapper>
              </TemplateCard>
            ))}
          </TemplateWraper>
          <DeleteButtonWrapper>
            <Button onClick={() => deleteAllMealFromPlanner()}>
              Supprimer toutes les recettes
            </Button>
          </DeleteButtonWrapper>
        </TemplateStyled>
      </main>
    </>
  );
};

export default Planner;
