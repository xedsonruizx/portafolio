import React from 'react';

const ROLES = {
  es: [
    'Desarrollador Full Stack',
    'Administrador Salesforce',
    'Desarrollador Frontend',
    'QA Manual',
    'Desarrollador Backend',
  ],
  en: [
    'Full Stack Developer',
    'Salesforce Administrator',
    'Frontend Developer',
    'QA Manual',
    'Backend Developer',
  ],
};

const TYPING_SPEED  = 70;   // ms por carácter al escribir
const DELETE_SPEED  = 32;   // ms por carácter al borrar
const PAUSE_AFTER   = 2200; // ms de pausa cuando termina de escribir
const PAUSE_BEFORE  = 280;  // ms de pausa antes de empezar a escribir el siguiente

export default function TypingText({ lang }) {
  const roles = ROLES[lang] || ROLES.en;

  const [displayed, setDisplayed] = React.useState('');
  const [roleIdx,   setRoleIdx]   = React.useState(0);
  const [phase,     setPhase]     = React.useState('typing'); // typing | pausing | deleting | waiting

  React.useEffect(() => {
    const current = roles[roleIdx];
    let id;

    switch (phase) {
      case 'typing':
        if (displayed.length < current.length) {
          id = setTimeout(
            () => setDisplayed(current.slice(0, displayed.length + 1)),
            TYPING_SPEED
          );
        } else {
          id = setTimeout(() => setPhase('pausing'), PAUSE_AFTER);
        }
        break;

      case 'pausing':
        id = setTimeout(() => setPhase('deleting'), 0);
        break;

      case 'deleting':
        if (displayed.length > 0) {
          id = setTimeout(
            () => setDisplayed(displayed.slice(0, -1)),
            DELETE_SPEED
          );
        } else {
          id = setTimeout(() => {
            setRoleIdx((i) => (i + 1) % roles.length);
            setPhase('typing');
          }, PAUSE_BEFORE);
        }
        break;

      default:
        break;
    }

    return () => clearTimeout(id);
  }, [displayed, phase, roleIdx, roles]);

  // Reset when language changes
  React.useEffect(() => {
    setDisplayed('');
    setRoleIdx(0);
    setPhase('typing');
  }, [lang]);

  return (
    <span className="typingText" aria-live="polite" aria-label={roles[roleIdx]}>
      {displayed}
      <span className="typingCursor" aria-hidden="true" />
    </span>
  );
}
