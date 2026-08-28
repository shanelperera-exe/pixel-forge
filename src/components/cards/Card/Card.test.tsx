import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Card } from './Card';

describe('Card', () => {
  it('renders content correctly', () => {
    render(
      <Card title="Test Title" description="Test Description" footer={<button>Action</button>}>
        <div>Card Content</div>
      </Card>
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('Card Content')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /action/i })).toBeInTheDocument();
  });

  it('renders without optional parts', () => {
    render(<Card>Just Content</Card>);
    expect(screen.queryByText('Test Title')).not.toBeInTheDocument();
    expect(screen.getByText('Just Content')).toBeInTheDocument();
  });
});
