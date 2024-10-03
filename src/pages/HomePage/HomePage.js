import React, { useState } from 'react';
import BookList from '../../components/BookList/BookList';
import SearchBar from '../../components/SearchBar/SearchBar';
import bookData from '../../services/bookData';
import './HomePage.css';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = bookData.books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      <h1>Virtual Book Library</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <BookList books={filteredBooks} />
    </div>
  );
};

export default HomePage;
