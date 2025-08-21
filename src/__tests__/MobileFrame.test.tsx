import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { describe, test, expect } from 'vitest';
import MobileFrame from '../components/MobileFrame';

describe('MobileFrame', () => {
  test('renders children content', () => {
    render(
      <MobileFrame>
        <div>Test Content</div>
      </MobileFrame>
    );
    
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  test('displays status bar with time', () => {
    render(
      <MobileFrame>
        <div>Content</div>
      </MobileFrame>
    );
    
    expect(screen.getByText('9:41')).toBeInTheDocument();
  });

  test('has proper mobile frame structure', () => {
    const { container } = render(
      <MobileFrame>
        <div>Content</div>
      </MobileFrame>
    );
    
    const phoneContainer = container.querySelector('.phone-container');
    expect(phoneContainer).toBeInTheDocument();
  });

  test('content area has proper padding for status bar', () => {
    render(
      <MobileFrame>
        <div data-testid="content">Content</div>
      </MobileFrame>
    );
    
    const contentArea = screen.getByTestId('content').parentElement;
    expect(contentArea).toHaveClass('pt-11');
  });
});