import React, { useState } from 'react';
import { Box } from '@mui/material';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import AddLinkForm from '../components/AddLinkForm';
import LinkList from '../components/LinkList';
import Footer from '../components/Footer';
import type { ILink } from '../interfaces';

const mockLinks: ILink[] = [
  { id: 1, title: 'Material-UI', url: 'https://mui.com', description: 'React UI framework', tags: 'ui,design,react' },
  { id: 2, title: 'React Documentation', url: 'https://react.dev', description: 'Official React docs', tags: 'react,docs' },
  { id: 3, title: 'Vite', url: 'https://vitejs.dev', description: 'Next generation frontend tooling', tags: 'vite,build' },
  { id: 4, title: 'TypeScript', url: 'https://typescriptlang.org', description: 'JavaScript with syntax for types', tags: 'typescript,js' },
  { id: 5, title: 'GitHub', url: 'https://github.com', description: 'Where the world builds software', tags: 'git,code' },
  { id: 6, title: 'Stack Overflow', url: 'https://stackoverflow.com', description: 'Developer community', tags: 'community,help' }
];

const HomePage = () => {
  const [links, setLinks] = useState<ILink[]>(mockLinks);

  const handleAddLink = (newLink: ILink) => {
    setLinks([newLink, ...links]);
  };

  const handleDeleteLink = (id: string | number) => {
    setLinks(links.filter(link => link.id !== id));
  };

  return (
    <>
      <Header />
      <Box sx={{ 
        background: '#ffffff',
        minHeight: 'calc(100vh - 70px)',
        py: 1,
        pt: '90px',
        px: { xs: 2, md: 4 }
      }}>
        <Box sx={{ 
          maxWidth: '1200px',
          mx: 'auto',
          p: { xs: 2, md: 4 }
        }}>
          {/* Search Bar - Merkezi konumlandırma */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            mb: 4 
          }}>
            <SearchBar />
          </Box>
          
          {/* Add Link Form - Merkezi konumlandırma */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            mb: 6 
          }}>
            <AddLinkForm onAddLink={handleAddLink} />
          </Box>
          
          {/* Link List - Tam genişlik */}
          <LinkList links={links} onDeleteLink={handleDeleteLink} />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default HomePage;
