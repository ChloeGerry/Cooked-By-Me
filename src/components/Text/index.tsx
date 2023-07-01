import { TextTitle, TextWrapper, TextParagraph } from './text.style';

interface Props {
  title?: string;
  text?: string;
}

const Text = ({ title, text }: Props) => {
  return (
    <TextWrapper>
      <TextTitle>{title}</TextTitle>
      <TextParagraph>{text}</TextParagraph>
    </TextWrapper>
  );
};

export default Text;
