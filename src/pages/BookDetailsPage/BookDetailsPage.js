import { useParams, useNavigate } from 'react-router-dom';
import { useLibrary } from '../../context/LibraryContext';
import bookData from '../../services/bookData';
import './BookDetailsPage.css';

const BookDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Use navigate to redirect
  const { addToLibrary } = useLibrary();
  const book = bookData.books.find((book) => book.id === parseInt(id));

  const handleAddToLibrary = () => {
    addToLibrary(book);
    alert(`${book.title} has been added to your library!`); // Alert to show confirmation
    navigate('/mylibrary'); // Redirect to My Library page
  };

  return (
    <div className="book-details">
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <p><strong>Publication Year:</strong> {book.publication_year}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <button onClick={handleAddToLibrary}>Add to My Library</button>
    </div>
  );
};

export default BookDetailsPage;
