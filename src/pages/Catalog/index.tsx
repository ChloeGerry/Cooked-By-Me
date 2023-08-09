import { CatalogMain } from './catalog.style';
import Banner from '../../components/Banner';
import Header from '../../components/layouts/Header';
import RecipesCatalog from '../../components/RecipesCatalog';

export const imagesPath: string = `${process.env.PUBLIC_URL}/assets/`;

const Catalog = () => {
  return (
    <>
      <Header isRecipePageLoaded={false} />
      <CatalogMain>
        <Banner />
        <RecipesCatalog />
      </CatalogMain>
    </>
  );
};

export default Catalog;
