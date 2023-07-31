import { HeaderStyled, LogoWrapper, Logo, Icon } from './header.style';
import { Link } from 'react-router-dom';

interface Props {
  isRecipePageLoaded: boolean;
}

const Header = ({ isRecipePageLoaded }: Props) => {
  return (
    <>
      {isRecipePageLoaded ? (
        <HeaderStyled>
          <Link to="/catalog">
            <Icon className="fa-solid fa-arrow-left"></Icon>
          </Link>
          <LogoWrapper>
            <Link to="/">
              <Logo
                src={`${process.env.PUBLIC_URL}/assets/CBM-logo.png`}
                alt="Cooked by me logo"
              />
            </Link>
          </LogoWrapper>
        </HeaderStyled>
      ) : (
        <HeaderStyled>
          <Link to="/">
            <Logo
              src={`${process.env.PUBLIC_URL}/assets/CBM-logo.png`}
              alt="Cooked by me logo"
            />
          </Link>
        </HeaderStyled>
      )}
    </>
  );
};

export default Header;
