import { useState } from 'react';
import type { ILink } from '../interfaces';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import LinkIcon from '@mui/icons-material/Link';
import TitleIcon from '@mui/icons-material/Title';
import DescriptionIcon from '@mui/icons-material/Description';
import TagIcon from '@mui/icons-material/Tag';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

interface AddLinkFormProps {
  onAddLink: (link: ILink) => void;
}

const AddLinkForm = (props: AddLinkFormProps) => {
  const [formData, setFormData] = useState<Omit<ILink, 'id'>>({
    url: '',
    title: '',
    description: '',
    tags: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (props.onAddLink) {
      props.onAddLink({ ...formData, id: Date.now() });
    }
    setFormData({ url: '', title: '', description: '', tags: '' });
  }

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4, mb: 2 }}>
      <Card sx={{
        width: { xs: '95%', sm: 370, md: 370 },
        maxWidth: 420,
        minWidth: 320,
        borderRadius: 5,
        boxShadow: '0 8px 32px 0 rgba(25, 118, 210, 0.18), 0 2px 8px 0 rgba(66, 165, 245, 0.10)',
        p: 1,
        mx: 'auto',
        bgcolor: '#fff',
        border: 'none',
        transition: 'box-shadow 0.3s',
        '&:hover': { boxShadow: '0 12px 36px 0 rgba(25, 118, 210, 0.22), 0 4px 16px 0 rgba(66, 165, 245, 0.12)' }
      }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
            <AddCircleOutlineIcon sx={{ color: '#1976d2', fontSize: 32, mr: 1 }} />
            <Typography variant="h5" sx={{ fontWeight: 700, color: '#1976d2', textAlign: 'center', letterSpacing: 1 }}>
              Link Ekle
            </Typography>
          </Box>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="URL"
              variant="outlined"
              name="url"
              value={formData.url}
              onChange={handleChange}
              required
              autoFocus
              sx={{ background: '#f5faff' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LinkIcon color="primary" />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              label="Başlık"
              variant="outlined"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              sx={{ background: '#f5faff' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <TitleIcon color="primary" />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              label="Açıklama"
              variant="outlined"
              name="description"
              value={formData.description}
              onChange={handleChange}
              multiline
              minRows={2}
              sx={{ background: '#f5faff' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <DescriptionIcon color="primary" />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              label="Etiketler (virgülle ayırın)"
              variant="outlined"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              sx={{ background: '#f5faff' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <TagIcon color="primary" />
                  </InputAdornment>
                )
              }}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                borderRadius: 2,
                fontWeight: 700,
                fontSize: '1.08rem',
                mt: 1,
                bgcolor: 'linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)',
                background: 'linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)',
                color: '#fff',
                boxShadow: '0 2px 8px 0 rgba(66, 165, 245, 0.18)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  bgcolor: 'linear-gradient(90deg, #125ea2 0%, #1976d2 100%)',
                  background: 'linear-gradient(90deg, #125ea2 0%, #1976d2 100%)',
                  transform: 'scale(1.04)',
                  boxShadow: '0 4px 16px 0 rgba(66, 165, 245, 0.22)'
                }
              }}
              endIcon={<AddCircleOutlineIcon />}
            >
              Kaydet
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AddLinkForm;
