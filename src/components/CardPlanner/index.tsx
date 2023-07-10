import {
  CardPlannerImage,
  CardPlannerWrapper,
  LinkStyled,
} from './cardPlanner.style';

interface Props {
  title: string;
  image: string;
  id: number;
}

const CardPlanner = ({ title, image, id }: Props) => {
  return (
    <CardPlannerWrapper>
      <LinkStyled to={`/recipe/${id}/${title}`}>
        <h3>{title}</h3>
        <CardPlannerImage src={image} alt="Recette" />
      </LinkStyled>
    </CardPlannerWrapper>
  );
};

export default CardPlanner;
