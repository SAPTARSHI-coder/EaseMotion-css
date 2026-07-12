# ease-comment-thread-reveal-ij

Comment thread that reveals progressively with a staggered slide animation.

Resolves: #34719

## Overview

A comment thread list where each comment slides in from the left and fades
in, staggered by its position in the list, producing a progressive
"cascading" reveal rather than all comments appearing at once. Two trigger
patterns are included — click-to-expand and scroll-into-view — plus a
static customization example.

## Markup

```html
<ul class="ectr-thread" id="threadPanel">
  <li class="ectr-comment" style="--ectr-i: 0;">
    <img class="ectr-avatar" src="..." alt="" />
    <div class="ectr-body">
      <p class="ectr-meta"><strong>Name</strong> <span>2h ago</span></p>
      <p class="ectr-text">Comment text.</p>
    </div>
  </li>
  <li class="ectr-comment" style="--ectr-i: 1;">
    <!-- ...next comment, increment --ectr-i -->
  </li>
</ul>
```

Add `is-open` to the `.ectr-thread` container (via JS) to trigger the reveal.
Each `.ectr-comment`'s `--ectr-i` value determines its position in the
stagger sequence.

## CSS Variables

| Variable          | Default | Description                                             |
|---------------------|---------|-------------------------------------------------------------|
| `--ectr-speed`     | `0.5s`  | Duration of each comment's slide + fade transition           |
| `--ectr-offset`    | `32px`  | Horizontal distance each comment slides in from (from the left) |
| `--ectr-stagger`   | `0.09s` | Delay increment multiplied by `--ectr-i` per comment          |
| `--ectr-i`         | —       | Set per-comment inline (0, 1, 2…); position in the stagger order |

## How the Progressive Reveal Works

Each `.ectr-comment` starts at `opacity: 0` and `translateX(-32px)`
(controlled by `--ectr-offset`). When the container gains the `is-open`
class, every comment transitions to `opacity: 1` / `translateX(0)`, but each
comment's `transition-delay` is `calc(var(--ectr-i) * var(--ectr-stagger))`
— so comment 0 starts immediately, comment 1 starts slightly after, and so
on, creating the progressive cascading effect down the thread.

## Interactive Triggers (Acceptance Criteria)

Two full variants are demonstrated in `demo.html`:

1. **Click** — a "View N replies" toggle button expands the thread panel
   and adds `is-open`, triggering the staggered reveal; the chevron icon
   rotates to indicate expanded state (`aria-expanded` kept in sync).
2. **Scroll** — a separate thread reveals progressively once it enters the
   viewport, using `IntersectionObserver` (threshold 0.3) to add `is-open`.

A third section shows the thread already revealed with a slower speed,
larger slide offset, and wider stagger gap via CSS variable overrides.

## Responsive Design

- Below 480px, comment padding, avatar size, and text size shrink slightly
  to keep the thread compact on small screens.
- The thread list itself is a simple flex column, so it reflows naturally
  at any width without a dedicated breakpoint for layout structure.

## Accessibility

- The click trigger uses `aria-expanded` on the toggle button and
  `aria-controls` pointing at the thread panel's `id`.
- Avatar images use empty `alt=""` since they're decorative next to a named
  author in the visible text; swap in descriptive `alt` text if avatars
  carry meaning in your context.
- Respects `prefers-reduced-motion: reduce` by collapsing transition
  durations and stagger delays to near-zero, so the thread simply appears
  rather than animates for users who've opted out of motion.

## Files

- `demo.html` — click-to-expand thread, scroll-triggered thread, and a
  CSS-variable customization example.
- `style.css` — component styles, staggered slide/fade animation,
  responsive rules, and reduced-motion handling.
- `README.md` — this file.