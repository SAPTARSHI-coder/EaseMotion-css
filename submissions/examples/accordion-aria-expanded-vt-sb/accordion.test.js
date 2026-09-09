// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { AccordionAudit } from './script.js';

describe('Accordion ARIA Expanded Audit (validation)', () => {
  let root;

  beforeEach(() => {
    document.body.innerHTML = '';
    root = document.createElement('div');
    root.innerHTML = `
      <div><button data-acc-header id="h0">Section 1</button><div data-acc-panel>Content 1</div></div>
      <div><button data-acc-header id="h1">Section 2</button><div data-acc-panel>Content 2</div></div>
      <div><button data-acc-header id="h2">Section 3</button><div data-acc-panel>Content 3</div></div>`;
    document.body.appendChild(root);
  });

  it('headers get role=button + aria-expanded=false initially', () => {
    const a = new AccordionAudit(root);
    const h0 = root.querySelector('#h0');
    expect(h0.getAttribute('role')).toBe('button');
    expect(h0.getAttribute('aria-expanded')).toBe('false');
    a.destroy();
  });

  it('panels start hidden with role=region + aria-labelledby', () => {
    const a = new AccordionAudit(root);
    const panel = root.querySelectorAll('[data-acc-panel]')[0];
    expect(panel.getAttribute('role')).toBe('region');
    expect(panel.hasAttribute('hidden')).toBe(true);
    expect(panel.getAttribute('aria-labelledby')).toBe('h0');
    a.destroy();
  });

  it('each header has aria-controls pointing at its panel id', () => {
    const a = new AccordionAudit(root);
    const h1 = root.querySelector('#h1');
    const panel = root.querySelectorAll('[data-acc-panel]')[1];
    expect(h1.getAttribute('aria-controls')).toBe(panel.id);
    a.destroy();
  });

  it('open(1) sets aria-expanded=true and un-hides panel 1 only', () => {
    const a = new AccordionAudit(root);
    a.open(1);
    expect(root.querySelector('#h1').getAttribute('aria-expanded')).toBe('true');
    expect(root.querySelectorAll('[data-acc-panel]')[1].hasAttribute('hidden')).toBe(false);
    expect(root.querySelector('#h0').getAttribute('aria-expanded')).toBe('false');
    a.destroy();
  });

  it('single-open: opening section 2 closes section 1', () => {
    const a = new AccordionAudit(root);
    a.open(0);
    a.open(1);
    expect(a.isOpen(0)).toBe(false);
    expect(a.isOpen(1)).toBe(true);
    a.destroy();
  });

  it('toggle() flips state', () => {
    const a = new AccordionAudit(root);
    a.toggle(0);
    expect(a.isOpen(0)).toBe(true);
    a.toggle(0);
    expect(a.isOpen(0)).toBe(false);
    a.destroy();
  });

  it('click toggles the section', () => {
    const a = new AccordionAudit(root);
    root.querySelector('#h2').click();
    expect(a.isOpen(2)).toBe(true);
    a.destroy();
  });

  it('report() is compliant when well-formed', () => {
    const a = new AccordionAudit(root);
    a.open(1);
    expect(a.isCompliant()).toBe(true);
    a.destroy();
  });

  it('report flags out-of-sync expanded/hidden', () => {
    const a = new AccordionAudit(root);
    root.querySelector('#h0').setAttribute('aria-expanded', 'true'); // panel still hidden
    expect(a.report().pass).toBe(false);
    a.destroy();
  });

  it('close(0) hides the panel', () => {
    const a = new AccordionAudit(root);
    a.open(0);
    a.close(0);
    expect(root.querySelectorAll('[data-acc-panel]')[0].hasAttribute('hidden')).toBe(true);
    a.destroy();
  });

  it('destroy() removes listeners without throwing', () => {
    const a = new AccordionAudit(root);
    expect(() => a.destroy()).not.toThrow();
  });

  it('throws without a root element', () => {
    expect(() => new AccordionAudit(null)).toThrow(TypeError);
  });
});
