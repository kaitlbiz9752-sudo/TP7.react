## TP React – JSX, Composition, HOC, Render Props & Tests








## Description du projet

**Ce TP complet t'apprend les fondamentaux avancés de React :**

- JSX et transformation par Babel

- Composition de composants

- Higher-Order Components (HOC)

- Render Props

- Tests unitaires et d’intégration avec React Testing Library

- Gestion d’état simple avec useState

- Il repose sur des exercices progressifs pour renforcer la compréhension et la pratique.

## Installation & Lancement


**Installer les dépendances**


```text
npm install
```


**Lancer l’application**

```text
npm start
```

**L’interface est accessible sur :**



 http://localhost:3000


## Sommaire des Étapes



| Étape | Sujet                | Description                           |
| ----- | -------------------- | ------------------------------------- |
| 1     | JSX                  | Découverte du JSX                     |
| 2     | Transformation Babel | JSX → `React.createElement`           |
| 3     | Composition          | Intégration des composants            |
| 4     | Bonnes pratiques     | `className`, `htmlFor`, parent unique |
| 5     | HOC                  | `withLogging`                         |
| 6     | Render Props         | `DataLoader`                          |
| 7     | Tests unitaires      | `Greeting.test.js`                    |
| 8     | Tests d’intégration  | `Counter.test.js`                     |
| 9     | Exercices            | HOC avancé, filtrage, formulaire      |
| 10    | Projet final         | Structuration complète                |



## Aperçu des fonctionnalités


 1. JSX vs JavaScript pur

```text
const elementJSX = <h1 className="titre">Bonjour JSX</h1>;

const elementJS = React.createElement(
  'h1',
  { className: 'titre' },
  'Bonjour JavaScript pur'
);
```



 2. Higher-Order Component (HOC)



```text
Exemple : HOC de logging
function withLogging(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log('Props reçues :', props);
    return <WrappedComponent {...props} />;
  };
}
```





 3. Render Props


```text
<DataLoader render={(data) => (
  <ul>
    {data.map((n) => <li key={n}>{n}</li>)}
  </ul>
)} />
```



🔹 4. Tests React


**Test unitaire**


```text
expect(screen.getByText('Bonjour, Alice')).toBeInTheDocument();
```




**Test d’intégration**



```text
fireEvent.click(button);
expect(screen.getByText('Compteur : 1')).toBeInTheDocument();
```


## Structure du projet

<img width="643" height="1079" alt="image" src="https://github.com/user-attachments/assets/89dbbed5-4cba-4945-9ab0-1f3de093b776" />



## Concepts maîtrisés

- JSX & Babel
-  Composition
 - HOC (Higher-Order Components)
- Render Props
- useState
- Tests unitaires (React Testing Library)
 - Tests d’interaction
- Architecture propre et modulaire



## Démonstration du vidéo











https://github.com/user-attachments/assets/a4f68538-2fa4-4789-b918-c2db794f565b

















 
