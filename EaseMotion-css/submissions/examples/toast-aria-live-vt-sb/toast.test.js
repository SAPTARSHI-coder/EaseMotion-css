// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { ToastAudit } from './script.js';

describe('Toast ARIA Live Audit (validation)', () => {
  let root;

  beforeEach(() => {
    document.body.innerHTML = '';
    root = document.createElement('div');
    document.body.appendChild(root);
  });

  it('sets role=status + aria-live=polite + aria-atomic=true', () => {
    const a = new ToastAudit(root);
    expect(root.getAttribute('role')).toBe('status');
    expect(root.getAttribute('aria-live')).toBe('polite');
    expect(root.getAttribute('aria-atomic')).toBe('true');
    a.destroy();
  });

  it('assertive live region is configurable', () => {
    const a = new ToastAudit(root, { live: 'assertive' });
    expect(root.getAttribute('aria-live')).toBe('assertive');
    expect(a.getLive()).toBe('assertive');
    a.destroy();
  });

  it('announce() appends an item to the live region', () => {
    const a = new ToastAudit(root);
    a.announce('Saved');
    expect(root.children.length).toBe(1);
    expect(root.children[0].textContent).toBe('Saved');
    a.destroy();
  });

  it('announce() records the announcement', () => {
    const a = new ToastAudit(root);
    a.announce('Saved');
    a.announce('Error', { type: 'error' });
    const list = a.getAnnouncements();
    expect(list.length).toBe(2);
    expect(list[1]).toEqual({ text: 'Error', type: 'error' });
    a.destroy();
  });

  it('announce() adds a type class', () => {
    const a = new ToastAudit(root);
    a.announce('Oops', { type: 'error' });
    expect(root.children[0].classList.contains('ease-toast-audit__item--error')).toBe(true);
    a.destroy();
  });

  it('clear() empties the region and announcements', () => {
    const a = new ToastAudit(root);
    a.announce('Saved');
    a.clear();
    expect(root.children.length).toBe(0);
    expect(a.getAnnouncements().length).toBe(0);
    a.destroy();
  });

  it('report() is compliant for a polite region', () => {
    const a = new ToastAudit(root);
    a.announce('Saved');
    expect(a.isCompliant()).toBe(true);
    a.destroy();
  });

  it('report() flags a missing aria-live', () => {
    const a = new ToastAudit(root);
    root.removeAttribute('aria-live');
    expect(a.report().pass).toBe(false);
    a.destroy();
  });

  it('report() flags live=off with announcements', () => {
    const a = new ToastAudit(root, { live: 'off' });
    a.announce('Saved');
    expect(a.report().pass).toBe(false);
    a.destroy();
  });

  it('report() flags missing aria-atomic', () => {
    const a = new ToastAudit(root);
    root.removeAttribute('aria-atomic');
    expect(a.report().pass).toBe(false);
    a.destroy();
  });

  it('destroy() clears the region without throwing', () => {
    const a = new ToastAudit(root);
    a.announce('Saved');
    expect(() => a.destroy()).not.toThrow();
    expect(root.children.length).toBe(0);
  });

  it('throws without a root element', () => {
    expect(() => new ToastAudit(null)).toThrow(TypeError);
  });
});
