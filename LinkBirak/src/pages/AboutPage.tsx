import React from 'react';
import { Typography, Box, Card, CardContent, Avatar, Divider } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import PaletteIcon from '@mui/icons-material/Palette';
import SecurityIcon from '@mui/icons-material/Security';
import GroupIcon from '@mui/icons-material/Group';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
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
              Hakkımızda
            </Typography>
            <Typography variant="h6" sx={{ 
              color: 'var(--gray-600)', 
              fontWeight: 400,
              maxWidth: '800px',
              mx: 'auto'
            }}>
              90 Pixel - İhtiyaçlarınızı Çözmeye Odaklanan Enerjik ve Tutkulu Ekip
            </Typography>
          </Box>

          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' },
            gap: 4,
            mb: 6 
          }}>
            <Box>
              <Typography variant="h5" sx={{ 
                fontWeight: 600, 
                mb: 3, 
                color: 'var(--gray-900)' 
              }}>
                Biz Kimiz?
              </Typography>
              <Typography variant="body1" sx={{ 
                mb: 3, 
                lineHeight: 1.7, 
                fontSize: 'var(--font-size-lg)',
                color: 'var(--gray-700)'
              }}>
                90 Pixel; 2015 yılında kurulan, birçok iş ortağına hizmet verirken; kendi ürünleriyle de her geçen gün büyüyen, büyürken ilk günkü enerjisini hiç kaybetmeyen bir ekip.
              </Typography>
              <Typography variant="body1" sx={{ 
                mb: 3, 
                lineHeight: 1.7, 
                fontSize: 'var(--font-size-lg)',
                color: 'var(--gray-700)'
              }}>
                Deneyim odaklı tasarımcılar, sürdürülebilir kodlama yapan yazılımcılar ve kullanılabilir ürünler için çalışan proje yöneticileri ile fikirlerinizi hayata geçirmek isteriz.
              </Typography>
              <Typography variant="body1" sx={{ 
                mb: 3, 
                lineHeight: 1.7, 
                fontSize: 'var(--font-size-lg)',
                color: 'var(--gray-700)'
              }}>
                Basit düşünüyor ve gereksinimlerinize odaklanıyoruz. İşini sevgiyle yapan ekipler, kusursuz bir deneyim sunan ürünler üretebilirler.
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }} className="slide-up">
              <Avatar sx={{ 
                width: 120, 
                height: 120, 
                mx: 'auto', 
                mb: 3,
                bgcolor: 'var(--accent-100)',
                color: 'var(--accent-700)',
                fontSize: '3rem'
              }}>
                <GroupIcon sx={{ fontSize: '3rem' }} />
              </Avatar>
              <Typography variant="h5" sx={{ 
                fontWeight: 600, 
                color: 'var(--accent-700)',
                mb: 1
              }}>
                31 Ekip Üyesi
              </Typography>
              <Typography variant="body2" sx={{ 
                color: 'var(--gray-600)'
              }}>
                Deneyimli ve tutkulu profesyoneller
              </Typography>
            </Box>
          </Box>

          {/* İstatistikler */}
          <Box sx={{ mb: 6 }} className="fade-in">
            <Typography variant="h4" sx={{ 
              fontWeight: 600, 
              mb: 4, 
              textAlign: 'center', 
              color: 'var(--gray-900)' 
            }}>
              Başarılarımız
            </Typography>
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
              gap: 3
            }}>
              <Card sx={{ 
                height: '100%',
                background: '#ffffff',
                border: '1px solid var(--gray-200)',
                borderRadius: 'var(--radius-xl)',
                textAlign: 'center',
                transition: 'all var(--transition-normal)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: 'var(--shadow-lg)',
                }
              }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h3" sx={{ 
                    fontWeight: 700, 
                    color: 'var(--accent-600)',
                    mb: 1
                  }}>
                    5+
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    color: 'var(--gray-600)',
                    fontWeight: 500
                  }}>
                    Yılı Aşkın Tecrübe
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ 
                height: '100%',
                background: '#ffffff',
                border: '1px solid var(--gray-200)',
                borderRadius: 'var(--radius-xl)',
                textAlign: 'center',
                transition: 'all var(--transition-normal)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: 'var(--shadow-lg)',
                }
              }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h3" sx={{ 
                    fontWeight: 700, 
                    color: 'var(--success-600)',
                    mb: 1
                  }}>
                    50+
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    color: 'var(--gray-600)',
                    fontWeight: 500
                  }}>
                    Tamamlanmış Proje
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ 
                height: '100%',
                background: '#ffffff',
                border: '1px solid var(--gray-200)',
                borderRadius: 'var(--radius-xl)',
                textAlign: 'center',
                transition: 'all var(--transition-normal)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: 'var(--shadow-lg)',
                }
              }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h3" sx={{ 
                    fontWeight: 700, 
                    color: 'var(--warning-500)',
                    mb: 1
                  }}>
                    25
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    color: 'var(--gray-600)',
                    fontWeight: 500
                  }}>
                    Ekip Üyesi
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ 
                height: '100%',
                background: '#ffffff',
                border: '1px solid var(--gray-200)',
                borderRadius: 'var(--radius-xl)',
                textAlign: 'center',
                transition: 'all var(--transition-normal)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: 'var(--shadow-lg)',
                }
              }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h3" sx={{ 
                    fontWeight: 700, 
                    color: 'var(--accent-600)',
                    mb: 1
                  }}>
                    9
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    color: 'var(--gray-600)',
                    fontWeight: 500
                  }}>
                    Ödül
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>

          <Divider sx={{ my: 6, borderColor: 'var(--gray-200)' }} />

          {/* Değerlerimiz */}
          <Box sx={{ mb: 6 }} className="fade-in">
            <Typography variant="h4" sx={{ 
              fontWeight: 600, 
              mb: 4, 
              textAlign: 'center', 
              color: 'var(--gray-900)' 
            }}>
              Değerlerimiz
            </Typography>
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 3
            }}>
              <Card sx={{ 
                height: '100%',
                background: '#ffffff',
                border: '1px solid var(--gray-200)',
                borderRadius: 'var(--radius-xl)',
                transition: 'all var(--transition-normal)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: 'var(--shadow-lg)',
                }
              }}>
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <Avatar sx={{ 
                    width: 60, 
                    height: 60, 
                    mx: 'auto', 
                    mb: 3,
                    bgcolor: 'var(--accent-100)',
                    color: 'var(--accent-700)'
                  }}>
                    <PaletteIcon sx={{ fontSize: '1.5rem' }} />
                  </Avatar>
                  <Typography variant="h6" sx={{ 
                    fontWeight: 600, 
                    mb: 2,
                    color: 'var(--gray-900)'
                  }}>
                    Deneyim Odaklı Tasarım
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    color: 'var(--gray-600)',
                    lineHeight: 1.6
                  }}>
                    Kullanıcı deneyimini ön planda tutan tasarım yaklaşımı
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ 
                height: '100%',
                background: '#ffffff',
                border: '1px solid var(--gray-200)',
                borderRadius: 'var(--radius-xl)',
                transition: 'all var(--transition-normal)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: 'var(--shadow-lg)',
                }
              }}>
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <Avatar sx={{ 
                    width: 60, 
                    height: 60, 
                    mx: 'auto', 
                    mb: 3,
                    bgcolor: 'var(--success-50)',
                    color: 'var(--success-600)'
                  }}>
                    <CodeIcon sx={{ fontSize: '1.5rem' }} />
                  </Avatar>
                  <Typography variant="h6" sx={{ 
                    fontWeight: 600, 
                    mb: 2,
                    color: 'var(--gray-900)'
                  }}>
                    Sürdürülebilir Kodlama
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    color: 'var(--gray-600)',
                    lineHeight: 1.6
                  }}>
                    Geleceğe yönelik, ölçeklenebilir yazılım çözümleri
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ 
                height: '100%',
                background: '#ffffff',
                border: '1px solid var(--gray-200)',
                borderRadius: 'var(--radius-xl)',
                transition: 'all var(--transition-normal)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: 'var(--shadow-lg)',
                }
              }}>
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <Avatar sx={{ 
                    width: 60, 
                    height: 60, 
                    mx: 'auto', 
                    mb: 3,
                    bgcolor: 'var(--accent-100)',
                    color: 'var(--accent-700)'
                  }}>
                    <EmojiEventsIcon sx={{ fontSize: '1.5rem' }} />
                  </Avatar>
                  <Typography variant="h6" sx={{ 
                    fontWeight: 600, 
                    mb: 2,
                    color: 'var(--gray-900)'
                  }}>
                    İyi İlişkiler
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    color: 'var(--gray-600)',
                    lineHeight: 1.6
                  }}>
                    Müşterilerimizle ve iş ortaklarımızla güçlü bağlar
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>

          <Divider sx={{ my: 6, borderColor: 'var(--gray-200)' }} />

          {/* Misyonumuz */}
          <Box sx={{ textAlign: 'center' }} className="fade-in">
            <Typography variant="h4" sx={{ 
              fontWeight: 600, 
              mb: 4, 
              color: 'var(--gray-900)' 
            }}>
              Misyonumuz
            </Typography>
            <Typography variant="body1" sx={{ 
              color: 'var(--gray-700)', 
              lineHeight: 1.8, 
              maxWidth: '800px', 
              mx: 'auto',
              fontSize: 'var(--font-size-lg)',
              fontStyle: 'italic'
            }}>
              "En büyük sermayemiz, bilgimiz ve iyi ilişkilerimiz. Kurulduğumuz günden beri önceliğimiz her zaman ekibimizle, müşterilerimizle veya iş ortaklarımızla iyi ilişkiler kurmak olmuştur. İyi ilişkileri olan insanlar birlikte çalışmaktan mutlu olurlar. Mutlu bir ekip, dünyadaki en iyi ürünleri yaratmakta zorlanmaz."
            </Typography>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default AboutPage; 