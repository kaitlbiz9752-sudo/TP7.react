import { useState } from 'react';

function FilterList({ items, render }) {
  const [query, setQuery] = useState('');

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="Rechercher..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {render(filteredItems)}
    </div>
  );
}

export default FilterList;
