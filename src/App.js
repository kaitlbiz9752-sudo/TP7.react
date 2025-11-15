import JSXDemo from './JSXDemo';
import ButtonWithLogging from './ButtonWithLogging';
import DataLoader from './DataLoader';
import MessageWithTimestamp from './MessageWithTimestamp';
import FilterList from './FilterList';
import SimpleForm from './SimpleForm';
import Counter from './Counter';

function App() {
  const names = ['Alice', 'Bob', 'Charlie', 'David'];

  return (
    <div>
      <h1>TP JSX et Composition</h1>

      <section>
        <h2>1. Démo JSX vs React.createElement</h2>
        <JSXDemo />
      </section>

      <section>
        <h2>2. HOC withLogging (ButtonWithLogging)</h2>
        <ButtonWithLogging label="Cliquer ici" />
      </section>

      <section>
        <h2>3. Render Props – DataLoader</h2>
        <DataLoader
          render={(data) => (
            <ul>
              {data.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          )}
        />
      </section>

      <section>
        <h2>4. HOC withTimestamp</h2>
        <MessageWithTimestamp text="Bonjour avec timestamp" />
      </section>

      <section>
        <h2>5. Render Props – FilterList</h2>
        <FilterList
          items={names}
          render={(filtered) => (
            <ul>
              {filtered.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          )}
        />
      </section>

      <section>
        <h2>6. Formulaire avec validation</h2>
        <SimpleForm />
      </section>

      <section>
        <h2>7. Compteur avec interaction</h2>
        <Counter />
      </section>
    </div>
  );
}

export default App;
