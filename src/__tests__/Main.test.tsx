import { render } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom'
import Main from '../Main'

test('routes render', () => {
    const {getByText} = render(<Main />, {wrapper: MemoryRouter})
    expect(getByText(/Main/i)).toBeInTheDocument()
})