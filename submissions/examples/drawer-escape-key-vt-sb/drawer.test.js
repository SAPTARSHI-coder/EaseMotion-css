// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { DrawerAudit } from './script.js';

describe('Drawer Escape Key Audit (validation)', () => {
  let root, trigger;

  beforeEach(() => {
    document.body.innerHTML = '';
    root = document.createElement('aside');
    root.innerHTML = '<button>Close</button>';
    trigger = document.createElement('button');
    document.body.appendChild(trigger);
    document.body.appendChild(root);
  });

  function keydown(key) {
    document.dispatchEvent(new window.KeyboardEvent('keydown', { key, bubbles: true }));
  }

  it('starts hidden with role=dialog + aria-modal=true + aria-hidden=true', () => {
    const a = new DrawerAudit(root);
    expect(root.getAttribute('role')).toBe('dialog');
    expect(root.getAttribute('aria-modal')).toBe('true');
    expect(root.getAttribute('aria-hidden')).toBe('true');
    expect(a.isOpen()).toBe(false);
    a.destroy();
  });

  it('open() toggles aria-hidden to false', () => {
    const a = new DrawerAudit(root);
    a.open();
    expect(a.isOpen()).toBe(true);
    expect(root.getAttribute('aria-hidden')).toBe('false');
    a.destroy();
  });

  it('close() toggles aria-hidden back to true', () => {
    const a = new DrawerAudit(root);
    a.open();
    a.close();
    expect(root.getAttribute('aria-hidden')).toBe('true');
    a.destroy();
  });

  it('Escape closes only when open', () => {
    const a = new DrawerAudit(root);
    keydown('Escape');
    expect(a.isOpen()).toBe(false);
    a.open();
    keydown('Escape');
    expect(a.isOpen()).toBe(false);
    a.destroy();
  });

  it('close() returns focus to the trigger', () => {
    const a = new DrawerAudit(root, { trigger });
    const spy = vi.spyOn(trigger, 'focus');
    a.open();
    a.close();
    expect(spy).toHaveBeenCalled();
    a.destroy();
  });

  it('trigger click opens the drawer', () => {
    const a = new DrawerAudit(root, { trigger });
    trigger.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
    expect(a.isOpen()).toBe(true);
    a.destroy();
  });

  it('toggle() flips state', () => {
    const a = new DrawerAudit(root);
    a.toggle();
    expect(a.isOpen()).toBe(true);
    a.toggle();
    expect(a.isOpen()).toBe(false);
    a.destroy();
  });

  it('report() is compliant when closed and open', () => {
    const a = new DrawerAudit(root);
    expect(a.isCompliant()).toBe(true);
    a.open();
    expect(a.isCompliant()).toBe(true);
    a.destroy();
  });

  it('report() flags missing role', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const a = new DrawerAudit(div);
    div.removeAttribute('role');
    expect(a.report().pass).toBe(false);
    a.destroy();
  });

  it('destroy() removes listeners without throwing', () => {
    const a = new DrawerAudit(root);
    expect(() => a.destroy()).not.toThrow();
  });

  it('throws without a root element', () => {
    expect(() => new DrawerAudit(null)).toThrow(TypeError);
  });
});
