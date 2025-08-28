import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const LoginPage = () => {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5faff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container maxWidth="xs" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ width: { xs: '98%', sm: 420, md: 440 }, maxWidth: 500, minWidth: 340, borderRadius: 5, boxShadow: '0 8px 32px 0 rgba(25, 118, 210, 0.18), 0 2px 8px 0 rgba(66, 165, 245, 0.10)', p: { xs: 3, sm: 5 }, mx: 'auto', bgcolor: '#fff', border: 'none', transition: 'box-shadow 0.3s', '&:hover': { boxShadow: '0 12px 36px 0 rgba(25, 118, 210, 0.22), 0 4px 16px 0 rgba(66, 165, 245, 0.12)' } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{ marginRight: 8 }}><circle cx="12" cy="12" r="12" fill="#1976d2"/><path d="M8.5 12.5L11 15L16 10" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <Typography variant="h5" sx={{ fontWeight: 700, color: '#1976d2', textAlign: 'center', letterSpacing: 1 }}>
              Giriş Yap
            </Typography>
          </Box>
          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Kullanıcı Adı"
              variant="outlined"
              fullWidth
              sx={{ background: '#f5faff' }}
              InputLabelProps={{ style: { color: '#1976d2' } }}
              inputProps={{ style: { color: '#1976d2', fontWeight: 500 } }}
            />
            <TextField
              label="Şifre"
              variant="outlined"
              type="password"
              fullWidth
              sx={{ background: '#f5faff' }}
              InputLabelProps={{ style: { color: '#1976d2' } }}
              inputProps={{ style: { color: '#1976d2', fontWeight: 500 } }}
            />
            <Button
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
              Giriş Yap
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginPage;
