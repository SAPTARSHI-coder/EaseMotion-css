// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Drawer } from './script.js';

describe('Drawer Component Escape Key Listener', () => {
  let root, trigger;

  beforeEach(() => {
    document.body.innerHTML = '';
    root = document.createElement('aside');
    trigger = document.createElement('button');
    document.body.appendChild(trigger);
    document.body.appendChild(root);
  });

  // ── Happy path ───────────────────────────────────────────────────

  it('sets role=dialog and aria-modal=true', () => {
    const d = new Drawer(root);
    expect(root.getAttribute('role')).toBe('dialog');
    expect(root.getAttribute('aria-modal')).toBe('true');
    d.destroy();
  });

  it('starts hidden', () => {
    const d = new Drawer(root);
    expect(d.isOpen()).toBe(false);
    expect(root.hasAttribute('hidden')).toBe(true);
    expect(root.getAttribute('aria-hidden')).toBe('true');
    d.destroy();
  });

  it('open() removes hidden and sets aria-hidden=false', () => {
    const d = new Drawer(root);
    d.open();
    expect(d.isOpen()).toBe(true);
    expect(root.hasAttribute('hidden')).toBe(false);
    expect(root.getAttribute('aria-hidden')).toBe('false');
    d.destroy();
  });

  it('close() restores hidden and sets aria-hidden=true', () => {
    const d = new Drawer(root);
    d.open();
    d.close();
    expect(d.isOpen()).toBe(false);
    expect(root.hasAttribute('hidden')).toBe(true);
    expect(root.getAttribute('aria-hidden')).toBe('true');
    d.destroy();
  });

  // ── Edge cases ───────────────────────────────────────────────────

  it('Escape closes an open drawer', () => {
    const d = new Drawer(root);
    d.open();
    document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape' }));
    expect(d.isOpen()).toBe(false);
    d.destroy();
  });

  it('Escape does nothing when the drawer is closed', () => {
    const d = new Drawer(root);
    document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape' }));
    expect(d.isOpen()).toBe(false);
    d.destroy();
  });

  it('close() returns focus to the trigger', () => {
    const d = new Drawer(root, { trigger });
    const spy = vi.spyOn(trigger, 'focus');
    d.open();
    d.close();
    expect(spy).toHaveBeenCalled();
    d.destroy();
  });

  it('clicking the trigger toggles the drawer', () => {
    const d = new Drawer(root, { trigger });
    trigger.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
    expect(d.isOpen()).toBe(true);
    trigger.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
    expect(d.isOpen()).toBe(false);
    d.destroy();
  });

  it('onChange fires with the new state on open and close', () => {
    const d = new Drawer(root);
    const spy = vi.fn();
    d.onChange(spy);
    d.open();
    d.close();
    expect(spy).toHaveBeenNthCalledWith(1, true);
    expect(spy).toHaveBeenNthCalledWith(2, false);
    d.destroy();
  });

  it('open()/close() are no-ops when already in that state', () => {
    const d = new Drawer(root);
    expect(d.open()).toBe(true);
    expect(d.open()).toBe(false);
    expect(d.close()).toBe(true);
    expect(d.close()).toBe(false);
    d.destroy();
  });

  // ── Invalid inputs ───────────────────────────────────────────────

  it('throws without a root element', () => {
    expect(() => new Drawer(null)).toThrow(TypeError);
    expect(() => new Drawer({})).toThrow(TypeError);
  });
});
