import { RatingsStyled, Stars } from './ratings.style';

interface Props {
  rate: number;
}

const Rating = ({ rate }: Props) => {
  const ratings: Array<number> = Array(5).fill(null);
  ratings.forEach((__, index) => {
    ratings[index] = index + 1;
  });

  return (
    <RatingsStyled>
      {ratings.map((arrayRate: number, index: number) => {
        return arrayRate <= rate ? (
          <Stars
            className="fa-solid fa-star"
            key={index}
            color="#5f764f"
          ></Stars>
        ) : (
          <Stars className="fa-solid fa-star" key={index}></Stars>
        );
      })}
    </RatingsStyled>
  );
};

export default Rating;
