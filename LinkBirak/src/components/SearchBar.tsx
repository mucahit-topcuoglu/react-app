interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

function SearchBar() {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Linklerde ara... (başlık veya açıklama)"
        
        className="search-input"
      />
    </div>
  )
}

export default SearchBar
