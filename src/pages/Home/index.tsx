import Banner from '../../components/Banner';
import { HomeSection, HomeParagraph } from './home.style';
import { LinkStyled } from '../../components/ButtonLink/buttonLink.style';

const Home = () => {
  return (
    <main>
      <Banner />
      <HomeSection>
        <h2>Créez simplement vos menus</h2>
        <HomeParagraph>Sélectionnez les plats qui vous plaisent.</HomeParagraph>
        <HomeParagraph>
          Créez vos menus personnalisés pour la semaine.
        </HomeParagraph>
        <HomeParagraph>
          Plus besoin de réfléchir à ce que vous allez manger !
        </HomeParagraph>
      </HomeSection>
      <HomeSection>
        <h2>Consultez le cataglogue</h2>
        <HomeParagraph>
          Ayez une vue d'ensemble sur les recettes proposées.
        </HomeParagraph>
        <HomeParagraph>
          Recettes salées, sucrées, rapides ou plus élaborées.
        </HomeParagraph>
        <LinkStyled to="/catalog">Catalogue</LinkStyled>
      </HomeSection>
      <HomeSection>
        <h2>Créez votre template</h2>
        <HomeParagraph>Contruisez votre template individualisé.</HomeParagraph>
        <HomeParagraph>
          Téléchargez-le afin de l'avoir toujours avec vous.
        </HomeParagraph>
        <LinkStyled to="/planner">Template</LinkStyled>
      </HomeSection>
    </main>
  );
};

export default Home;
