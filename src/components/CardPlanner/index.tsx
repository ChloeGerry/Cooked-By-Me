import {
  CardPlannerImage,
  CardPlannerWrapper,
  LinkStyled,
  CardPlannerTitle,
  CardPlannerIconWrapper,
  CardPlannerIcon,
} from './cardPlanner.style';

interface Props {
  title: string;
  image: string;
  id: number;
  onClick: () => void;
}

const CardPlanner = ({ title, image, id, onClick }: Props) => {
  return (
    <CardPlannerWrapper>
      <LinkStyled to={`/recipe/${id}/${title}`}>
        <CardPlannerTitle>{title}</CardPlannerTitle>
        <CardPlannerImage src={image} alt="Recette" />
      </LinkStyled>
      <CardPlannerIconWrapper>
        <CardPlannerIcon
          onClick={onClick}
          className="fa-regular fa-trash-can"
        ></CardPlannerIcon>
      </CardPlannerIconWrapper>
    </CardPlannerWrapper>
  );
};

export default CardPlanner;
