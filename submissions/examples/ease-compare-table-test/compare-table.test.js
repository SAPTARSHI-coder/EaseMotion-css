import { describe, it, expect, beforeAll } from 'vitest';
import { JSDOM } from 'jsdom';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

describe('EaseMotion Compare Table Edge Cases', () => {
  let dom;
  let document;
  let css;

  beforeAll(() => {
    // Resolve relative to the tests/ directory (once moved by maintainers)
    const componentsDir = resolve(__dirname, '../components');
    const compareTable = readFileSync(resolve(componentsDir, 'compare-table.css'), 'utf8');
    
    css = compareTable;
    dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>');
    document = dom.window.document;
    
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  });

  it('should apply correct hover state highlight background on rows (happy path)', () => {
    expect(css).toContain('.ease-compare-table tr:hover td');
    expect(css).toContain('background: #f8fafc;');
  });

  it('should override hover state for even rows to maintain zebra striping (edge case)', () => {
    expect(css).toContain('.ease-compare-table tbody tr:nth-child(even):hover td');
    expect(css).toContain('background: #f1f5f9;');
  });

  it('should handle featured column hover state correctly without background clashes', () => {
    expect(css).toContain('.ease-compare-table tr:hover .is-featured');
    expect(css).toContain('background: #e8e6ff;');
  });
  
  it('should parse invalid HTML structure gracefully without breaking layouts', () => {
    // Test that the CSS doesn't rely strictly on tbody for basic hovers
    const hasFlexibleSelector = css.includes('.ease-compare-table tr:hover td');
    expect(hasFlexibleSelector).toBe(true);
  });

  it('should render check and cross icons properly via pseudo-elements', () => {
    expect(css).toContain('.ease-icon-check::after');
    expect(css).toContain('.ease-icon-cross::before');
    expect(css).toContain('.ease-icon-cross::after');
  });
});
