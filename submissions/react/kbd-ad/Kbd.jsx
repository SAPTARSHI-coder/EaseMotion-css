/**
 * EaseMotion CSS — Kbd
 * ============================================================
 * Renders a keyboard shortcut as a row of styled key caps.
 *
 * Two things this handles that hand-rolled `<kbd>` markup usually does not:
 *
 *  1. Platform modifiers. `mod` resolves to ⌘ on Apple platforms and Ctrl
 *     everywhere else, so a single shortcut definition is correct on both
 *     rather than needing two branches at every call site.
 *
 *  2. Screen reader output. A row of separate <kbd> elements is announced as
 *     disconnected glyphs — "command, shift, P" at best, and at worst the
 *     symbol characters read as nothing at all. The whole shortcut is
 *     exposed as a single readable label instead, with the visual caps
 *     hidden from the accessibility tree.
 *
 * Styling comes from EaseMotion utility classes plus the accompanying
 * style.css; no CSS-in-JS, no runtime style injection.
 * ============================================================
 */

import { useMemo } from 'react';

/** Glyph + spoken name for each recognised key token. */
const KEY_MAP = {
  mod: { mac: '⌘', other: 'Ctrl', label: { mac: 'Command', other: 'Control' } },
  cmd: { mac: '⌘', other: '⌘', label: { mac: 'Command', other: 'Command' } },
  ctrl: { mac: '⌃', other: 'Ctrl', label: { mac: 'Control', other: 'Control' } },
  alt: { mac: '⌥', other: 'Alt', label: { mac: 'Option', other: 'Alt' } },
  shift: { mac: '⇧', other: 'Shift', label: { mac: 'Shift', other: 'Shift' } },
  enter: { mac: '↵', other: '↵', label: { mac: 'Enter', other: 'Enter' } },
  esc: { mac: 'Esc', other: 'Esc', label: { mac: 'Escape', other: 'Escape' } },
  tab: { mac: '⇥', other: 'Tab', label: { mac: 'Tab', other: 'Tab' } },
  space: { mac: '␣', other: 'Space', label: { mac: 'Space', other: 'Space' } },
  backspace: { mac: '⌫', other: '⌫', label: { mac: 'Backspace', other: 'Backspace' } },
  up: { mac: '↑', other: '↑', label: { mac: 'Up arrow', other: 'Up arrow' } },
  down: { mac: '↓', other: '↓', label: { mac: 'Down arrow', other: 'Down arrow' } },
  left: { mac: '←', other: '←', label: { mac: 'Left arrow', other: 'Left arrow' } },
  right: { mac: '→', other: '→', label: { mac: 'Right arrow', other: 'Right arrow' } },
};

/**
 * Detect an Apple platform.
 *
 * Guarded for `window` being undefined so the component is safe to render
 * during server-side rendering — without the guard this throws at import
 * time in any SSR framework.
 *
 * Prefers `navigator.userAgentData.platform`, since `navigator.platform`
 * is deprecated and increasingly frozen by browsers.
 */
function detectApplePlatform() {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return false;
  }

  const modern = navigator.userAgentData?.platform;
  if (typeof modern === 'string' && modern.length > 0) {
    return /mac/i.test(modern);
  }

  return /mac|iphone|ipad|ipod/i.test(navigator.platform || navigator.userAgent || '');
}

/**
 * @param {object}   props
 * @param {string[]} props.keys      Key tokens, e.g. ['mod', 'shift', 'p'].
 * @param {'sm'|'md'|'lg'} [props.size='md']
 * @param {boolean}  [props.separator=false]  Render a '+' between caps.
 * @param {boolean}  [props.isApple]  Override platform detection. Pass this
 *                                    when rendering on a server so the
 *                                    markup matches what the client expects.
 * @param {string}   [props.className]
 */
export default function Kbd({
  keys = [],
  size = 'md',
  separator = false,
  isApple,
  className = '',
  ...rest
}) {
  const apple = useMemo(
    () => (typeof isApple === 'boolean' ? isApple : detectApplePlatform()),
    [isApple],
  );

  const resolved = useMemo(
    () =>
      keys.filter(Boolean).map((raw) => {
        const token = String(raw).toLowerCase();
        const entry = KEY_MAP[token];

        if (!entry) {
          // Unknown tokens are single characters like 'p' — uppercase the
          // glyph for legibility but keep the spoken label as-is.
          const glyph = String(raw).length === 1 ? String(raw).toUpperCase() : String(raw);
          return { glyph, spoken: glyph };
        }

        return {
          glyph: apple ? entry.mac : entry.other,
          spoken: apple ? entry.label.mac : entry.label.other,
        };
      }),
    [keys, apple],
  );

  if (resolved.length === 0) {
    return null;
  }

  // One readable string for assistive tech; the caps themselves are hidden.
  const spokenLabel = resolved.map((k) => k.spoken).join(' plus ');

  const classes = ['ease-kbd-ad', `ease-kbd-ad--${size}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes} {...rest}>
      <span className="ease-kbd-ad__sr">{spokenLabel}</span>

      <span className="ease-kbd-ad__caps" aria-hidden="true">
        {resolved.map((key, index) => (
          // Index is a safe key here: the list is derived positionally from
          // `keys` and is never reordered or filtered after render.
          <span className="ease-kbd-ad__group" key={`${key.glyph}-${index}`}>
            {separator && index > 0 && (
              <span className="ease-kbd-ad__sep">+</span>
            )}
            <kbd className="ease-kbd-ad__cap">{key.glyph}</kbd>
          </span>
        ))}
      </span>
    </span>
  );
}
