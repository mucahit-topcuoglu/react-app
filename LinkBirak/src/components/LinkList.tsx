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
        <div   key={link?.id || idx}
        className='slack-link'
        >
          <LinkCard link={link} onDeleteLink={props.onDeleteLink} />
        </div>
      ))}
    </Stack>
  );
}

export default LinkList;
