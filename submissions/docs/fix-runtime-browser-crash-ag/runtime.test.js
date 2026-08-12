// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { processElement } from './runtime.js';

describe('runtime.js', () => {
  beforeEach(() => {
    document.head.innerHTML = '';
    document.body.innerHTML = '';
  });

  it('gracefully handles invalid animation names without crashing when process is undefined', () => {
    const el = document.createElement('div');
    el.setAttribute('em', 'unknown-animation-token');
    document.body.appendChild(el);

    // Save global process
    const originalProcess = globalThis.process;

    try {
      // Temporarily remove process from global scope
      Object.defineProperty(globalThis, 'process', {
        value: undefined,
        configurable: true,
      });

      // Should not throw ReferenceError
      expect(() => {
        processElement(el);
      }).not.toThrow();
    } finally {
      // Restore process
      Object.defineProperty(globalThis, 'process', {
        value: originalProcess,
        configurable: true,
      });
    }
  });

  it('processes valid animations and injects styles', () => {
    const el = document.createElement('div');
    el.setAttribute('em', 'fade-in 500ms');
    document.body.appendChild(el);

    processElement(el);

    // Should generate a class name like _em_xxxxxx
    const classes = Array.from(el.classList);
    const emClass = classes.find((c) => c.startsWith('_em_'));
    expect(emClass).toBeDefined();

    // Should inject style element in head
    const styleEl = document.getElementById('easemotion-engine');
    expect(styleEl).not.toBeNull();
    expect(styleEl.textContent).toContain(emClass);
    expect(styleEl.textContent).toContain('500ms');
  });
});
