/**
 * EaseMotion CSS — Motion Engine: Public Entry Point
 * ============================================================
 * Opt-in engine entry. Import this to enable the em="" DSL.
 *
 * Usage:
 *   import 'easemotion-css/engine';               // auto-starts runtime
 *
 *   // Or use the APIs directly:
 *   import { parse }              from 'easemotion-css/engine/parser';
 *   import { compile, className } from 'easemotion-css/engine/compiler';
 *   import { optimizeHtml }       from 'easemotion-css/engine/optimizer';
 *
 * Example HTML:
 *   <div em="fade-in 500ms ease-out delay-200ms"></div>
 *   <button em="bounce repeat-infinite">Click me</button>
 *   <section em="slide-up 800ms spring"></section>
 * ============================================================
 */

// Re-export all public APIs
export { parse }                                       from './engine/parser.js';
export { compile, className }                         from './engine/compiler.js';
export { extractEmAttributes, extractEaseClasses,
         pruneKeyframes, pruneClasses, optimizeHtml } from './engine/optimizer.js';
export { start, processElement, processAll }          from './engine/runtime.js';
