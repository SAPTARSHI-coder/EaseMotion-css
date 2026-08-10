import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useAnimation } from './useAnimation';
import React from 'react'; // React is required for testing-library to render hooks

describe('useAnimation hook', () => {
  it('should initialize with default values', () => {
    const { result } = renderHook(() => useAnimation());

    expect(result.current.isPlaying).toBe(false);
    expect(result.current.className).toBe('');
    expect(typeof result.current.play).toBe('function');
    expect(typeof result.current.reset).toBe('function');
    expect(result.current.ref).toEqual({ current: null });
  });

  it('should apply default CSS classes when play() is called', () => {
    const { result } = renderHook(() => useAnimation());

    act(() => {
      result.current.play();
    });

    expect(result.current.isPlaying).toBe(true);
    expect(result.current.className).toBe('ease-fade-in ease-duration-normal ease-curve-ease ease-fill-both');
  });

  it('should apply custom CSS classes when configured and play() is called', () => {
    const customConfig = {
      animation: 'ease-slide-up',
      duration: 'ease-duration-slow',
      curve: 'ease-curve-linear',
      fill: 'ease-fill-forwards'
    };

    const { result } = renderHook(() => useAnimation(customConfig));

    act(() => {
      result.current.play();
    });

    expect(result.current.className).toBe('ease-slide-up ease-duration-slow ease-curve-linear ease-fill-forwards');
  });

  it('should clear CSS classes when reset() is called', () => {
    const { result } = renderHook(() => useAnimation());

    act(() => {
      result.current.play();
    });
    expect(result.current.isPlaying).toBe(true);

    act(() => {
      result.current.reset();
    });
    expect(result.current.isPlaying).toBe(false);
    expect(result.current.className).toBe('');
  });

  it('should automatically reset isPlaying on native animationend event', () => {
    // Create a mock DOM element to attach to the ref
    const mockElement = document.createElement('div');
    const { result } = renderHook(() => useAnimation());

    // Assign the mock element to the ref manually
    result.current.ref.current = mockElement;

    // We must re-render the hook so the useEffect binds the event listener to the now-populated ref
    const { rerender } = renderHook(() => useAnimation(), {
      initialProps: result.current,
    });
    
    // In our manual test setup, we can just invoke play
    act(() => {
      result.current.play();
    });
    expect(result.current.isPlaying).toBe(true);

    // Simulate the animationend event directly on the bound node
    act(() => {
      const event = new Event('animationend', { bubbles: true });
      mockElement.dispatchEvent(event);
    });

    expect(result.current.isPlaying).toBe(false);
    expect(result.current.className).toBe('');
  });

  it('should ignore animationend events bubbling up from child elements', () => {
    const parentElement = document.createElement('div');
    const childElement = document.createElement('span');
    parentElement.appendChild(childElement);

    const { result } = renderHook(() => useAnimation());
    result.current.ref.current = parentElement;
    
    // We must re-render to bind the event listener to the parent
    renderHook(() => useAnimation(), { initialProps: result.current });

    act(() => {
      result.current.play();
    });
    expect(result.current.isPlaying).toBe(true);

    // Dispatch the event from the CHILD element
    act(() => {
      const event = new Event('animationend', { bubbles: true });
      childElement.dispatchEvent(event);
    });

    // isPlaying should REMAIN true because e.target (child) !== node (parent)
    expect(result.current.isPlaying).toBe(true);
    expect(result.current.className).not.toBe('');
  });
});
