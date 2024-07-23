import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: 'Catchpoint web test',
    description: 'This is web test',
    monitor: 'Object',
    testUrl: 'www.example.com',
    request: 'GET',
    isActive: true,
  });

  const [selectedDate, setSelectedDate] = useState(new Date());

  const updateFormData = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  return (
    <AppContext.Provider value={{ formData, updateFormData, selectedDate, setSelectedDate }}>
      {children}
    </AppContext.Provider>
  );
};
