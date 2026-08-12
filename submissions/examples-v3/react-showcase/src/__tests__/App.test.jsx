/**
 * App.test.jsx
 *
 * Verifies that the top-level App component renders successfully and that
 * all key sections are present and accessible.
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App.jsx';

describe('App — Application Rendering', () => {
  it('renders the application root without crashing', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toBeTruthy();
  });

  it('displays the main application heading', () => {
    render(<App />);
    // The title contains "EaseMotion CSS"
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/EaseMotion CSS/i);
  });

  it('renders the header section', () => {
    render(<App />);
    expect(screen.getByTestId('app-header')).toBeInTheDocument();
  });

  it('renders the AnimationPlayground section', () => {
    render(<App />);
    expect(screen.getByTestId('animation-playground')).toBeInTheDocument();
  });

  it('renders the Animate component demo section', () => {
    render(<App />);
    expect(screen.getByTestId('animate-section')).toBeInTheDocument();
  });

  it('renders the Modal demo section', () => {
    render(<App />);
    expect(screen.getByTestId('modal-section')).toBeInTheDocument();
  });

  it('shows the "Open Modal" button in the modal section', () => {
    render(<App />);
    const openBtn = screen.getByTestId('open-modal-btn');
    expect(openBtn).toBeInTheDocument();
    expect(openBtn).toHaveTextContent(/open modal/i);
  });

  it('renders the footer', () => {
    render(<App />);
    expect(screen.getByTestId('app-footer')).toBeInTheDocument();
  });
});
