import {
  CardStyled,
  CardTitle,
  CardImage,
  CardLink,
} from './cardPreview.style';
import Ratings from '../Ratings';
import { RecipeType } from '../../type';

interface Props {
  title: string;
  id: number;
  image: string;
  rate: number;
  onDragStart?: (event: React.DragEvent, choosenRecipeType: RecipeType) => void;
  draggable?: boolean;
}

const CardPreview = ({
  id,
  title,
  image,
  rate,
  onDragStart,
  draggable,
}: Props) => {
  const handleDragStart = (event: React.DragEvent) => {
    const choosenRecipeType = { id, title, image, rate } as RecipeType;
    onDragStart(event, choosenRecipeType);
  };

  return (
    <CardStyled draggable={draggable} onDragStart={handleDragStart}>
      <CardLink to={`/recipe/${id}/${title}`}>
        <CardTitle>{title}</CardTitle>
        <CardImage src={image} alt="Recette" />
        <Ratings rate={rate} />
      </CardLink>
    </CardStyled>
  );
};

export default CardPreview;
