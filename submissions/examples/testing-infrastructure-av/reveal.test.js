import { describe, it, expect, beforeEach } from 'vitest';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

const scriptPath = path.resolve(__dirname, '../../../core/reveal.js');
let scriptCode = '';
if (fs.existsSync(scriptPath)) {
  scriptCode = fs.readFileSync(scriptPath, 'utf-8');
}

describe('Reveal Component JavaScript Logic', () => {
  let dom;
  let window;
  let document;

  beforeEach(() => {
    dom = new JSDOM(`
      <!DOCTYPE html>
      <body>
        <div class="ease-reveal" id="test-element">
          <p>Revealed Content</p>
        </div>
      </body>
    `, { runScripts: "dangerously" });
    
    window = dom.window;
    document = window.document;

    // Mock IntersectionObserver
    window.IntersectionObserver = class {
      constructor(callback) { this.callback = callback; }
      observe() {}
      unobserve() {}
      disconnect() {}
    };

    if (scriptCode) {
      const script = document.createElement('script');
      script.textContent = scriptCode;
      document.body.appendChild(script);
    }
  });

  it('should initialize elements with aria-hidden="true" if not active', () => {
    const el = document.getElementById('test-element');
    // Note: This tests the initialization behavior
    // Assuming the script runs on DOMContentLoaded
    const event = new window.Event('DOMContentLoaded');
    document.dispatchEvent(event);

    expect(el.getAttribute('aria-hidden')).toBe('true');
  });
});
