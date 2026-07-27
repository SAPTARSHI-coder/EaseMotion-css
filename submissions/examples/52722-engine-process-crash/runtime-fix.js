/**
 * EaseMotion CSS — Motion Engine: Runtime (Fixed)
 * ============================================================
 * FIX for #52722: Added typeof check before accessing process.env
 * to prevent ReferenceError in browser environments.
 *
 * CHANGE (line 55):
 *   BEFORE: if (process?.env?.NODE_ENV !== 'production') {
 *   AFTER:  if (typeof process === 'undefined' || process.env?.NODE_ENV !== 'production') {
 *
 * The `typeof` check is safe even when `process` is undeclared,
 * unlike direct access which throws ReferenceError in browsers.
 * ============================================================
 */

import { parse }            from './parser.js';
import { compile, className } from './compiler.js';

const injected = new Set();
let styleEl = null;

function getStyleElement() {
  if (styleEl && styleEl.isConnected) return styleEl;
  styleEl = document.createElement('style');
  styleEl.id = 'easemotion-engine';
  styleEl.setAttribute('data-easemotion', 'runtime');
  document.head.appendChild(styleEl);
  return styleEl;
}

function processElement(el) {
  const value = el.getAttribute('em');
  if (!value) return;

  const ast = parse(value);
  if (!ast) {
    // FIX #52722: Safe environment check — typeof prevents ReferenceError in browsers
    if (typeof process === 'undefined' || process.env?.NODE_ENV !== 'production') {
      console.warn(`[EaseMotion Engine] Could not parse em="${value}". Unknown animation name.`);
    }
    return;
  }

  const cls = className(ast);

  if (!injected.has(cls)) {
    const css = compile(ast, cls);
    if (css) {
      getStyleElement().textContent += '\n' + css;
      injected.add(cls);
    }
  }

  if (!el.classList.contains(cls)) {
    el.classList.add(cls);
  }
}

function processAll(root) {
  const elements = root.querySelectorAll
    ? root.querySelectorAll('[em]')
    : [];
  for (const el of elements) {
    processElement(el);
  }
}

function start() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => processAll(document));
  } else {
    processAll(document);
  }

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'childList') {
        for (const node of mutation.addedNodes) {
          if (node.nodeType !== Node.ELEMENT_NODE) continue;
          processElement(node);
          processAll(node);
        }
      }
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

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  start();
}

export { start, processElement, processAll };
