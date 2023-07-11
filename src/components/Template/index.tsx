import {
  TemplateStyled,
  TemplateTitle,
  TemplateWraper,
  TemplateCard,
  TemplateRecipeWrapper,
  TemplateSubtitle,
} from './template.style';

interface Props {
  children: React.ReactNode;
  allDays?: Array<string>;
}

const Template = ({ children, allDays }: Props) => {
  const days = [
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
    'Dimanche',
  ];

  return (
    <TemplateStyled>
      {allDays === days}
      <TemplateTitle>Semaine 1</TemplateTitle>
      <TemplateWraper>
        {days.map((day) => (
          <TemplateCard key={day}>
            <h3>{day}</h3>
            <TemplateRecipeWrapper>
              <TemplateSubtitle>Déjeuner :</TemplateSubtitle>
              {children}
            </TemplateRecipeWrapper>
            <TemplateRecipeWrapper $hideBorder={false}>
              <TemplateSubtitle>Dîner :</TemplateSubtitle>
              {children}
            </TemplateRecipeWrapper>
          </TemplateCard>
        ))}
      </TemplateWraper>
    </TemplateStyled>
  );
};

export default Template;
