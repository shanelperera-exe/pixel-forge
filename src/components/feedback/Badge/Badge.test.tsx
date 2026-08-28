import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renders correctly', () => {
    render(<Badge>Test Badge</Badge>);
    expect(screen.getByText('Test Badge')).toBeInTheDocument();
  });

  it('applies variant classes', () => {
    const { container } = render(<Badge variant="success">Success Badge</Badge>);
    expect(container.firstChild).toHaveClass('bg-green-100');
  });
});
