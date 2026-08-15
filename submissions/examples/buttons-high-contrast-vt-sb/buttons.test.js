// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { ButtonAudit } from './script.js';

describe('Buttons High-Contrast Audit (validation)', () => {
  let root;

  beforeEach(() => {
    document.body.innerHTML = '';
    root = document.createElement('button');
    document.body.appendChild(root);
  });

  // ── Happy path ───────────────────────────────────────────────────

  it('adds the ease-btn-audit class', () => {
    const a = new ButtonAudit(root);
    expect(root.classList.contains('ease-btn-audit')).toBe(true);
    a.destroy();
  });

  it('report() passes for a well-formed button', () => {
    const a = new ButtonAudit(root);
    const report = a.report();
    expect(report.focusable).toBe(true);
    expect(report.pass).toBe(true);
    expect(report.violations.length).toBe(0);
    a.destroy();
  });

  it('isCompliant() is true for a button', () => {
    const a = new ButtonAudit(root);
    expect(a.isCompliant()).toBe(true);
    a.destroy();
  });

  // ── Edge cases ───────────────────────────────────────────────────

  it('non-button element gets role=button and tabindex=0', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const a = new ButtonAudit(div);
    expect(div.getAttribute('role')).toBe('button');
    expect(div.tabIndex).toBe(0);
    expect(a.report().focusable).toBe(true);
    a.destroy();
  });

  it('preserves an existing role', () => {
    const div = document.createElement('div');
    div.setAttribute('role', 'link');
    document.body.appendChild(div);
    const a = new ButtonAudit(div);
    expect(div.getAttribute('role')).toBe('link');
    a.destroy();
  });

  it('destroy() removes the audit class', () => {
    const a = new ButtonAudit(root);
    a.destroy();
    expect(root.classList.contains('ease-btn-audit')).toBe(false);
  });

  it('report flags a div not made focusable (already tabindex -1)', () => {
    const div = document.createElement('div');
    div.tabIndex = -1;
    document.body.appendChild(div);
    const a = new ButtonAudit(div);
    const report = a.report();
    expect(report.focusable).toBe(false);
    expect(report.pass).toBe(false);
    a.destroy();
  });

  it('does not re-set tabindex when already set to a positive value', () => {
    const div = document.createElement('div');
    div.tabIndex = 5;
    document.body.appendChild(div);
    const a = new ButtonAudit(div);
    expect(div.tabIndex).toBe(5);
    a.destroy();
  });

  // ── Invalid inputs ───────────────────────────────────────────────

  it('throws without a root element', () => {
    expect(() => new ButtonAudit(null)).toThrow(TypeError);
    expect(() => new ButtonAudit({})).toThrow(TypeError);
  });
});
