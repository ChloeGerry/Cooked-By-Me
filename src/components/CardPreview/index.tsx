import {
  CardStyled,
  CardTitle,
  CardImage,
  CardLink,
} from './cardPreview.style';
import Ratings from '../Ratings';

interface Props {
  title: string;
  id: number;
  image: string;
  rate: number;
}

const CardPreview = ({ id, title, image, rate }: Props) => {
  return (
    <div>
      <CardStyled>
        <CardLink to={`/recipe/${id}/${title}`}>
          <CardTitle>{title}</CardTitle>
          <CardImage src={image} alt="Recette" />
          <Ratings rate={rate} />
        </CardLink>
      </CardStyled>
    </div>
  );
};

export default CardPreview;
