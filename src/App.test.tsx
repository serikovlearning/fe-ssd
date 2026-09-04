import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the Ant Design example', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: 'Frontend is ready' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Ant Design works' })).toBeInTheDocument();
  });
});
