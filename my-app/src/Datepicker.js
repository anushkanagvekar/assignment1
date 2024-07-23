import React, { useState, useEffect } from 'react';
import { Label } from '@fluentui/react/lib/Label';
import { Stack } from '@fluentui/react/lib/Stack';
import { DatePicker } from '@fluentui/react/lib/DatePicker';

const Datepicker = ({ onDateRangeSelect }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Function to get today's date in the correct format
  const getToday = () => {
    const today = new Date();
    return today;
  };

  // Effect to set today's date when component mounts
  useEffect(() => {
    const todayDate = getToday();
    setStartDate(todayDate);
    setEndDate(todayDate);
  }, []); // Run only once on component mount

  const handleStartDateChange = (date) => {
    setStartDate(date || null); // Handle null case if date is cleared
    if (endDate && date && date > endDate) {
      setEndDate(null);
    }
    if (date && endDate) {
      onDateRangeSelect(date, endDate);
    }
  };

  const handleEndDateChange = (date) => {
    setEndDate(date || null); // Handle null case if date is cleared
    if (startDate && date && date < startDate) {
      setStartDate(null);
    }
    if (startDate && date) {
      onDateRangeSelect(startDate, date);
    }
  };

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




