
import './App.css';
import LoginPage from './pages/LoginPage';
import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';

import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LinksPage from './pages/LinksPage';

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/links" element={<LinksPage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
