import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, Link } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      width: '100vw', 
      bgcolor: '#ffffff', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      px: 2
    }}>
      <Box sx={{ 
        width: 400, 
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
            <LockOutlinedIcon sx={{ 
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
            Hoş Geldiniz
          </Typography>
          <Typography variant="body1" sx={{ 
            color: 'var(--gray-600)', 
            textAlign: 'center'
          }}>
            Hesabınıza giriş yapın
          </Typography>
        </Box>
       
        {/* Form */}
        <Box component="form" onSubmit={handleSubmit} sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 3 
        }}>
          <TextField
            label="Kullanıcı Adı"
            variant="outlined"
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
            variant="outlined"
            type="password"
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
          
          {/* Şifremi Unuttum Linki */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link 
              to="/forgot-password" 
              style={{ 
                color: 'var(--accent-600)', 
                fontSize: 'var(--font-size-sm)',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'color var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-700)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--accent-600)'}
            >
              Şifremi unuttum
            </Link>
          </Box>

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
            Giriş Yap
          </Button>
        </Box>

        {/* Kayıt Ol Linki */}
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
            Hesabın yok mu?
          </Typography>
          <Link 
            to="/register" 
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
            Hemen kayıt ol
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
