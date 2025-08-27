import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import LinkList from './components/LinkList'
import AddLinkForm from './components/AddLinkForm'
import SearchBar from './components/SearchBar'


type Link = {
  id: string | number;
};

function App() {
  const [links, setLinks] = useState<Link[]>([]); // merkezi links state'i

  function handleAddLink(newLink: Link) {
    setLinks([newLink, ...links]);
  }

  function handleDeleteLink(id:any) {
    setLinks(links.filter(function(link) {
      return link.id !== id;
    }));
  }

  return (
    <div className="container">
    <Header />
    <main>
      <SearchBar />
      <AddLinkForm onAddLink={handleAddLink} />
      <LinkList links={links} onDeleteLink={handleDeleteLink} />

    </main>
  </div>
  );
}

export default App
