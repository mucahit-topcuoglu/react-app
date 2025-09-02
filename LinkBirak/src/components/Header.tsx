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
import { useUser } from '../contexts/UserContext';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { user, logout } = useUser();

  const handleLogout = () => {
    logout();
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
            background: isActive(item.path) 
              ? 'var(--accent-100)' 
              : 'transparent',
            color: isActive(item.path) ? 'var(--accent-700)' : 'var(--gray-700)',
            borderRadius: 'var(--radius-lg)',
            px: 3,
            py: 1.5,
            transition: 'all var(--transition-normal)',
            '&:hover': {
              background: 'var(--accent-50)',
              color: 'var(--accent-700)',
              transform: 'translateY(-1px)'
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
          background: '#ffffff',
          border: '1px solid var(--gray-200)',
          boxShadow: 'var(--shadow-lg)'
        }
      }}
    >
      <Box sx={{ p: 3 }}>
        <Typography 
          variant="h5" 
          sx={{ 
            fontWeight: 700, 
            color: 'var(--accent-700)',
            mb: 3 
          }}
        >
          LinkBirak
        </Typography>
        
        {/* Kullanıcı Bilgileri */}
        {user && (
          <Box sx={{ 
            mb: 3, 
            p: 2, 
            bgcolor: 'var(--accent-50)', 
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--accent-200)'
          }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'var(--accent-700)' }}>
              {user.username}
            </Typography>
            <Typography variant="caption" sx={{ color: 'var(--gray-600)' }}>
              {user.email}
            </Typography>
          </Box>
        )}
        
        <Divider sx={{ mb: 3, borderColor: 'var(--gray-200)' }} />
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.path}
              component={Link}
              to={item.path}
              onClick={handleMobileMenuToggle}
              sx={{
                borderRadius: 'var(--radius-lg)',
                mb: 1,
                background: isActive(item.path) 
                  ? 'var(--accent-50)' 
                  : 'transparent',
                color: isActive(item.path) ? 'var(--accent-700)' : 'var(--gray-700)',
                transition: 'all var(--transition-fast)',
                '&:hover': {
                  background: 'var(--accent-50)',
                  transform: 'translateX(4px)'
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
        <Divider sx={{ my: 3, borderColor: 'var(--gray-200)' }} />
        <Button
          fullWidth
          variant="outlined"
          color="error"
          startIcon={<LogoutIcon />}
          onClick={handleLogout}
          sx={{ 
            fontWeight: 600,
            borderRadius: 'var(--radius-lg)',
            borderColor: 'var(--error-500)',
            color: 'var(--error-600)',
            '&:hover': {
              background: 'var(--error-50)',
              borderColor: 'var(--error-600)'
            }
          }}
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
        background: '#ffffff',
        borderBottom: '1px solid var(--gray-200)',
        boxShadow: 'var(--shadow-sm)',
        zIndex: theme.zIndex.drawer + 1
      }}
    >
      <Toolbar sx={{ 
        justifyContent: 'space-between', 
        px: { xs: 2, md: 3 }, 
        position: 'relative',
        minHeight: '70px'
      }}>
        <Box sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none' }}>
         
        </Box>
        {/* Sol: Logo ve Profil */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {isMobile && (
            <IconButton
              color="primary"
              onClick={handleMobileMenuToggle}
              sx={{ 
                mr: 2,
                background: 'var(--accent-50)',
                borderRadius: 'var(--radius-lg)',
                color: 'var(--accent-700)',
                '&:hover': {
                  background: 'var(--accent-100)',
                  transform: 'scale(1.05)'
                }
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
          
          <IconButton
            component={Link}
            to="/profile"
            size="large"
            edge="start"
            color="primary"
            sx={{ 
              mr: 2,
              background: isActive('/profile') 
                ? 'var(--accent-100)' 
                : 'var(--accent-50)',
              borderRadius: 'var(--radius-lg)',
              color: 'var(--accent-700)',
              transition: 'all var(--transition-fast)',
              '&:hover': {
                background: 'var(--accent-100)',
                transform: 'scale(1.05)'
              }
            }}
          >
            <AccountCircleIcon fontSize="large" />
          </IconButton>
          
        </Box>

        {/* Orta: Desktop Menü */}
        {!isMobile && <DesktopMenu />}

        {/* Sağ: Kullanıcı Bilgileri ve Çıkış (Desktop) */}
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {user && (
              <Typography variant="body2" sx={{ color: 'var(--gray-600)' }}>
                {user.username}
              </Typography>
            )}
            <Button 
              color="primary" 
              onClick={handleLogout} 
              startIcon={<LogoutIcon />}
              sx={{ 
                fontWeight: 600,
                background: 'var(--error-50)',
                borderRadius: 'var(--radius-lg)',
                px: 3,
                py: 1.5,
                color: 'var(--error-600)',
                border: '1px solid var(--error-200)',
                transition: 'all var(--transition-normal)',
                '&:hover': {
                  background: 'var(--error-100)',
                  transform: 'translateY(-1px)',
                  boxShadow: 'var(--shadow-md)'
                }
              }}
            >
              Çıkış
            </Button>
          </Box>
        )}
      </Toolbar>
      
      {/* Mobile Menu */}
      <MobileMenu />
    </AppBar>
  );
};

export default Header;