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
}

const Template = ({ children }: Props) => {
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
      <TemplateTitle>Semaine 1</TemplateTitle>
      <TemplateWraper>
        {days.map((day) => (
          <TemplateCard key={day}>
            <h3>{day}</h3>
            <TemplateRecipeWrapper>
              <TemplateSubtitle>Déjeuner :</TemplateSubtitle>
              {children}
            </TemplateRecipeWrapper>
            <TemplateRecipeWrapper hideBorder={true}>
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
