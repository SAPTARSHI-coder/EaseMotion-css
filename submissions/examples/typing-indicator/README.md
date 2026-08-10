# Typing Indicator

Three dots bouncing in a staggered wave, iMessage-style, built to sit
inside a real chat bubble. Pure CSS.

[`demo.html`](./demo.html) shows it in a chat thread (the actual use
case) plus three standalone variants: default, compact, and an accent
color.

## Files

| File | Purpose |
|---|---|
| `demo.html` | Chat thread context + 3 standalone variants |
| `style.css` | The bounce animation, tokens, and chat bubble styling |
| `README.md` | This file |

## Markup

```html
<div class="typing-indicator" role="status" aria-label="Maya is typing">
  <span class="typing-indicator__dot"></span>
  <span class="typing-indicator__dot"></span>
  <span class="typing-indicator__dot"></span>
</div>
```

## How the stagger works

Each dot runs the same `@keyframes`, offset by a fixed delay:

```css
.typing-indicator__dot {
  animation: ti-bounce var(--ti-duration) ease-in-out infinite;
}

.typing-indicator__dot:nth-child(1) { animation-delay: 0ms; }
.typing-indicator__dot:nth-child(2) { animation-delay: 160ms; }
.typing-indicator__dot:nth-child(3) { animation-delay: 320ms; }

@keyframes ti-bounce {
  0%, 60%, 100% { transform: translateY(0);   opacity: 0.5; }
  30%           { transform: translateY(-5px); opacity: 1; }
}
```

The dots also dim slightly at rest and brighten at the peak of their
bounce, which reads as more "alive" than movement alone.

## CSS custom properties

| Property | Default | Controls |
|---|---|---|
| `--ti-dot-size` | `8px` | Diameter of each dot |
| `--ti-dot-color` | muted gray | Dot color |
| `--ti-duration` | `1.3s` | One full bounce cycle per dot |

## Variants

- `.typing-indicator-sm` — smaller dots, tighter padding, for a compact
  inline placement (e.g. next to a name in a dense list).
- `.typing-indicator-accent` — swaps `--ti-dot-color` to the library
  accent and tints the background to match, for use outside a plain chat
  bubble context.

## Accessibility

- `role="status"` implies `aria-live="polite"` — a screen reader
  announces the `aria-label` (e.g. "Maya is typing") once, politely, when
  the indicator appears, without interrupting whatever the user is
  currently doing.
- The label text itself never changes while the indicator is visible, so
  there's nothing for assistive tech to re-announce on every bounce —
  screen reader users hear "Maya is typing" once, not a chatty loop.
- The individual dots carry no text content and no independent
  semantics, so they add no noise to the accessibility tree beyond the
  single labeled status region.
- Respects `prefers-reduced-motion: reduce`: the vertical bounce is
  replaced with a slower, gentler opacity-only pulse — the "still
  typing" signal stays visible, it just doesn't move.

## Responsive behavior

Chat bubbles widen slightly (up to 85% of the thread width) and drop to a
smaller font size below `480px`; the indicator itself needs no
breakpoint-specific changes.

## Browser support

Uses only `transform`, `opacity`, CSS custom properties, and standard
keyframe animations — supported everywhere current, no fallback needed.