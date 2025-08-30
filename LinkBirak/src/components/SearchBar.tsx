import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const SearchBar = () => {
  return (
    <Box
      className="search-bar fade-in"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 'var(--spacing-8)',
        width: '100%',
        maxWidth: 600,
        mx: 'auto'
      }}
    >
      <TextField
        type="text"
        placeholder="Linklerde ara... (başlık veya açıklama)"
        variant="outlined"
        fullWidth
        sx={{
          '& .MuiOutlinedInput-root': {
            background: '#ffffff',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--gray-300)',
            fontSize: 'var(--font-size-base)',
            fontWeight: 500,
            boxShadow: 'var(--shadow-sm)',
            transition: 'all var(--transition-fast)',
            '&:hover': {
              borderColor: 'var(--accent-300)',
              boxShadow: 'var(--shadow-md)'
            },
            '&.Mui-focused': {
              borderColor: 'var(--accent-500)',
              boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1), var(--shadow-md)'
            }
          },
          '& .MuiInputLabel-root': {
            color: 'var(--gray-600)',
            fontWeight: 500
          },
          '& .MuiInputBase-input': {
            color: 'var(--gray-800)',
            '&::placeholder': {
              color: 'var(--gray-500)',
              opacity: 1
            }
          }
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: 'var(--accent-600)' }} />
            </InputAdornment>
          )
        }}
      />
    </Box>
  );
};

export default SearchBar;
