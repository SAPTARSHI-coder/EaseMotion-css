// @vitest-environment jsdom
/**
 * Toast Queue Manager — Auto-Dismiss Timer — Vitest unit tests
 * Run: npx vitest run submissions/examples/toast-queue-manager-auto-dismiss-timer-sb/toast-queue-manager.test.js
 *
 * Covers happy path, edge cases, and invalid inputs.
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { ToastQueueManager } from './script.js';

describe('ToastQueueManager — auto-dismiss timer', () => {
  let region;

  beforeEach(() => {
    vi.useFakeTimers();
    window.CSS = window.CSS || {};
    window.CSS.escape = (val) => String(val).replace(/"/g, '\\"');
    region = document.createElement('div');
    region.setAttribute('data-toast-region', '');
    document.body.appendChild(region);
  });

  afterEach(() => {
    vi.useRealTimers();
    document.body.innerHTML = '';
  });

  // ── Happy path ───────────────────────────────────────────────────

  it('push() adds a toast element and returns its id', () => {
    const t = new ToastQueueManager(region);
    const id = t.push({ message: 'Saved successfully' });
    expect(id).toBeTruthy();
    const el = region.querySelector('[data-toast-id="' + id + '"]');
    expect(el).not.toBeNull();
    expect(el.classList.contains('ease-toast')).toBe(true);
    expect(el.textContent).toContain('Saved successfully');
    expect(t.size()).toBe(1);
  });

  it('auto-dismisses the toast after the configured duration', () => {
    const t = new ToastQueueManager(region);
    t.push({ message: 'Hello', duration: 2000 });
    expect(t.size()).toBe(1);
    vi.advanceTimersByTime(1999);
    expect(t.size()).toBe(1);
    vi.advanceTimersByTime(1);
    expect(t.size()).toBe(0);
    expect(region.querySelectorAll('.ease-toast')).toHaveLength(0);
  });

  it('uses the default duration of 4000ms when none is given', () => {
    const t = new ToastQueueManager(region);
    t.push({ message: 'Default' });
    vi.advanceTimersByTime(3999);
    expect(t.size()).toBe(1);
    vi.advanceTimersByTime(1);
    expect(t.size()).toBe(0);
  });

  it('honours a custom defaultDuration option', () => {
    const t = new ToastQueueManager(region, { defaultDuration: 1000 });
    t.push({ message: 'Custom' });
    vi.advanceTimersByTime(999);
    expect(t.size()).toBe(1);
    vi.advanceTimersByTime(1);
    expect(t.size()).toBe(0);
  });

  it('renders an optional title and applies the type modifier class', () => {
    const t = new ToastQueueManager(region);
    const id = t.push({ message: 'Done', title: 'Success', type: 'success' });
    const el = region.querySelector('[data-toast-id="' + id + '"]');
    expect(el.classList.contains('ease-toast-success')).toBe(true);
    const strong = el.querySelector('strong');
    expect(strong).not.toBeNull();
    expect(strong.textContent).toBe('Success');
  });

  it('clicking a toast dismisses it before the timer fires', () => {
    const t = new ToastQueueManager(region);
    const id = t.push({ message: 'Click me', duration: 5000 });
    const el = region.querySelector('[data-toast-id="' + id + '"]');
    el.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
    expect(t.size()).toBe(0);
    vi.advanceTimersByTime(6000);
    expect(t.size()).toBe(0);
  });

  // ── Edge cases ───────────────────────────────────────────────────

  it('caps the queue at maxQueue and dismisses the oldest toast', () => {
    const t = new ToastQueueManager(region, { maxQueue: 3 });
    const first = t.push({ message: 'first', duration: 0 });
    t.push({ message: 'second', duration: 0 });
    t.push({ message: 'third', duration: 0 });
    expect(t.size()).toBe(3);

    const sixth = t.push({ message: 'fourth', duration: 0 });
    expect(t.size()).toBe(3);
    expect(t.dismiss(first)).toBe(false); // evicted
    expect(t.dismiss(sixth)).toBe(true);
  });

  it('does not auto-dismiss a sticky (duration: 0) toast', () => {
    const t = new ToastQueueManager(region);
    t.push({ message: 'Sticky', duration: 0 });
    vi.advanceTimersByTime(60000);
    expect(t.size()).toBe(1);
  });

  it('dedupes re-pushing the same explicit id without adding a duplicate', () => {
    const t = new ToastQueueManager(region);
    const id = t.push({ message: 'one', id: 'X', duration: 0 });
    expect(t.size()).toBe(1);
    const again = t.push({ message: 'two', id: 'X', duration: 0 });
    expect(again).toBe(id);
    expect(t.size()).toBe(1);
    expect(region.querySelectorAll('.ease-toast')).toHaveLength(1);
  });

  it('clear() removes every queued toast', () => {
    const t = new ToastQueueManager(region);
    t.push({ message: 'a', duration: 0 });
    t.push({ message: 'b', duration: 0 });
    t.push({ message: 'c', duration: 0 });
    t.clear();
    expect(t.size()).toBe(0);
    expect(region.querySelectorAll('.ease-toast')).toHaveLength(0);
  });

  it('dismiss() cancels the pending auto-dismiss timer', () => {
    const t = new ToastQueueManager(region);
    const id = t.push({ message: 'timer', duration: 3000 });
    t.dismiss(id);
    expect(vi.getTimerCount()).toBe(0);
  });

  // ── Invalid inputs ───────────────────────────────────────────────

  it('rejects a push with no message', () => {
    const t = new ToastQueueManager(region);
    expect(t.push({})).toBeNull();
    expect(t.push({ message: '   ' })).toBeNull();
    expect(t.size()).toBe(0);
  });

  it('rejects a push with a non-object argument', () => {
    const t = new ToastQueueManager(region);
    expect(t.push(null)).toBeNull();
    expect(t.push(undefined)).toBeNull();
    expect(t.push('text')).toBeNull();
    expect(t.size()).toBe(0);
  });

  it('rejects a non-number duration', () => {
    const t = new ToastQueueManager(region);
    expect(t.push({ message: 'x', duration: 'soon' })).toBeNull();
    expect(t.push({ message: 'x', duration: NaN })).toBeNull();
    expect(t.push({ message: 'x', duration: Infinity })).toBeNull();
    expect(t.size()).toBe(0);
  });

  it('rejects a negative duration', () => {
    const t = new ToastQueueManager(region);
    expect(t.push({ message: 'x', duration: -1 })).toBeNull();
    expect(t.size()).toBe(0);
  });

  it('dismiss() on an unknown id returns false and is a no-op', () => {
    const t = new ToastQueueManager(region);
    expect(t.dismiss('nope')).toBe(false);
    expect(t.dismiss(null)).toBe(false);
  });

  it('throws when constructed without a container element', () => {
    expect(() => new ToastQueueManager(null)).toThrow(TypeError);
    expect(() => new ToastQueueManager({})).toThrow(TypeError);
  });
});
