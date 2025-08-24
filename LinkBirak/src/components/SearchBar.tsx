import React from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedTag: string | null;
  onClearTag: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  searchTerm, 
  onSearchChange, 
  selectedTag, 
  onClearTag 
}) => {
  return (
    <div className="search-section">
      <div style={{ marginBottom: selectedTag ? '1rem' : '0' }}>
        <input
          type="text"
          className="search-input"
          placeholder="Linklerde arama yapın... (başlık veya açıklama)"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      
      {selectedTag && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ color: '#6b7280' }}>Filtrelenen etiket:</span>
          <span className="tag">
            {selectedTag}
            <button 
              className="tag-remove" 
              onClick={onClearTag}
              style={{ marginLeft: '0.5rem' }}
            >
              ×
            </button>
          </span>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
