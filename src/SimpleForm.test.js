import { render, screen, fireEvent } from '@testing-library/react';
import SimpleForm from './SimpleForm';

test("affiche une erreur si le champ 'nom' est vide", () => {
  render(<SimpleForm />);

  // On clique sur le bouton sans remplir le champ
  const button = screen.getByText(/envoyer/i);
  fireEvent.click(button);

  // On vérifie que le message d'erreur s'affiche
  const alert = screen.getByRole('alert');
  expect(alert).toHaveTextContent('Le nom est obligatoire');
});
