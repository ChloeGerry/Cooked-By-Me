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

export const DAYS = [
  'Lundi',
  'Mardi',
  'Mercredi',
  'Jeudi',
  'Vendredi',
  'Samedi',
  'Dimanche',
];

const Template = ({ children }: Props) => {
  return (
    <TemplateStyled>
      <TemplateTitle>Semaine 1</TemplateTitle>
      <TemplateWraper>
        {DAYS.map((day) => (
          <TemplateCard key={day}>
            <h3 className="current-day">{day}</h3>
            <TemplateRecipeWrapper>
              <TemplateSubtitle>Déjeuner :</TemplateSubtitle>
              {children}
            </TemplateRecipeWrapper>
            <TemplateRecipeWrapper $hideBorder={true}>
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
