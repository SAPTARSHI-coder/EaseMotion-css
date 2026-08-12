# Glitch-Flicker Modal

A pure CSS modal dialog with a glitchy, flickering entrance animation — the modal box strobes in over a few frames and its title briefly splits into red/cyan RGB-shifted slices before settling. Built entirely with the checkbox hack — **zero JavaScript**.

## Preview

- A trigger button opens a centered modal over a blurred, dimmed overlay
- The modal box flickers between visible and dim a few times as it appears, instead of a plain fade
- The title text briefly glitches with red/cyan offset slices before locking into place
- Dismissible via a close button, the "Maybe later" action, or by clicking the trigger again
- Fully responsive: stacked action buttons on small screens
- Full keyboard support and `prefers-reduced-motion` support

## Files

| File         | Purpose                                                      |
|--------------|-------------------------------------------------------------------|
| `demo.html`  | Markup for the trigger button and modal, wired to EaseMotion CDN    |
| `style.css`  | All component styling and animations                                |
| `README.md`  | This file                                                            |

## How it works (no JS)

A visually-hidden `<input type="checkbox" id="ease-gf-modal-toggle">` sits at the top of the page. The trigger button and the modal's own close ("×") and "Maybe later" controls are all `<label for="ease-gf-modal-toggle">` elements, so clicking any of them toggles the same checkbox. `.ease-gf-toggle:checked ~ .ease-gf-overlay` reveals the dimmed overlay and modal via a CSS sibling combinator — no `<script>` tag involved.

## CSS custom properties

Defined on `:root` in `style.css`:

| Property                      | Purpose                                        |
|---------------------------------|-----------------------------------------------------|
| `--ease-gf-bg`                   | Page background color                                |
| `--ease-gf-surface`              | Modal background color                                |
| `--ease-gf-border`               | Border/divider color                                  |
| `--ease-gf-text`                 | Primary text color                                    |
| `--ease-gf-muted`                | Secondary/muted text color                            |
| `--ease-gf-accent`               | Accent color (eyebrow text, buttons, focus outline)   |
| `--ease-gf-glitch-red`           | Red channel color for the title glitch effect          |
| `--ease-gf-glitch-cyan`          | Cyan channel color for the title glitch effect         |
| `--ease-gf-radius`               | Modal corner radius                                    |
| `--ease-gf-fade-duration`        | Duration of the overlay fade in/out                    |
| `--ease-gf-flicker-duration`     | Duration of the modal's flicker-in and title glitch     |

## CSS techniques used

### 1. Overlay visibility via the checkbox hack
`.ease-gf-toggle:checked ~ .ease-gf-overlay` switches the overlay between hidden (`opacity: 0`, `visibility: hidden`, `pointer-events: none`) and visible. `visibility` is given a `0s` transition delay in each direction so the modal leaves the accessibility tree and tab order only once it's fully faded out, and re-enters it immediately on open.

### 2. Flicker-in with stepped opacity keyframes
`.ease-gf-modal` plays `ease-gf-flicker-in` using `steps(1, end)` timing, which jumps between fixed opacity values at each keyframe stop instead of interpolating smoothly — this is what produces the strobing "flicker" feel rather than a normal fade.

### 3. RGB-split glitch title
`.ease-gf-modal__title` uses `::before` and `::after` pseudo-elements with `content: attr(data-text)`, colored red and cyan respectively, layered with `mix-blend-mode: screen`. Each animates its own `clip-path: inset()` and a small `transform: translate()` jitter on the `ease-gf-glitch-slice` keyframes — one running forward, the other in `reverse` — so thin horizontal slices of each color briefly shear apart from the base white text before both fade back to `opacity: 0`, leaving the clean title behind.

### 4. Re-triggering on every open
Because the flicker and glitch animations are scoped under the `:checked ~` selector rather than applied unconditionally, they replay fresh from their `0%` keyframe every time the modal is opened, not just once on page load.

## Accessibility

- The modal uses `role="dialog"` and `aria-modal="true"`, with `aria-labelledby` pointing at the title so screen readers announce it properly when opened.
- The trigger and close/dismiss controls are real `<label>` elements bound to a real, focusable `<input type="checkbox">`, so the modal can be opened and closed with keyboard (Space/Enter) and shows a visible `:focus-visible` outline.
- All animation is wrapped in a `@media (prefers-reduced-motion: reduce)` query: the flicker-in and RGB-split glitch are disabled entirely, the modal simply appears at full opacity, and hover-lift transforms on buttons are removed.

## Usage

1. Include the EaseMotion CDN stylesheet, then this component's `style.css`.
2. Copy the checkbox, trigger `<label>`, and `.ease-gf-overlay` block from `demo.html`.
3. Update `data-text` on `.ease-gf-modal__title` to match its visible text content exactly — the glitch pseudo-elements read this attribute to render their colored slices.

No build step, no JavaScript, no external dependencies beyond the EaseMotion base stylesheet.

## Naming convention

Follows the project's `ease-*` prefix convention for all classes and keyframes (`ease-gf-*`, `ease-gf-flicker-in`, `ease-gf-glitch-slice`).