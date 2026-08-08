# Rotate-Fade Drawer (`rotate-fade-drawer-hr18`)

A pure-CSS animated slide-out drawer with a "Rotate-Fade" entrance, styled
for SaaS showcase layouts, built for issue
[#59528](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/59528).

## What it does

Clicking "View plans" opens a right-side drawer that slides in while
rotated a few degrees and slightly scaled down, unrotating and settling to
full size as it arrives — a subtle combination of motion instead of a flat
slide or a plain fade. The **entrance animation itself is 100% CSS**
(`@keyframes ease-rotate-fade-in-hr18`, driven entirely by custom
properties); vanilla JavaScript only handles opening/closing, a focus
trap, `Escape`-to-close, and backdrop-click-to-close — none of which is an
animation frameworks, per the issue's "no external JS frameworks"
requirement.

The demo frames the drawer as a plan-comparison panel (Starter / Pro /
Enterprise), a common SaaS upgrade pattern.

## Installation

Nothing to install — `demo.html` is self-contained and opens directly in a
browser (double-click the file). It links a single local `style.css`; no
build step, package manager, or external CDN.

## Usage

```html
<button type="button" id="openBtn" aria-haspopup="dialog">View plans</button>

<div class="rfd-backdrop-hr18" id="backdrop"></div>

<aside class="ease-drawer-rotate-fade-hr18" id="drawer" role="dialog" aria-modal="true" aria-labelledby="drawerTitle">
  <h2 id="drawerTitle">Choose a plan</h2>
  <button type="button" id="closeBtn" aria-label="Close">&times;</button>
  <!-- drawer content -->
</aside>
```

Toggling `is-open-hr18` on both the backdrop and the drawer opens it; the
drawer's `is-open-hr18` class is what triggers the rotate-fade `@keyframes`
animation to play. See `demo.html` for the full open/close/focus-trap
script.

### Tuning the animation

| Property | Default | Controls |
|---|---|---|
| `--ease-drawer-duration-hr18` | `420ms` | How long the slide-in + unrotate takes |
| `--ease-drawer-easing-hr18` | `cubic-bezier(0.22, 1, 0.36, 1)` | The easing curve for the entrance |
| `--ease-drawer-angle-hr18` | `5deg` | Starting rotation angle before it settles flat |
| `--ease-drawer-delay-hr18` | `0ms` | Delay before the animation starts |

```css
.ease-drawer-rotate-fade-hr18.dramatic {
  --ease-drawer-angle-hr18: 14deg;
  --ease-drawer-duration-hr18: 600ms;
}
```

## Accessibility notes

- The drawer has `role="dialog"`, `aria-modal="true"`, and
  `aria-labelledby` pointing at its own heading.
- Opening the drawer moves focus into it (to its first focusable
  element), and `Tab`/`Shift+Tab` are trapped within it while open — focus
  never silently escapes to content behind the backdrop.
- `Escape` closes the drawer and returns focus to the button that opened
  it; clicking the backdrop does the same.
- The drawer's animation respects
  `@media (prefers-reduced-motion: reduce)` and appears instantly at its
  final position instead.

## Responsiveness

The drawer is `min(360px, 90vw)` wide, so it never overflows a narrow
viewport, and widens to the full screen width below `380px` rather than
leaving an awkward sliver of visible backdrop on very small phones.

## Why this fits EaseMotion CSS

A self-contained, reusable interaction pattern with a distinct named
animation (`ease-rotate-fade-in`) exposed entirely through custom
properties, matching the issue's ask for pure CSS transitions/keyframes
and zero external JS frameworks, while remaining genuinely keyboard
accessible via a real focus trap.

All classes, custom properties, and the folder itself use a `-hr18` suffix
to avoid colliding with any other contributor's submission under
`submissions/examples/`.
