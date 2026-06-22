import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

const scriptPath = path.resolve(__dirname, '../core/reveal.js');
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

    // Mock CSS.escape if not present in JSDOM
    if (!window.CSS) {
      window.CSS = {
        escape: function(str) {
          return str.replace(/([!"#$%&'()*+,.\/:;<=>?@\[\\\]^`{|}~])/g, '\\$1');
        }
      };
    }

    // Mock matchMedia
    window.matchMedia = window.matchMedia || function() {
      return {
        matches: false,
        media: '',
        onchange: null,
        addListener: function() {},
        removeListener: function() {},
        addEventListener: function() {},
        removeEventListener: function() {},
        dispatchEvent: function() { return false; }
      };
    };

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

  afterEach(() => {
    if (dom) {
      dom.window.close();
    }
  });

  it('should initialize elements without active class if not active', () => {
    const el = document.getElementById('test-element');
    // Note: This tests the initialization behavior
    // Assuming the script runs on DOMContentLoaded
    const event = new window.Event('DOMContentLoaded');
    document.dispatchEvent(event);

    expect(el.classList.contains('ease-reveal-active')).toBe(false);
  });
});
