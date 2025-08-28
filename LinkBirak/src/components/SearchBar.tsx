interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

function SearchBar() {
  return (
    <div
      className="search-bar"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 28
      }}
    >
      <input
        type="text"
        placeholder="Linklerde ara... (başlık veya açıklama)"
        className="search-input"
        style={{
          width: 370,
          maxWidth: '95%',
          background: '#f5faff',
          border: '1.5px solid #1976d2',
          borderRadius: 8,
          fontSize: '1.08rem',
          padding: '0.85rem 1.1rem',
          color: '#1976d2',
          fontWeight: 500,
          boxShadow: '0 2px 8px 0 rgba(66, 165, 245, 0.08)',
          outline: 'none',
          transition: 'border-color 0.2s, box-shadow 0.2s'
        }}
      />
    </div>
  )
}

export default SearchBar
