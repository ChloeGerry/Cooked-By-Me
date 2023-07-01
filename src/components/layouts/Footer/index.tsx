import { FooterStyled, FooterLink } from './footer.style';

const Footer = () => {
  return (
    <FooterStyled>
      <FooterLink to="#">Mentions légales</FooterLink>
      <FooterLink to="#">Me contacter</FooterLink>
    </FooterStyled>
  );
};

export default Footer;
