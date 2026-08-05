/**
 * EaseMotion CSS — Motion Engine: Runtime
 * ============================================================
 * Browser runtime that watches for `em=""` attributes using a
 * MutationObserver and injects optimized CSS classes on the fly.
 *
 * Usage (opt-in):
 *   import 'easemotion-css/engine';
 *
 * The runtime does NOT require easemotion.css to be loaded —
 * it works standalone. But when combined with easemotion.css,
 * the @keyframe definitions are already present in the cascade.
 *
 * Graceful degradation:
 *   If JS is disabled, em="" attributes are simply ignored.
 *   Pure CSS ease-* classes continue to work without any JS.
 * ============================================================
 */

import { parse }            from '../../../easemotion/engine/parser.js';
import { compile, className } from '../../../easemotion/engine/compiler.js';

/** Registry of already-injected class names → avoid duplicate rules */
const injected = new Set();

/** Single shared <style> element for all engine rules */
let styleEl = null;

/**
 * Ensure the engine's <style> element exists in <head>.
 * @returns {HTMLStyleElement}
 */
function getStyleElement() {
  if (styleEl && styleEl.isConnected) return styleEl;
  styleEl = document.createElement('style');
  styleEl.id = 'easemotion-engine';
  styleEl.setAttribute('data-easemotion', 'runtime');
  document.head.appendChild(styleEl);
  return styleEl;
}

/**
 * Process a single element's `em=""` attribute.
 * Compiles the animation, injects the CSS rule (if not already done),
 * and applies the generated class to the element.
 *
 * @param {Element} el
 */
function processElement(el) {
  const value = el.getAttribute('em');
  if (!value) return;

  const ast = parse(value);
  if (!ast) {
    if (typeof process !== 'undefined' && process?.env?.NODE_ENV !== 'production') {
      console.warn(`[EaseMotion Engine] Could not parse em="${value}". Unknown animation name.`);
    }
    return;
  }

  const cls = className(ast);

  // Inject CSS rule only once per unique configuration
  if (!injected.has(cls)) {
    const css = compile(ast, cls);
    if (css) {
      getStyleElement().textContent += '\n' + css;
      injected.add(cls);
    }
  }

  // Apply class to element (idempotent)
  if (!el.classList.contains(cls)) {
    el.classList.add(cls);
  }
}

/**
 * Process all elements in a given root that have an `em=""` attribute.
 * @param {Element|Document} root
 */
function processAll(root) {
  const elements = root.querySelectorAll
    ? root.querySelectorAll('[em]')
    : [];
  for (const el of elements) {
    processElement(el);
  }
}

/**
 * Start the EaseMotion Engine runtime.
 * Processes the current DOM immediately, then watches for new elements.
 *
 * Called automatically when this module is imported.
 */
function start() {
  // Process elements already in the DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => processAll(document));
  } else {
    processAll(document);
  }

  // Watch for dynamically added/modified elements
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      // New nodes added to DOM
      if (mutation.type === 'childList') {
        for (const node of mutation.addedNodes) {
          if (node.nodeType !== Node.ELEMENT_NODE) continue;
          processElement(node);
          processAll(node); // check descendants too
        }
      }
      // em="" attribute changed on an existing element
      if (mutation.type === 'attributes' && mutation.attributeName === 'em') {
        processElement(mutation.target);
      }
    }
  });

  observer.observe(document.body || document.documentElement, {
    childList:  true,
    subtree:    true,
    attributes: true,
    attributeFilter: ['em'],
  });
}

// Auto-start when imported in a browser context
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  start();
}

export { start, processElement, processAll };
