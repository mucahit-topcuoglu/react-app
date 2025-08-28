
import { useState } from 'react';
import type { ILink } from './interfaces';
import './App.css';
import Header from './components/Header';
import LinkList from './components/LinkList';
import AddLinkForm from './components/AddLinkForm';
import SearchBar from './components/SearchBar';
import LoginPage from './pages/LoginPage';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';


function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
