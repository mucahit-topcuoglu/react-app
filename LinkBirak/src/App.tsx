
import './App.css';
import LoginPage from './pages/LoginPage';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';


function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
