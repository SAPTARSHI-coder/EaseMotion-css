// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { DropdownMenu } from './script.js';

describe('Dropdown Menu ARIA Menuitem Focus', () => {
  let root, trigger;

  beforeEach(() => {
    document.body.innerHTML = '';
    root = document.createElement('div');
    root.innerHTML = '<button data-menu-item>Open</button><button data-menu-item>Edit</button><button data-menu-item>Save</button>';
    trigger = document.createElement('button');
    document.body.appendChild(trigger);
    document.body.appendChild(root);
  });

  function keydown(key) {
    root.dispatchEvent(new window.KeyboardEvent('keydown', { key, bubbles: true }));
  }

  it('sets role=menu + aria-hidden=true; items get role=menuitem', () => {
    const m = new DropdownMenu(root, { trigger });
    expect(root.getAttribute('role')).toBe('menu');
    expect(root.getAttribute('aria-hidden')).toBe('true');
    expect(root.querySelectorAll('[role="menuitem"]').length).toBe(3);
    m.destroy();
  });

  it('first item has tabindex=0 (roving)', () => {
    const m = new DropdownMenu(root, { trigger });
    const items = root.querySelectorAll('[role="menuitem"]');
    expect(items[0].getAttribute('tabindex')).toBe('0');
    expect(items[1].getAttribute('tabindex')).toBe('-1');
    m.destroy();
  });

  it('open() sets aria-hidden=false + trigger aria-expanded=true', () => {
    const m = new DropdownMenu(root, { trigger });
    m.open();
    expect(m.isOpen()).toBe(true);
    expect(root.getAttribute('aria-hidden')).toBe('false');
    expect(trigger.getAttribute('aria-expanded')).toBe('true');
    m.destroy();
  });

  it('ArrowDown moves active focus to the next item', () => {
    const m = new DropdownMenu(root, { trigger });
    m.open();
    const items = root.querySelectorAll('[role="menuitem"]');
    const spy = vi.spyOn(items[1], 'focus');
    keydown('ArrowDown');
    expect(spy).toHaveBeenCalled();
    expect(items[0].getAttribute('tabindex')).toBe('-1');
    expect(items[1].getAttribute('tabindex')).toBe('0');
    m.destroy();
  });

  it('ArrowUp wraps to the last item', () => {
    const m = new DropdownMenu(root, { trigger });
    m.open();
    const items = root.querySelectorAll('[role="menuitem"]');
    const spy = vi.spyOn(items[2], 'focus');
    keydown('ArrowUp');
    expect(spy).toHaveBeenCalled();
    m.destroy();
  });

  it('Home/End jump to first/last item', () => {
    const m = new DropdownMenu(root, { trigger });
    m.open();
    const items = root.querySelectorAll('[role="menuitem"]');
    keydown('End');
    expect(items[2].getAttribute('tabindex')).toBe('0');
    keydown('Home');
    expect(items[0].getAttribute('tabindex')).toBe('0');
    m.destroy();
  });

  it('Escape closes and restores focus to the trigger', () => {
    const m = new DropdownMenu(root, { trigger });
    m.open();
    const spy = vi.spyOn(trigger, 'focus');
    keydown('Escape');
    expect(m.isOpen()).toBe(false);
    expect(spy).toHaveBeenCalled();
    m.destroy();
  });

  it('trigger click toggles the menu', () => {
    const m = new DropdownMenu(root, { trigger });
    trigger.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
    expect(m.isOpen()).toBe(true);
    trigger.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
    expect(m.isOpen()).toBe(false);
    m.destroy();
  });

  it('close() sets aria-hidden=true + trigger aria-expanded=false', () => {
    const m = new DropdownMenu(root, { trigger });
    m.open();
    m.close();
    expect(root.getAttribute('aria-hidden')).toBe('true');
    expect(trigger.getAttribute('aria-expanded')).toBe('false');
    m.destroy();
  });

  it('destroy() removes listeners without throwing', () => {
    const m = new DropdownMenu(root, { trigger });
    expect(() => m.destroy()).not.toThrow();
  });

  it('throws without a root element', () => {
    expect(() => new DropdownMenu(null)).toThrow(TypeError);
  });
});
