import { useState } from 'react';

function SimpleForm() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim()) {
      setError('Le nom est obligatoire');
    } else {
      setError('');
      // ici tu pourrais envoyer les données, etc.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nom :</label>
      <input
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button type="submit">Envoyer</button>

      {error && <p role="alert">{error}</p>}
    </form>
  );
}

export default SimpleForm;
