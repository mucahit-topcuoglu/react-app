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
    <div style={{ minHeight: '100vh', width: '100vw', background: 'linear-gradient(135deg, #e3f0ff 0%, #f7f9fb 100%)', position: 'relative' }}>
      <Header />
      <main
        style={{
          minHeight: 'calc(100vh - 64px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 64,
          paddingBottom: 32,
        }}
      >
        <div style={{ width: '100%', maxWidth: 600, margin: '0 auto' }}>
          <SearchBar />
        </div>
        <div style={{ width: '100%', maxWidth: 600, margin: '32px auto 0 auto' }}>
          <AddLinkForm onAddLink={handleAddLink} />
        </div>
        <div style={{ width: '100%', maxWidth: 1100, margin: '32px auto 0 auto' }}>
          <LinkList links={links} onDeleteLink={handleDeleteLink} />
        </div>
      </main>
    </div>
  );
}


export default HomePage
