import React, { createContext, useState, useContext } from 'react';

// Create the Library Context
const LibraryContext = createContext();

// Custom hook to use the context
export const useLibrary = () => useContext(LibraryContext);

// Provider component to wrap the app and manage the global state
export const LibraryProvider = ({ children }) => {
  const [libraryBooks, setLibraryBooks] = useState([]);

  const addToLibrary = (book) => {
    if (!libraryBooks.some(b => b.id === book.id)) {
      setLibraryBooks([...libraryBooks, book]);
    }
  };

  const removeFromLibrary = (id) => {
    setLibraryBooks(libraryBooks.filter(book => book.id !== id));
  };

  return (
    <LibraryContext.Provider value={{ libraryBooks, addToLibrary, removeFromLibrary }}>
      {children}
    </LibraryContext.Provider>
  );
};
