/**
 * EaseMotion CSS — Motion Engine: Optimizer Proposal
 * ============================================================
 * This isolated proposal mirrors the optimizer behavior from
 * easemotion/engine/optimizer.js and demonstrates the keyframe
 * fix for injected em="" animations.
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
  const re = /\bem=(['"])([^'"']+)\1/g;
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
  const classRe = /class=(['"])([^'"']+)\1/g;
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
  const kfRe = /@keyframes\s+([\w-]+)\s*\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}/g;
  return css.replace(kfRe, (block, name) => {
    return usedKeyframes.has(name) ? block : '';
  });
}

/**
 * Strip unused .ease-* CSS classes from a stylesheet.
 * Only keeps rules whose selector includes a class in `usedClasses`.
 *
 * @param {string}      css
 * @param {Set<string>} usedClasses
 * @returns {string}
 */
export function pruneClasses(css, usedClasses) {
  const ruleRe = /\.(ease-[\w-]+)\s*\{[^{}]*\}/g;
  return css.replace(ruleRe, (block, cls) => {
    return usedClasses.has(cls) ? block : '';
  });
}

/**
 * Parse a simple em="..." animation value.
 *
 * @param {string} value
 * @returns {{ animation: string, duration: number, easing: string, delay: number, iterations: number, fill: string, direction: string }|null}
 */
export function parse(value) {
  const parts = value.trim().split(/\s+/);
  if (parts.length === 0) return null;

  const animation = parts[0];
  const duration = Number.parseInt(parts[1] || '400', 10) || 400;
  const easing = parts[2] || 'ease';
  const delay = Number.parseInt(parts[3] || '0', 10) || 0;
  const iterations = Number.parseInt(parts[4] || '1', 10) || 1;
  const fill = parts[5] || 'both';
  const direction = parts[6] || 'normal';

  return { animation, duration, easing, delay, iterations, fill, direction };
}

/**
 * Create a stable class name for a parsed animation.
 *
 * @param {object} ast
 * @returns {string}
 */
export function className(ast) {
  return `_em_${ast.animation.replace(/[^a-z0-9]+/gi, '_')}`;
}

/**
 * Compile a parsed AST into an injected CSS rule.
 *
 * @param {object} ast
 * @param {string} cls
 * @returns {string}
 */
export function compile(ast, cls) {
  const keyframe = `ease-kf-${ast.animation}`;
  return [
    `.${cls} {`,
    `  animation: ${keyframe} ${ast.duration}ms ${ast.easing};`,
    `}`,
  ].join('\n');
}

/**
 * Return the keyframe name used by a parsed animation.
 *
 * @param {string} animation
 * @returns {string}
 */
export function keyframeName(animation) {
  return animation ? `ease-kf-${animation}` : '';
}

/**
 * Legacy behavior from the reported issue.
 *
 * @param {string} html
 * @param {string} fullCss
 * @returns {{ css: string, stats: { originalBytes: number, optimizedBytes: number, savings: string } }}
 */
export async function optimizeHtmlBroken(html, fullCss) {
  const usedClasses = extractEaseClasses(html);
  const usedKeyframes = new Set();

  for (const cls of usedClasses) {
    const kf = cls.replace('ease-', 'ease-kf-');
    usedKeyframes.add(kf);
  }

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

  if (injectedRules.length > 0) {
    optimized += '\n\n/* EaseMotion Engine — injected rules */\n';
    optimized += injectedRules.join('\n');
  }

  optimized = optimized.replace(/\n{3,}/g, '\n\n').trim();

  const originalBytes = new TextEncoder().encode(fullCss).length;
  const optimizedBytes = new TextEncoder().encode(optimized).length;
  const savings = (((originalBytes - optimizedBytes) / originalBytes) * 100).toFixed(1);

  return {
    css: optimized,
    stats: { originalBytes, optimizedBytes, savings: `${savings}%` },
  };
}

/**
 * Proposed fix: also track keyframes required by injected em="" rules.
 *
 * @param {string} html
 * @param {string} fullCss
 * @returns {{ css: string, stats: { originalBytes: number, optimizedBytes: number, savings: string } }}
 */
export async function optimizeHtml(html, fullCss) {
  const usedClasses = extractEaseClasses(html);
  const usedKeyframes = new Set();

  for (const cls of usedClasses) {
    const kf = cls.replace('ease-', 'ease-kf-');
    usedKeyframes.add(kf);
  }

  const emValues = extractEmAttributes(html);
  const injectedRules = [];
  for (const val of emValues) {
    const ast = parse(val);
    if (!ast) continue;
    const cls = className(ast);
    usedClasses.add(cls);

    // Keep the keyframe referenced by injected em="" animations.
    const keyframe = keyframeName(ast.animation);
    if (keyframe) {
      usedKeyframes.add(keyframe);
    }

    injectedRules.push(compile(ast, cls));
  }

  let optimized = pruneKeyframes(fullCss, usedKeyframes);
  optimized = pruneClasses(optimized, usedClasses);

  if (injectedRules.length > 0) {
    optimized += '\n\n/* EaseMotion Engine — injected rules */\n';
    optimized += injectedRules.join('\n');
  }

  optimized = optimized.replace(/\n{3,}/g, '\n\n').trim();

  const originalBytes = new TextEncoder().encode(fullCss).length;
  const optimizedBytes = new TextEncoder().encode(optimized).length;
  const savings = (((originalBytes - optimizedBytes) / originalBytes) * 100).toFixed(1);

  return {
    css: optimized,
    stats: { originalBytes, optimizedBytes, savings: `${savings}%` },
  };
}
