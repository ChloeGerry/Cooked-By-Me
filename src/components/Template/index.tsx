import {
  TemplateStyled,
  TemplateTitle,
  TemplateWraper,
  TemplateCard,
} from './template.style';

const Template = () => {
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
            <h4>Déjeuner</h4>
            <h4>Dîner</h4>
          </TemplateCard>
        ))}
      </TemplateWraper>
    </TemplateStyled>
  );
};

export default Template;
