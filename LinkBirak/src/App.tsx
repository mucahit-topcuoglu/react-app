import { useState, useEffect } from 'react';
import type { Link, LinkFormData } from './types';
import LinkForm from './components/LinkForm';
import LinkCard from './components/LinkCard';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [links, setLinks] = useState<Link[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // LocalStorage'dan linkleri yükle
  useEffect(() => {
    const savedLinks = localStorage.getItem('linkbirak-links');
    if (savedLinks) {
      try {
        const parsedLinks = JSON.parse(savedLinks).map((link: any) => ({
          ...link,
          createdAt: new Date(link.createdAt)
        }));
        setLinks(parsedLinks);
      } catch (error) {
        console.error('Links yüklenirken hata:', error);
      }
    }
  }, []);

  // LocalStorage'a linkleri kaydet
  useEffect(() => {
    localStorage.setItem('linkbirak-links', JSON.stringify(links));
  }, [links]);

  const handleAddLink = (linkData: LinkFormData) => {
    const newLink: Link = {
      id: Date.now().toString(),
      ...linkData,
      createdAt: new Date()
    };
    setLinks(prev => [newLink, ...prev]);
    setShowForm(false);
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
    setSearchTerm('');
  };

  const handleClearTag = () => {
    setSelectedTag(null);
  };

  // Filtreleme mantığı
  const filteredLinks = links.filter(link => {
    // Etiket filtresi
    if (selectedTag && !link.tags.includes(selectedTag)) {
      return false;
    }
    
    // Arama filtresi
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      return (
        link.title.toLowerCase().includes(searchLower) ||
        link.description.toLowerCase().includes(searchLower)
      );
    }
    
    return true;
  });

  return (
    <div className="container">
      <header className="header">
        <h1>LinkBırak</h1>
        <p>
          Ekibinizle paylaştığınız değerli kaynakları organize edin, 
          kategorize edin ve ihtiyacınız olduğunda kolayca bulun.
        </p>
      </header>

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedTag={selectedTag}
        onClearTag={handleClearTag}
      />

      <div className="add-link-section">
        <div className="section-header">
          <h2 className="section-title">
            {showForm ? 'Yeni Link Ekle' : 'Kayıtlı Linkler'}
          </h2>
          {!showForm && (
            <button 
              className="button" 
              onClick={() => setShowForm(true)}
            >
              + Yeni Link Ekle
            </button>
          )}
        </div>

        {showForm ? (
          <LinkForm
            onSubmit={handleAddLink}
            onCancel={() => setShowForm(false)}
          />
        ) : (
          <>
            {filteredLinks.length === 0 ? (
              <div className="no-links">
                {links.length === 0 ? (
                  <>
                    <h3>Henüz hiç link eklenmemiş</h3>
                    <p>İlk linkinizi ekleyerek başlayın!</p>
                  </>
                ) : (
                  <>
                    <h3>Arama kriterlerine uygun link bulunamadı</h3>
                    <p>Farklı anahtar kelimeler deneyin veya filtreleri temizleyin.</p>
                  </>
                )}
              </div>
            ) : (
              <div className="links-grid">
                {filteredLinks.map(link => (
                  <LinkCard
                    key={link.id}
                    link={link}
                    onTagClick={handleTagClick}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
