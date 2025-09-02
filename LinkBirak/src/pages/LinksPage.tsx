import React, { useState, useEffect } from 'react';
import { 
  Typography, 
  Box, 
  Container, 
  Card, 
  Avatar, 
  Chip,
  Alert,
  Snackbar
} from '@mui/material';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import LinkList from '../components/LinkList';
import Footer from '../components/Footer';
import { LinkService } from '../services/linkService';
import type { ILink } from '../interfaces';

// İkonlar
import LinkIcon from '@mui/icons-material/Link';
import SearchIcon from '@mui/icons-material/Search';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const LinksPage = () => {
  const [links, setLinks] = useState<ILink[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadLinks();
  }, []);

  const loadLinks = async () => {
    try {
      setLoading(true);
      const fetchedLinks = await LinkService.getLinks();
      setLinks(fetchedLinks);
    } catch (err) {
      setError('Linkler yüklenirken bir hata oluştu');
      console.error('Error loading links:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleTagSelect = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
  };

  // Filtreleme: Önce etiket filtresi, sonra arama filtresi
  const filteredLinks = links
    .filter(link => {
      // Etiket filtresi - şimdilik kaldırıldı
      return true;
    })
    .filter(link => {
      // Arama filtresi
      if (searchTerm) {
        return link.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
               link.description.toLowerCase().includes(searchTerm.toLowerCase());
      }
      return true;
    });

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
        <Container maxWidth="lg" sx={{ py: 4 }}>
          {/* Başlık */}
          <Box sx={{ 
            textAlign: 'center', 
            mb: 6 
          }} className="slide-up">
            <Typography variant="h2" sx={{ 
              fontWeight: 700, 
              color: 'var(--gray-900)',
              mb: 2
            }}>
              Tüm Linkler
            </Typography>
            <Typography variant="h6" sx={{ 
              color: 'var(--gray-600)',
              maxWidth: 600,
              mx: 'auto'
            }}>
              Kullanıcıların paylaştığı değerli linkleri keşfedin ve kendi koleksiyonunuzu oluşturun.
            </Typography>
          </Box>

          {/* İstatistikler */}
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 3, 
            mb: 6 
          }} className="slide-up">
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
                color: 'var(--accent-600)'
              }}>
                <LinkIcon />
              </Avatar>
              <Typography variant="h3" sx={{ 
                fontWeight: 700, 
                color: 'var(--accent-600)',
                mb: 1
              }}>
                {links.length}
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
                0
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
                {links.length > 0 ? '100%' : '0%'}
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
            <SearchBar 
              value={searchTerm}
              onSearchChange={handleSearchChange}
            />
          </Box>

          {/* Link Listesi */}
          {loading ? (
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              minHeight: '200px' 
            }}>
              <Typography>Yükleniyor...</Typography>
            </Box>
          ) : (
            <LinkList 
              links={filteredLinks} 
              onDeleteLink={() => {}}
              onTagSelect={() => {}}
            />
          )}
        </Container>
      </Box>
      <Footer />

      {/* Error Snackbar */}
      <Snackbar 
        open={!!error} 
        autoHideDuration={6000} 
        onClose={() => setError(null)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => setError(null)} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </>
  );
};

export default LinksPage; 