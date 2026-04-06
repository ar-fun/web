const BookCard = ({ book }) => {
  const info = book.volumeInfo;
  return (
    <div className="book-card">
      <img src={info.imageLinks?.thumbnail || 'https://via.placeholder.com/128x192'} alt={info.title} />
      <h3>{info.title}</h3>
      <p><strong>Author:</strong> {info.authors?.join(', ') || 'Unknown'}</p>
      <p><strong>Publisher:</strong> {info.publisher || 'N/A'}</p>
      <p><strong>Year:</strong> {info.publishedDate?.substring(0, 4) || 'N/A'}</p>
    </div>
  );
};
export default BookCard; // Ensure this line is present