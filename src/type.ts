export type RecipeType = {
  title: string;
  id: number;
  image: string;
  preparation: string;
  cooking?: string;
  rest?: string;
  portions: string;
  ingredients: Array<string>;
  steps: Array<string>;
  rate: number;
  type: string;
};
