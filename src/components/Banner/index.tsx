import { BannerStyled } from './banner.style';

const Banner = () => {
  return (
    <BannerStyled
      src={`${process.env.PUBLIC_URL}/assets/banner.jpg`}
      alt="Recette"
    />
  );
};

export default Banner;
