/**
 * EaseMotion CSS — WizardSteps
 * ============================================================
 * Multi-step progress indicator.
 *
 * Two things this gets right:
 *
 *  1. State is carried by SHAPE as well as colour. A green circle and a
 *     grey circle are the same circle to a user with deuteranopia, so
 *     completed steps show a check, the current step shows a filled dot,
 *     and upcoming steps show their number. The progression is legible
 *     in greyscale.
 *
 *  2. Progress is exposed structurally, not just visually. `aria-current`
 *     marks the active step and each step's state is in its accessible
 *     name — "Step 2 of 4, Payment, current" rather than "Payment".
 *     Styling alone tells assistive tech nothing.
 *
 * Navigable steps are real buttons; non-navigable ones are not. Rendering
 * everything as a button and ignoring clicks on future steps is the usual
 * shortcut, and it means a keyboard user tabs through controls that do
 * nothing.
 * ============================================================
 */

import { useCallback, useMemo } from 'react';

/**
 * @param {object} props
 * @param {Array<{id: string, label: string, description?: string}>} props.steps
 * @param {number}   props.current            Zero-based active index.
 * @param {(index: number, step: object) => void} [props.onStepClick]
 * @param {boolean}  [props.allowBackNav=true] Completed steps are clickable.
 * @param {'horizontal'|'vertical'} [props.orientation='horizontal']
 * @param {string}   [props.label='Progress']
 * @param {string}   [props.className]
 */
export default function WizardSteps({
  steps = [],
  current = 0,
  onStepClick,
  allowBackNav = true,
  orientation = 'horizontal',
  label = 'Progress',
  className = '',
  ...rest
}) {
  const total = steps.length;
  const active = Math.max(0, Math.min(current, Math.max(total - 1, 0)));

  const stateOf = useCallback(
    (index) => {
      if (index < active) return 'complete';
      if (index === active) return 'current';
      return 'upcoming';
    },
    [active],
  );

  const items = useMemo(
    () =>
      steps.map((step, index) => {
        const state = stateOf(index);
        // Only completed steps are navigable, and only when allowed —
        // a future step has no meaningful destination.
        const navigable = Boolean(onStepClick) && allowBackNav && state === 'complete';

        return { step, index, state, navigable };
      }),
    [steps, stateOf, onStepClick, allowBackNav],
  );

  if (total === 0) return null;

  const classes = [
    'ease-wizard-ad',
    `ease-wizard-ad--${orientation}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const stateWord = { complete: 'completed', current: 'current', upcoming: 'not started' };

  return (
    <nav className={classes} aria-label={label} {...rest}>
      <ol className="ease-wizard-ad__list">
        {items.map(({ step, index, state, navigable }) => {
          const marker =
            state === 'complete' ? '✓' : state === 'current' ? '●' : index + 1;

          const accessibleName =
            `Step ${index + 1} of ${total}, ${step.label}, ${stateWord[state]}`;

          const inner = (
            <>
              <span className="ease-wizard-ad__marker" aria-hidden="true">
                {marker}
              </span>
              <span className="ease-wizard-ad__text">
                <span className="ease-wizard-ad__label">{step.label}</span>
                {step.description && (
                  <span className="ease-wizard-ad__desc">{step.description}</span>
                )}
              </span>
            </>
          );

          return (
            <li
              className={`ease-wizard-ad__step ease-wizard-ad__step--${state}`}
              key={step.id ?? index}
              aria-current={state === 'current' ? 'step' : undefined}
            >
              {navigable ? (
                <button
                  className="ease-wizard-ad__btn"
                  type="button"
                  onClick={() => onStepClick(index, step)}
                  aria-label={`${accessibleName}. Go back to this step`}
                >
                  {inner}
                </button>
              ) : (
                // Not a button: a non-navigable step should not be a tab
                // stop that does nothing when activated. `aria-label` is
                // unreliable on a plain span, so the accessible name is a
                // visually-hidden text node instead.
                <span className="ease-wizard-ad__static">
                  <span className="ease-wizard-ad__sr">{accessibleName}</span>
                  <span aria-hidden="true" className="ease-wizard-ad__visual">
                    {inner}
                  </span>
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
