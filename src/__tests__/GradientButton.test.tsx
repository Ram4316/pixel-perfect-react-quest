import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { describe, test, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { GradientButton } from '../components/ui/gradient-button';

describe('GradientButton', () => {
  test('renders with default variant', () => {
    render(<GradientButton>Test Button</GradientButton>);
    const button = screen.getByRole('button', { name: 'Test Button' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('gradient-primary');
  });

  test('renders with secondary variant', () => {
    render(<GradientButton variant="secondary">Secondary Button</GradientButton>);
    const button = screen.getByRole('button', { name: 'Secondary Button' });
    expect(button).toHaveClass('bg-secondary');
  });

  test('handles click events', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<GradientButton onClick={handleClick}>Click Me</GradientButton>);
    
    const button = screen.getByRole('button', { name: 'Click Me' });
    await user.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('can be disabled', () => {
    render(<GradientButton disabled>Disabled Button</GradientButton>);
    const button = screen.getByRole('button', { name: 'Disabled Button' });
    expect(button).toBeDisabled();
  });

  test('applies custom className', () => {
    render(<GradientButton className="custom-class">Custom Button</GradientButton>);
    const button = screen.getByRole('button', { name: 'Custom Button' });
    expect(button).toHaveClass('custom-class');
  });
});