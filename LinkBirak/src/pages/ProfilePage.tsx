import React, { useState } from 'react';
import { 
  Box, 
  Avatar, 
  Paper, 
  TextField, 
  RadioGroup, 
  FormControlLabel, 
  Radio, 
  InputAdornment, 
  IconButton, 
  Button, 
  Tabs, 
  Tab, 
  Typography,
  Container,
  Stack,
  Divider,
  Alert
} from '@mui/material';
import Grid from '@mui/material/Grid';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import Header from '../components/Header';

const ProfilePage = () => {
  const [tab, setTab] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthDate: '',
    idNumber: '',
    gender: 'male'
  });

  const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleSave = () => {
    // Form kaydetme işlemi burada yapılacak
    console.log('Form data:', formData);
  };

  return (
    <>
      <Header />
      <Box 
        sx={{ 
          height: { xs: 'calc(100vh - 56px)', md: 'calc(100vh - 64px)' }, 
          background: '#f5f7fb',
          py: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center' }}>
          <Paper 
            elevation={8} 
            sx={{ 
              borderRadius: 3,
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              width: '100%',
              maxWidth: 1000,
              mx: 'auto',
              height: '100%'
            }}
          >
            <Grid container sx={{ height: '100%' }}>
              {/* Sol Sidebar */}
              <Grid size={{ xs: 12, md: 3 }}>

                <Box 
                  sx={{ 
                    bgcolor: '#f8f9fa',
                    p: 3,
                    height: '100%',
                    borderRight: '1px solid #e0e0e0'
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: '#1976d2' }}>
                    Hesap Ayarları
                  </Typography>
                  <Tabs
                    orientation="vertical"
                    value={tab}
                    onChange={(_, v) => setTab(v)}
                    sx={{
                      '& .MuiTab-root': {
                        alignItems: 'flex-start',
                        textAlign: 'left',
                        minHeight: 48,
                        fontSize: '0.95rem',
                        fontWeight: 500,
                        color: '#666',
                        '&.Mui-selected': {
                          color: '#1976d2',
                          bgcolor: 'rgba(25, 118, 210, 0.08)',
                          borderRadius: 1
                        }
                      }
                    }}
                  >
                    <Tab label="Kişisel Bilgiler" />
                    <Tab label="Şifre Değiştir" />
                  </Tabs>
                </Box>
              </Grid>

              {/* Sağ İçerik */}
              <Grid size={{ xs: 12, md: 9 }}>
                <Box sx={{ p: { xs: 3, md: 4 }, height: '100%' }}>
                  {tab === 0 && (
                    <Box>
                      <Typography variant="h5" sx={{ mb: 4, fontWeight: 600, color: '#333' }}>
                        Kişisel Bilgiler
                      </Typography>
                      
                      {/* Profil Fotoğrafı Bölümü */}
                      <Box sx={{ mb: 4 }}>
                        <Stack direction="row" spacing={3} alignItems="center" sx={{ mb: 3 }}>
                          <Box position="relative">
                            <Avatar 
                              sx={{ 
                                width: 120, 
                                height: 120,
                                border: '4px solid #fff',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                              }} 
                            />
                            <IconButton 
                              color="primary" 
                              disabled 
                              sx={{ 
                                position: 'absolute', 
                                bottom: 0, 
                                right: 0, 
                                bgcolor: 'white',
                                border: '2px solid #1976d2'
                              }}
                            >
                              <PhotoCamera fontSize="small" />
                            </IconButton>
                          </Box>
                          <Stack spacing={2}>
                            <Button 
                              variant="contained" 
                              startIcon={<PhotoCamera />}
                              disabled
                              sx={{ bgcolor: '#1976d2' }}
                            >
                              Resim Yükle
                            </Button>
                            <Button 
                              variant="outlined" 
                              color="error" 
                              startIcon={<DeleteIcon />}
                              disabled
                            >
                              Resmi Sil
                            </Button>
                          </Stack>
                        </Stack>
                      </Box>

                      <Divider sx={{ mb: 4 }} />

                      {/* Form Alanları */}
                      <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                        <Grid container spacing={3}>
                          <Grid size={{ xs: 12, md: 6 }}>
                            <TextField 
                              label="Ad *" 
                              fullWidth 
                              required 
                              value={formData.firstName}
                              onChange={handleInputChange('firstName')}
                              sx={{ 
                                '& .MuiOutlinedInput-root': {
                                  '&:hover fieldset': { borderColor: '#1976d2' }
                                }
                              }}
                            />
                          </Grid>
                          <Grid size={{ xs: 12, md: 6 }}>
                            <TextField 
                              label="Soyad *" 
                              fullWidth 
                              required 
                              value={formData.lastName}
                              onChange={handleInputChange('lastName')}
                            />
                          </Grid>
                          <Grid size={{ xs: 12, md: 6 }}>
                            <TextField 
                              label="E-posta *" 
                              fullWidth 
                              required 
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange('email')}
                            />
                          </Grid>
                          <Grid size={{ xs: 12, md: 6 }}>
                            <TextField 
                              label="Telefon Numarası *" 
                              fullWidth 
                              required 
                              value={formData.phone}
                              onChange={handleInputChange('phone')}
                              InputProps={{ 
                                startAdornment: <InputAdornment position="start">+90</InputAdornment> 
                              }}
                            />
                          </Grid>
                          <Grid size={{ xs: 12, md: 6 }}>
                            <TextField 
                              label="Doğum Tarihi *" 
                              type="date" 
                              fullWidth 
                              required 
                              value={formData.birthDate}
                              onChange={handleInputChange('birthDate')}
                              InputLabelProps={{ shrink: true }}
                            />
                          </Grid>
                          <Grid size={{ xs: 12, md: 6 }}>
                            <TextField 
                              label="Kimlik No *" 
                              fullWidth 
                              required 
                              value={formData.idNumber}
                              onChange={handleInputChange('idNumber')}
                            />
                          </Grid>
                          <Grid size={{ xs: 12 }}>
                            <Box sx={{ mt: 2 }}>
                              <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 500, color: '#555' }}>
                                Cinsiyet:
                              </Typography>
                              <RadioGroup 
                                row 
                                value={formData.gender}
                                onChange={handleInputChange('gender')}
                                name="gender"
                              >
                                <FormControlLabel 
                                  value="male" 
                                  control={<Radio />} 
                                  label="Erkek" 
                                  sx={{ mr: 4 }}
                                />
                                <FormControlLabel 
                                  value="female" 
                                  control={<Radio />} 
                                  label="Kadın" 
                                />
                              </RadioGroup>
                            </Box>
                          </Grid>
                        </Grid>

                        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
                          <Button 
                            variant="contained" 
                            color="primary" 
                            size="large"
                            type="submit"
                            startIcon={<SaveIcon />}
                            sx={{ 
                              px: 4,
                              py: 1.5,
                              fontSize: '1.1rem',
                              fontWeight: 600,
                              bgcolor: '#1976d2',
                              '&:hover': { bgcolor: '#1565c0' }
                            }}
                          >
                            Kaydet
                          </Button>
                        </Box>
                      </form>
                    </Box>
                  )}

                  {tab === 1 && (
                    <Box maxWidth={500}>
                      <Typography variant="h5" sx={{ mb: 4, fontWeight: 600, color: '#333' }}>
                        Şifre Değiştir
                      </Typography>
                      
                      <Alert severity="info" sx={{ mb: 3 }}>
                        Güvenliğiniz için güçlü bir şifre seçin. Şifreniz en az 8 karakter uzunluğunda olmalıdır.
                      </Alert>

                      <form>
                        <Stack spacing={3}>
                          <TextField 
                            label="Mevcut Şifre" 
                            type="password" 
                            fullWidth 
                            required 
                          />
                          <TextField 
                            label="Yeni Şifre" 
                            type="password" 
                            fullWidth 
                            required 
                            helperText="En az 8 karakter uzunluğunda olmalıdır"
                          />
                          <TextField 
                            label="Yeni Şifre (Tekrar)" 
                            type="password" 
                            fullWidth 
                            required 
                          />
                        </Stack>
                        
                        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
                          <Button 
                            variant="contained" 
                            color="primary"
                            size="large"
                            startIcon={<SaveIcon />}
                            sx={{ 
                              px: 4,
                              py: 1.5,
                              fontSize: '1.1rem',
                              fontWeight: 600
                            }}
                          >
                            Şifre Değiştir
                          </Button>
                        </Box>
                      </form>
                    </Box>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default ProfilePage;
