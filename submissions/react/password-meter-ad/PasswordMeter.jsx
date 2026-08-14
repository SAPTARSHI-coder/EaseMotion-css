/**
 * EaseMotion CSS — PasswordMeter
 * ============================================================
 * Password strength with actionable feedback.
 *
 * The usual meter shows a coloured bar and the word "Weak". That tells
 * the user they have a problem and nothing about how to fix it, so they
 * add an exclamation mark and try again. Listing the specific unmet
 * criteria is the difference between a meter that helps and one that
 * just judges.
 *
 * Announcement is threshold-based, not per-keystroke. A meter wired to a
 * live region that updates on every character makes the field unusable
 * with a screen reader — the user cannot hear their own typing.
 *
 * Scoring note: length dominates deliberately. Character-class rules are
 * weak predictors of real strength (they push people toward `P@ssw0rd!`,
 * which is trivially guessable), whereas length is the single strongest
 * factor. NIST 800-63B makes the same recommendation. The class checks
 * are kept because most registration forms still require them, but they
 * are worth less than length here.
 * ============================================================
 */

import { useEffect, useMemo, useRef, useState } from 'react';

const LEVELS = ['Very weak', 'Weak', 'Fair', 'Strong', 'Very strong'];

/** Sequences that make a password trivially guessable regardless of form. */
const COMMON_PATTERNS = [
  /^(.)\1+$/, // all one character
  /12345|23456|34567|45678|56789/,
  /qwerty|asdfgh|zxcvbn/i,
  /password|letmein|welcome|admin/i,
];

/**
 * Evaluate a password. Returns a score 0–4 and the unmet criteria.
 */
function evaluate(password, minLength) {
  const value = typeof password === 'string' ? password : '';

  const checks = [
    { id: 'length', label: `At least ${minLength} characters`, met: value.length >= minLength },
    { id: 'lower', label: 'A lowercase letter', met: /[a-z]/.test(value) },
    { id: 'upper', label: 'An uppercase letter', met: /[A-Z]/.test(value) },
    { id: 'number', label: 'A number', met: /\d/.test(value) },
    { id: 'symbol', label: 'A symbol', met: /[^\w\s]/.test(value) },
  ];

  if (value === '') {
    return { score: 0, checks, unmet: checks.filter((c) => !c.met), common: false };
  }

  const common = COMMON_PATTERNS.some((pattern) => pattern.test(value));

  // A recognisable pattern caps the score regardless of composition —
  // "Password123!" satisfies every class check and is still guessable.
  if (common) {
    return { score: 0, checks, unmet: checks.filter((c) => !c.met), common: true };
  }

  let score = 0;

  // Length carries the most weight.
  if (value.length >= minLength) score += 1;
  if (value.length >= minLength + 4) score += 1;
  if (value.length >= minLength + 10) score += 1;

  const classes = checks.slice(1).filter((c) => c.met).length;
  if (classes >= 3) score += 1;

  return {
    score: Math.min(score, LEVELS.length - 1),
    checks,
    unmet: checks.filter((c) => !c.met),
    common: false,
  };
}

/**
 * @param {object} props
 * @param {string}  props.value
 * @param {number}  [props.minLength=12]
 * @param {boolean} [props.showChecklist=true]
 * @param {(result: object) => void} [props.onEvaluate]
 * @param {string}  [props.className]
 */
export default function PasswordMeter({
  value = '',
  minLength = 12,
  showChecklist = true,
  onEvaluate,
  className = '',
  ...rest
}) {
  const result = useMemo(() => evaluate(value, minLength), [value, minLength]);

  const onEvaluateRef = useRef(onEvaluate);
  useEffect(() => {
    onEvaluateRef.current = onEvaluate;
  }, [onEvaluate]);

  useEffect(() => {
    onEvaluateRef.current?.(result);
  }, [result]);

  // Announce on score CHANGE only — never per keystroke.
  const [announcement, setAnnouncement] = useState('');
  const lastScore = useRef(null);

  useEffect(() => {
    if (value === '') {
      lastScore.current = null;
      setAnnouncement('');
      return;
    }

    if (result.score === lastScore.current) return;
    lastScore.current = result.score;

    if (result.common) {
      setAnnouncement('This is a commonly used password. Choose something less predictable.');
    } else if (result.unmet.length > 0) {
      setAnnouncement(
        `${LEVELS[result.score]}. Still needed: ${result.unmet.map((c) => c.label).join(', ')}.`,
      );
    } else {
      setAnnouncement(`${LEVELS[result.score]}. All requirements met.`);
    }
  }, [result, value]);

  const classes = [
    'ease-pwmeter-ad',
    `ease-pwmeter-ad--score-${result.score}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...rest}>
      <div
        className="ease-pwmeter-ad__track"
        role="meter"
        aria-valuenow={result.score}
        aria-valuemin={0}
        aria-valuemax={LEVELS.length - 1}
        aria-valuetext={value === '' ? 'No password entered' : LEVELS[result.score]}
        aria-label="Password strength"
      >
        {LEVELS.map((_, index) => (
          <span
            className={`ease-pwmeter-ad__seg${
              value !== '' && index <= result.score ? ' ease-pwmeter-ad__seg--on' : ''
            }`}
            key={index}
            aria-hidden="true"
          />
        ))}
      </div>

      <p className="ease-pwmeter-ad__label" aria-hidden="true">
        {value === '' ? 'Enter a password' : LEVELS[result.score]}
      </p>

      {result.common && value !== '' && (
        <p className="ease-pwmeter-ad__warn">
          This is a commonly used password.
        </p>
      )}

      {showChecklist && (
        <ul className="ease-pwmeter-ad__checks">
          {result.checks.map((check) => (
            <li
              className={`ease-pwmeter-ad__check${
                check.met ? ' ease-pwmeter-ad__check--met' : ''
              }`}
              key={check.id}
            >
              {/* Glyph carries the state alongside colour. */}
              <span className="ease-pwmeter-ad__mark" aria-hidden="true">
                {check.met ? '✓' : '○'}
              </span>
              {check.label}
            </li>
          ))}
        </ul>
      )}

      <span className="ease-pwmeter-ad__sr" role="status" aria-live="polite">
        {announcement}
      </span>
    </div>
  );
}
