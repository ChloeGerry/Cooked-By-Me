import {
  TemplateStyled,
  TemplateTitle,
  TemplateWraper,
  TemplateCard,
  TemplateRecipeWrapper,
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
              <h4>Déjeuner :</h4>
              {children}
            </TemplateRecipeWrapper>
            <TemplateRecipeWrapper>
              <h4>Dîner :</h4>
              {children}
            </TemplateRecipeWrapper>
          </TemplateCard>
        ))}
      </TemplateWraper>
    </TemplateStyled>
  );
};

export default Template;
