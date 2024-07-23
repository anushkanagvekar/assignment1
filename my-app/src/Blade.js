import React, { useState } from 'react';
import Datepicker from './Datepicker'; 
import Formdata from './FormData'; 
import Accordion from './Accordion'; 
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
} from './StyleComponents.js/BladeStyle'; // Assuming necessary styled components are imported here

const Blade = ({ dismissPanel }) => {
  // State for form data including dates
  const [formData, setFormData] = useState({
    name: 'Catchpoint web test',
    description: 'This is web test',
    monitor: 'Object',
    testUrl: 'www.example.com',
    request: 'GET',
    isActive: true,
    startDate: null,
    endDate: null,
  });

  // Handler for cancel button
  const handleCancel = () => {
    dismissPanel();
  };

  // Handler for save button
  const handleSave = () => {
    console.log('Complete Form Data:', formData);

    
  };

  // Handler for form data change
  const handleInputChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  // Handler for date range selection
  const handleDateRangeSelect = (start, end) => {
    setFormData({
      ...formData,
      startDate: start,
      endDate: end,
    });
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
                defaultRequest={formData.request}
                defaultIsActive={formData.isActive}
                onInputChange={handleInputChange}
              />
            </AccordionContainer>
          </Accordion>
          <Accordion title="More settings">
            <AccordionContainer>
              <Datepicker onDateRangeSelect={handleDateRangeSelect} />
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
