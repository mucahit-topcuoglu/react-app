import React from 'react';
import { Box, Typography, Link, IconButton, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{ 
      bgcolor: '#ffffff',
      borderTop: '1px solid var(--gray-200)',
      mt: 'auto'
    }}>
      {/* Ana Footer İçeriği */}
      <Box sx={{ 
        maxWidth: '1200px',
        mx: 'auto',
        px: { xs: 2, md: 4 },
        py: 6
      }}>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' },
          gap: 4,
          mb: 4
        }}>
          
          {/* Şirket Bilgileri */}
          <Box>
            <Typography variant="h6" sx={{ 
              fontWeight: 600, 
              color: 'var(--gray-900)',
              mb: 3
            }}>
              90 Pixel
            </Typography>
            <Typography variant="body2" sx={{ 
              color: 'var(--gray-600)',
              lineHeight: 1.6,
              mb: 3
            }}>
              İhtiyaçlarınızı çözmeye odaklanan enerjik ve tutkulu ekip. 
              Deneyim odaklı tasarım ve sürdürülebilir kodlama ile fikirlerinizi hayata geçiriyoruz.
            </Typography>
            
            {/* Sosyal Medya Linkleri */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton 
                sx={{ 
                  color: 'var(--gray-400)',
                  bgcolor: 'var(--gray-50)',
                  '&:hover': {
                    bgcolor: 'var(--accent-100)',
                    color: 'var(--accent-600)'
                  }
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton 
                sx={{ 
                  color: 'var(--gray-400)',
                  bgcolor: 'var(--gray-50)',
                  '&:hover': {
                    bgcolor: 'var(--accent-100)',
                    color: 'var(--accent-600)'
                  }
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton 
                sx={{ 
                  color: 'var(--gray-400)',
                  bgcolor: 'var(--gray-50)',
                  '&:hover': {
                    bgcolor: 'var(--accent-100)',
                    color: 'var(--accent-600)'
                  }
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton 
                sx={{ 
                  color: 'var(--gray-400)',
                  bgcolor: 'var(--gray-50)',
                  '&:hover': {
                    bgcolor: 'var(--accent-100)',
                    color: 'var(--accent-600)'
                  }
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton 
                sx={{ 
                  color: 'var(--gray-400)',
                  bgcolor: 'var(--gray-50)',
                  '&:hover': {
                    bgcolor: 'var(--accent-100)',
                    color: 'var(--accent-600)'
                  }
                }}
              >
                <GitHubIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Hızlı Linkler */}
          <Box>
            <Typography variant="h6" sx={{ 
              fontWeight: 600, 
              color: 'var(--gray-900)',
              mb: 3
            }}>
              Hızlı Linkler
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Link 
                href="/" 
                sx={{ 
                  color: 'var(--gray-600)',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'color var(--transition-fast)',
                  '&:hover': {
                    color: 'var(--accent-600)'
                  }
                }}
              >
                Ana Sayfa
              </Link>
              <Link 
                href="/about" 
                sx={{ 
                  color: 'var(--gray-600)',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'color var(--transition-fast)',
                  '&:hover': {
                    color: 'var(--accent-600)'
                  }
                }}
              >
                Hakkımızda
              </Link>
              <Link 
                href="/links" 
                sx={{ 
                  color: 'var(--gray-600)',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'color var(--transition-fast)',
                  '&:hover': {
                    color: 'var(--accent-600)'
                  }
                }}
              >
                Linkler
              </Link>
              <Link 
                href="/contact" 
                sx={{ 
                  color: 'var(--gray-600)',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'color var(--transition-fast)',
                  '&:hover': {
                    color: 'var(--accent-600)'
                  }
                }}
              >
                İletişim
              </Link>
            </Box>
          </Box>

          {/* Hizmetler */}
          <Box>
            <Typography variant="h6" sx={{ 
              fontWeight: 600, 
              color: 'var(--gray-900)',
              mb: 3
            }}>
              Hizmetlerimiz
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="body2" sx={{ 
                color: 'var(--gray-600)',
                fontWeight: 500
              }}>
                Web Tasarım
              </Typography>
              <Typography variant="body2" sx={{ 
                color: 'var(--gray-600)',
                fontWeight: 500
              }}>
                Mobil Uygulama
              </Typography>
              <Typography variant="body2" sx={{ 
                color: 'var(--gray-600)',
                fontWeight: 500
              }}>
                E-Ticaret
              </Typography>
              <Typography variant="body2" sx={{ 
                color: 'var(--gray-600)',
                fontWeight: 500
              }}>
                SEO Optimizasyonu
              </Typography>
              <Typography variant="body2" sx={{ 
                color: 'var(--gray-600)',
                fontWeight: 500
              }}>
                Dijital Pazarlama
              </Typography>
            </Box>
          </Box>

          {/* İletişim Bilgileri */}
          <Box>
            <Typography variant="h6" sx={{ 
              fontWeight: 600, 
              color: 'var(--gray-900)',
              mb: 3
            }}>
              İletişim
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon sx={{ 
                  color: 'var(--accent-600)', 
                  fontSize: 20 
                }} />
                <Typography variant="body2" sx={{ 
                  color: 'var(--gray-600)',
                  fontWeight: 500
                }}>
                  hi@90pixel.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon sx={{ 
                  color: 'var(--accent-600)', 
                  fontSize: 20 
                }} />
                <Typography variant="body2" sx={{ 
                  color: 'var(--gray-600)',
                  fontWeight: 500
                }}>
                  +90 232 229 00 90
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <LocationOnIcon sx={{ 
                  color: 'var(--accent-600)', 
                  fontSize: 20,
                  mt: 0.2
                }} />
                <Typography variant="body2" sx={{ 
                  color: 'var(--gray-600)',
                  fontWeight: 500,
                  lineHeight: 1.4
                }}>
                  Mansuroğlu Mah. 1593/1 Sok. Lider Centrio B Blok Kat.8 Daire.85 Bayraklı. İzmir. Türkiye
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Alt Footer */}
        <Divider sx={{ borderColor: 'var(--gray-200)', my: 4 }} />
        
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'center', md: 'flex-start' },
          gap: 2
        }}>
          <Typography variant="body2" sx={{ 
            color: 'var(--gray-500)',
            textAlign: { xs: 'center', md: 'left' }
          }}>
            © {currentYear} 90 Pixel. Tüm hakları saklıdır.
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            gap: 3,
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <Link 
              href="/privacy" 
              sx={{ 
                color: 'var(--gray-500)',
                textDecoration: 'none',
                fontSize: 'var(--font-size-sm)',
                transition: 'color var(--transition-fast)',
                '&:hover': {
                  color: 'var(--accent-600)'
                }
              }}
            >
              Gizlilik Politikası
            </Link>
            <Link 
              href="/terms" 
              sx={{ 
                color: 'var(--gray-500)',
                textDecoration: 'none',
                fontSize: 'var(--font-size-sm)',
                transition: 'color var(--transition-fast)',
                '&:hover': {
                  color: 'var(--accent-600)'
                }
              }}
            >
              Kullanım Şartları
            </Link>
            <Link 
              href="/cookies" 
              sx={{ 
                color: 'var(--gray-500)',
                textDecoration: 'none',
                fontSize: 'var(--font-size-sm)',
                transition: 'color var(--transition-fast)',
                '&:hover': {
                  color: 'var(--accent-600)'
                }
              }}
            >
              Çerez Politikası
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer; 