import { useState } from 'react';
import type { CreateLinkData } from '../interfaces';
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
  onAddLink: (link: CreateLinkData) => void;
}

const AddLinkForm = (props: AddLinkFormProps) => {
  const [formData, setFormData] = useState<CreateLinkData>({
    url: '',
    title: '',
    description: '',
    tags: []
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'tags') {
      // Tag'leri virgülle ayır
      const tagArray = value.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);
      setFormData(prev => ({ ...prev, tags: tagArray }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (props.onAddLink) {
      props.onAddLink(formData);
    }
    setFormData({ url: '', title: '', description: '', tags: [] });
  }

  return (
    <Box sx={{ 
      width: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      mt: 4, 
      mb: 2 
    }}>
      <Card 
        className="add-link-form slide-up"
        sx={{
          width: { xs: '95%', sm: 500, md: 600 },
          maxWidth: 600,
          background: '#ffffff',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-lg)',
          border: '1px solid var(--gray-200)',
          transition: 'all var(--transition-normal)',
          '&:hover': {
            boxShadow: 'var(--shadow-xl)'
          }
        }}
      >
        <CardContent sx={{ padding: 'var(--spacing-8)' }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            mb: 4 
          }}>
            <AddCircleOutlineIcon sx={{ 
              color: 'var(--accent-600)', 
              fontSize: 32, 
              mr: 2
            }} />
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 600, 
                color: 'var(--accent-700)',
                textAlign: 'center',
                letterSpacing: 0.5
              }}
            >
              Link Ekle
            </Typography>
          </Box>
          
          <Box 
            component="form" 
            onSubmit={handleSubmit} 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 3 
            }}
          >
            <TextField
              label="URL"
              variant="outlined"
              name="url"
              value={formData.url}
              onChange={handleChange}
              required
              autoFocus
              sx={{
                '& .MuiOutlinedInput-root': {
                  background: '#ffffff',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--gray-300)',
                  transition: 'all var(--transition-fast)',
                  '&:hover': {
                    borderColor: 'var(--accent-300)'
                  },
                  '&.Mui-focused': {
                    borderColor: 'var(--accent-500)',
                    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
                  }
                },
                '& .MuiInputLabel-root': {
                  color: 'var(--gray-600)',
                  fontWeight: 500
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LinkIcon sx={{ color: 'var(--accent-600)' }} />
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
              sx={{
                '& .MuiOutlinedInput-root': {
                  background: '#ffffff',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--gray-300)',
                  transition: 'all var(--transition-fast)',
                  '&:hover': {
                    borderColor: 'var(--accent-300)'
                  },
                  '&.Mui-focused': {
                    borderColor: 'var(--accent-500)',
                    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
                  }
                },
                '& .MuiInputLabel-root': {
                  color: 'var(--gray-600)',
                  fontWeight: 500
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <TitleIcon sx={{ color: 'var(--accent-600)' }} />
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
              minRows={3}
              sx={{
                '& .MuiOutlinedInput-root': {
                  background: '#ffffff',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--gray-300)',
                  transition: 'all var(--transition-fast)',
                  '&:hover': {
                    borderColor: 'var(--accent-300)'
                  },
                  '&.Mui-focused': {
                    borderColor: 'var(--accent-500)',
                    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
                  }
                },
                '& .MuiInputLabel-root': {
                  color: 'var(--gray-600)',
                  fontWeight: 500
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <DescriptionIcon sx={{ color: 'var(--accent-600)' }} />
                  </InputAdornment>
                )
              }}
            />

            <TextField
              label="Etiketler (virgülle ayırın)"
              variant="outlined"
              name="tags"
              value={formData.tags?.join(', ') || ''}
              onChange={handleChange}
              sx={{
                '& .MuiOutlinedInput-root': {
                  background: '#ffffff',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--gray-300)',
                  transition: 'all var(--transition-fast)',
                  '&:hover': {
                    borderColor: 'var(--accent-300)'
                  },
                  '&.Mui-focused': {
                    borderColor: 'var(--accent-500)',
                    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
                  }
                },
                '& .MuiInputLabel-root': {
                  color: 'var(--gray-600)',
                  fontWeight: 500
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <TagIcon sx={{ color: 'var(--accent-600)' }} />
                  </InputAdornment>
                )
              }}
            />
            
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                borderRadius: 'var(--radius-lg)',
                fontWeight: 600,
                fontSize: 'var(--font-size-lg)',
                mt: 2,
                background: 'var(--accent-600)',
                color: '#fff',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all var(--transition-normal)',
                textTransform: 'none',
                padding: 'var(--spacing-4) var(--spacing-6)',
                '&:hover': {
                  background: 'var(--accent-700)',
                  transform: 'translateY(-1px)',
                  boxShadow: 'var(--shadow-md)'
                },
                '&:active': {
                  transform: 'translateY(0)'
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
