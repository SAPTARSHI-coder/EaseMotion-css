import React from 'react';
import { render } from '@testing-library/react';
import ScrollReveal from '../components/ScrollReveal';

// Mock IntersectionObserver for testing
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null
});
window.IntersectionObserver = mockIntersectionObserver;

describe('ScrollReveal Component', () => {
  it('renders initially hidden', () => {
    const { container } = render(<ScrollReveal type="fade-in">Content</ScrollReveal>);
    // Initial state before intersection should be opacity: 0
    expect(container.firstChild).toHaveStyle('opacity: 0');
  });
});
