

import styled from 'styled-components';


//Accordion one
export const InputBox = styled.div`
display: flex;
align-items: center;
margin-bottom: 5px;

`;

export const InputLabel = styled.label`
min-width: 100px;
margin-right: 20px;

`;

export const InputField = styled.input`
width: 100%;
height: 30px;
border: 1px solid rgb(200, 200, 200);



`;

export const SelectField = styled.select`
width: 100%;
height: 30px;
border: 1px solid rgb(200, 200, 200);
/* border-color: red; */


`;

export const RadioOptions = styled.div`
display: flex;

`;

export const RadioOption = styled.label`
margin-right: 5px;
display: flex;
align-items: center;
`;

// export const RadioInput = styled.input`
// margin: 0px;
// `;
export const RadioInput = styled.input`
    margin: 0;
    cursor: pointer;
    /* Hide default radio button */
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    /* Define custom styles for the radio button */
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid black;
    
    
    /* When checked, change background color */
    &:checked {
      background-color:white;
      border: 1px solid #007bff;
      
    }
    /* Checkmark styles */
    &:checked::after {
      content: '';
      display: block;
      width: 10px;
      height: 10px;
      margin: 5px;
      border-radius: 50%;
      background-color: #007bff;;
      
    }
  `;