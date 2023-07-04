import React, { useState, useEffect, createContext } from 'react';
import { RecipeType } from '../type';

interface RepicesData {
  recipes: RecipeType[];
}

export type RecipeContextType = {
  recipesData?: RepicesData;
  error: boolean;
};

export const RecipesContext = createContext<RecipeContextType>({
  recipesData: undefined,
  error: false,
});

interface Props {
  children: React.ReactNode;
}

const RecipesContextProvider = ({ children }: Props) => {
  const [recipesData, getRecipesData] = useState<RepicesData>();
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetch('http://localhost:3000/Cooked-By-Me/recipesData.json')
      .then((response) => response.json())
      .then((data) => {
        return getRecipesData(data);
      })
      .catch((error) => {
        console.log(error);
        return setError(true);
      });
  }, []);

  return (
    <RecipesContext.Provider value={{ recipesData, error }}>
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesContextProvider;
