// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ModalAudit } from './script.js';

describe('Modal Focus Trap Audit (validation)', () => {
  let root, trigger;

  beforeEach(() => {
    document.body.innerHTML = '';
    root = document.createElement('div');
    root.innerHTML = '<button id="close">Close</button><input id="field" />';
    trigger = document.createElement('button');
    document.body.appendChild(trigger);
    document.body.appendChild(root);
  });

  function keydown(key, shiftKey = false) {
    document.dispatchEvent(new window.KeyboardEvent('keydown', { key, shiftKey, bubbles: true }));
  }

  it('sets role=dialog + aria-modal=true, hidden initially', () => {
    const a = new ModalAudit(root);
    expect(root.getAttribute('role')).toBe('dialog');
    expect(root.getAttribute('aria-modal')).toBe('true');
    expect(root.hasAttribute('hidden')).toBe(true);
    a.destroy();
  });

  it('open() sets aria-hidden=false and moves focus to first focusable', () => {
    const a = new ModalAudit(root);
    const spy = vi.spyOn(document.getElementById('close'), 'focus');
    a.open();
    expect(root.getAttribute('aria-hidden')).toBe('false');
    expect(spy).toHaveBeenCalled();
    a.destroy();
  });

  it('Escape closes', () => {
    const a = new ModalAudit(root);
    a.open();
    keydown('Escape');
    expect(a.isOpen()).toBe(false);
    a.destroy();
  });

  it('Tab on last focusable wraps to first', () => {
    const a = new ModalAudit(root);
    a.open();
    document.getElementById('field').focus();
    const spy = vi.spyOn(document.getElementById('close'), 'focus');
    keydown('Tab');
    expect(spy).toHaveBeenCalled();
    a.destroy();
  });

  it('Shift+Tab on first focusable wraps to last', () => {
    const a = new ModalAudit(root);
    a.open();
    document.getElementById('close').focus();
    const spy = vi.spyOn(document.getElementById('field'), 'focus');
    keydown('Tab', true);
    expect(spy).toHaveBeenCalled();
    a.destroy();
  });

  it('close() restores focus to the saved element', () => {
    const a = new ModalAudit(root, { trigger });
    trigger.focus();
    a.open();
    const spy = vi.spyOn(trigger, 'focus');
    a.close();
    expect(spy).toHaveBeenCalled();
    a.destroy();
  });

  it('trigger click opens', () => {
    const a = new ModalAudit(root, { trigger });
    trigger.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
    expect(a.isOpen()).toBe(true);
    a.destroy();
  });

  it('report() is compliant for a well-formed open modal', () => {
    const a = new ModalAudit(root);
    a.open();
    expect(a.isCompliant()).toBe(true);
    a.destroy();
  });

  it('report flags a modal missing role=dialog', () => {
    const div = document.createElement('div');
    div.innerHTML = '<button>x</button>';
    document.body.appendChild(div);
    const a = new ModalAudit(div);
    div.removeAttribute('role');
    expect(a.report().pass).toBe(false);
    a.destroy();
  });

  it('destroy() removes listeners without throwing', () => {
    const a = new ModalAudit(root);
    expect(() => a.destroy()).not.toThrow();
  });

  it('throws without a root element', () => {
    expect(() => new ModalAudit(null)).toThrow(TypeError);
  });
});
