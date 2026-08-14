/**
 * Animate.test.jsx
 *
 * Verifies the Animate wrapper component:
 *  - renders children correctly
 *  - applies the correct ease-{type} animation class
 *  - applies the hover-variant class when `hover` is true
 *  - forwards delay and duration as inline animation-* styles
 *  - falls back gracefully when an unknown type is passed
 *  - passes through additional className and props
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Animate, { VALID_TYPES } from '../components/Animate.jsx';

describe('Animate — Component Rendering', () => {
  it('renders its children', () => {
    render(
      <Animate type="fade-in">
        <p>Hello from Animate</p>
      </Animate>,
    );
    expect(screen.getByText('Hello from Animate')).toBeInTheDocument();
  });

  it('wraps children in a div with data-testid="animate-wrapper"', () => {
    render(<Animate type="fade-in"><span>content</span></Animate>);
    expect(screen.getByTestId('animate-wrapper')).toBeInTheDocument();
  });
});

describe('Animate — Animation Class Application', () => {
  it.each(VALID_TYPES)('applies .ease-%s class for type="%s"', (type) => {
    render(<Animate type={type}><span>{type}</span></Animate>);
    const wrapper = screen.getByTestId('animate-wrapper');
    expect(wrapper).toHaveClass(`ease-${type}`);
  });

  it('defaults to .ease-fade-in when no type prop is supplied', () => {
    render(<Animate><span>default</span></Animate>);
    expect(screen.getByTestId('animate-wrapper')).toHaveClass('ease-fade-in');
  });

  it('does NOT apply any ease- class for an unknown type', () => {
    render(<Animate type="nonexistent-animation"><span>x</span></Animate>);
    const wrapper = screen.getByTestId('animate-wrapper');
    // No ease-* class should be present
    const classes = Array.from(wrapper.classList);
    const hasEaseClass = classes.some((c) => c.startsWith('ease-'));
    expect(hasEaseClass).toBe(false);
  });
});

describe('Animate — Hover Prop', () => {
  it('applies the hover-variant class (.ease-hover-{type}) when hover=true', () => {
    render(<Animate type="bounce" hover><span>hover me</span></Animate>);
    const wrapper = screen.getByTestId('animate-wrapper');
    expect(wrapper).toHaveClass('ease-hover-bounce');
    expect(wrapper).not.toHaveClass('ease-bounce');
  });

  it('applies the entry class when hover is false (default)', () => {
    render(<Animate type="bounce"><span>entry</span></Animate>);
    const wrapper = screen.getByTestId('animate-wrapper');
    expect(wrapper).toHaveClass('ease-bounce');
    expect(wrapper).not.toHaveClass('ease-hover-bounce');
  });
});

describe('Animate — Delay and Duration Props', () => {
  it('sets animationDelay inline style when delay is provided', () => {
    render(<Animate type="fade-in" delay="300ms"><span>delayed</span></Animate>);
    const wrapper = screen.getByTestId('animate-wrapper');
    expect(wrapper).toHaveStyle({ animationDelay: '300ms' });
  });

  it('sets animationDuration inline style when duration is provided', () => {
    render(<Animate type="slide-up" duration="1s"><span>slow</span></Animate>);
    const wrapper = screen.getByTestId('animate-wrapper');
    expect(wrapper).toHaveStyle({ animationDuration: '1s' });
  });

  it('sets both delay and duration when both are provided', () => {
    render(
      <Animate type="zoom-in" delay="200ms" duration="600ms">
        <span>both</span>
      </Animate>,
    );
    const wrapper = screen.getByTestId('animate-wrapper');
    expect(wrapper).toHaveStyle({ animationDelay: '200ms', animationDuration: '600ms' });
  });

  it('does not add animationDelay style when delay prop is omitted', () => {
    render(<Animate type="fade-in"><span>no delay</span></Animate>);
    const wrapper = screen.getByTestId('animate-wrapper');
    // animationDelay should not be explicitly set
    expect(wrapper.style.animationDelay).toBe('');
  });
});

describe('Animate — className forwarding', () => {
  it('merges the extra className with the animation class', () => {
    render(
      <Animate type="fade-in" className="custom-class another">
        <span>merged</span>
      </Animate>,
    );
    const wrapper = screen.getByTestId('animate-wrapper');
    expect(wrapper).toHaveClass('ease-fade-in');
    expect(wrapper).toHaveClass('custom-class');
    expect(wrapper).toHaveClass('another');
  });
});
