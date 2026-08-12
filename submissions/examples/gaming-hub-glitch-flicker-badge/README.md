# Gaming Hub Glitch-Flicker Badge

A pure CSS/HTML badge component built for gaming hub / esports-style layouts.
Badges have a subtle ambient RGB-split "glitch" flicker at rest, and burst
into a faster, more intense glitch animation on hover or keyboard focus.
Built entirely with CSS pseudo-elements and `attr()` — **no JavaScript, no
extra markup per badge**.

## Files

| File | Purpose |
|---|---|
| `demo.html` | Standalone showcase page wired up with EaseMotion (`em-*`) classes |
| `style.css` | Full component stylesheet |
| `README.md` | This file |

Open `demo.html` directly in a browser — no build step needed.

## Features

- **Ambient flicker** — a slow, irregular-feeling opacity/text-shadow dip
  keeps badges feeling "alive" without being distracting.
- **RGB-split glitch layers** — `::before`/`::after` pseudo-elements clone the
  badge's text (via `attr(data-text)`) in cyan and magenta, briefly offsetting
  and clipping them to create a classic glitch look.
- **Hover/focus glitch burst** — a faster, higher-amplitude glitch animation
  takes over on `:hover` and `:focus-visible` for clear interactive feedback.
- **Color-coded variants** — `live`, `new`, `hot`, `offline`, `legendary`,
  `epic`, and `rare` presets for common gaming-hub use cases (status tags,
  loot rarity, etc).
- **Static "offline" state** — the `--offline` variant intentionally disables
  all animation, since a muted/inactive badge shouldn't flicker.
- **Size variant** — `.em-badge--sm` for compact, inline use next to text.
- **Fully responsive** — badges resize and can stack vertically on narrow
  viewports.
- **Accessible motion** — all animations are disabled under
  `prefers-reduced-motion: reduce`, leaving a clean static badge behind.
- **Keyboard-friendly** — `:focus-visible` triggers the same glitch burst and
  a visible focus ring, so keyboard users get equivalent feedback to mouse
  users.

## Usage

Add the base `.em-badge` class plus a color variant, and set `data-text` to
match the badge's visible label (this is what powers the glitch layers —
keep it in sync with the inner text):

```html
<span class="em-badge em-badge--live" data-text="LIVE">LIVE</span>
<span class="em-badge em-badge--new" data-text="NEW">NEW</span>
<span class="em-badge em-badge--hot" data-text="HOT">HOT</span>
<span class="em-badge em-badge--offline" data-text="OFFLINE">OFFLINE</span>

<!-- Rarity / rank tags -->
<span class="em-badge em-badge--legendary" data-text="LEGENDARY">LEGENDARY</span>
<span class="em-badge em-badge--epic" data-text="EPIC">EPIC</span>
<span class="em-badge em-badge--rare" data-text="RARE">RARE</span>

<!-- Compact inline usage -->
<span class="em-badge em-badge--live em-badge--sm" data-text="LIVE">LIVE</span>
```

> **Note:** `data-text` must exactly match the badge's text content. It's
> used by the `::before`/`::after` pseudo-elements via `content: attr(data-text)`
> to render the glitch copies without duplicating markup.

## CSS Custom Properties

All theming and motion tuning is centralized in `:root`.

| Property | Default | Description |
|---|---|---|
| `--em-badge-bg` | `#14141f` | Base badge background |
| `--em-badge-text` | `#e6e6f0` | Default text color (overridden per-variant) |
| `--em-badge-border-width` | `1px` | Border thickness |
| `--em-badge-radius` | `6px` | Border radius |
| `--em-badge-glitch-cyan` | `#2cf5ff` | Color of the cyan glitch layer |
| `--em-badge-glitch-magenta` | `#ff2cf0` | Color of the magenta glitch layer |
| `--em-badge-live` | `#ff2e63` | Accent color for `--live` variant |
| `--em-badge-new` | `#2cb67d` | Accent color for `--new` variant |
| `--em-badge-hot` | `#ff9f1c` | Accent color for `--hot` variant |
| `--em-badge-offline` | `#6b6b7b` | Accent color for `--offline` variant |
| `--em-badge-legendary` | `#ffd23f` | Accent color for `--legendary` variant |
| `--em-badge-epic` | `#a855f7` | Accent color for `--epic` variant |
| `--em-badge-rare` | `#38bdf8` | Accent color for `--rare` variant |
| `--em-badge-flicker-duration` | `3.4s` | Cycle length of the ambient flicker |
| `--em-badge-glitch-duration` | `1.8s` | Cycle length of the ambient RGB-split glitch |
| `--em-badge-hover-glitch-duration` | `0.35s` | Cycle length of the hover/focus glitch burst |
| `--em-badge-transition-fast` | `160ms ease` | Timing for scale/box-shadow transitions |

### Example: Add a custom variant

```css
.em-badge--beta {
  --em-badge-accent: #f472b6;
  color: var(--em-badge-accent);
}
```

```html
<span class="em-badge em-badge--beta" data-text="BETA">BETA</span>
```

### Example: Slow the glitch down for a calmer look

```css
:root {
  --em-badge-flicker-duration: 6s;
  --em-badge-glitch-duration: 3s;
}
```

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| `> 700px` | Full-size badges, laid out in a wrapping row |
| `≤ 700px` | Badges shrink slightly (smaller padding/font-size) |
| `≤ 420px` | Badge row stacks vertically, each badge full-width |

## Accessibility Notes

- All glitch/flicker animations are driven purely by CSS `animation` and
  `transform`/`opacity`/`clip-path` — nothing relies on JavaScript timers.
- `@media (prefers-reduced-motion: reduce)` disables every animation
  (ambient flicker, glitch layers, and the hover burst), leaving a clean,
  static, fully legible badge.
- `:focus-visible` is used instead of bare `:focus`, so keyboard users get a
  visible ring and the same glitch-burst feedback as mouse hover, without a
  distracting ring appearing on simple clicks.
- Because the glitch layers are decorative duplicates of the same text
  (`aria-hidden` is unnecessary since they're pseudo-elements, not real DOM
  nodes), screen readers only ever read the single actual badge text once.

## Browser Support

Uses standard CSS: pseudo-elements with `attr()`, CSS custom properties,
`clip-path`, and `:focus-visible`. Works in all current evergreen browsers
(Chrome, Firefox, Safari, Edge).