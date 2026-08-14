// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Modal } from './script.js';

describe('Modal Component Focus Trap', () => {
  let root, trigger;

  beforeEach(() => {
    document.body.innerHTML = '';
    root = document.createElement('div');
    root.id = 'modal';
    root.innerHTML = '<button id="close">Close</button><input id="field" />';
    trigger = document.createElement('button');
    trigger.id = 'open';
    document.body.appendChild(trigger);
    document.body.appendChild(root);
  });

  function keydown(key, shiftKey = false) {
    document.dispatchEvent(
      new window.KeyboardEvent('keydown', { key, shiftKey, bubbles: true }),
    );
  }

  // ── Happy path ───────────────────────────────────────────────────

  it('sets role=dialog and aria-modal=true, hidden initially', () => {
    const m = new Modal(root);
    expect(root.getAttribute('role')).toBe('dialog');
    expect(root.getAttribute('aria-modal')).toBe('true');
    expect(root.hasAttribute('hidden')).toBe(true);
    m.destroy();
  });

  it('open() removes hidden and sets aria-hidden=false', () => {
    const m = new Modal(root);
    m.open();
    expect(m.isOpen()).toBe(true);
    expect(root.hasAttribute('hidden')).toBe(false);
    expect(root.getAttribute('aria-hidden')).toBe('false');
    m.destroy();
  });

  it('open() moves focus to the first focusable element', () => {
    const m = new Modal(root);
    const close = document.getElementById('close');
    const spy = vi.spyOn(close, 'focus');
    m.open();
    expect(spy).toHaveBeenCalled();
    m.destroy();
  });

  it('Escape closes the modal', () => {
    const m = new Modal(root);
    m.open();
    keydown('Escape');
    expect(m.isOpen()).toBe(false);
    m.destroy();
  });

  // ── Edge cases ───────────────────────────────────────────────────

  it('close() restores focus to the saved element', () => {
    const m = new Modal(root, { trigger });
    trigger.focus();
    m.open();
    const spy = vi.spyOn(trigger, 'focus');
    m.close();
    expect(spy).toHaveBeenCalled();
    m.destroy();
  });

  it('Tab on last focusable wraps to first', () => {
    const m = new Modal(root);
    m.open();
    const field = document.getElementById('field');
    field.focus();
    const first = document.getElementById('close');
    const spy = vi.spyOn(first, 'focus');
    keydown('Tab');
    expect(spy).toHaveBeenCalled();
    m.destroy();
  });

  it('Shift+Tab on first focusable wraps to last', () => {
    const m = new Modal(root);
    m.open();
    const first = document.getElementById('close');
    first.focus();
    const last = document.getElementById('field');
    const spy = vi.spyOn(last, 'focus');
    keydown('Tab', true);
    expect(spy).toHaveBeenCalled();
    m.destroy();
  });

  it('clicking the trigger opens the modal', () => {
    const m = new Modal(root, { trigger });
    trigger.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
    expect(m.isOpen()).toBe(true);
    m.destroy();
  });

  it('backdrop click (event target === root) closes the modal', () => {
    const m = new Modal(root);
    m.open();
    root.dispatchEvent(new window.MouseEvent('mousedown', { bubbles: true }));
    expect(m.isOpen()).toBe(false);
    m.destroy();
  });

  // ── Invalid inputs ───────────────────────────────────────────────

  it('throws without a root element', () => {
    expect(() => new Modal(null)).toThrow(TypeError);
    expect(() => new Modal({})).toThrow(TypeError);
  });
});
