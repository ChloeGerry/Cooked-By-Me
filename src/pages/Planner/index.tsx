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
// import Template from '../../components/Template';
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
import { DAYS } from '../../components/Template';
import {
  TemplateStyled,
  TemplateTitle,
  TemplateWraper,
  TemplateCard,
  TemplateRecipeWrapper,
  TemplateSubtitle,
} from '../../components/Template/template.style';

export const imagesPath: string = `${process.env.PUBLIC_URL}/assets/`;

Modal.setAppElement('#root');

interface WeekPlanner {
  [key: string]: object;
}

const Planner = () => {
  const [week, setWeek] = useState<WeekPlanner>({
    Lundi: {
      midi: null,
      soir: null,
    },
    Mardi: {
      midi: null,
      soir: null,
    },
    Mercredi: {
      midi: null,
      soir: null,
    },
    Jeudi: {
      midi: null,
      soir: null,
    },
    Vendredi: {
      midi: null,
      soir: null,
    },
    Samedi: {
      midi: null,
      soir: null,
    },
    Dimanche: {
      midi: null,
      soir: null,
    },
  });

  const [choosenDay, setChoosenDay] = useState<string>('');
  const [choosenMoment, setChoosenMoment] = useState<string>('');
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
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

  const slidedRecipes: Array<RecipeType> | undefined = displayRecipes?.slice(
    (currentPage - 1) * recipePerPage,
    currentPage * recipePerPage
  );

  totalPages = Math.ceil(displayRecipes!.length / recipePerPage);

  const addMealToPlanner = (id: number) => {
    slidedRecipes.forEach((slidedRecipe: RecipeType): void => {
      if (slidedRecipe.id === id) {
        setModalIsOpen(false);
        setChoosenRecipe([...choosenRecipe, slidedRecipe]);
        // localStorage.setItem('newRecipe', JSON.stringify(slidedRecipe));
        // console.log(
        //   'localStorageRecipe',
        //   JSON.parse(localStorage.getItem('newRecipe')!)
        // );
      }
    });

    // setChoosenRecipe([]);
    // Object.keys(week).forEach((day) => {
    //   if (day === choosenDay) {
    //     console.log('choosenMoment', choosenMoment);
    //     if (choosenMoment === 'Déjeuner') {
    //       setWeek({
    //         week[day]: {
    //           midi: id,
    //           soir: null,
    //         },
    //       });
    //     }
    // }
    // });
  };

  // console.log('choosenDay', choosenDay);
  // console.log('choosenMoment', choosenMoment);

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
                    setChoosenMoment('Déjeuner');
                    return setModalIsOpen(true);
                  }}
                >
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
              </TemplateRecipeWrapper>
              <TemplateRecipeWrapper $hideBorder={true}>
                <TemplateSubtitle>Dîner :</TemplateSubtitle>
                <Button
                  onClick={() => {
                    setChoosenDay(day);
                    setChoosenMoment('Dîner');
                    return setModalIsOpen(true);
                  }}
                >
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
              </TemplateRecipeWrapper>
            </TemplateCard>
          ))}
        </TemplateWraper>
      </TemplateStyled>
    </main>
  );
};

export default Planner;
