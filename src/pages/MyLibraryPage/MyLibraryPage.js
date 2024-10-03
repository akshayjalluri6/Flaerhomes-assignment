import React from 'react';
import { useLibrary } from '../../context/LibraryContext';
import './MyLibraryPage.css';

const MyLibraryPage = () => {
  const { libraryBooks, removeFromLibrary } = useLibrary();

  return (
    <div className="my-library-page">
      <h1>My Library</h1>
      {libraryBooks.length === 0 ? (
        <p>Your library is empty.</p>
      ) : (
        <div className="book-list">
          {libraryBooks.map((book) => (
            <div key={book.id} className="book-card">
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <button onClick={() => removeFromLibrary(book.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyLibraryPage;
