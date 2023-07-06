import { RecipeType } from '../../type';
import React, { useState, useContext } from 'react';
import CardPreview from '../../components/CardPreview';
import Template from '../../components/Template';
import { RecipesContext, RecipeContextType } from '../../context';
import Loader from '../../components/layouts/Loader';
import CardPlanner from '../../components/CardPlanner';

export const imagesPath: string = `${process.env.PUBLIC_URL}/assets/`;

const Planner = () => {
  return (
    <main>
      <Template>
        <CardPlanner />
      </Template>
    </main>
  );
};

export default Planner;
