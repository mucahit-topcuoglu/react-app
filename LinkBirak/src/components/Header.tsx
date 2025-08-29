import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Typography, 
  Button, 
  Box, 
  Menu, 
  MenuItem, 
  useTheme, 
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LinkIcon from '@mui/icons-material/Link';
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleLogout = () => {
    // Çıkış işlemleri burada yapılabilir (örn. localStorage temizleme)
    navigate('/');
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = [
    { text: 'Ana Sayfa', path: '/home', icon: <HomeIcon /> },
    { text: 'Hakkımızda', path: '/about', icon: <InfoIcon /> },
    { text: 'İletişim', path: '/contact', icon: <ContactMailIcon /> },
    { text: 'Linkler', path: '/links', icon: <LinkIcon /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  const DesktopMenu = () => (
    <Box sx={{ display: 'flex', gap: 1 }}>
      {menuItems.map((item) => (
        <Button
          key={item.path}
          color="inherit"
          component={Link}
          to={item.path}
          sx={{
            fontWeight: isActive(item.path) ? 600 : 400,
            bgcolor: isActive(item.path) ? 'rgba(255,255,255,0.1)' : 'transparent',
            borderRadius: 2,
            px: 2,
            '&:hover': {
              bgcolor: 'rgba(255,255,255,0.15)',
            }
          }}
        >
          {item.text}
        </Button>
      ))}
    </Box>
  );

  const MobileMenu = () => (
    <Drawer
      anchor="left"
      open={mobileMenuOpen}
      onClose={handleMobileMenuToggle}
      sx={{
        '& .MuiDrawer-paper': {
          width: 280,
          bgcolor: '#f8f9fa',
        }
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: '#1976d2', mb: 2 }}>
          LinkBirak
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.path}
              component={Link}
              to={item.path}
              onClick={handleMobileMenuToggle}
              sx={{
                borderRadius: 1,
                mb: 1,
                bgcolor: isActive(item.path) ? 'rgba(25, 118, 210, 0.08)' : 'transparent',
                color: isActive(item.path) ? '#1976d2' : '#666',
                '&:hover': {
                  bgcolor: 'rgba(25, 118, 210, 0.04)',
                }
              }}
            >
              <Box sx={{ mr: 2, color: 'inherit' }}>
                {item.icon}
              </Box>
              <ListItemText 
                primary={item.text} 
                sx={{ 
                  '& .MuiListItemText-primary': {
                    fontWeight: isActive(item.path) ? 600 : 400
                  }
                }}
              />
            </ListItem>
          ))}
        </List>
        <Divider sx={{ my: 2 }} />
        <Button
          fullWidth
          variant="outlined"
          color="error"
          startIcon={<LogoutIcon />}
          onClick={handleLogout}
          sx={{ fontWeight: 600 }}
        >
          Çıkış
        </Button>
      </Box>
    </Drawer>
  );

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        bgcolor: '#1976d2',
        background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
        boxShadow: '0 2px 20px rgba(25, 118, 210, 0.3)',
        zIndex: theme.zIndex.drawer + 1
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 3 }, position: 'relative' }}>
        <Box sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none' }}>
         
        </Box>
        {/* Sol: Logo ve Profil */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {isMobile && (
            <IconButton
              color="inherit"
              onClick={handleMobileMenuToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          
          <IconButton
            component={Link}
            to="/profile"
            size="large"
            edge="start"
            color="inherit"
            sx={{ 
              mr: 2,
              bgcolor: isActive('/profile') ? 'rgba(255,255,255,0.2)' : 'transparent',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.15)',
              }
            }}
          >
            <AccountCircleIcon fontSize="large" />
          </IconButton>
          
        </Box>

        {/* Orta: Desktop Menü */}
        {!isMobile && <DesktopMenu />}

        {/* Sağ: Çıkış (Desktop) */}
        {!isMobile && (
          <Button 
            color="inherit" 
            onClick={handleLogout} 
            startIcon={<LogoutIcon />}
            sx={{ 
              fontWeight: 600,
              bgcolor: 'rgba(255,255,255,0.1)',
              borderRadius: 2,
              px: 3,
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.2)',
              }
            }}
          >
            Çıkış
          </Button>
        )}
      </Toolbar>
      
      {/* Mobile Menu */}
      <MobileMenu />
    </AppBar>
  );
};

export default Header;