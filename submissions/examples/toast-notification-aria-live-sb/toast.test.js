// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { ToastRegion } from './script.js';

describe('Toast Notification ARIA Live Region', () => {
  let root;

  beforeEach(() => {
    document.body.innerHTML = '';
    root = document.createElement('div');
    root.id = 'toast-region';
    document.body.appendChild(root);
    vi.useFakeTimers();
  });

  afterEach(() => vi.useRealTimers());

  // ── Happy path ───────────────────────────────────────────────────

  it('sets role=status, aria-live=polite, aria-atomic=true on the region', () => {
    const t = new ToastRegion(root);
    expect(root.getAttribute('role')).toBe('status');
    expect(root.getAttribute('aria-live')).toBe('polite');
    expect(root.getAttribute('aria-atomic')).toBe('true');
    t.destroy();
  });

  it('show() creates a toast element with the message', () => {
    const t = new ToastRegion(root);
    const id = t.show('Saved!');
    const toast = document.getElementById(id);
    expect(toast).not.toBeNull();
    expect(toast.textContent).toBe('Saved!');
    expect(toast.getAttribute('role')).toBe('status');
    t.destroy();
  });

  it('show() returns the toast id', () => {
    const t = new ToastRegion(root);
    const id = t.show('Hello');
    expect(typeof id).toBe('string');
    expect(id).toMatch(/^ease-toast-\d+$/);
    t.destroy();
  });

  it('toast auto-dismisses after the timeout', () => {
    const t = new ToastRegion(root, { timeout: 3000 });
    t.show('Bye');
    expect(t.count()).toBe(1);
    vi.advanceTimersByTime(3000);
    expect(t.count()).toBe(0);
    t.destroy();
  });

  // ── Edge cases ───────────────────────────────────────────────────

  it('assertive politeness toggles aria-live', () => {
    const t = new ToastRegion(root);
    t.show('Warning', { politeness: 'assertive' });
    expect(root.getAttribute('aria-live')).toBe('assertive');
    t.destroy();
  });

  it('timeout=0 keeps the toast until manually dismissed', () => {
    const t = new ToastRegion(root);
    const id = t.show('Stays', { timeout: 0 });
    vi.advanceTimersByTime(999999);
    expect(t.count()).toBe(1);
    t.dismiss(id);
    expect(t.count()).toBe(0);
    t.destroy();
  });

  it('clear() removes all toasts', () => {
    const t = new ToastRegion(root);
    t.show('A');
    t.show('B');
    t.show('C');
    expect(t.count()).toBe(3);
    t.clear();
    expect(t.count()).toBe(0);
    t.destroy();
  });

  it('destroy() clears timers and toasts', () => {
    const t = new ToastRegion(root);
    t.show('A', { timeout: 5000 });
    t.show('B', { timeout: 10000 });
    t.destroy();
    expect(t.count()).toBe(0);
  });

  // ── Invalid inputs ───────────────────────────────────────────────

  it('throws without a root element', () => {
    expect(() => new ToastRegion(null)).toThrow(TypeError);
    expect(() => new ToastRegion({})).toThrow(TypeError);
  });

  it('show() rejects empty/non-string messages', () => {
    const t = new ToastRegion(root);
    expect(() => t.show('')).toThrow(TypeError);
    expect(() => t.show(null)).toThrow(TypeError);
    t.destroy();
  });
});
