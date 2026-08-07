/**
 * animationClasses.js
 * -------------------------------------------------------------------------
 * Framework-agnostic helpers shared by the EaseMotion React wrappers.
 *
 * These are plain functions with no React or DOM dependency, so the class /
 * style resolution logic can be unit-tested directly (see
 * `animationClasses.test.js`). The JSX components (`Animate`, `Hover`) are
 * thin presentational shells over this logic.
 * -------------------------------------------------------------------------
 */

/**
 * Maps a friendly `type` keyword to the EaseMotion CSS class that plays it.
 * Aliases (e.g. `spin` -> rotate, `slide-left` -> slide-in-left) are included
 * so common intent resolves to the correct framework class.
 */
export const ANIMATION_CLASS_MAP = {
  'fade-in': 'ease-fade-in',
  'fade-out': 'ease-fade-out',
  'slide-up': 'ease-slide-up',
  'slide-down': 'ease-slide-down',
  'slide-in-left': 'ease-slide-in-left',
  'slide-left': 'ease-slide-in-left',
  'slide-in-right': 'ease-slide-in-right',
  'slide-right': 'ease-slide-in-right',
  'slide-in-from-top': 'ease-slide-in-from-top',
  'slide-in-from-bottom': 'ease-slide-in-from-bottom',
  'zoom-in': 'ease-zoom-in',
  'zoom-out': 'ease-zoom-out',
  'bounce-in': 'ease-bounce-in',
  bounce: 'ease-bounce',
  flip: 'ease-flip',
  spin: 'ease-rotate',
  rotate: 'ease-rotate',
  pulse: 'ease-pulse',
  ping: 'ease-ping',
  shake: 'ease-shake',
  float: 'ease-float',
  wave: 'ease-wave',
  'blur-to-focus': 'ease-blur-to-focus',
};

/** Duration keywords that map to the `.ease-duration-*` utility classes. */
export const DURATION_KEYWORDS = ['fast', 'medium', 'slow'];

/** Maps a friendly hover `effect` keyword to an EaseMotion hover class. */
export const HOVER_CLASS_MAP = {
  lift: 'ease-hover-lift',
  'lift-shadow': 'ease-hover-lift-shadow',
  scale: 'ease-hover-grow',
  grow: 'ease-hover-grow',
  shrink: 'ease-hover-shrink',
  glow: 'ease-hover-glow',
  underline: 'ease-hover-underline',
};

/**
 * Resolve an animation `type` to its framework class. Unknown types fall back
 * to `ease-<type>` so newly-added framework classes still work without a map
 * entry; empty/undefined resolves to an empty string.
 */
export function resolveAnimationClass(type) {
  if (!type) return '';
  return ANIMATION_CLASS_MAP[type] || `ease-${type}`;
}

/** Resolve a hover `effect` keyword to its framework class ('' if unknown). */
export function resolveHoverClass(effect) {
  if (!effect) return '';
  return HOVER_CLASS_MAP[effect] || '';
}

/** True when `value` is one of the `.ease-duration-*` keywords. */
export function isDurationKeyword(value) {
  return DURATION_KEYWORDS.includes(value);
}

/**
 * Normalise the `iteration` prop to a valid CSS `animation-iteration-count`.
 * Accepts the string/number `infinite`, or a positive finite count.
 * Returns `null` when nothing should be applied.
 */
export function normalizeIteration(iteration) {
  if (iteration == null) return null;
  if (iteration === 'infinite' || iteration === Infinity) return 'infinite';
  const n = Number(iteration);
  if (Number.isFinite(n) && n > 0) return String(n);
  return null;
}

/**
 * Build the full className for an `<Animate>` element from its props.
 * Order: animation class, duration utility, hover effect, extra className.
 */
export function buildAnimateClassName({ type, duration, hover, className } = {}) {
  const classes = [];

  const animationClass = resolveAnimationClass(type);
  if (animationClass) classes.push(animationClass);

  if (isDurationKeyword(duration)) classes.push(`ease-duration-${duration}`);

  const hoverClass = resolveHoverClass(hover);
  if (hoverClass) classes.push(hoverClass);

  if (className) classes.push(className);

  return classes.join(' ');
}

/**
 * Build the inline style for an `<Animate>` element. Only numeric `duration`
 * (in ms) is inlined — keyword durations are handled by the utility class in
 * `buildAnimateClassName`. `delay` (ms) and `iteration` are applied when set.
 */
export function buildAnimateStyle({ duration, delay, iteration, style } = {}) {
  const out = { ...(style || {}) };

  if (typeof duration === 'number') {
    out.animationDuration = `${duration}ms`;
    out.transitionDuration = `${duration}ms`;
  }

  if (typeof delay === 'number' && delay > 0) {
    out.animationDelay = `${delay}ms`;
    out.transitionDelay = `${delay}ms`;
  }

  const iterationCount = normalizeIteration(iteration);
  if (iterationCount != null) out.animationIterationCount = iterationCount;

  return out;
}
