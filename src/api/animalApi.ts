import axios from 'axios';

const API_URL = 'https://example.com/api/animals'; // Replace with your API endpoint

export const fetchAnimals = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
