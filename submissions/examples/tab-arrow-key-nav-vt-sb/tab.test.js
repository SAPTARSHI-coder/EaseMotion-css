// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { TabAudit } from './script.js';

describe('Tab Arrow-Key Navigation Audit (validation)', () => {
  let root;

  beforeEach(() => {
    document.body.innerHTML = '';
    root = document.createElement('div');
    root.innerHTML = `
      <button role="tab" id="tab0" aria-controls="p0">A</button>
      <button role="tab" id="tab1" aria-controls="p1">B</button>
      <button role="tab" id="tab2" aria-controls="p2">C</button>
      <div id="p0"></div><div id="p1"></div><div id="p2"></div>`;
    document.body.appendChild(root);
  });

  function keydown(target, key) {
    target.dispatchEvent(new window.KeyboardEvent('keydown', { key, bubbles: true }));
  }

  it('sets role=tablist and assigns role=tab children', () => {
    const a = new TabAudit(root);
    expect(root.getAttribute('role')).toBe('tablist');
    expect(root.querySelectorAll('[role="tab"]').length).toBe(3);
    a.destroy();
  });

  it('first tab is active (aria-selected=true, tabindex=0)', () => {
    const a = new TabAudit(root);
    const t0 = document.getElementById('tab0');
    expect(t0.getAttribute('aria-selected')).toBe('true');
    expect(t0.getAttribute('tabindex')).toBe('0');
    a.destroy();
  });

  it('ArrowRight moves focus to the next tab', () => {
    const a = new TabAudit(root);
    const spy = vi.spyOn(document.getElementById('tab1'), 'focus');
    keydown(document.getElementById('tab0'), 'ArrowRight');
    expect(a.getActive()).toBe(1);
    expect(spy).toHaveBeenCalled();
    a.destroy();
  });

  it('ArrowLeft wraps from first to last', () => {
    const a = new TabAudit(root);
    keydown(document.getElementById('tab0'), 'ArrowLeft');
    expect(a.getActive()).toBe(2);
    a.destroy();
  });

  it('Home/End jump to first/last', () => {
    const a = new TabAudit(root);
    keydown(document.getElementById('tab0'), 'End');
    expect(a.getActive()).toBe(2);
    keydown(document.getElementById('tab2'), 'Home');
    expect(a.getActive()).toBe(0);
    a.destroy();
  });

  it('click selects the clicked tab', () => {
    const a = new TabAudit(root);
    document.getElementById('tab2').click();
    expect(a.getActive()).toBe(2);
    a.destroy();
  });

  it('vertical orientation uses Up/Down', () => {
    const a = new TabAudit(root, { vertical: true });
    keydown(document.getElementById('tab0'), 'ArrowDown');
    expect(a.getActive()).toBe(1);
    a.destroy();
  });

  it('report() is compliant for a well-formed tablist', () => {
    const a = new TabAudit(root);
    expect(a.isCompliant()).toBe(true);
    a.destroy();
  });

  it('report flags broken roving tabindex', () => {
    const a = new TabAudit(root);
    document.getElementById('tab0').setAttribute('tabindex', '-1');
    expect(a.report().pass).toBe(false);
    a.destroy();
  });

  it('panel gets role=tabpanel and aria-hidden syncs', () => {
    const a = new TabAudit(root);
    const p0 = document.getElementById('p0');
    expect(p0.getAttribute('role')).toBe('tabpanel');
    expect(p0.getAttribute('aria-hidden')).toBe('false');
    a.destroy();
  });

  it('destroy() removes listeners without throwing', () => {
    const a = new TabAudit(root);
    expect(() => a.destroy()).not.toThrow();
  });

  it('throws without a root element', () => {
    expect(() => new TabAudit(null)).toThrow(TypeError);
  });
});
