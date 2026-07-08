import React from 'react';
import { render } from '@testing-library/react';
import Hover from '../components/Hover';

describe('Hover Component', () => {
  it('renders with default lift effect', () => {
    const { container } = render(<Hover>Hover Me</Hover>);
    expect(container.firstChild).toHaveClass('ease-hover-lift');
  });

  it('renders with custom glow effect', () => {
    const { container } = render(<Hover effect="glow">Glow Me</Hover>);
    expect(container.firstChild).toHaveClass('ease-hover-glow');
  });
});
