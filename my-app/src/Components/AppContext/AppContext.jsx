import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const getToday = () => {
    const today = new Date();
    return today;
  };


  const initialFormData = {
    
    name: 'Catchpoint web test',
    description: 'This is web test',
    monitor: 'Object',
    testUrl: 'www.xyz.com',
    requestType: 'GET',
    isActive: true,
    startDate: getToday(),
    endDate: getToday(),
  };

  const [formData, setFormData] = useState(initialFormData);

  const updateFormData = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  return (
    <AppContext.Provider value={{ formData, updateFormData }}>
      {children}
    </AppContext.Provider>
  );
};
