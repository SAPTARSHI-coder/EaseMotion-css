// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { MenuFocus } from './script.js';

describe('Dropdown Menu ARIA Menuitem Focus', () => {
  let menu;

  beforeEach(() => {
    document.body.innerHTML = '';
    menu = document.createElement('div');
    ['Edit', 'Duplicate', 'Delete'].forEach((label) => {
      const item = document.createElement('div');
      item.setAttribute('data-menuitem', '');
      item.textContent = label;
      menu.appendChild(item);
    });
    document.body.appendChild(menu);
  });

  // ── Happy path ───────────────────────────────────────────────────

  it('sets role=menu on the container and role=menuitem on items', () => {
    const m = new MenuFocus(menu);
    expect(menu.getAttribute('role')).toBe('menu');
    menu.querySelectorAll('[data-menuitem]').forEach((item) => {
      expect(item.getAttribute('role')).toBe('menuitem');
    });
    m.destroy();
  });

  it('only the active item has tabindex=0 (roving tabindex)', () => {
    const m = new MenuFocus(menu);
    const tabs = Array.from(menu.querySelectorAll('[data-menuitem]')).map((i) =>
      i.getAttribute('tabindex'),
    );
    expect(tabs).toEqual(['0', '-1', '-1']);
    m.destroy();
  });

  it('ArrowDown moves focus to the next item and updates tabindex', () => {
    const m = new MenuFocus(menu);
    menu.querySelectorAll('[data-menuitem]')[0].focus();
    vi.spyOn(menu.querySelectorAll('[data-menuitem]')[1], 'focus');
    menu.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
    expect(m.activeIndex).toBe(1);
    const tabs = Array.from(menu.querySelectorAll('[data-menuitem]')).map((i) =>
      i.getAttribute('tabindex'),
    );
    expect(tabs).toEqual(['-1', '0', '-1']);
    m.destroy();
  });

  it('ArrowUp wraps from first to last', () => {
    const m = new MenuFocus(menu);
    menu.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true }));
    expect(m.activeIndex).toBe(2);
    m.destroy();
  });

  // ── Edge cases ───────────────────────────────────────────────────

  it('Home/End jump to first/last', () => {
    const m = new MenuFocus(menu);
    menu.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'End', bubbles: true }));
    expect(m.activeIndex).toBe(2);
    menu.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Home', bubbles: true }));
    expect(m.activeIndex).toBe(0);
    m.destroy();
  });

  it('Escape closes the menu and returns focus to the trigger', () => {
    const trigger = document.createElement('button');
    document.body.appendChild(trigger);
    const m = new MenuFocus(menu, { trigger });
    const spy = vi.spyOn(trigger, 'focus');
    menu.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    expect(menu.getAttribute('aria-expanded')).toBe('false');
    expect(spy).toHaveBeenCalled();
    m.destroy();
  });

  it('open() sets aria-expanded=true and focuses the active item', () => {
    const m = new MenuFocus(menu);
    const spy = vi.spyOn(menu.querySelectorAll('[data-menuitem]')[0], 'focus');
    m.open();
    expect(menu.getAttribute('aria-expanded')).toBe('true');
    expect(spy).toHaveBeenCalled();
    m.destroy();
  });

  // ── Invalid inputs ───────────────────────────────────────────────

  it('works with an empty menu (no items)', () => {
    const empty = document.createElement('div');
    const m = new MenuFocus(empty);
    expect(m.items).toHaveLength(0);
    expect(() => m.open()).not.toThrow();
    m.destroy();
  });

  it('throws without a valid menu element', () => {
    expect(() => new MenuFocus(null)).toThrow(TypeError);
    expect(() => new MenuFocus({})).toThrow(TypeError);
  });
});
