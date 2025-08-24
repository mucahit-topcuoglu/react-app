import React from 'react'

function AddLinkForm() {
  return (
     <form className="add-link-form">
      <input type="text" placeholder="URL" />
      <input type="text" placeholder="Başlık" />
      <textarea placeholder="Açıklama" rows={3}></textarea>
      <input type="text" placeholder="Etiketler (virgülle ayırın)" />
      <button type="submit">Kaydet</button>
    </form>
  )
}

export default AddLinkForm
