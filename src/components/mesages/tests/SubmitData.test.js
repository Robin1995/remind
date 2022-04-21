import { fireEvent, render, screen } from '@testing-library/react';
import SubmitData from '../SubmitData';

test('renders Tittle', () => {
  render(<SubmitData />);
  const linkElement = screen.getByText(/Type in a new Message:/i);
  expect(linkElement).toBeInTheDocument();
});
it('Press enter key', () => {
  const { getByTitle } = render(<SubmitData />);

  fireEvent.keyPress(getByTitle('Digite una frase y oprima enter'), { key: 'Enter' })

  expect(getByTitle('Digite una frase y oprima enter')).toHaveTextContent('')
});
