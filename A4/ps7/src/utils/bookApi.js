export const searchBooks = async (query) => {
  if (!query) return [];
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  const data = await response.json();
  return data.items || [];
};