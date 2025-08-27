
import { useState, useEffect } from 'react';



const AddLinkForm = (props:any) => {
  const [formData, setFormData] = useState({
    url: '',
    title: '',
    description: '',
    tags: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  function handleSubmit(e:any) {
  e.preventDefault();
  if (props.onAddLink) {
    props.onAddLink(formData);
  }
  setFormData({ url: '', title: '', description: '', tags: '' });
}

  useEffect(() => {
  console.log('formData değişti:', formData);
  }, [formData]);

  return (
    <form className="add-link-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="URL"
        name="url"
        value={formData.url}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Başlık"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <textarea
        placeholder="Açıklama"
        name="description"
        value={formData.description}
        onChange={handleChange}
        rows={3}
      ></textarea>
      <input
        type="text"
        placeholder="Etiketler (virgülle ayırın)"
        name="tags"
        value={formData.tags}
        onChange={handleChange}
      />
      <button type="submit">Kaydet</button>
    </form>
  );
};

export default AddLinkForm;
