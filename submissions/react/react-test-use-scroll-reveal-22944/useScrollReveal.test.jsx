import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useScrollReveal } from './useScrollReveal';
import React from 'react';

// Setup IntersectionObserver Mock
const setupIntersectionObserverMock = () => {
  const observe = vi.fn();
  const unobserve = vi.fn();
  const disconnect = vi.fn();

  // Store the callback so we can manually trigger intersection events
  let callback;

  window.IntersectionObserver = vi.fn().mockImplementation((cb) => {
    callback = cb;
    return {
      observe,
      unobserve,
      disconnect,
    };
  });

  return { observe, unobserve, disconnect, trigger: (entries) => callback(entries) };
};

describe('useScrollReveal hook', () => {
  let mockIO;

  beforeEach(() => {
    mockIO = setupIntersectionObserverMock();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should initialize with visibility false and opacity-0 class', () => {
    const { result } = renderHook(() => useScrollReveal());

    expect(result.current.isVisible).toBe(false);
    expect(result.current.className).toBe('ease-opacity-0');
    expect(result.current.ref).toEqual({ current: null });
  });

  it('should observe the element once ref is populated', () => {
    const mockElement = document.createElement('div');
    const { result } = renderHook(() => useScrollReveal());
    
    result.current.ref.current = mockElement;
    
    // Re-render to trigger useEffect with populated ref
    renderHook(() => useScrollReveal(), { initialProps: result.current });
    
    expect(mockIO.observe).toHaveBeenCalledWith(mockElement);
  });

  it('should set isVisible to true and unobserve when intersecting (triggerOnce = true)', () => {
    const mockElement = document.createElement('div');
    const { result } = renderHook(() => useScrollReveal());
    result.current.ref.current = mockElement;
    
    renderHook(() => useScrollReveal(), { initialProps: result.current });

    act(() => {
      mockIO.trigger([{ isIntersecting: true, target: mockElement }]);
    });

    expect(result.current.isVisible).toBe(true);
    expect(result.current.className).toBe('ease-fade-in ease-duration-normal ease-curve-ease');
    expect(mockIO.unobserve).toHaveBeenCalledWith(mockElement);
  });

  it('should toggle isVisible and not unobserve when intersecting (triggerOnce = false)', () => {
    const mockElement = document.createElement('div');
    const { result } = renderHook(() => useScrollReveal({ triggerOnce: false }));
    result.current.ref.current = mockElement;
    
    renderHook(() => useScrollReveal({ triggerOnce: false }), { initialProps: result.current });

    // Scroll into view
    act(() => {
      mockIO.trigger([{ isIntersecting: true, target: mockElement }]);
    });
    
    expect(result.current.isVisible).toBe(true);
    expect(result.current.className).toBe('ease-fade-in ease-duration-normal ease-curve-ease');
    expect(mockIO.unobserve).not.toHaveBeenCalled();

    // Scroll out of view
    act(() => {
      mockIO.trigger([{ isIntersecting: false, target: mockElement }]);
    });

    expect(result.current.isVisible).toBe(false);
    expect(result.current.className).toBe('ease-opacity-0');
  });

  it('should apply custom classes correctly', () => {
    const mockElement = document.createElement('div');
    const config = {
      animation: 'ease-slide-up',
      duration: 'ease-duration-slow',
      delay: 'ease-delay-200',
      curve: 'ease-curve-linear'
    };
    
    const { result } = renderHook(() => useScrollReveal(config));
    result.current.ref.current = mockElement;
    
    renderHook(() => useScrollReveal(config), { initialProps: result.current });

    act(() => {
      mockIO.trigger([{ isIntersecting: true, target: mockElement }]);
    });

    expect(result.current.className).toBe('ease-slide-up ease-duration-slow ease-delay-200 ease-curve-linear');
  });
});
