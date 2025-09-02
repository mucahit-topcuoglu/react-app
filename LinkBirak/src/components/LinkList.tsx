import Box from '@mui/material/Box';
import LinkCard from './LinkCard';
import EmptyState from './EmptyState';
import type { ILink } from '../interfaces';

interface LinkListProps {
  links: ILink[];
  onDeleteLink: (id: string | number) => void;
  onTagSelect?: (tag: string) => void;
}

function LinkList(props: LinkListProps) {
  if (props.links.length === 0) {
    return (
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 'var(--spacing-8)'
        }}
      >
        <EmptyState />
      </Box>
    );
  }

  return (
    <Box
      className="link-list fade-in"
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: 'var(--spacing-6)',
        width: '100%',
        maxWidth: '1200px',
        padding: '0 var(--spacing-4)',
        '@media (max-width: 768px)': {
          gridTemplateColumns: '1fr',
          gap: 'var(--spacing-4)',
          padding: '0 var(--spacing-3)'
        }
      }}
    >
      {props.links.slice(0, 9).map((link, idx) => (
        <Box key={link?.id || idx}>
          <LinkCard 
            link={link} 
            onDeleteLink={props.onDeleteLink} 
            onTagSelect={props.onTagSelect}
          />
        </Box>
      ))}
    </Box>
  );
}

export default LinkList;
