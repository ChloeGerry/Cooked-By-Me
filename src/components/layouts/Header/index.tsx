import { HeaderStyled, Logo } from './header.style';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderStyled>
      <Link to="/">
        <Logo
          src={`${process.env.PUBLIC_URL}/assets/CBM-logo.png`}
          alt="Cooked by me logo"
        />
      </Link>
    </HeaderStyled>
  );
};

export default Header;
