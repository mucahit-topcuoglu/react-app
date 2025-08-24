import React from 'react';
import type { Link } from '../types';

interface LinkCardProps {
  link: Link;
  onTagClick: (tag: string) => void;
}

const LinkCard: React.FC<LinkCardProps> = ({ link, onTagClick }) => {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="link-card">
      <h3>
        <a href={link.url} target="_blank" rel="noopener noreferrer">
          {link.title}
        </a>
      </h3>
      
      {link.description && (
        <p className="link-description">{link.description}</p>
      )}
      
      <div className="link-meta">
        {link.tags.map(tag => (
          <span 
            key={tag} 
            className="tag"
            style={{ cursor: 'pointer' }}
            onClick={() => onTagClick(tag)}
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="link-date">
        {formatDate(link.createdAt)} tarihinde eklendi
      </div>
    </div>
  );
};

export default LinkCard;
