import { BannerStyled } from './banner.style';

interface Props {
  bannerPicture: string;
}

const Banner = ({ bannerPicture }: Props) => {
  return <BannerStyled src={bannerPicture} alt="Recette" />;
};

export default Banner;
