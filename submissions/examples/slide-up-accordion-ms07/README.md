# Slide-Up Accordion

A pure CSS FAQ accordion for SaaS showcase pages, where each answer slides up from below and fades in as its question expands. Built entirely with the checkbox hack — **zero JavaScript**.

## Preview

- Four FAQ items with a rotating "+" indicator that becomes an accent-filled "×" when open
- Smooth height animation using a CSS `grid-template-rows` trick (no fixed/max-height guessing)
- Answer text slides up (`translateY`) and fades in, slightly delayed after the row starts expanding
- Fully responsive single-column layout that works from mobile to desktop
- Full keyboard support and `prefers-reduced-motion` support

## Files

| File         | Purpose                                                    |
|--------------|----------------------------------------------------------------|
| `demo.html`  | Markup for the FAQ accordion, wired to EaseMotion CDN            |
| `style.css`  | All component styling and animations                            |
| `README.md`  | This file                                                        |

## How it works (no JS)

Each accordion item pairs a visually-hidden `<input type="checkbox">` with a `<label class="ease-su-item__header">`. Clicking (or Space/Enter-ing) the label toggles the checkbox, and CSS sibling combinators handle the rest:

- `.ease-su-toggle:checked ~ .ease-su-item__panel` — expands the row from `grid-template-rows: 0fr` to `1fr`.
- `.ease-su-toggle:checked ~ .ease-su-item__panel .ease-su-item__panel-inner p` — slides the answer text up from `translateY(16px)` to its resting position while fading in, with a short `transition-delay` so it doesn't fight the row's own growth.
- `.ease-su-toggle:checked ~ .ease-su-item__header .ease-su-item__icon` — rotates the "+" icon 135° into an "×" shape and fills it with the accent color.

Each checkbox is independent, so multiple FAQ items can be open at once. The first item ships `checked` in the markup so the demo isn't empty on load.

## CSS custom properties

Defined on `:root` in `style.css`:

| Property                       | Purpose                                        |
|-----------------------------------|-----------------------------------------------------|
| `--ease-su-bg`                     | Page background color                                |
| `--ease-su-surface`                | Accordion item background color                      |
| `--ease-su-border`                 | Border/divider color                                  |
| `--ease-su-text`                   | Primary text color                                    |
| `--ease-su-muted`                  | Secondary/muted text color                            |
| `--ease-su-accent`                 | Accent color (open icon fill, eyebrow text, focus outline) |
| `--ease-su-radius`                 | Accordion item corner radius                           |
| `--ease-su-row-duration`           | Duration of the row expand/collapse animation           |
| `--ease-su-slide-duration`         | Duration of the answer slide-up/fade                    |
| `--ease-su-slide-distance`         | How far the answer travels vertically on entrance        |
| `--ease-su-easing`                 | Shared easing curve for both animations                  |

## CSS techniques used

### 1. Grid-rows height animation
`.ease-su-item__panel` uses `display: grid` with `grid-template-rows` transitioning between `0fr` and `1fr`, avoiding the need to hardcode or measure a `max-height` value. The inner wrapper needs `min-height: 0; overflow: hidden;` for the clip and animation to work correctly.

### 2. Delayed slide-up reveal
The answer paragraph's own `opacity`/`transform` transition uses a small `transition-delay: 90ms` when opening, so the row visibly starts growing a beat before the text slides up into place — reinforcing the "slide-up" feel rather than everything appearing instantly.

### 3. Rotating plus/close icon
A simple "+" character rotates 135° via `transform: rotate()` when its checkbox is checked, visually becoming an "×" without needing a second icon or any JavaScript state tracking.

## Accessibility

- The toggle is a real, focusable `<input type="checkbox">` paired with a `<label>`, so it works with keyboard (Space/Enter) and shows a visible `:focus-visible` outline on the header row.
- All animations are wrapped in a `@media (prefers-reduced-motion: reduce)` query, which removes the height/slide/rotation transitions so panels open and close instantly instead of animating.
- Answer content is plain, readable paragraph text — nothing is conveyed through animation alone.

## Usage

1. Include the EaseMotion CDN stylesheet, then this component's `style.css`.
2. Copy an `.ease-su-item` block from `demo.html` per question, giving each checkbox a unique `id` (and updating its paired `<label for="...">`).
3. Replace the `<p>` inside `.ease-su-item__panel-inner` with your own answer content.

No build step, no JavaScript, no external dependencies beyond the EaseMotion base stylesheet.

## Naming convention

Follows the project's `ease-*` prefix convention for all classes (`ease-su-*`).