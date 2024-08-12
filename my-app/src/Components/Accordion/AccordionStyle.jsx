
import styled from 'styled-components';

export const AccordionCon = styled.div`
  border: 1px solid #ccc;
  background-color: white;
  margin-bottom: 10px;
`;

export const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  color: #333;
  font-size: 15px;
  padding: 10px 5px;
  cursor: pointer;
  background-color: white;
  border: 1px solid #ccc;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const ToggleIcon = styled.span`
  font-size: 1.2rem;
  margin-right: 5px; /* Adjust this value to control the space */
`;

export const AccordionBody = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  background-color: white;
`;