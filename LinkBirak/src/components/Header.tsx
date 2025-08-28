import React from 'react'

function Header() {
  return (
    <header
      className="app-header"
      style={{
        width: '100vw',
        left: 0,
        top: 0,
        position: 'fixed',
        zIndex: 100,
        color: '#fff',
        padding: '32px 0 24px 0',
        margin: 0,
        // boxShadow kaldırıldı
        borderRadius: 0,
        textAlign: 'center',
        letterSpacing: 1,
        background: 'linear-gradient(180deg, #42a5f5 0%, #f4f8fb 100%)',
        overflow: 'visible'
      }}
    >
      <h1 style={{ fontWeight: 800, fontSize: '2.1rem', color: '#1976d2', margin: 0, letterSpacing: 1 }}>
        LinkBırak <span style={{ fontWeight: 400, color: '#fff', fontSize: '1.1rem', opacity: 0.85 }}>- Şirket İçi Link Panosu</span>
      </h1>
      {/* Alt fade efekt kaldırıldı, degrade arka plan ile sağlanıyor */}
    </header>
  )
}

export default Header
