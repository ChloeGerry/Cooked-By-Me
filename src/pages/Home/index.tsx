import Banner from '../../components/Banner';
import { HomeSection, HomeParagraph, LinkStyled } from './home.style';

const Home = () => {
  return (
    <main>
      <Banner
        bannerPicture={process.env.PUBLIC_URL + '/assets/home-banner.jpg'}
      />
      <HomeSection>
        <h2>Créez simplement vos menus</h2>
        <HomeParagraph>Sélectionnez les plats qui vous plaisent.</HomeParagraph>
        <HomeParagraph>
          Créez vos menus personnalisés pour la semaine.
        </HomeParagraph>
        <HomeParagraph>
          Plus besoin de réfléchir à ce que vous allez manger !
        </HomeParagraph>
        <LinkStyled to="/planner">Créer votre template</LinkStyled>
      </HomeSection>
    </main>
  );
};

export default Home;
