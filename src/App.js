import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import BookDetailsPage from './pages/BookDetailsPage/BookDetailsPage';
import MyLibraryPage from './pages/MyLibraryPage/MyLibraryPage';
import { LibraryProvider } from './context/LibraryContext';
import './App.css';

function App() {
  return (
    <LibraryProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book/:id" element={<BookDetailsPage />} />
            <Route path="/mylibrary" element={<MyLibraryPage />} />
          </Routes>
        </div>
      </Router>
    </LibraryProvider>
  );
}

export default App;
