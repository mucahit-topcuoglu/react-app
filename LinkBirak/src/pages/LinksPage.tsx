import React from 'react';
import { Typography, Box, Card, CardContent, Avatar, Chip } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import SearchIcon from '@mui/icons-material/Search';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
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

const LinksPage = () => {
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
          <Box sx={{ textAlign: 'center', mb: 6 }} className="fade-in">
            <Typography variant="h3" sx={{ 
              fontWeight: 600, 
              mb: 2,
              color: 'var(--accent-700)'
            }}>
              Tüm Linkler
            </Typography>
            <Typography variant="h6" sx={{ 
              color: 'var(--gray-600)', 
              fontWeight: 400, 
              mb: 4,
              maxWidth: '600px',
              mx: 'auto'
            }}>
              Bağlantılarınızı Keşfedin ve Yönetin
            </Typography>
          </Box>

          {/* İstatistikler */}
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 3,
            mb: 6 
          }} className="fade-in">
            <Card sx={{ 
              p: 4,
              textAlign: 'center',
              background: '#ffffff',
              border: '1px solid var(--gray-200)',
              borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--shadow-md)',
              transition: 'all var(--transition-normal)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: 'var(--shadow-lg)',
              }
            }}>
              <Avatar sx={{ 
                width: 60, 
                height: 60, 
                mx: 'auto', 
                mb: 3,
                bgcolor: 'var(--accent-100)',
                color: 'var(--accent-700)'
              }}>
                <LinkIcon />
              </Avatar>
              <Typography variant="h3" sx={{ 
                fontWeight: 700, 
                color: 'var(--accent-600)',
                mb: 1
              }}>
                {mockLinks.length}
              </Typography>
              <Typography variant="body2" sx={{ 
                color: 'var(--gray-600)',
                fontWeight: 500
              }}>
                Toplam Link
              </Typography>
            </Card>
            <Card sx={{ 
              p: 4,
              textAlign: 'center',
              background: '#ffffff',
              border: '1px solid var(--gray-200)',
              borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--shadow-md)',
              transition: 'all var(--transition-normal)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: 'var(--shadow-lg)',
              }
            }}>
              <Avatar sx={{ 
                width: 60, 
                height: 60, 
                mx: 'auto', 
                mb: 3,
                bgcolor: 'var(--success-100)',
                color: 'var(--success-600)'
              }}>
                <SearchIcon />
              </Avatar>
              <Typography variant="h3" sx={{ 
                fontWeight: 700, 
                color: 'var(--success-600)',
                mb: 1
              }}>
                12
              </Typography>
              <Typography variant="body2" sx={{ 
                color: 'var(--gray-600)',
                fontWeight: 500
              }}>
                Kategori
              </Typography>
            </Card>
            <Card sx={{ 
              p: 4,
              textAlign: 'center',
              background: '#ffffff',
              border: '1px solid var(--gray-200)',
              borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--shadow-md)',
              transition: 'all var(--transition-normal)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: 'var(--shadow-lg)',
              }
            }}>
              <Avatar sx={{ 
                width: 60, 
                height: 60, 
                mx: 'auto', 
                mb: 3,
                bgcolor: 'var(--warning-100)',
                color: 'var(--warning-600)'
              }}>
                <TrendingUpIcon />
              </Avatar>
              <Typography variant="h3" sx={{ 
                fontWeight: 700, 
                color: 'var(--warning-600)',
                mb: 1
              }}>
                89%
              </Typography>
              <Typography variant="body2" sx={{ 
                color: 'var(--gray-600)',
                fontWeight: 500
              }}>
                Aktif Linkler
              </Typography>
            </Card>
          </Box>

          {/* Arama ve Link Listesi */}
          <Box sx={{ mb: 6 }} className="slide-up">
            <SearchBar />
          </Box>

          {/* Popüler Kategoriler */}
          <Box sx={{ mb: 6 }} className="fade-in">
            <Typography variant="h5" sx={{ 
              fontWeight: 600, 
              mb: 3, 
              color: 'var(--gray-900)' 
            }}>
              Popüler Kategoriler
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              gap: 2, 
              flexWrap: 'wrap' 
            }}>
              <Chip 
                label="React" 
                sx={{ 
                  bgcolor: 'var(--accent-50)',
                  color: 'var(--accent-700)',
                  border: '1px solid var(--accent-200)',
                  fontWeight: 500
                }} 
                size="medium" 
              />
              <Chip 
                label="UI/UX" 
                sx={{ 
                  bgcolor: 'var(--success-50)',
                  color: 'var(--success-600)',
                  border: '1px solid var(--success-200)',
                  fontWeight: 500
                }} 
                size="medium" 
              />
              <Chip 
                label="Development" 
                sx={{ 
                  bgcolor: 'var(--warning-50)',
                  color: 'var(--warning-600)',
                  border: '1px solid var(--warning-200)',
                  fontWeight: 500
                }} 
                size="medium" 
              />
              <Chip 
                label="Tools" 
                sx={{ 
                  bgcolor: 'var(--accent-50)',
                  color: 'var(--accent-700)',
                  border: '1px solid var(--accent-200)',
                  fontWeight: 500
                }} 
                size="medium" 
              />
              <Chip 
                label="Documentation" 
                sx={{ 
                  bgcolor: 'var(--gray-50)',
                  color: 'var(--gray-700)',
                  border: '1px solid var(--gray-200)',
                  fontWeight: 500
                }} 
                size="medium" 
              />
            </Box>
          </Box>

          <LinkList links={mockLinks} onDeleteLink={() => {}} />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default LinksPage; 