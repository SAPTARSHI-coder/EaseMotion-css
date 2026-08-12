import React from 'react';
import { render } from '@testing-library/react';
import Animate from '../components/Animate';

describe('Animate Component', () => {
  it('renders with correct default classes', () => {
    const { container } = render(<Animate type="fade-in">Content</Animate>);
    expect(container.firstChild).toHaveClass('ease-animate-fade-in');
    expect(container.firstChild).toHaveClass('ease-duration-medium');
  });

  it('applies custom duration and delay', () => {
    const { container } = render(<Animate type="slide-up" duration={500} delay={100}>Content</Animate>);
    expect(container.firstChild).toHaveStyle('animation-duration: 500ms');
    expect(container.firstChild).toHaveStyle('animation-delay: 100ms');
  });
});
