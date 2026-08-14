// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { DatePicker } from './script.js';

describe('Datepicker Calendar Grid Keyboard Navigation', () => {
  let root;

  beforeEach(() => {
    document.body.innerHTML = '';
    root = document.createElement('div');
    document.body.appendChild(root);
  });

  // ── Happy path ───────────────────────────────────────────────────

  it('sets role=grid on the root', () => {
    const d = new DatePicker(root, { date: new Date(2026, 0, 15) });
    expect(root.getAttribute('role')).toBe('grid');
    d.destroy();
  });

  it('renders grid rows and gridcells with data-date', () => {
    const d = new DatePicker(root, { date: new Date(2026, 0, 15) });
    const rows = root.querySelectorAll('[role="row"]');
    const cells = root.querySelectorAll('[role="gridcell"][data-date]');
    expect(rows.length).toBeGreaterThanOrEqual(5);
    expect(cells.length).toBeGreaterThanOrEqual(28);
    expect(root.querySelector('[data-date="2026-01-15"]')).not.toBeNull();
    d.destroy();
  });

  it('focused cell has tabindex=0 (roving), others -1', () => {
    const d = new DatePicker(root, { date: new Date(2026, 0, 15) });
    const focused = root.querySelector('[data-date="2026-01-15"]');
    expect(focused.getAttribute('tabindex')).toBe('0');
    const other = root.querySelector('[data-date="2026-01-01"]');
    expect(other.getAttribute('tabindex')).toBe('-1');
    d.destroy();
  });

  it('ArrowRight moves focus to the next day', () => {
    const d = new DatePicker(root, { date: new Date(2026, 0, 15) });
    d.move('ArrowRight');
    expect(d.getFocused()).toBe('2026-01-16');
    d.destroy();
  });

  it('ArrowDown moves focus forward one week', () => {
    const d = new DatePicker(root, { date: new Date(2026, 0, 15) });
    d.move('ArrowDown');
    expect(d.getFocused()).toBe('2026-01-22');
    d.destroy();
  });

  // ── Edge cases ───────────────────────────────────────────────────

  it('PageDown moves to the next month and clamps the day', () => {
    const d = new DatePicker(root, { date: new Date(2026, 0, 31) });
    d.move('PageDown');
    // Feb 2026 has 28 days → clamp to 2026-02-28
    expect(d.getFocused()).toBe('2026-02-28');
    d.destroy();
  });

  it('Home moves to the first day (Sunday) of the week', () => {
    const d = new DatePicker(root, { date: new Date(2026, 0, 15) }); // Thursday
    d.move('Home');
    expect(d.getFocused()).toBe('2026-01-11'); // Sunday
    d.destroy();
  });

  it('End moves to the last day (Saturday) of the week', () => {
    const d = new DatePicker(root, { date: new Date(2026, 0, 15) }); // Thursday
    d.move('End');
    expect(d.getFocused()).toBe('2026-01-17'); // Saturday
    d.destroy();
  });

  it('Enter/Space selects the focused cell (aria-selected=true)', () => {
    const d = new DatePicker(root, { date: new Date(2026, 0, 15) });
    root.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    const cell = root.querySelector('[data-date="2026-01-15"]');
    expect(cell.getAttribute('aria-selected')).toBe('true');
    expect(cell.classList.contains('is-selected')).toBe(true);
    d.destroy();
  });

  it('move() returns false for unmapped keys', () => {
    const d = new DatePicker(root, { date: new Date(2026, 0, 15) });
    expect(d.move('x')).toBe(false);
    d.destroy();
  });

  // ── Invalid inputs ───────────────────────────────────────────────

  it('throws without a root element', () => {
    expect(() => new DatePicker(null)).toThrow(TypeError);
    expect(() => new DatePicker({})).toThrow(TypeError);
  });

  it('throws on an invalid date', () => {
    expect(() => new DatePicker(root, { date: new Date('not-a-date') })).toThrow(TypeError);
  });
});
