import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const getRandomQuote = async () => {
  try {
    const { data } = await axios.get(`${API_URL}?_limit=100`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
