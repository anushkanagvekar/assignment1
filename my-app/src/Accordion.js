import React, { useState } from 'react';
import { ToggleIcon, AccordionHeader, AccordionBody, AccordionCon } from './StyleComponents.js/AccordionStyle';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionCon>
      <AccordionHeader onClick={toggleAccordion}>
        <span>{title}</span>
        <ToggleIcon>{isOpen ? '^' : 'v'}</ToggleIcon>
      </AccordionHeader>
      {isOpen && <AccordionBody>{children}</AccordionBody>}
    </AccordionCon>
  );
};

export default Accordion;
