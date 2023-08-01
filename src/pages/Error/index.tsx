import Header from '../../components/layouts/Header';
import Banner from '../../components/Banner';
import { Link } from 'react-router-dom';
import { ErrorMain } from './error.style';

const Error = () => {
  return (
    <>
      <Header isRecipePageLoaded={false} />
      <Banner />
      <ErrorMain>
        <p>Cette page n'existe pas...</p>
        <Link to="/">Cliquez ici pour retourner sur la page d'accueil</Link>
      </ErrorMain>
    </>
  );
};

export default Error;
