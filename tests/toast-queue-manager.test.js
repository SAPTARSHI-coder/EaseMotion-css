// @vitest-environment jsdom

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { ToastQueueManager } from '../submissions/examples/toast-queue-manager-auto-dismiss-timer-sb/script.js';

describe('ToastQueueManager - auto-dismiss timer', () => {
  let region;

  beforeEach(() => {
    vi.useFakeTimers();
    
    globalThis.CSS = {
        escape: (value) => String(value),
      };

    region = document.createElement('div');
    document.body.appendChild(region);
  });

  afterEach(() => {
    vi.useRealTimers();
    document.body.innerHTML = '';
  });
  it('does not auto-dismiss a toast when duration is 0', () => {
    const t = new ToastQueueManager(region);

    t.push({ message: 'Persistent', duration: 0 });

    expect(t.size()).toBe(1);

    vi.advanceTimersByTime(60000);

    expect(t.size()).toBe(1);
  });
  it('auto-dismisses exactly when the duration expires', () => {
    const t = new ToastQueueManager(region);
  
    t.push({ message: 'Timed', duration: 2000 });
  
    expect(t.size()).toBe(1);
  
    vi.advanceTimersByTime(1999);
    expect(t.size()).toBe(1);
  
    vi.advanceTimersByTime(1);
    expect(t.size()).toBe(0);
  });
  it('rejects a negative duration', () => {
    const t = new ToastQueueManager(region);
  
    const result = t.push({
      message: 'Invalid',
      duration: -100,
    });
  
    expect(result).toBeNull();
    expect(t.size()).toBe(0);
  });
  it('rejects NaN as a duration', () => {
    const t = new ToastQueueManager(region);
  
    const result = t.push({
      message: 'Invalid',
      duration: NaN,
    });
  
    expect(result).toBeNull();
    expect(t.size()).toBe(0);
  });
  it('rejects Infinity as a duration', () => {
    const t = new ToastQueueManager(region);
  
    const result = t.push({
      message: 'Invalid',
      duration: Infinity,
    });
  
    expect(result).toBeNull();
    expect(t.size()).toBe(0);
  });
  it('uses the default duration when duration is not provided', () => {
    const t = new ToastQueueManager(region);
  
    t.push({ message: 'Default duration' });
  
    expect(t.size()).toBe(1);
  
    vi.advanceTimersByTime(3999);
    expect(t.size()).toBe(1);
  
    vi.advanceTimersByTime(1);
    expect(t.size()).toBe(0);
  });
});