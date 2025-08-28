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
    <Card sx={{
      bgcolor: '#fff',
      color: '#222',
      borderRadius: 5,
      boxShadow: '0 8px 32px 0 rgba(25, 118, 210, 0.18), 0 2px 8px 0 rgba(66, 165, 245, 0.10)',
      minHeight: 80,
      maxHeight: 260,
    
      minWidth: 320,
      maxWidth: 420,
      width: 370,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      border: 'none',
      transition: 'box-shadow 0.3s',
      '&:hover': { boxShadow: '0 12px 36px 0 rgba(25, 118, 210, 0.22), 0 4px 16px 0 rgba(66, 165, 245, 0.12)' },
      overflow: 'hidden'
    }}>
      <CardContent>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: '#1976d2', letterSpacing: 0.5 }}>
          {link.title || 'başlık'}
        </Typography>
        <Typography variant="body2" sx={{ color: '#444', mb: 2 }}>
          {link.description || 'açıklama'}
        </Typography>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 8 }}>
          {link.tags
            ? link.tags.split(',').map((tag, i) => (
                <Chip key={i} label={tag.trim()} size="small" sx={{ bgcolor: '#f5faff', color: '#1976d2', fontWeight: 500, borderRadius: 2, border: '1px solid #1976d2' }} />
              ))
            : <Chip label="etiket" size="small" sx={{ bgcolor: '#f5faff', color: '#1976d2', borderRadius: 2, border: '1px solid #1976d2' }} />}
        </div>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end', mt: 'auto' }}>
        <IconButton aria-label="Sil" onClick={() => onDeleteLink(link.id)} sx={{ color: '#ff5252', bgcolor: '#f5faff', borderRadius: 2, '&:hover': { bgcolor: '#ffeaea' } }}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default LinkCard;
