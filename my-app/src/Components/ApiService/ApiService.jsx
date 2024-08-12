import axios from 'axios';

const baseURL = 'http://localhost:5195/api';// Adjust base URL according to your ASP.NET Core application configuration

const apiService = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const apiEndpoints = {
  addFormData: async (formData) => { // Pass formData object directly
    try {
      const response = await apiService.post('/Formdata', formData); // No need to stringify here
      return response.data;
    } catch (error) {
      throw new Error(`Failed to add form data: ${error.message}`);
    }
  },
  
    updateFormData: async (formData) => {
      try {
        await apiService.put('/', formData);
      } catch (error) {
        console.error('Error occurred while updating form data:', error);
        throw new Error(`Failed to update form data: ${error.message}`);
      }
    },

};





export default apiEndpoints;





