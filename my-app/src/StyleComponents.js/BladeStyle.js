

import styled from 'styled-components';
import { DefaultButton } from '@fluentui/react/lib/Button';

//Blade
export const Button = styled.div`
display: flex;
  
  margin-top: 20px;
`
export const BladeContainer = styled.div`
  display: flex;
  height: 80vh; /* 70% of viewport height */
`;

export const BladeLeft = styled.div`
  flex: 1;
  background-color: #f4f4f4;
  padding: 20px;
  width: 30%;
  border-top: 1px solid #cdcdcd;
  border-right: 1px solid #cdcdcd;
`;

export const BladeRight = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  background-color: #f4f4f4;
  padding: 20px;
  width: 70%;
  border: 1px solid rgb(219, 217, 217);
  box-sizing: border-box;
  padding: 10px;
`;

export const Heading = styled.h3`
  font-size: 14px;
  margin-bottom: 10px;
  margin-top: 0;
`;

export const SettingTitle = styled.h2`
  color: #006ad4;
  font-family: arial, helvetica, sans-serif;
  font-size: 20px;
  font-weight: 700;
  margin-top: 0;
  text-align: left;
`;

export const AccordionContainer = styled.div`
  margin-bottom: 20px;
  box-sizing: border-box;
`;

export const StyledButtonSave = styled(DefaultButton)`
  background: #0805d3;
  color: white;
  margin-right: 10px;
`;

export const StyledButtonCancel = styled(DefaultButton)`
  background-color: #f4f4f4;
  color: #000;
  margin-left: 5px;
`;

export const DateInfoContainer = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
`;

export const DateInfoText = styled.p`
  font-size: 16px;
  color: #333;
  margin: 0;
`;

export const DateInfo = ({ selectedDate }) => {
  const formatDate = (date) => {
    if (!date) return ''; // Handle case where date is undefined or null
    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

return (
    <DateInfoContainer>
      <DateInfoText>Selected Date: {formatDate(selectedDate)}</DateInfoText>
    </DateInfoContainer>
  );
};

export default DateInfo;