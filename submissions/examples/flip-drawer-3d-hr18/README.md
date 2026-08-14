# 3D-Flip Drawer (`flip-drawer-3d-hr18`)

A pure-CSS animated drawer with a "3D-Flip" entrance, styled for SaaS
showcase layouts, built for issue
[#59526](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/59526).

## A note on naming

EaseMotion's core already ships an `ease-flip` entrance animation class,
so every class and animation name in this submission is deliberately
distinct (`ease-drawer-3dflip-hr18`, not `ease-flip-*`) to avoid any
collision with it.

## What it does

Clicking "View changelog" opens a panel that flips down from the top edge
of the viewport, like a folding visor — starting rotated back past
`-90deg` (briefly hidden edge-on, the way a real hinged panel would be)
and rotating forward to rest flat. `perspective` is applied to an ancestor
"stage" element around the panel, which is what gives the rotation real
depth rather than reading as a flat vertical squash. The **entrance
animation itself is 100% CSS** (`@keyframes ease-3dflip-down-hr18`); the
open/close/focus-trap logic is plain vanilla JavaScript, not a framework,
per the issue's requirement.

The demo frames the drawer as a product changelog panel with tagged
"New" / "Fix" entries, a common SaaS "what's new" pattern.

## Installation

Nothing to install — `demo.html` is self-contained and opens directly in a
browser (double-click the file). It links a single local `style.css`; no
build step, package manager, or external CDN.

## Usage

```html
<button type="button" id="openBtn" aria-haspopup="dialog">View changelog</button>

<div class="f3d-backdrop-hr18" id="backdrop"></div>

<div class="f3d-drawer-stage-hr18" id="stage">
  <div class="ease-drawer-3dflip-hr18" role="dialog" aria-modal="true" aria-labelledby="drawerTitle">
    <h2 id="drawerTitle">Changelog</h2>
    <button type="button" id="closeBtn" aria-label="Close">&times;</button>
    <!-- changelog entries -->
  </div>
</div>
```

`perspective` must stay on the `.f3d-drawer-stage-hr18` wrapper, not the
flipping panel itself — perspective only affects the 3D rendering of an
element's *children*, so it has to live one level up from
`.ease-drawer-3dflip-hr18` for the rotation to read as depth. Toggling
`is-open-hr18` on the stage (and the backdrop) is what triggers the flip
`@keyframes` animation. See `demo.html` for the full open/close/focus-trap
script.

### Tuning the animation

| Property | Default | Controls |
|---|---|---|
| `--ease-flip-duration-hr18` | `520ms` | How long the flip-down takes |
| `--ease-flip-easing-hr18` | `cubic-bezier(0.22, 1, 0.36, 1)` | The easing curve for the flip |
| `--ease-flip-start-angle-hr18` | `-100deg` | Starting rotation before it settles flat |

```css
.ease-drawer-3dflip-hr18.subtle {
  --ease-flip-start-angle-hr18: -75deg;
  --ease-flip-duration-hr18: 350ms;
}
```

## Accessibility notes

- The panel has `role="dialog"`, `aria-modal="true"`, and
  `aria-labelledby` pointing at its own heading.
- Opening the drawer moves focus into it and traps `Tab`/`Shift+Tab`
  within it while open, matching the same focus-trap pattern used in this
  repo's other overlay-style submissions.
- `Escape` closes the drawer and returns focus to the button that opened
  it; clicking the backdrop does the same.
- The flip animation respects `@media (prefers-reduced-motion: reduce)`
  and appears instantly at its final, flat position instead.

## Responsiveness

The panel's padding and corner radius tighten under a `480px` viewport,
and its `max-width: 640px` keeps it from stretching edge-to-edge and
looking unbalanced on very wide desktop viewports.

## Why this fits EaseMotion CSS

A self-contained, reusable interaction pattern with a distinct named
animation exposed entirely through custom properties, matching the
issue's ask for pure CSS transitions/keyframes and zero external JS
frameworks, while remaining genuinely keyboard accessible via a real
focus trap — and deliberately avoiding any naming collision with the
framework's existing `ease-flip` class.

All classes, custom properties, and the folder itself use a `-hr18`
suffix to avoid colliding with any other contributor's submission under
`submissions/examples/`.
