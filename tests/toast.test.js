// @vitest-environment jsdom
/**
 * EaseMotion CSS — Toast Queue Manager Unit Tests
 * ============================================================
 * Tests for core/toast.js (Toast Queue Manager Auto-Dismiss Timer).
 * Run: npm test
 * ============================================================
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import fs from 'fs';
import path from 'path';

const toastScript = fs.readFileSync(path.resolve(__dirname, '../core/toast.js'), 'utf8');

function loadToastModule() {
  // Run the IIFE in the current jsdom context; it attaches window.EaseToast.
  // eslint-disable-next-line no-new-func
  new Function(toastScript)();
}

describe('Toast Queue Manager — core/toast.js', () => {
  let EaseToast;

  beforeEach(() => {
    vi.useFakeTimers();
    document.body.innerHTML = '';
    window.CSS = window.CSS || {};
    window.CSS.escape = (val) => String(val).replace(/"/g, '\\"');
    loadToastModule();
    EaseToast = window.EaseToast;
  });

  afterEach(() => {
    vi.useRealTimers();
    delete window.EaseToast;
  });

  // ── Happy path ───────────────────────────────────────────────────

  it('push() adds a toast element to the region and returns its id', () => {
    const id = EaseToast.push({ message: 'Saved successfully' });
    expect(id).toBeTruthy();
    const el = document.querySelector('[data-toast-id="' + id + '"]');
    expect(el).not.toBeNull();
    expect(el.classList.contains('ease-toast')).toBe(true);
    expect(el.textContent).toContain('Saved successfully');
    expect(EaseToast.size()).toBe(1);
  });

  it('auto-dismisses the toast after the configured duration', () => {
    EaseToast.push({ message: 'Hello', duration: 2000 });
    expect(EaseToast.size()).toBe(1);
    expect(document.querySelectorAll('.ease-toast')).toHaveLength(1);

    vi.advanceTimersByTime(1999);
    expect(EaseToast.size()).toBe(1);

    vi.advanceTimersByTime(1);
    expect(EaseToast.size()).toBe(0);
    expect(document.querySelectorAll('.ease-toast')).toHaveLength(0);
  });

  it('uses the default duration of 4000ms when none is given', () => {
    EaseToast.push({ message: 'Default' });
    vi.advanceTimersByTime(3999);
    expect(EaseToast.size()).toBe(1);
    vi.advanceTimersByTime(1);
    expect(EaseToast.size()).toBe(0);
  });

  it('renders an optional title and applies the type modifier class', () => {
    const id = EaseToast.push({ message: 'Done', title: 'Success', type: 'success' });
    const el = document.querySelector('[data-toast-id="' + id + '"]');
    expect(el.classList.contains('ease-toast-success')).toBe(true);
    const strong = el.querySelector('strong');
    expect(strong).not.toBeNull();
    expect(strong.textContent).toBe('Success');
  });

  it('clicking a toast dismisses it before the timer fires', () => {
    const id = EaseToast.push({ message: 'Click me', duration: 5000 });
    const el = document.querySelector('[data-toast-id="' + id + '"]');
    el.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
    expect(EaseToast.size()).toBe(0);
    // Advancing past the original duration must not error or re-dismiss.
    vi.advanceTimersByTime(6000);
    expect(EaseToast.size()).toBe(0);
  });

  // ── Edge cases ───────────────────────────────────────────────────

  it('creates a region container when none exists', () => {
    expect(document.querySelector('[data-toast-region]')).toBeNull();
    EaseToast.push({ message: 'No region yet' });
    expect(document.querySelector('[data-toast-region]')).not.toBeNull();
  });

  it('caps the queue at the maximum and dismisses the oldest toast', () => {
    const first = EaseToast.push({ message: 'first', duration: 0 });
    EaseToast.push({ message: 'second', duration: 0 });
    EaseToast.push({ message: 'third', duration: 0 });
    EaseToast.push({ message: 'fourth', duration: 0 });
    EaseToast.push({ message: 'fifth', duration: 0 });
    expect(EaseToast.size()).toBe(5);

    const sixth = EaseToast.push({ message: 'sixth', duration: 0 });
    expect(EaseToast.size()).toBe(5);
    // The oldest (first) should have been evicted.
    expect(EaseToast.dismiss(first)).toBe(false);
    expect(EaseToast.dismiss(sixth)).toBe(true);
  });

  it('does not auto-dismiss a sticky (duration: 0) toast', () => {
    EaseToast.push({ message: 'Sticky', duration: 0 });
    vi.advanceTimersByTime(60000);
    expect(EaseToast.size()).toBe(1);
  });

  it('dedupes re-pushing the same explicit id without adding a duplicate', () => {
    const id = EaseToast.push({ message: 'one', id: 'X', duration: 0 });
    expect(EaseToast.size()).toBe(1);
    const again = EaseToast.push({ message: 'two', id: 'X', duration: 0 });
    expect(again).toBe(id);
    expect(EaseToast.size()).toBe(1);
    expect(document.querySelectorAll('.ease-toast')).toHaveLength(1);
  });

  it('clear() removes every queued toast', () => {
    EaseToast.push({ message: 'a', duration: 0 });
    EaseToast.push({ message: 'b', duration: 0 });
    EaseToast.push({ message: 'c', duration: 0 });
    EaseToast.clear();
    expect(EaseToast.size()).toBe(0);
    expect(document.querySelectorAll('.ease-toast')).toHaveLength(0);
  });

  it('dismiss() cancels the pending auto-dismiss timer', () => {
    const id = EaseToast.push({ message: 'timer', duration: 3000 });
    EaseToast.dismiss(id);
    // No pending timers should remain for this toast.
    const pending = vi.getTimerCount();
    expect(pending).toBe(0);
  });

  // ── Invalid inputs ───────────────────────────────────────────────

  it('rejects a push with no message', () => {
    expect(EaseToast.push({})).toBeNull();
    expect(EaseToast.push({ message: '   ' })).toBeNull();
    expect(EaseToast.size()).toBe(0);
  });

  it('rejects a push with a non-object argument', () => {
    expect(EaseToast.push(null)).toBeNull();
    expect(EaseToast.push(undefined)).toBeNull();
    expect(EaseToast.push('text')).toBeNull();
    expect(EaseToast.size()).toBe(0);
  });

  it('rejects a non-number duration', () => {
    expect(EaseToast.push({ message: 'x', duration: 'soon' })).toBeNull();
    expect(EaseToast.push({ message: 'x', duration: NaN })).toBeNull();
    expect(EaseToast.push({ message: 'x', duration: Infinity })).toBeNull();
    expect(EaseToast.size()).toBe(0);
  });

  it('rejects a negative duration', () => {
    expect(EaseToast.push({ message: 'x', duration: -1 })).toBeNull();
    expect(EaseToast.size()).toBe(0);
  });

  it('dismiss() on an unknown id returns false and is a no-op', () => {
    expect(EaseToast.dismiss('nope')).toBe(false);
    expect(EaseToast.dismiss(null)).toBe(false);
  });
});
