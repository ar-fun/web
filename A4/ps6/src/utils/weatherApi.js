const API_KEY = '7322afa2525421141a07e72a29dcc02f'; // Replace with your key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (city) => {
  const response = await fetch(`${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`);
  if (!response.ok) throw new Error('City not found');
  return await response.json();
};