import {
  TemplateStyled,
  TemplateTitle,
  TemplateWraper,
  TemplateCard,
} from './template.style';

interface Props {
  onDrop: (event: React.DragEvent) => void;
  onDragOver: (event: React.DragEvent) => void;
  children: React.ReactNode;
}

const Template = ({ onDrop, onDragOver, children }: Props) => {
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
          <TemplateCard key={day} onDrop={onDrop} onDragOver={onDragOver}>
            <h3>{day}</h3>
            <h4>Déjeuner</h4>
            {children}
            <h4>Dîner</h4>
            {children}
          </TemplateCard>
        ))}
      </TemplateWraper>
    </TemplateStyled>
  );
};

export default Template;
