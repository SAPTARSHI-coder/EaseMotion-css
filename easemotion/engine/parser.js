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

/** Speed aliases → ms values */
const SPEED_MAP = {
  'fast':   150,
  'medium': 300,
  'slow':   600,
};

/**
 * Parse a time token like "500ms", "1.2s", or speed alias "slow".
 * Returns null if the token is not a time value.
 */
function parseTime(token) {
  if (SPEED_MAP[token]) return SPEED_MAP[token];
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
  if (token === 'infinite') return 'infinite';
  const m = token.match(/^repeat-(.+)$/);
  if (!m) return null;
  if (m[1] === 'infinite') return 'infinite';
  const n = parseInt(m[1], 10);
  return isNaN(n) ? null : n;
}

/**
 * Helper to process a list of string tokens into an AST object.
 */
function processTokens(tokens, ast) {
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    // Animation name (only set if not already set)
    if (!ast.animation && ANIMATION_NAMES.has(token)) {
      ast.animation = token;
      continue;
    }

    // Easing (check multi-token like "ease-out" or "ease-in-out")
    if (EASING_MAP[token]) {
      ast.easing = EASING_MAP[token];
      continue;
    }

    // Duration e.g. "500ms", "1.5s", "slow", "fast", "medium"
    const time = parseTime(token);
    if (time !== null) {
      ast.duration = time;
      continue;
    }

    // Delay e.g. "delay-200ms"
    const delay = parseDelay(token);
    if (delay !== null) {
      ast.delay = delay;
      continue;
    }

    // Repeat e.g. "repeat-2", "repeat-infinite", "infinite"
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
  }
}

/**
 * Attempt hyphenated DSL token decomposition if a single hyphenated token is provided
 * e.g. "ease-spin-slow-infinite-bounce-reverse" or "spin-slow-infinite-bounce-reverse"
 */
function expandHyphenatedDsl(rawStr) {
  let str = rawStr.trim().toLowerCase();
  if (str.startsWith('ease-')) {
    str = str.slice(5);
  }

  // Find matching animation name (longest match first)
  const sortedNames = Array.from(ANIMATION_NAMES).sort((a, b) => b.length - a.length);
  let matchedAnim = null;
  for (const name of sortedNames) {
    if (str === name || str.startsWith(name + '-')) {
      matchedAnim = name;
      break;
    }
  }

  if (!matchedAnim) return [rawStr];

  const tokens = [matchedAnim];
  const remainder = str === matchedAnim ? '' : str.slice(matchedAnim.length + 1);

  if (remainder) {
    // Split remainder by hyphens and re-combine known multi-hyphen tokens like ease-in-out, ease-out, etc.
    const parts = remainder.split('-');
    let idx = 0;
    while (idx < parts.length) {
      // Check 3-part keywords (e.g., ease-in-out, alternate-reverse)
      if (idx + 2 < parts.length) {
        const triple = `${parts[idx]}-${parts[idx+1]}-${parts[idx+2]}`;
        if (EASING_MAP[triple] || ['alternate-reverse'].includes(triple)) {
          tokens.push(triple);
          idx += 3;
          continue;
        }
      }
      // Check 2-part keywords (e.g., ease-in, ease-out, delay-100ms, repeat-infinite)
      if (idx + 1 < parts.length) {
        const double = `${parts[idx]}-${parts[idx+1]}`;
        if (EASING_MAP[double] || parseDelay(double) !== null || parseRepeat(double) !== null) {
          tokens.push(double);
          idx += 2;
          continue;
        }
      }
      tokens.push(parts[idx]);
      idx++;
    }
  }

  return tokens;
}

/**
 * Parse an `em=""` attribute or DSL string into an AST object.
 *
 * @param {string} value  - Raw attribute or DSL string
 * @returns {{ animation: string, duration: number, easing: string,
 *             delay: number, iterations: number|string, fill: string,
 *             direction: string } | null}
 */
export function parse(value) {
  if (!value || typeof value !== 'string') return null;

  const trimmed = value.trim().toLowerCase();
  let tokens = trimmed.split(/\s+/);

  // If a single token without spaces is passed and it's not a basic animation name directly,
  // attempt hyphenated DSL expansion
  if (tokens.length === 1 && !ANIMATION_NAMES.has(tokens[0])) {
    tokens = expandHyphenatedDsl(tokens[0]);
  }

  const ast = {
    animation:  null,
    duration:   300,      // ms — default
    easing:     'cubic-bezier(0.4, 0, 0.2, 1)', // --ease-ease
    delay:      0,        // ms
    iterations: 1,
    fill:       'both',
    direction:  'normal',
  };

  processTokens(tokens, ast);

  if (!ast.animation) return null;

  return ast;
}

