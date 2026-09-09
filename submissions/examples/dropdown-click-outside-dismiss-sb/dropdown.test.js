// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { DropdownToggle } from './script.js';

describe('Dropdown Click-Outside Dismiss Listener', () => {
  let button, menu;

  beforeEach(() => {
    document.body.innerHTML = '';
    button = document.createElement('button');
    menu = document.createElement('div');
    menu.className = 'ease-dropdown-menu';
    document.body.append(button, menu);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  // ── Happy path ───────────────────────────────────────────────────

  it('toggle() opens and closes the menu', () => {
    const d = new DropdownToggle(button, menu);
    d.toggle();
    expect(d.isOpen).toBe(true);
    expect(menu.getAttribute('data-open')).toBe('true');
    expect(button.getAttribute('aria-expanded')).toBe('true');
    d.toggle();
    expect(d.isOpen).toBe(false);
    expect(menu.getAttribute('data-open')).toBe('false');
    d.destroy();
  });

  it('open()/close() set aria-expanded correctly', () => {
    const d = new DropdownToggle(button, menu);
    d.open();
    expect(button.getAttribute('aria-expanded')).toBe('true');
    d.close();
    expect(button.getAttribute('aria-expanded')).toBe('false');
    d.destroy();
  });

  it('clicking the button toggles the menu', () => {
    const d = new DropdownToggle(button, menu);
    button.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
    expect(d.isOpen).toBe(true);
    d.destroy();
  });

  // ── Edge cases ───────────────────────────────────────────────────

  it('clicking outside the menu closes it', () => {
    const d = new DropdownToggle(button, menu);
    d.open();
    const outside = document.createElement('div');
    document.body.appendChild(outside);
    outside.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
    expect(d.isOpen).toBe(false);
    d.destroy();
  });

  it('clicking inside the menu does not close it', () => {
    const d = new DropdownToggle(button, menu);
    d.open();
    const item = document.createElement('a');
    menu.appendChild(item);
    item.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
    expect(d.isOpen).toBe(true);
    d.destroy();
  });

  it('Escape closes the open menu and refocuses the button', () => {
    const d = new DropdownToggle(button, menu);
    d.open();
    const focusSpy = vi.spyOn(button, 'focus');
    document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape' }));
    expect(d.isOpen).toBe(false);
    expect(focusSpy).toHaveBeenCalled();
    d.destroy();
  });

  it('close() on an already-closed menu is a no-op returning false', () => {
    const d = new DropdownToggle(button, menu);
    expect(d.close()).toBe(false);
    d.destroy();
  });

  it('destroy() removes listeners so outside clicks no longer close', () => {
    const d = new DropdownToggle(button, menu);
    d.destroy();
    d.isOpen = true; // simulate a stale state
    const outside = document.createElement('div');
    document.body.appendChild(outside);
    outside.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
    expect(d.isOpen).toBe(true); // listener gone, stays true
  });

  // ── Invalid inputs ───────────────────────────────────────────────

  it('throws without valid elements', () => {
    expect(() => new DropdownToggle(null, menu)).toThrow(TypeError);
    expect(() => new DropdownToggle(button, null)).toThrow(TypeError);
    expect(() => new DropdownToggle({}, {})).toThrow(TypeError);
  });
});
