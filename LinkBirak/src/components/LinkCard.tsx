import React from 'react';
import type { ILink } from '../interfaces';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

interface LinkCardProps {
  link: ILink;
  onDeleteLink: (id: string | number) => void;
}

function LinkCard({ link, onDeleteLink }: LinkCardProps) {
  if (!link) {
    return null;
  }
  
  return (
    <Card 
      className="link-card fade-in"
      sx={{
        background: '#ffffff',
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--shadow-md)',
        padding: 'var(--spacing-6)',
        border: '1px solid var(--gray-200)',
        transition: 'all var(--transition-normal)',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '200px',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: 'var(--shadow-lg)',
        }
      }}
    >
      <CardContent sx={{ padding: 0, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography 
          variant="h5" 
          sx={{ 
            fontWeight: 600, 
            mb: 2, 
            color: 'var(--gray-900)', 
            fontSize: 'var(--font-size-xl)',
            lineHeight: 1.3
          }}
        >
          {link.title || 'Başlık'}
        </Typography>
        
        <Typography 
          variant="body2" 
          sx={{ 
            color: 'var(--gray-600)', 
            mb: 3, 
            lineHeight: 1.6,
            flex: 1
          }}
        >
          {link.description || 'Açıklama'}
        </Typography>
        
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 'var(--spacing-2)', 
          marginTop: 'auto' 
        }}>
          {link.tags
            ? link.tags.split(',').map((tag, i) => (
                <Chip 
                  key={i} 
                  label={tag.trim()} 
                  size="small" 
                  sx={{ 
                    background: 'var(--accent-50)',
                    color: 'var(--accent-700)',
                    fontWeight: 500,
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid var(--accent-200)',
                    transition: 'all var(--transition-fast)',
                    '&:hover': {
                      background: 'var(--accent-100)',
                      transform: 'scale(1.02)'
                    }
                  }} 
                />
              ))
            : <Chip 
                label="Etiket" 
                size="small" 
                sx={{ 
                  background: 'var(--accent-50)',
                  color: 'var(--accent-700)',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--accent-200)'
                }} 
              />
          }
        </div>
      </CardContent>
      
      <CardActions sx={{ 
        justifyContent: 'flex-end', 
        mt: 'auto',
        padding: 0,
        paddingTop: 'var(--spacing-4)'
      }}>
        <IconButton 
          aria-label="Sil" 
          onClick={() => onDeleteLink(link.id)} 
          sx={{ 
            color: 'var(--error-500)',
            background: 'var(--error-50)',
            borderRadius: 'var(--radius-lg)',
            transition: 'all var(--transition-fast)',
            '&:hover': { 
              background: 'var(--error-100)',
              transform: 'scale(1.05)'
            }
          }}
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default LinkCard;
