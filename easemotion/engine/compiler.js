/**
 * EaseMotion CSS — Motion Engine: Compiler
 * ============================================================
 * Converts a parsed AST (from parser.js) into a minimal CSS
 * rule string, scoped to a stable deterministic class name.
 *
 * The class name is a stable hash of the AST so identical
 * animations share the same class — no duplicates injected.
 * ============================================================
 */

/**
 * Maps EaseMotion animation names to their @keyframe identifiers
 * in core/animations.css.
 */
const KEYFRAME_MAP = {
  'fade-in':                   'ease-kf-fade-in',
  'fade-out':                  'ease-kf-fade-out',
  'slide-up':                  'ease-kf-slide-up',
  'slide-down':                'ease-kf-slide-down',
  'slide-in-left':             'ease-kf-slide-in-left',
  'slide-in-right':            'ease-kf-slide-in-right',
  'slide-in-from-top':         'ease-kf-slide-in-from-top',
  'slide-in-from-bottom':      'ease-kf-slide-in-from-bottom',
  'slide-in-from-left':        'ease-kf-slide-in-from-left',
  'slide-in-from-right':       'ease-kf-slide-in-from-right',
  'slide-in-from-top-left':    'ease-kf-slide-in-from-top-left',
  'slide-in-from-top-right':   'ease-kf-slide-in-from-top-right',
  'slide-in-from-bottom-left': 'ease-kf-slide-in-from-bottom-left',
  'slide-in-from-bottom-right':'ease-kf-slide-in-from-bottom-right',
  'bounce':                    'ease-kf-bounce',
  'spin':                      'ease-kf-spin',
  'ping':                      'ease-kf-ping',
  'pulse':                     'ease-kf-pulse',
  'shake':                     'ease-kf-shake',
  'wobble':                    'ease-kf-wobble',
  'zoom-in':                   'ease-kf-zoom-in',
  'zoom-out':                  'ease-kf-zoom-out',
  'flip-x':                    'ease-kf-flip-x',
  'flip-y':                    'ease-kf-flip-y',
  'float':                     'ease-kf-float',
  'heartbeat':                 'ease-kf-heartbeat',
  'rubber-band':               'ease-kf-rubber-band',
};

/**
 * A fast, non-cryptographic string hash (djb2).
 * Used to generate stable, short class names.
 *
 * @param {string} str
 * @returns {string}  Hex string, e.g. "a3f2c1"
 */
function hashString(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) + h) ^ str.charCodeAt(i);
    h = h >>> 0; // keep unsigned 32-bit
  }
  return h.toString(16).padStart(6, '0').slice(0, 6);
}

/**
 * Compute a stable class name for the given AST.
 * Identical animation configurations always yield the same class.
 *
 * @param {object} ast  — output of parse()
 * @returns {string}    e.g. "_em_a3f2c1"
 */
export function className(ast) {
  const key = [
    ast.animation,
    ast.duration,
    ast.easing,
    ast.delay,
    ast.iterations,
    ast.fill,
    ast.direction,
  ].join('|');
  return `_em_${hashString(key)}`;
}

/**
 * Compile an AST into a CSS rule string.
 *
 * @param {object} ast       — output of parse()
 * @param {string} cls       — class name from className()
 * @returns {string}         CSS rule, e.g. "._em_a3f2 { animation: ... }"
 */
export function compile(ast, cls) {
  const keyframe = KEYFRAME_MAP[ast.animation];
  if (!keyframe) {
    console.warn(`[EaseMotion Engine] Unknown animation: "${ast.animation}". Did you mean one of: ${Object.keys(KEYFRAME_MAP).join(', ')}?`);
    return '';
  }

  const durationStr   = `${ast.duration}ms`;
  const delayStr      = ast.delay > 0 ? ` ${ast.delay}ms` : '';
  const iterationsStr = ast.iterations !== 1 ? ` ${ast.iterations}` : '';
  const directionStr  = ast.direction !== 'normal' ? ` ${ast.direction}` : '';
  const fillStr       = ` ${ast.fill}`;

  // Shorthand: name duration easing delay iteration-count direction fill-mode
  const shorthand = `${keyframe} ${durationStr} ${ast.easing}${delayStr}${iterationsStr}${directionStr}${fillStr}`;

  return [
    `.${cls} {`,
    `  animation: ${shorthand};`,
    `}`,
    // Respect prefers-reduced-motion automatically
    `@media (prefers-reduced-motion: reduce) {`,
    `  .${cls} {`,
    `    animation-duration: 0.01ms !important;`,
    `    animation-iteration-count: 1 !important;`,
    `  }`,
    `}`,
  ].join('\n');
}
