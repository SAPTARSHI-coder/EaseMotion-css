/**
 * EaseMotion CSS — Motion Engine: Optimizer
 * ============================================================
 * Build-time and runtime CSS tree-shaking utility.
 *
 * Build-time usage (Node.js):
 *   import { optimizeHtml } from 'easemotion-css/engine/optimizer';
 *   const result = optimizeHtml(htmlString, fullCssString);
 *   // result.css contains only the animation @keyframes + classes used
 *
 * Runtime usage (browser):
 *   Automatically called by runtime.js to deduplicate injected rules.
 * ============================================================
 */

/**
 * Extract all `em="..."` attribute values from an HTML string.
 *
 * @param {string} html
 * @returns {string[]}  Array of raw em attribute values
 */
export function extractEmAttributes(html) {
  const values = [];
  const re = /\bem=(["'])([^"']+)\1/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    values.push(m[2]);
  }
  return values;
}

/**
 * Extract all `class="..."` ease-* class names from an HTML string.
 *
 * @param {string} html
 * @returns {Set<string>}  Set of ease-* class names found
 */
export function extractEaseClasses(html) {
  const found = new Set();
  const classRe = /class=(["'])([^"']+)\1/g;
  let m;
  while ((m = classRe.exec(html)) !== null) {
    m[2].split(/\s+/).forEach(cls => {
      if (cls.startsWith('ease-')) found.add(cls);
    });
  }
  return found;
}

/**
 * Strip unused @keyframes from a CSS string.
 * Only keeps keyframes whose name appears in `usedKeyframes`.
 *
 * @param {string}      css
 * @param {Set<string>} usedKeyframes   Set of keyframe names to keep
 * @returns {string}    Pruned CSS
 */
export function pruneKeyframes(css, usedKeyframes) {
  // Match @keyframes blocks
  const kfRe = /@keyframes\s+([\w-]+)\s*\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}/g;
  return css.replace(kfRe, (block, name) => {
    return usedKeyframes.has(name) ? block : '';
  });
}

/**
 * Strip unused .ease-* CSS classes from a stylesheet.
 * Only keeps rules whose selector includes a class in `usedClasses`.
 *
 * NOTE: Only strips top-level class rules — @media, @layer, @supports
 * blocks are preserved as-is to avoid breaking the cascade.
 *
 * @param {string}      css
 * @param {Set<string>} usedClasses
 * @returns {string}
 */
export function pruneClasses(css, usedClasses) {
  // Simple: match .ease-something { ... } top-level rules
  const ruleRe = /\.(ease-[\w-]+)\s*\{[^{}]*\}/g;
  return css.replace(ruleRe, (block, cls) => {
    return usedClasses.has(cls) ? block : '';
  });
}

/**
 * Full HTML + CSS optimization pipeline (build-time, Node.js).
 *
 * Given an HTML file and the full EaseMotion CSS bundle, returns
 * a minimal CSS string containing only what the HTML actually uses.
 *
 * @param {string} html         Full HTML file contents
 * @param {string} fullCss      Full easemotion.css / easemotion.min.css
 * @returns {{ css: string, stats: { originalBytes: number, optimizedBytes: number, savings: string } }}
 */
export async function optimizeHtml(html, fullCss) {
  // Dynamically import parse + compile to resolve em="" attributes too
  const { parse } = await import('./parser.js');
  const { compile, className } = await import('./compiler.js');

  const usedClasses  = extractEaseClasses(html);
  const usedKeyframes = new Set();

  // Collect keyframes needed by ease-* utility classes
  // (We detect by inspecting class → keyframe name conventions)
  for (const cls of usedClasses) {
    // e.g. ease-fade-in → ease-kf-fade-in
    const kf = cls.replace('ease-', 'ease-kf-');
    usedKeyframes.add(kf);
  }

  // Also process em="" attributes
  const emValues = extractEmAttributes(html);
  const injectedRules = [];
  for (const val of emValues) {
    const ast = parse(val);
    if (!ast) continue;
    const cls = className(ast);
    usedClasses.add(cls);
    injectedRules.push(compile(ast, cls));
  }

  let optimized = pruneKeyframes(fullCss, usedKeyframes);
  optimized = pruneClasses(optimized, usedClasses);

  // Append injected em="" rules
  if (injectedRules.length > 0) {
    optimized += '\n\n/* EaseMotion Engine — injected rules */\n';
    optimized += injectedRules.join('\n');
  }

  // Collapse excessive blank lines
  optimized = optimized.replace(/\n{3,}/g, '\n\n').trim();

  const originalBytes  = new TextEncoder().encode(fullCss).length;
  const optimizedBytes = new TextEncoder().encode(optimized).length;
  const savings = (((originalBytes - optimizedBytes) / originalBytes) * 100).toFixed(1);

  return {
    css: optimized,
    stats: { originalBytes, optimizedBytes, savings: `${savings}%` },
  };
}
