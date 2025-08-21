import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { describe, test, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Welcome from '../pages/Welcome';

const WelcomeWithRouter = () => (
  <BrowserRouter>
    <Welcome />
  </BrowserRouter>
);

describe('Welcome Page', () => {
  test('renders welcome message', () => {
    render(<WelcomeWithRouter />);
    expect(screen.getByText('Welcome to PopX')).toBeInTheDocument();
  });

  test('renders create account button', () => {
    render(<WelcomeWithRouter />);
    expect(screen.getByText('Create Account')).toBeInTheDocument();
  });

  test('renders login button', () => {
    render(<WelcomeWithRouter />);
    expect(screen.getByText('Already Registered? Login')).toBeInTheDocument();
  });

  test('displays logo', () => {
    render(<WelcomeWithRouter />);
    const logo = screen.getByText('P');
    expect(logo).toBeInTheDocument();
  });

  test('create account button is clickable', async () => {
    const user = userEvent.setup();
    render(<WelcomeWithRouter />);
    const createAccountBtn = screen.getByText('Create Account');
    await user.click(createAccountBtn);
    // Navigation would be tested with routing integration tests
  });
});