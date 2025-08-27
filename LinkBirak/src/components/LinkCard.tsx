import React from 'react'


function LinkCard(props:any) {
  const link = props.link;
  if (!link) {
    return null;
  }
  return (
    <div className="link-card">
      <h2>{link.title || 'başlık'}</h2>
      <p>{link.description || 'açıklama'}</p>
      <div className="tags-container">
        {link.tags
          ? link.tags.split(',').map(function(tag:any, i:any) {
              return <span className="tag" key={i}>{tag.trim()}</span>;
            })
          : <span className="tag">etiket</span>}
      </div>
      <button onClick={function() { props.onDeleteLink(link.id); }}>Sil</button>
    </div>
  );
}

export default LinkCard
