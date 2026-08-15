# ease-tooltip Flicker Fix

## What's the bug?
`ease-tooltip` flickers and disappears when the user moves their mouse rapidly over the trigger element. This happens because the tooltip bubble (`::before`/`::after`) lacks `pointer-events: none`, so it can intercept mouse events. When the cursor briefly lands on the tooltip bubble during fast movement, the browser fires `mouseleave` → `mouseenter` on the trigger rapidly, toggling opacity in a loop — the visible flicker.

## The fix
```css
.ease-tooltip-trigger::before,
.ease-tooltip-trigger::after {
  pointer-events: none;  /* <- the fix */
  opacity: 0;
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.ease-tooltip-trigger:hover::before,
.ease-tooltip-trigger:hover::after {
  opacity: 1;
}
```

`pointer-events: none` makes the tooltip bubble completely transparent to the mouse — only the trigger element's `:hover` state controls visibility, so the tooltip can never intercept anything or cause a hide/show loop.

## How to use it
```html
<button class="ease-tooltip-trigger" data-tip="Hello World">
  Hover me slowly and fast
</button>

<!-- Position variants -->
<button class="ease-tooltip-trigger ease-tooltip--top" data-tip="...">Top</button>
<button class="ease-tooltip-trigger ease-tooltip--bottom" data-tip="...">Bottom</button>
<button class="ease-tooltip-trigger ease-tooltip--left" data-tip="...">Left</button>
<button class="ease-tooltip-trigger ease-tooltip--right" data-tip="...">Right</button>
```

## Demo includes
- **Before/after comparison** — a broken version (`.ease-tooltip-trigger--broken`, missing `pointer-events: none`) side-by-side with the fixed version, so the difference is directly testable by moving your mouse quickly over each
- **4 position variants** — top (default), bottom, left, right
- **Works on any element** — buttons, plain text, icons, links
- **`:focus-visible` support** — tooltips also show on keyboard focus for accessibility
- **`prefers-reduced-motion`** — transform animations removed, opacity transition shortened

## Why it fits EaseMotion CSS
Tooltips are a core UI component. Flickering tooltips create a poor user experience and reduce the perceived quality of any product using EaseMotion CSS. This is a one-property fix (`pointer-events: none`) with massive UX impact, demonstrated alongside a complete, production-ready tooltip implementation with positioning variants.
