import { useState } from 'react';
import type { ILink } from './interfaces';
import './App.css';
import Header from './components/Header';
import LinkList from './components/LinkList';
import AddLinkForm from './components/AddLinkForm';
import SearchBar from './components/SearchBar';
import LoginPage from './pages/LoginPage';


function App() {
  const [links, setLinks] = useState<ILink[]>([]); // merkezi links state'i

  function handleAddLink(newLink: ILink) {
    setLinks([newLink, ...links]);
  }

  function handleDeleteLink(id: string | number) {
    setLinks(links.filter(function(link) {
      return link.id !== id;
    }));
  }

  return (
    <div className="container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'linear-gradient(135deg, #f7f9fb 60%, #e3f0ff 100%)' }}>
      <Header />
      <LoginPage />
    </div>
  );
}

export default App;
