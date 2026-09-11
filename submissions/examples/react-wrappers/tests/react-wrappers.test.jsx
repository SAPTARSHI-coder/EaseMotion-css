import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Animate } from '../examples/react-vite/src/components/Animate';
import { Hover } from '../examples/react-vite/src/components/Hover';
import { ScrollReveal } from '../examples/react-vite/src/components/ScrollReveal';

describe('React Wrapper Components', () => {
  describe('Animate Component', () => {
    it('renders with default props', () => {
      render(<Animate data-testid="animate-el">Test</Animate>);
      const el = screen.getByTestId('animate-el');
      expect(el).toBeInTheDocument();
      expect(el).toHaveClass('ease-fade-in');
    });

    it('applies custom duration and delay', () => {
      render(
        <Animate data-testid="animate-el" type="slide-up" duration={500} delay={200}>
          Test
        </Animate>
      );
      const el = screen.getByTestId('animate-el');
      expect(el).toHaveClass('ease-slide-up');
      expect(el).toHaveStyle({ animationDuration: '500ms', animationDelay: '200ms' });
    });

    it('applies string duration', () => {
      render(
        <Animate data-testid="animate-el" duration="fast">
          Test
        </Animate>
      );
      const el = screen.getByTestId('animate-el');
      expect(el).toHaveStyle({ animationDuration: 'var(--ease-speed-fast)' });
    });

    it('binds onStart and onEnd events', () => {
      const onStart = vi.fn();
      const onEnd = vi.fn();
      render(
        <Animate data-testid="animate-el" onStart={onStart} onEnd={onEnd}>
          Test
        </Animate>
      );
      const el = screen.getByTestId('animate-el');
      
      fireEvent.animationStart(el);
      expect(onStart).toHaveBeenCalled();

      fireEvent.animationEnd(el);
      expect(onEnd).toHaveBeenCalled();
    });
  });

  describe('Hover Component', () => {
    it('applies default lift class', () => {
      render(<Hover data-testid="hover-el">Test</Hover>);
      const el = screen.getByTestId('hover-el');
      expect(el).toHaveClass('ease-hover-lift');
    });

    it('applies mapped class for scale', () => {
      render(<Hover data-testid="hover-el" type="scale">Test</Hover>);
      const el = screen.getByTestId('hover-el');
      expect(el).toHaveClass('ease-hover-grow');
    });

    it('applies mapped class for glow', () => {
      render(<Hover data-testid="hover-el" type="glow">Test</Hover>);
      const el = screen.getByTestId('hover-el');
      expect(el).toHaveClass('ease-hover-glow');
    });

    it('applies shake class on hover only', () => {
      render(<Hover data-testid="hover-el" type="shake">Test</Hover>);
      const el = screen.getByTestId('hover-el');
      
      expect(el).not.toHaveClass('ease-shake');
      
      fireEvent.mouseEnter(el);
      expect(el).toHaveClass('ease-shake');
      
      fireEvent.mouseLeave(el);
      expect(el).not.toHaveClass('ease-shake');
    });
  });

  describe('ScrollReveal Component', () => {
    let intersectionCallback;

    beforeEach(() => {
      window.IntersectionObserver = class IntersectionObserver {
        constructor(cb) {
          intersectionCallback = cb;
        }
        observe() {}
        unobserve() {}
        disconnect() {}
      };
    });

    it('is hidden initially', () => {
      render(<ScrollReveal data-testid="reveal-el">Test</ScrollReveal>);
      const el = screen.getByTestId('reveal-el');
      expect(el).toHaveStyle({ opacity: '0' });
      expect(el).not.toHaveClass('ease-fade-in');
    });

    it('adds animation class when in view', () => {
      render(<ScrollReveal data-testid="reveal-el" animation="zoom-in">Test</ScrollReveal>);
      const el = screen.getByTestId('reveal-el');
      
      act(() => {
        intersectionCallback([{ isIntersecting: true }]);
      });
      
      expect(el).toHaveClass('ease-zoom-in');
      expect(el).not.toHaveStyle({ opacity: '0' });
    });
  });
});
