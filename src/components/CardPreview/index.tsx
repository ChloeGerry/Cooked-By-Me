import { CardTitle, CardImage } from './cardPreview.style';
import Ratings from '../Ratings';

interface Props {
  title: string;
  id: number;
  image: string;
  rate?: number;
}

const CardPreview = ({ id, title, image, rate }: Props) => {
  return (
    <>
      <CardTitle>{title}</CardTitle>
      <CardImage src={image} alt="Recette" />
      {rate && <Ratings rate={rate} />}
    </>
  );
};

export default CardPreview;
