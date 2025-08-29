import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { validateEmail, validatePassword } from '../utils/validation';

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
    <Box sx={{ minHeight: '100vh', width: '100vw', bgcolor: '#f5faff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ width: 400, maxWidth: '95vw', borderRadius: 5, boxShadow: '0 8px 32px 0 rgba(25, 118, 210, 0.18), 0 2px 8px 0 rgba(66, 165, 245, 0.10)', p: { xs: 3, sm: 5 }, mx: 'auto', bgcolor: '#fff', border: 'none', transition: 'box-shadow 0.3s', '&:hover': { boxShadow: '0 12px 36px 0 rgba(25, 118, 210, 0.22), 0 4px 16px 0 rgba(66, 165, 245, 0.12)' } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{ marginRight: 8 }}><circle cx="12" cy="12" r="12" fill="#1976d2"/><path d="M8 12.5L11 15L16 10" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#1976d2', textAlign: 'center', letterSpacing: 1 }}>
            Kayıt Ol
          </Typography>
        </Box>
       
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="E-posta"
            name="email"
            variant="outlined"
            type="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
            sx={{ background: '#f5faff' }}
            InputLabelProps={{ style: { color: '#1976d2' } }}
            inputProps={{ style: { color: '#1976d2', fontWeight: 500 } }}
          />
          <TextField
            label="İsim Soyisim"
            name="fullName"
            variant="outlined"
            value={form.fullName}
            onChange={handleChange}
            fullWidth
            sx={{ background: '#f5faff' }}
            InputLabelProps={{ style: { color: '#1976d2' } }}
            inputProps={{ style: { color: '#1976d2', fontWeight: 500 } }}
          />
          <TextField
            label="Doğum Tarihi"
            name="birthDate"
            variant="outlined"
            type="date"
            value={form.birthDate}
            onChange={handleChange}
            fullWidth
            sx={{ background: '#f5faff' }}
            InputLabelProps={{ style: { color: '#1976d2' }, shrink: true }}
            inputProps={{ style: { color: '#1976d2', fontWeight: 500 } }}
          />
          <TextField
            label="Kullanıcı Adı"
            name="username"
            variant="outlined"
            value={form.username}
            onChange={handleChange}
            fullWidth
            sx={{ background: '#f5faff' }}
            InputLabelProps={{ style: { color: '#1976d2' } }}
            inputProps={{ style: { color: '#1976d2', fontWeight: 500 } }}
          />
          <TextField
            label="Şifre"
            name="password"
            variant="outlined"
            type="password"
            value={form.password}
            onChange={handleChange}
            fullWidth
            sx={{ background: '#f5faff' }}
            InputLabelProps={{ style: { color: '#1976d2' } }}
            inputProps={{ style: { color: '#1976d2', fontWeight: 500 } }}
          />
          <TextField
            label="Şifre Tekrar"
            name="confirmPassword"
            variant="outlined"
            type="password"
            value={form.confirmPassword}
            onChange={handleChange}
            fullWidth
            sx={{ background: '#f5faff' }}
            InputLabelProps={{ style: { color: '#1976d2' } }}
            inputProps={{ style: { color: '#1976d2', fontWeight: 500 } }}
          />
          {error && (
            <Typography sx={{ color: 'red', fontSize: 14, mt: 1, textAlign: 'center' }}>{error}</Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            fullWidth
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
          >
            Kayıt Ol
          </Button>
        </Box>
         <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#1976d2' }}>
            Zaten bir hesabın var mı?{' '}
            <Link to="/" style={{ color: '#1976d2', 
                fontWeight: 600, 
                textDecoration: 'underline', 
                cursor: 'pointer' }}>
              Giriş Yap
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  )};

export default RegisterPage;
