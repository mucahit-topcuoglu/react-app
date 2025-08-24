import React from 'react'

function LinkCard() {
  return (
     <div className="link-card">
      <h2>Örnek Başlık</h2>
      <p>Bu kart, bir linkin açıklamasını içerir.</p>
      <div className="tags-container">
        <span className="tag">react</span>
        <span className="tag">performans</span>
      </div>
    </div>
  )
}

export default LinkCard
