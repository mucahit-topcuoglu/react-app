import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { validateEmail, validatePassword } from '../utils/validation';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';

const RegisterPage = () => {
  const [form, setForm] = useState({
    email: '',
    fullName: '',
    birthDate: '',
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(form.email)) {
      setError('Geçersiz e-posta formatı.');
      return;
    }
    if (!validatePassword(form.password)) {
      setError('Şifre en az 6 karakter olmalı ve büyük harf, küçük harf, rakam ve özel karakter içermelidir.');
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError('Girilen şifreler eşleşmiyor.');
      return;
    }
    setError('');
    console.log('Kayıt başarılı:', form);
  };

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      width: '100vw', 
      bgcolor: '#ffffff', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      px: 2,
      py: 4
    }}>
      <Box sx={{ 
        width: 450, 
        maxWidth: '95vw', 
        borderRadius: 'var(--radius-2xl)', 
        boxShadow: 'var(--shadow-lg)', 
        p: { xs: 4, sm: 6 }, 
        mx: 'auto', 
        bgcolor: '#ffffff', 
        border: '1px solid var(--gray-200)',
        transition: 'all var(--transition-normal)',
        '&:hover': { 
          boxShadow: 'var(--shadow-xl)',
          transform: 'translateY(-2px)'
        }
      }} className="fade-in">
        
        {/* Logo ve Başlık */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'center', 
          mb: 4 
        }}>
          <Box sx={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            bgcolor: 'var(--accent-100)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2
          }}>
            <PersonAddOutlinedIcon sx={{ 
              fontSize: 32, 
              color: 'var(--accent-700)' 
            }} />
          </Box>
          <Typography variant="h4" sx={{ 
            fontWeight: 600, 
            color: 'var(--gray-900)', 
            textAlign: 'center',
            mb: 1
          }}>
            Hesap Oluştur
          </Typography>
          <Typography variant="body1" sx={{ 
            color: 'var(--gray-600)', 
            textAlign: 'center'
          }}>
            Hemen ücretsiz kayıt olun
          </Typography>
        </Box>
       
        {/* Form */}
        <Box component="form" onSubmit={handleSubmit} sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 3 
        }}>
          <TextField
            label="E-posta"
            name="email"
            variant="outlined"
            type="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
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
            label="İsim Soyisim"
            name="fullName"
            variant="outlined"
            value={form.fullName}
            onChange={handleChange}
            fullWidth
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
            label="Doğum Tarihi"
            name="birthDate"
            variant="outlined"
            type="date"
            value={form.birthDate}
            onChange={handleChange}
            fullWidth
            size="medium"
            InputLabelProps={{ shrink: true }}
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
            label="Kullanıcı Adı"
            name="username"
            variant="outlined"
            value={form.username}
            onChange={handleChange}
            fullWidth
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
            label="Şifre"
            name="password"
            variant="outlined"
            type="password"
            value={form.password}
            onChange={handleChange}
            fullWidth
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
            label="Şifre Tekrar"
            name="confirmPassword"
            variant="outlined"
            type="password"
            value={form.confirmPassword}
            onChange={handleChange}
            fullWidth
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
          
          {/* Hata Mesajı */}
          {error && (
            <Box sx={{
              p: 2,
              borderRadius: 'var(--radius-lg)',
              bgcolor: 'var(--error-50)',
              border: '1px solid var(--error-200)'
            }}>
              <Typography sx={{ 
                color: 'var(--error-600)', 
                fontSize: 'var(--font-size-sm)', 
                textAlign: 'center',
                fontWeight: 500
              }}>
                {error}
              </Typography>
            </Box>
          )}

          <Button
            type="submit"
            variant="contained"
            fullWidth
            size="large"
            sx={{
              borderRadius: 'var(--radius-lg)',
              fontWeight: 600,
              fontSize: 'var(--font-size-lg)',
              py: 1.5,
              bgcolor: 'var(--accent-600)',
              color: '#ffffff',
              boxShadow: 'var(--shadow-sm)',
              transition: 'all var(--transition-normal)',
              '&:hover': {
                bgcolor: 'var(--accent-700)',
                transform: 'translateY(-1px)',
                boxShadow: 'var(--shadow-md)'
              }
            }}
          >
            Hesap Oluştur
          </Button>
        </Box>

        {/* Giriş Yap Linki */}
        <Box sx={{ 
          mt: 4, 
          textAlign: 'center',
          pt: 3,
          borderTop: '1px solid var(--gray-200)'
        }}>
          <Typography variant="body2" sx={{ 
            color: 'var(--gray-600)',
            mb: 1
          }}>
            Zaten bir hesabın var mı?
          </Typography>
          <Link 
            to="/" 
            style={{ 
              color: 'var(--accent-600)', 
              fontWeight: 600, 
              textDecoration: 'none',
              fontSize: 'var(--font-size-base)',
              transition: 'color var(--transition-fast)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-700)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--accent-600)'}
          >
            Giriş yap
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterPage;
