// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { CommandPalette } from './script.js';

describe('Command Palette ARIA Combobox', () => {
  let root, input, list;

  beforeEach(() => {
    document.body.innerHTML = '';
    root = document.createElement('div');
    input = document.createElement('input');
    input.setAttribute('data-cp-input', '');
    list = document.createElement('ul');
    list.setAttribute('data-cp-list', '');
    root.appendChild(input);
    root.appendChild(list);
    document.body.appendChild(root);
  });

  function keydown(key) {
    input.dispatchEvent(new window.KeyboardEvent('keydown', { key, bubbles: true }));
  }

  it('sets role=combobox + aria-expanded=false + aria-autocomplete=list on the input', () => {
    const c = new CommandPalette(root, { options: ['Save', 'Open'] });
    expect(input.getAttribute('role')).toBe('combobox');
    expect(input.getAttribute('aria-expanded')).toBe('false');
    expect(input.getAttribute('aria-autocomplete')).toBe('list');
    c.destroy();
  });

  it('renders role=option items with aria-selected reflecting the active index', () => {
    const c = new CommandPalette(root, { options: ['Save', 'Open'] });
    const opts = list.querySelectorAll('[role="option"]');
    expect(opts.length).toBe(2);
    expect(opts[0].getAttribute('aria-selected')).toBe('true');
    expect(opts[1].getAttribute('aria-selected')).toBe('false');
    c.destroy();
  });

  it('query() filters options', () => {
    const c = new CommandPalette(root, { options: ['Save', 'Open', 'Search'] });
    const res = c.query('sa');
    expect(res.length).toBe(1);
    expect(res[0]).toBe('Save');
    c.destroy();
  });

  it('ArrowDown opens and moves active to next option', () => {
    const c = new CommandPalette(root, { options: ['Save', 'Open'] });
    keydown('ArrowDown');
    expect(c.isOpen()).toBe(true);
    expect(list.querySelectorAll('[role="option"]')[1].getAttribute('aria-selected')).toBe('true');
    c.destroy();
  });

  it('ArrowUp wraps to the last option', () => {
    const c = new CommandPalette(root, { options: ['Save', 'Open'] });
    keydown('ArrowUp');
    expect(list.querySelectorAll('[role="option"]')[1].getAttribute('aria-selected')).toBe('true');
    c.destroy();
  });

  it('Enter selects the active option and closes', () => {
    const c = new CommandPalette(root, { options: ['Save', 'Open'] });
    c.open();
    const val = c.selectActive();
    expect(val).toBe('Save');
    expect(c.isOpen()).toBe(false);
    c.destroy();
  });

  it('Escape closes the palette', () => {
    const c = new CommandPalette(root, { options: ['Save'] });
    c.open();
    keydown('Escape');
    expect(c.isOpen()).toBe(false);
    c.destroy();
  });

  it('clicking an option selects it', () => {
    const c = new CommandPalette(root, { options: ['Save', 'Open'] });
    list.querySelectorAll('[role="option"]')[1].click();
    expect(input.value).toBe('Open');
    expect(c.isOpen()).toBe(false);
    c.destroy();
  });

  it('aria-activedescendant points to the active option', () => {
    const c = new CommandPalette(root, { options: ['Save', 'Open'] });
    expect(input.getAttribute('aria-activedescendant')).toBe('cp-option-0');
    c.move(1);
    expect(input.getAttribute('aria-activedescendant')).toBe('cp-option-1');
    c.destroy();
  });

  it('selectActive() returns null when no options match', () => {
    const c = new CommandPalette(root, { options: ['Save'] });
    c.query('zzz');
    expect(c.selectActive()).toBeNull();
    c.destroy();
  });

  it('destroy() removes listeners without throwing', () => {
    const c = new CommandPalette(root, { options: ['Save'] });
    expect(() => c.destroy()).not.toThrow();
  });

  it('throws without a root element', () => {
    expect(() => new CommandPalette(null)).toThrow(TypeError);
  });
});
