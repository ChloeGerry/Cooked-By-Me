import { TemplateStyled } from './template.style';

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
      <h2>Semaine 1</h2>
      {days.map((day) => (
        <div key={day}>
          <h3>{day}</h3>
          <h4>Déjeuner</h4>
          <h4>Dîner</h4>
        </div>
      ))}
    </TemplateStyled>
  );
};

export default Template;
