import { imagesPath } from '../../pages/Planner';
import { CardPlannerImage, CardPlannerWrapper } from './cardPlanner.style';
import { Link } from 'react-router-dom';
import { RecipeType } from '../../type';

// interface Props {
//   title: string;
//   image: string;
// id: number;
// }

// const CardPlanner = ({ title, image, id }: Props) => {
//   return (
//     <article>
/* <Link to={`/recipe/${id}/${title}}`>
  // <title>{title}</title>
  // <img src={image} alt="Recette" />
</Link>; */
//     </article>
//   );
// };

const CardPlanner = () => {
  return (
    <CardPlannerWrapper>
      <Link to="#">
        <h3>Titre de la recette</h3>
        <CardPlannerImage src={`${imagesPath}/makis.jpg`} alt="Recette" />
      </Link>
    </CardPlannerWrapper>
  );
};

export default CardPlanner;
