import React from 'react';
import { Typography, Box, TextField, Button, Stack, Card, CardContent, Avatar, Divider, Chip } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import LanguageIcon from '@mui/icons-material/Language';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
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
              İletişim
            </Typography>
            <Typography variant="h6" sx={{ 
              color: 'var(--gray-600)', 
              fontWeight: 400, 
              mb: 3,
              maxWidth: '600px',
              mx: 'auto'
            }}>
              Bir proje fikriniz mi var? Hadi birlikte başaralım!
            </Typography>
            
            {/* Çok Dilli Selamlamalar */}
            <Box sx={{ 
              display: 'flex', 
              gap: 1, 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              mb: 4 
            }}>
              <Chip 
                label="Merhaba" 
                sx={{ 
                  bgcolor: 'var(--accent-50)',
                  color: 'var(--accent-700)',
                  border: '1px solid var(--accent-200)'
                }} 
                size="small" 
              />
              <Chip 
                label="Hello" 
                sx={{ 
                  bgcolor: 'var(--success-50)',
                  color: 'var(--success-600)',
                  border: '1px solid var(--success-200)'
                }} 
                size="small" 
              />
              <Chip 
                label="Bonjour" 
                sx={{ 
                  bgcolor: 'var(--warning-50)',
                  color: 'var(--warning-600)',
                  border: '1px solid var(--warning-200)'
                }} 
                size="small" 
              />
              <Chip 
                label="Cześć" 
                sx={{ 
                  bgcolor: 'var(--accent-50)',
                  color: 'var(--accent-700)',
                  border: '1px solid var(--accent-200)'
                }} 
                size="small" 
              />
              <Chip 
                label="Guten tag" 
                sx={{ 
                  bgcolor: 'var(--gray-50)',
                  color: 'var(--gray-700)',
                  border: '1px solid var(--gray-200)'
                }} 
                size="small" 
              />
            </Box>
          </Box>

          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' },
            gap: 4,
            mb: 6
          }}>
            <Card sx={{ 
              p: 4,
              background: '#ffffff',
              border: '1px solid var(--gray-200)',
              borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--shadow-md)',
              transition: 'all var(--transition-normal)',
              '&:hover': {
                boxShadow: 'var(--shadow-lg)'
              }
            }}>
              <Typography variant="h5" sx={{ 
                fontWeight: 600, 
                mb: 3, 
                color: 'var(--gray-900)' 
              }}>
                Tanışalım
              </Typography>
              <Typography variant="body2" sx={{ 
                mb: 4, 
                color: 'var(--gray-600)',
                lineHeight: 1.6
              }}>
                Proje fikrinizi paylaşın, birlikte başarıya ulaşalım. En kısa sürede size dönüş yapacağız.
              </Typography>
              <Stack spacing={3}>
                <TextField 
                  label="Ad Soyad" 
                  fullWidth 
                  variant="outlined"
                  size="medium"
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
                    },
                    '& .MuiInputBase-input': {
                      color: 'var(--gray-900)',
                      fontWeight: 500
                    }
                  }}
                />
                <TextField 
                  label="E-posta" 
                  type="email" 
                  fullWidth 
                  variant="outlined"
                  size="medium"
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
                    },
                    '& .MuiInputBase-input': {
                      color: 'var(--gray-900)',
                      fontWeight: 500
                    }
                  }}
                />
                <TextField 
                  label="Konu" 
                  fullWidth 
                  variant="outlined"
                  size="medium"
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
                    },
                    '& .MuiInputBase-input': {
                      color: 'var(--gray-900)',
                      fontWeight: 500
                    }
                  }}
                />
                <TextField 
                  label="Mesajınız" 
                  fullWidth 
                  multiline 
                  minRows={4}
                  variant="outlined"
                  size="medium"
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
                    },
                    '& .MuiInputBase-input': {
                      color: 'var(--gray-900)',
                      fontWeight: 500
                    }
                  }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button 
                    variant="contained" 
                    size="large"
                    startIcon={<SendIcon />}
                    sx={{ 
                      px: 4,
                      py: 1.5,
                      fontSize: 'var(--font-size-lg)',
                      fontWeight: 600,
                      bgcolor: 'var(--accent-600)',
                      borderRadius: 'var(--radius-lg)',
                      transition: 'all var(--transition-normal)',
                      boxShadow: 'var(--shadow-sm)',
                      '&:hover': {
                        bgcolor: 'var(--accent-700)',
                        transform: 'translateY(-1px)',
                        boxShadow: 'var(--shadow-md)'
                      }
                    }}
                  >
                    Konuşalım
                  </Button>
                </Box>
              </Stack>
            </Card>

            <Stack spacing={3}>
              <Card sx={{ 
                p: 3,
                background: '#ffffff',
                border: '1px solid var(--gray-200)',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-md)',
                transition: 'all var(--transition-normal)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: 'var(--shadow-lg)'
                }
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ 
                    bgcolor: 'var(--accent-100)', 
                    color: 'var(--accent-700)',
                    mr: 2, 
                    width: 48, 
                    height: 48 
                  }}>
                    <EmailIcon />
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: 'var(--gray-900)' }}>
                    E-posta
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: 'var(--gray-600)' }}>
                  hi@90pixel.com
                </Typography>
              </Card>

              <Card sx={{ 
                p: 3,
                background: '#ffffff',
                border: '1px solid var(--gray-200)',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-md)',
                transition: 'all var(--transition-normal)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: 'var(--shadow-lg)'
                }
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ 
                    bgcolor: 'var(--success-100)', 
                    color: 'var(--success-600)',
                    mr: 2, 
                    width: 48, 
                    height: 48 
                  }}>
                    <PhoneIcon />
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: 'var(--gray-900)' }}>
                    Telefon
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: 'var(--gray-600)' }}>
                  +90 232 229 00 90
                </Typography>
              </Card>

              <Card sx={{ 
                p: 3,
                background: '#ffffff',
                border: '1px solid var(--gray-200)',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-md)',
                transition: 'all var(--transition-normal)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: 'var(--shadow-lg)'
                }
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ 
                    bgcolor: 'var(--warning-100)', 
                    color: 'var(--warning-600)',
                    mr: 2, 
                    width: 48, 
                    height: 48 
                  }}>
                    <LocationOnIcon />
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: 'var(--gray-900)' }}>
                    Ofis
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ 
                  color: 'var(--gray-600)', 
                  lineHeight: 1.5 
                }}>
                  Mansuroğlu Mah. 1593/1 Sok. Lider Centrio B Blok Kat.8 Daire.85 Bayraklı. İzmir. Türkiye
                </Typography>
              </Card>

              <Card sx={{ 
                p: 3,
                background: '#ffffff',
                border: '1px solid var(--gray-200)',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-md)',
                transition: 'all var(--transition-normal)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: 'var(--shadow-lg)'
                }
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ 
                    bgcolor: 'var(--accent-100)', 
                    color: 'var(--accent-700)',
                    mr: 2, 
                    width: 48, 
                    height: 48 
                  }}>
                    <LanguageIcon />
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: 'var(--gray-900)' }}>
                    Kariyer
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: 'var(--gray-600)' }}>
                  Açık pozisyonlarımız
                </Typography>
              </Card>
            </Stack>
          </Box>

          <Divider sx={{ my: 6, borderColor: 'var(--gray-200)' }} />

          <Box sx={{ textAlign: 'center' }} className="fade-in">
            <Typography variant="h5" sx={{ 
              fontWeight: 600, 
              mb: 3, 
              color: 'var(--gray-900)' 
            }}>
              Harita üzerinde göster
            </Typography>
            <Typography variant="body2" sx={{ 
              color: 'var(--gray-600)', 
              mb: 4,
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6
            }}>
              Ofisimizi ziyaret etmek isterseniz, yukarıdaki adres bilgilerini kullanabilirsiniz.
            </Typography>
            <Button 
              variant="outlined" 
              startIcon={<LocationOnIcon />}
              size="large"
              sx={{ 
                borderColor: 'var(--accent-500)',
                color: 'var(--accent-600)',
                borderRadius: 'var(--radius-lg)',
                px: 4,
                py: 1.5,
                fontWeight: 600,
                transition: 'all var(--transition-normal)',
                '&:hover': {
                  borderColor: 'var(--accent-600)',
                  bgcolor: 'var(--accent-50)',
                  transform: 'translateY(-1px)',
                  boxShadow: 'var(--shadow-md)'
                }
              }}
            >
              Haritada Göster
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default ContactPage; 