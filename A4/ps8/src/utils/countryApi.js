export const fetchCountries = async (name) => {
  if (!name) return [];
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  if (!response.ok) return [];
  return await response.json();
};