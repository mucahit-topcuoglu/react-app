import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

interface LoadingSpinnerProps {
  message?: string;
  size?: number;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  message = "Yükleniyor...", 
  size = 40 
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--spacing-4)',
        padding: 'var(--spacing-8)',
        background: '#ffffff',
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--shadow-lg)',
        border: '1px solid var(--gray-200)',
        animation: 'fadeIn 0.4s ease-out'
      }}
    >
      <CircularProgress
        size={size}
        sx={{
          color: 'var(--accent-600)',
          '& .MuiCircularProgress-circle': {
            strokeLinecap: 'round',
          }
        }}
      />
      <Typography
        variant="body2"
        sx={{
          color: 'var(--gray-600)',
          fontWeight: 500,
          textAlign: 'center'
        }}
      >
        {message}
      </Typography>
    </Box>
  );
};

export default LoadingSpinner; 