# Zoom-Out Tabs (`zoom-out-tabs-ak`)

## What it does

`.zoom-tabs-ak` is a pure CSS tab component for dashboard-style layouts.
Switching tabs crossfades the panels while the incoming panel zooms out
from a slightly enlarged state down to its normal size, giving view
changes a smooth, modern feel — with **zero JavaScript**.

## How to use it

1. Link `style.css` in your page.
2. Copy the markup structure from `demo.html`: a `fieldset` of hidden
   radio inputs paired with visible tab labels, followed by a stack of
   panels (one per tab, in the same order):

```html
   <div class="zoom-tabs-ak" style="--zoom-duration: 0.35s; --zoom-scale: 0.85;">
     <fieldset class="zoom-tabs-fieldset-ak">
       <legend class="sr-only">Dashboard view</legend>

       <input type="radio" name="zoom-tabs-ak" id="zoom-tab-overview-ak" class="zoom-tab-input-ak" checked />
       <label for="zoom-tab-overview-ak" class="zoom-tab-ak">Overview</label>
       <!-- …repeat input/label pairs for each tab… -->
     </fieldset>

     <div class="zoom-tab-panels-ak">
       <div class="zoom-tab-panel-ak">…</div>
       <!-- …one panel per tab, in matching order… -->
     </div>
   </div>
```

3. Adjust the custom properties on `.zoom-tabs-ak` to tune the effect:

   | Property          | Default | Description                              |
   |-------------------|---------|--------------------------------------------|
   | `--zoom-duration` | `0.3s`  | Transition duration for the crossfade/zoom |
   | `--zoom-easing`   | `ease`  | Timing function for the transition         |
   | `--zoom-scale`    | `0.9`   | Starting scale of an inactive panel        |

## Why it's useful

- **Zero JavaScript** — tab switching is handled entirely by a native
  radio group and the `:has()` relational selector; the browser's
  built-in radio behavior (click-to-select, arrow-key navigation
  between options) provides keyboard support for free.
- **Accessible by default** — the `fieldset`/`legend` grouping means
  screen readers correctly announce the tabs as a related set of
  options, and `:focus-visible` styling keeps keyboard focus visible.
- **Configurable via CSS custom properties** — timing, easing, and the
  zoom scale factor can all be tuned per-instance without touching the
  underlying rules, as requested for exposing animation parameters.
- **Responsive** — tabs wrap and stack vertically on narrow viewports so
  the component holds up on dashboard layouts at any screen size.
- **Reduced-motion friendly** — under `prefers-reduced-motion: reduce`,
  the zoom/scale transform is dropped and panels simply crossfade.

## Browser support note

This component relies on the `:has()` CSS relational selector, which is
supported in all current evergreen browsers (Chrome, Edge, Safari, and
Firefox 121+).