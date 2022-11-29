import { fireEvent, render } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom'
import Navbar from '../Navbar'

test('nav links change pages', async () => {
  const {getByText} = render(<Navbar />, {wrapper: MemoryRouter})
  fireEvent.click(getByText('Main'))
  expect(getByText('Main')).toBeInTheDocument()
});
