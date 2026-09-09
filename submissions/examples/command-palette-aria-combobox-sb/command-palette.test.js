// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { CommandPalette } from './script.js';

describe('Command Palette ARIA Combobox Role', () => {
  let input, listbox;

  beforeEach(() => {
    document.body.innerHTML = '';
    input = document.createElement('input');
    input.type = 'text';
    listbox = document.createElement('div');
    listbox.id = 'cmd-list';
    document.body.append(input, listbox);
  });

  // ── Happy path ───────────────────────────────────────────────────

  it('sets combobox role and aria-expanded=false initially', () => {
    const cp = new CommandPalette(input, listbox);
    expect(input.getAttribute('role')).toBe('combobox');
    expect(input.getAttribute('aria-expanded')).toBe('false');
    expect(input.getAttribute('aria-haspopup')).toBe('listbox');
    expect(listbox.getAttribute('role')).toBe('listbox');
    cp.destroy();
  });

  it('filter("te") renders only matching options as role=option', () => {
    const cp = new CommandPalette(input, listbox, [
      { id: 'a', label: 'Settings' },
      { id: 'b', label: 'Theme' },
      { id: 'c', label: 'Help' },
    ]);
    cp.filter('t');
    expect(listbox.querySelectorAll('[role="option"]')).toHaveLength(2);
    cp.destroy();
  });

  it('sets aria-activedescendant to the active option id', () => {
    const cp = new CommandPalette(input, listbox, [{ id: 'x', label: 'Text' }]);
    cp.filter('tex');
    expect(input.getAttribute('aria-activedescendant')).toBe('x');
    expect(input.getAttribute('aria-expanded')).toBe('true');
    cp.destroy();
  });

  it('ArrowDown/ArrowUp move the active option cyclically', () => {
    const cp = new CommandPalette(input, listbox, [
      { id: '1', label: 'Open' },
      { id: '2', label: 'Save' },
      { id: '3', label: 'Close' },
    ]);
    cp.filter(''); // all 3
    expect(cp.activeIndex).toBe(0);
    input.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'ArrowDown' }));
    expect(cp.activeIndex).toBe(1);
    input.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'ArrowUp' }));
    expect(cp.activeIndex).toBe(0);
    input.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'ArrowUp' }));
    expect(cp.activeIndex).toBe(2); // wraps
    cp.destroy();
  });

  // ── Edge cases ───────────────────────────────────────────────────

  it('aria-selected is true only on the active option', () => {
    const cp = new CommandPalette(input, listbox, [{ id: '1', label: 'Open' }, { id: '2', label: 'Save' }]);
    cp.filter('');
    cp.move(1);
    const opts = listbox.querySelectorAll('[role="option"]');
    expect(opts[1].getAttribute('aria-selected')).toBe('true');
    expect(opts[0].getAttribute('aria-selected')).toBe('false');
    cp.destroy();
  });

  it('no matches → aria-expanded=false, no activedescendant', () => {
    const cp = new CommandPalette(input, listbox, [{ id: '1', label: 'Open' }]);
    cp.filter('zzz');
    expect(input.getAttribute('aria-expanded')).toBe('false');
    expect(input.getAttribute('aria-activedescendant')).toBeNull();
    expect(cp.activeIndex).toBe(-1);
    cp.destroy();
  });

  it('typing fires input → filter updates the listbox', () => {
    const cp = new CommandPalette(input, listbox, [{ id: '1', label: 'Save' }, { id: '2', label: 'Edit' }]);
    input.value = 'sa';
    input.dispatchEvent(new window.Event('input', { bubbles: true }));
    expect(listbox.querySelectorAll('[role="option"]')).toHaveLength(1);
    cp.destroy();
  });

  // ── Invalid inputs ───────────────────────────────────────────────

  it('setItems ignores non-array / items without a label', () => {
    const cp = new CommandPalette(input, listbox);
    cp.setItems('nope');
    expect(cp.items).toHaveLength(0);
    cp.setItems([{ id: '1' }, { label: 'ok' }]);
    expect(cp.items).toHaveLength(1);
    cp.destroy();
  });

  it('move() with no matches returns -1', () => {
    const cp = new CommandPalette(input, listbox);
    expect(cp.move(1)).toBe(-1);
    cp.destroy();
  });

  it('selectActive() returns null when nothing is active', () => {
    const cp = new CommandPalette(input, listbox);
    expect(cp.selectActive()).toBeNull();
    cp.destroy();
  });

  it('throws without valid elements', () => {
    expect(() => new CommandPalette(null, listbox)).toThrow(TypeError);
    expect(() => new CommandPalette(input, {})).toThrow(TypeError);
  });
});
