
import React, { useContext } from 'react';
import Datepicker from '../Date/DatePicker'; 
import Formdata from '../WebTest/WebTest'; 
import Accordion from '../Accordion/Accordion'; 
import { AppContext } from '../AppContext/AppContext';
import apiEndpoints from '../ApiService/ApiService'; // Import your apiEndpoints
import {
  BladeLeft,
  SettingTitle,
  Heading,
  BladeRight,
  AccordionContainer,
  Button,
  StyledButtonSave,
  StyledButtonCancel,
  BladeContainer,
  DateInfo,
} from '../Blade/TestBladeStyle'; // Assuming necessary styled components are imported here

const Blade = ({ dismissPanel }) => {
  const { formData, updateFormData } = useContext(AppContext);


  const handleCancel = () => {
    dismissPanel();
  };



  const handleSave = async () => {
    try {
      
      const formDataToSend = {
        ...formData,
        startDate: formData.startDate.toISOString(),
        endDate: formData.endDate.toISOString()
      };
      const formDataJSON = JSON.stringify(formData);
      // Call addFormData function from apiEndpoints to save data
      await apiEndpoints.addFormData(formDataJSON);
      
      console.log('Form data saved successfully:', formDataJSON);
      
      
    } catch (error) {
      console.error('Failed to save form data:', error);
      
    }
  };
  

  

  // Handler for form data change
  const handleInputChange = (fieldName, value) => {
    updateFormData(fieldName, value); // Update context here
  };

  // Handler for date range selection
  const handleDateRangeSelect = (start, end) => {
    updateFormData('startDate', start); // Update startDate
    updateFormData('endDate', end);     // Update endDate
  };

  return (
    <>
      <Heading>Web Test Properties</Heading>

      <BladeContainer>
        <BladeLeft>
          <SettingTitle>Settings</SettingTitle>
        </BladeLeft>

        <BladeRight>
          <Accordion title="Web Test">
            <AccordionContainer>
              <Formdata
                defaultName={formData.name}
                defaultDescription={formData.description}
                defaultMonitor={formData.monitor}
                defaultTestUrl={formData.testUrl}
                defaultRequest={formData.requestType}
                defaultIsActive={formData.isActive}
                onInputChange={handleInputChange}
              />
            </AccordionContainer>
          </Accordion>
          <Accordion title="More settings">
            <AccordionContainer>
            <Datepicker onDateRangeSelect={handleInputChange} />
            </AccordionContainer>
          </Accordion>
        </BladeRight>
      </BladeContainer>

      <Button>
        <StyledButtonSave text="Save" onClick={handleSave} />
        <StyledButtonCancel text="Cancel" onClick={handleCancel} />
      </Button>

      {formData.startDate && formData.endDate && (
        <DateInfo>
          Selected Date Range: {formData.startDate.toLocaleDateString()} - {formData.endDate.toLocaleDateString()}
        </DateInfo>
      )}
    </>
  );
};

export default Blade;
