import { LinkStyled } from './buttonLink.style';

interface Props {
  path: string;
  text: string;
}

const ButtonLink = ({ path, text }: Props) => {
  return <LinkStyled to={path}>{text}</LinkStyled>;
};

export default ButtonLink;
