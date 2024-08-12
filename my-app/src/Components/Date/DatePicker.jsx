import React, { useEffect } from 'react';
import  { useContext } from 'react';
import { AppContext } from '../AppContext/AppContext';
import { Label } from '@fluentui/react/lib/Label';
import { Stack } from '@fluentui/react/lib/Stack';
import { DatePicker } from '@fluentui/react/lib/DatePicker';

const Datepicker = () => {
 
  const { formData, updateFormData } = useContext(AppContext);
  const { startDate,endDate } = formData;

  const handleInputChange = (fieldName, value) => {
    updateFormData(fieldName, value); // Update context here
  };
  
  // Function to get today's date 
  const getToday = () => {
    const today = new Date();
    return today;
  };

  // Effect to set today's date when component mounts
  useEffect(() => {
    const todayDate = getToday();
    handleInputChange('startDate',todayDate);
    handleInputChange('endDate',todayDate);
  }, []); 

  const handleStartDateChange = (date) => {
   
    handleInputChange('startDate',date);
    
    // Handle null case if date is cleared
    if (endDate && date && date > endDate) {
      handleInputChange('endDate',null);
    }
  }

  const handleEndDateChange = (date) => {
    
    handleInputChange('endDate',date);
    
    
    // // Handle null case if date is cleared
    if (startDate && date && date < startDate) {
      handleInputChange('startDate',null);
    }
  }

  return (
    <div>
      <Stack horizontal tokens={{ childrenGap: 10 }}>
        <Label>Start Date:</Label>
        <DatePicker
          value={startDate}
          onSelectDate={handleStartDateChange}
          placeholder="Select start date"
          formatDate={(date) => date.toLocaleDateString()}
          styles={{ root: { marginRight: 10 } }}
        />
        <Label>End Date:</Label>
        <DatePicker
          value={endDate}
          onSelectDate={handleEndDateChange}
          placeholder="Select end date"
          formatDate={(date) => date.toLocaleDateString()}
          styles={{ root: { marginRight: 10 } }}
        />
      </Stack>
    </div>
  );
};

export default Datepicker;
