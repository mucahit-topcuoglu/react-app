import React, { useState } from 'react';
import type { LinkFormData } from '../types';

interface LinkFormProps {
  onSubmit: (linkData: LinkFormData) => void;
  onCancel: () => void;
}

const LinkForm: React.FC<LinkFormProps> = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<LinkFormData>({
    url: '',
    title: '',
    description: '',
    tags: []
  });
  const [tagInput, setTagInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTagInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addTag();
    }
  };

  const addTag = () => {
    const tag = tagInput.trim().toLowerCase();
    if (tag && !formData.tags.includes(tag)) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tag]
      }));
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.url && formData.title) {
      onSubmit(formData);
      setFormData({ url: '', title: '', description: '', tags: [] });
      setTagInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-grid">
      <div className="form-group">
        <label htmlFor="url">URL *</label>
        <input
          type="url"
          id="url"
          name="url"
          value={formData.url}
          onChange={handleInputChange}
          placeholder="https://örnek.com"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="title">Başlık *</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Link için açıklayıcı bir başlık"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Açıklama</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Bu link neden faydalı? Kısa bir açıklama yazın..."
        />
      </div>

      <div className="form-group">
        <label htmlFor="tags">Etiketler</label>
        <div className="tags-input">
          {formData.tags.map(tag => (
            <span key={tag} className="tag">
              {tag}
              <button
                type="button"
                className="tag-remove"
                onClick={() => removeTag(tag)}
              >
                ×
              </button>
            </span>
          ))}
          <input
            type="text"
            className="tag-input"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagInputKeyDown}
            onBlur={addTag}
            placeholder="Etiket ekle (Enter veya virgül ile ayır)"
          />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
        <button type="button" className="button button-secondary" onClick={onCancel}>
          İptal
        </button>
        <button type="submit" className="button">
          Link Ekle
        </button>
      </div>
    </form>
  );
};

export default LinkForm;
