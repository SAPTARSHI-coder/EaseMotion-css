/**
 * EaseMotion CSS — CommandHint
 * ============================================================
 * Hint rows pairing an action label with its keyboard shortcut.
 *
 * The accessibility trap here is subtle. The obvious markup is a <table>
 * or a row of divs, but a hint list is semantically a description list:
 * each shortcut DESCRIBES an action. Using <dl>/<dt>/<dd> means a screen
 * reader announces the pairing ("Search, Command K") rather than reading
 * two unrelated columns top to bottom, which is what a div grid produces.
 *
 * Shortcut glyphs are rendered inside the <dd> with an accessible text
 * form alongside, because the symbol characters (⌘, ⇧, ⌥) are frequently
 * announced as nothing at all.
 * ============================================================
 */

import { useId, useMemo } from 'react';

/** Glyph + spoken name per key token, resolved per platform. */
const KEYS = {
  mod: { mac: '⌘', other: 'Ctrl', say: { mac: 'Command', other: 'Control' } },
  shift: { mac: '⇧', other: 'Shift', say: { mac: 'Shift', other: 'Shift' } },
  alt: { mac: '⌥', other: 'Alt', say: { mac: 'Option', other: 'Alt' } },
  ctrl: { mac: '⌃', other: 'Ctrl', say: { mac: 'Control', other: 'Control' } },
  enter: { mac: '↵', other: '↵', say: { mac: 'Enter', other: 'Enter' } },
  esc: { mac: 'Esc', other: 'Esc', say: { mac: 'Escape', other: 'Escape' } },
  tab: { mac: '⇥', other: 'Tab', say: { mac: 'Tab', other: 'Tab' } },
  up: { mac: '↑', other: '↑', say: { mac: 'Up arrow', other: 'Up arrow' } },
  down: { mac: '↓', other: '↓', say: { mac: 'Down arrow', other: 'Down arrow' } },
};

function isApplePlatform() {
  if (typeof navigator === 'undefined') return false;

  const modern = navigator.userAgentData?.platform;
  if (typeof modern === 'string' && modern.length > 0) {
    return /mac/i.test(modern);
  }

  return /mac|iphone|ipad|ipod/i.test(navigator.platform || navigator.userAgent || '');
}

/**
 * @param {object} props
 * @param {Array<{label: string, keys: string[]}>} props.items
 * @param {string}  [props.heading]   Optional group heading.
 * @param {'sm'|'md'} [props.size='md']
 * @param {boolean} [props.isApple]   Override platform detection (SSR).
 * @param {string}  [props.className]
 */
export default function CommandHint({
  items = [],
  heading,
  size = 'md',
  isApple,
  className = '',
  ...rest
}) {
  const headingId = useId();

  const apple = useMemo(
    () => (typeof isApple === 'boolean' ? isApple : isApplePlatform()),
    [isApple],
  );

  const rows = useMemo(
    () =>
      items
        .filter((item) => item && typeof item === 'object' && item.label)
        .map((item) => {
          const keys = Array.isArray(item.keys) ? item.keys.filter(Boolean) : [];

          const resolved = keys.map((raw) => {
            const token = String(raw).toLowerCase();
            const entry = KEYS[token];

            if (!entry) {
              const glyph = String(raw).length === 1 ? String(raw).toUpperCase() : String(raw);
              return { glyph, say: glyph };
            }

            return {
              glyph: apple ? entry.mac : entry.other,
              say: apple ? entry.say.mac : entry.say.other,
            };
          });

          return {
            label: item.label,
            glyphs: resolved.map((k) => k.glyph),
            spoken: resolved.map((k) => k.say).join(' plus '),
          };
        }),
    [items, apple],
  );

  if (rows.length === 0) {
    return null;
  }

  const classes = ['ease-hint-ad', `ease-hint-ad--${size}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...rest}>
      {heading && (
        <p className="ease-hint-ad__heading" id={headingId}>
          {heading}
        </p>
      )}

      {/* A description list, not a grid: each shortcut describes an action,
          so the pairing is announced rather than read as two columns. */}
      <dl
        className="ease-hint-ad__list"
        aria-labelledby={heading ? headingId : undefined}
      >
        {rows.map((row, index) => (
          <div className="ease-hint-ad__row" key={`${row.label}-${index}`}>
            <dt className="ease-hint-ad__label">{row.label}</dt>
            <dd className="ease-hint-ad__keys">
              <span className="ease-hint-ad__sr">{row.spoken}</span>
              <span className="ease-hint-ad__caps" aria-hidden="true">
                {row.glyphs.map((glyph, i) => (
                  <kbd className="ease-hint-ad__cap" key={`${glyph}-${i}`}>
                    {glyph}
                  </kbd>
                ))}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
