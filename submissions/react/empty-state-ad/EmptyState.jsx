/**
 * EaseMotion CSS — EmptyState
 * ============================================================
 * The placeholder shown when a data view has nothing to render.
 *
 * The reason this is a component rather than ad-hoc markup: "empty",
 * "no results" and "error" look nearly identical in most implementations
 * but mean completely different things to the user, and each needs a
 * different next action.
 *
 *   empty       — nothing exists yet. The action should CREATE something.
 *   no-results  — things exist, the filter excluded them. The action should
 *                 CLEAR the filter. Telling someone to "create your first
 *                 project" when they have forty and mistyped a search is
 *                 actively unhelpful.
 *   error       — the fetch failed. The action should RETRY, and this one
 *                 must be announced assertively because it is unexpected.
 *
 * Announcement is scoped to match: `role="alert"` for errors so it
 * interrupts, `role="status"` otherwise so routine states do not.
 * ============================================================
 */

import { useMemo } from 'react';

/** Per-variant defaults: glyph, tone class, and ARIA wiring. */
const VARIANTS = {
  empty: {
    glyph: '◇',
    tone: 'empty',
    role: 'status',
    live: 'polite',
    fallbackTitle: 'Nothing here yet',
  },
  'no-results': {
    glyph: '⌕',
    tone: 'neutral',
    role: 'status',
    live: 'polite',
    fallbackTitle: 'No matching results',
  },
  error: {
    glyph: '⚠',
    tone: 'danger',
    role: 'alert',
    live: 'assertive',
    fallbackTitle: 'Something went wrong',
  },
};

/**
 * @param {object} props
 * @param {'empty'|'no-results'|'error'} [props.variant='empty']
 * @param {string}    [props.title]        Falls back to a per-variant default.
 * @param {string}    [props.description]
 * @param {React.ReactNode} [props.icon]   Custom icon; replaces the glyph.
 * @param {React.ReactNode} [props.action] Primary action node.
 * @param {React.ReactNode} [props.secondaryAction]
 * @param {'sm'|'md'} [props.size='md']
 * @param {boolean}   [props.animate=true] Set false to skip the entrance.
 * @param {string}    [props.className]
 */
export default function EmptyState({
  variant = 'empty',
  title,
  description,
  icon,
  action,
  secondaryAction,
  size = 'md',
  animate = true,
  className = '',
  ...rest
}) {
  // Unknown variants fall back to `empty` rather than crashing on an
  // undefined lookup — a typo'd prop should degrade, not white-screen.
  const config = VARIANTS[variant] ?? VARIANTS.empty;

  const classes = useMemo(
    () =>
      [
        'ease-empty-ad',
        `ease-empty-ad--${size}`,
        `ease-empty-ad--${config.tone}`,
        animate ? 'ease-empty-ad--animate' : '',
        className,
      ]
        .filter(Boolean)
        .join(' '),
    [size, config.tone, animate, className],
  );

  const heading = title ?? config.fallbackTitle;

  return (
    <div
      className={classes}
      role={config.role}
      aria-live={config.live}
      {...rest}
    >
      <div className="ease-empty-ad__icon" aria-hidden="true">
        {icon ?? config.glyph}
      </div>

      <p className="ease-empty-ad__title">{heading}</p>

      {description && (
        <p className="ease-empty-ad__desc">{description}</p>
      )}

      {(action || secondaryAction) && (
        <div className="ease-empty-ad__actions">
          {action}
          {secondaryAction}
        </div>
      )}
    </div>
  );
}
