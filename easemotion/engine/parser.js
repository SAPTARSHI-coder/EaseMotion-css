/**
 * EaseMotion CSS — Motion Engine: Parser
 * ============================================================
 * Tokenizes the `em=""` attribute value string into a structured AST.
 *
 * Input:  "fade-in 500ms ease-out delay-200ms repeat-2"
 * Output: {
 *   animation: 'fade-in',
 *   duration:  500,
 *   easing:    'ease-out',
 *   delay:     200,
 *   iterations: 2,
 *   fill:      'both'
 * }
 * ============================================================
 */

/** Canonical easing aliases → CSS values */
const EASING_MAP = {
  'ease':        'cubic-bezier(0.4, 0, 0.2, 1)',
  'ease-in':     'cubic-bezier(0.4, 0, 1, 1)',
  'ease-out':    'cubic-bezier(0, 0, 0.2, 1)',
  'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
  'linear':      'linear',
  'spring':      'cubic-bezier(0.34, 1.56, 0.64, 1)',
  'bounce':      'cubic-bezier(0.34, 1.56, 0.64, 1)',
  'snap':        'cubic-bezier(0.77, 0, 0.175, 1)',
};

/** Known animation names (must map to ease-kf-* keyframes) */
const ANIMATION_NAMES = new Set([
  'fade-in', 'fade-out',
  'slide-up', 'slide-down',
  'slide-in-left', 'slide-in-right',
  'slide-in-from-top', 'slide-in-from-bottom',
  'slide-in-from-left', 'slide-in-from-right',
  'slide-in-from-top-left', 'slide-in-from-top-right',
  'slide-in-from-bottom-left', 'slide-in-from-bottom-right',
  'bounce', 'spin', 'ping', 'pulse', 'shake', 'wobble',
  'zoom-in', 'zoom-out',
  'flip-x', 'flip-y',
  'float', 'heartbeat', 'rubber-band',
]);

/**
 * Parse a time token like "500ms" or "1.2s" into milliseconds.
 * Returns null if the token is not a time value.
 */
function parseTime(token) {
  const ms = token.match(/^(\d+(?:\.\d+)?)ms$/);
  if (ms) return parseFloat(ms[1]);
  const s = token.match(/^(\d+(?:\.\d+)?)s$/);
  if (s) return Math.round(parseFloat(s[1]) * 1000);
  return null;
}

/**
 * Parse a "delay-<time>" modifier.
 * e.g. "delay-200ms" → 200, "delay-1s" → 1000
 */
function parseDelay(token) {
  const m = token.match(/^delay-(.+)$/);
  if (!m) return null;
  return parseTime(m[1]);
}

/**
 * Parse a "repeat-<n>" or "repeat-infinite" modifier.
 */
function parseRepeat(token) {
  const m = token.match(/^repeat-(.+)$/);
  if (!m) return null;
  if (m[1] === 'infinite') return 'infinite';
  const n = parseInt(m[1], 10);
  return isNaN(n) ? null : n;
}

/**
 * Parse an `em=""` attribute string into an AST object.
 *
 * @param {string} value  - Raw attribute value string
 * @returns {{ animation: string, duration: number, easing: string,
 *             delay: number, iterations: number|string, fill: string,
 *             direction: string } | null}
 */
export function parse(value) {
  if (!value || typeof value !== 'string') return null;

  const tokens = value.trim().toLowerCase().split(/\s+/);
  const ast = {
    animation:  null,
    duration:   300,      // ms — default
    easing:     'cubic-bezier(0.4, 0, 0.2, 1)', // --ease-ease
    delay:      0,        // ms
    iterations: 1,
    fill:       'both',
    direction:  'normal',
  };

  for (const token of tokens) {
    // Animation name
    if (ANIMATION_NAMES.has(token)) {
      ast.animation = token;
      continue;
    }

    // Easing
    if (EASING_MAP[token]) {
      ast.easing = EASING_MAP[token];
      continue;
    }

    // Duration  e.g. "500ms", "1.5s"
    const time = parseTime(token);
    if (time !== null) {
      ast.duration = time;
      continue;
    }

    // Delay  e.g. "delay-200ms"
    const delay = parseDelay(token);
    if (delay !== null) {
      ast.delay = delay;
      continue;
    }

    // Repeat  e.g. "repeat-2", "repeat-infinite"
    const repeat = parseRepeat(token);
    if (repeat !== null) {
      ast.iterations = repeat;
      continue;
    }

    // Fill mode keywords
    if (['forwards', 'backwards', 'both', 'none'].includes(token)) {
      ast.fill = token;
      continue;
    }

    // Direction keywords
    if (['normal', 'reverse', 'alternate', 'alternate-reverse'].includes(token)) {
      ast.direction = token;
      continue;
    }

    // Unknown token — ignore (future-proof: plugins may extend)
  }

  if (!ast.animation) return null;

  return ast;
}
