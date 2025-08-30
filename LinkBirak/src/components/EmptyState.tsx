import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinkIcon from '@mui/icons-material/Link';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

interface EmptyStateProps {
  title?: string;
  message?: string;
  actionText?: string;
  onAction?: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "Henüz link eklenmemiş",
  message = "İlk linkinizi ekleyerek başlayın ve tüm önemli bağlantılarınızı tek bir yerde toplayın.",
  actionText = "Link Ekle",
  onAction
}) => {
  return (
    <Box
      className="fade-in"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--spacing-6)',
        padding: 'var(--spacing-12)',
        background: '#ffffff',
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--shadow-lg)',
        border: '1px solid var(--gray-200)',
        textAlign: 'center',
        maxWidth: '500px',
        margin: '0 auto'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '80px',
          height: '80px',
          background: 'var(--accent-50)',
          borderRadius: '50%',
          marginBottom: 'var(--spacing-4)'
        }}
      >
        <LinkIcon 
          sx={{ 
            fontSize: '40px',
            color: 'var(--accent-600)'
          }} 
        />
      </Box>

      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          color: 'var(--accent-700)',
          marginBottom: 'var(--spacing-2)'
        }}
      >
        {title}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: 'var(--gray-600)',
          lineHeight: 1.6,
          marginBottom: 'var(--spacing-6)',
          maxWidth: '400px'
        }}
      >
        {message}
      </Typography>

      {onAction && (
        <Box
          onClick={onAction}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--spacing-2)',
            padding: 'var(--spacing-3) var(--spacing-6)',
            background: 'var(--accent-600)',
            color: 'white',
            borderRadius: 'var(--radius-lg)',
            cursor: 'pointer',
            fontWeight: 600,
            transition: 'all var(--transition-normal)',
            boxShadow: 'var(--shadow-sm)',
            '&:hover': {
              background: 'var(--accent-700)',
              transform: 'translateY(-1px)',
              boxShadow: 'var(--shadow-md)'
            },
            '&:active': {
              transform: 'translateY(0)'
            }
          }}
        >
          <AddCircleOutlineIcon />
          {actionText}
        </Box>
      )}
    </Box>
  );
};

export default EmptyState; 