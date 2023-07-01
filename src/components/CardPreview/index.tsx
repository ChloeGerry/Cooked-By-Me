import { Link } from 'react-router-dom';
import { CardStyled, CardTitle, CardImage } from './cardPreview.style';
import Ratings from '../Ratings';

interface Props {
  title: string;
  id: number;
  image: string;
  rate: number;
}

const CardPreview = ({ id, title, image, rate }: Props) => {
  return (
    <Link to={`/recipe/${id}/${title}`}>
      <CardStyled>
        <CardTitle>{title}</CardTitle>
        <CardImage src={image} alt="Recette" />
        <Ratings rate={rate} />
      </CardStyled>
    </Link>
  );
};

export default CardPreview;
