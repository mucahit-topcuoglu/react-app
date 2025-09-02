import { useState, useEffect } from 'react';
import { Container, Box, Typography, Alert, Snackbar } from '@mui/material';
import AddLinkForm from '../components/AddLinkForm';
import LinkList from '../components/LinkList';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import { useUser } from '../contexts/UserContext';
import { LinkService } from '../services/linkService';
import type { ILink, CreateLinkData } from '../interfaces';

const HomePage = () => {
  const { user } = useUser();
  const [links, setLinks] = useState<ILink[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const loadLinks = async () => {
    if (!user) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const fetchedLinks = await LinkService.getLinks();
      setLinks(fetchedLinks);
    } catch (err) {
      console.error("Failed to fetch links:", err);
      setError("Linkler yüklenirken bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLinks();
  }, [user]);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleAddLink = async (linkData: CreateLinkData) => {
    try {
      const newLink = await LinkService.createLink(linkData);
      setLinks(prevLinks => [newLink, ...prevLinks]);
      setSuccessMessage("Link başarıyla eklendi!");
    } catch (err: any) {
      console.error("Error adding link:", err);
      setError(`Link eklenirken bir hata oluştu: ${err.message || 'Bilinmeyen hata'}`);
    }
  };

  // Link silme fonksiyonu
  const handleDeleteLink = async (id: string | number) => {
    try {
      await LinkService.deleteLink(Number(id));
      setLinks(prevLinks => prevLinks.filter(link => link.id !== Number(id)));
      setSuccessMessage("Link başarıyla silindi!");
    } catch (err: any) {
      console.error("Error deleting link:", err);
      setError(`Link silinirken bir hata oluştu: ${err.message || 'Bilinmeyen hata'}`);
    }
  };

  const filteredLinks = links.filter(link => {
    if (searchTerm) {
      return link.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
             link.description.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return true;
  });

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Container maxWidth="lg" sx={{ flexGrow: 1, py: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, color: 'var(--gray-900)' }}>
          Link Ekle
        </Typography>
        <Box sx={{ mb: 6 }} className="slide-up">
          <AddLinkForm onAddLink={handleAddLink} />
        </Box>

        <Box sx={{ mb: 6 }} className="slide-up">
          <SearchBar
            value={searchTerm}
            onSearchChange={handleSearchChange}
          />
        </Box>

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
            onDeleteLink={handleDeleteLink}
            onTagSelect={() => {}}
          />
        )}
      </Container>
      <Footer />

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

      <Snackbar
        open={!!successMessage}
        autoHideDuration={3000}
        onClose={() => setSuccessMessage(null)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => setSuccessMessage(null)} severity="success" sx={{ width: '100%' }}>
          {successMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default HomePage;
