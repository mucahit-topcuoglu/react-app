import Stack from '@mui/material/Stack';
import LinkCard from './LinkCard';
import type { ILink } from '../interfaces';

interface LinkListProps {
  links: ILink[];
  onDeleteLink: (id: string | number) => void;
}

function LinkList(props: LinkListProps) {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={3}
      useFlexGap
      flexWrap="wrap"
      sx={{
        mt: 3,
        mb: 3,
        justifyContent: 'center',
        alignItems: 'stretch',
        rowGap: 4,
        columnGap: 4
      }}
    >
      {props.links.slice(0, 9).map((link, idx) => (
        <div
          key={link?.id || idx}
          style={{
            flex: '1 1 320px',
            minWidth: 280,
            maxWidth: 420,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch',
            margin: '0 auto'
          }}
        >
          <LinkCard link={link} onDeleteLink={props.onDeleteLink} />
        </div>
      ))}
    </Stack>
  );
}

export default LinkList;
