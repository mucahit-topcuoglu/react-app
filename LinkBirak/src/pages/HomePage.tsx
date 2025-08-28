import React from 'react'
import { useState } from 'react';
import type { ILink } from '../interfaces';
import Header from '../components/Header';
import LinkList from '../components/LinkList'; 
import AddLinkForm from '../components/AddLinkForm';
import SearchBar from '../components/SearchBar';

function HomePage() {
  const [links, setLinks] = useState<ILink[]>([]);

  function handleAddLink(newLink: ILink) {
    setLinks([newLink, ...links]);
  }

  function handleDeleteLink(id: string | number) {
    setLinks(links.filter(link => link.id !== id));
  }

  return (
    <div className="container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'linear-gradient(135deg, #f7f9fb 60%, #e3f0ff 100%)' }}>
      <Header />
      <SearchBar />
      <AddLinkForm onAddLink={handleAddLink} />
      <LinkList links={links} onDeleteLink={handleDeleteLink} />
    </div>
  );
}


export default HomePage
