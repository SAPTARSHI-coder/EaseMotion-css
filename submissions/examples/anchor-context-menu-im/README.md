# Anchor-Positioned Context Menu

## What does this do?
A right-click context menu that positions itself relative to the clicked element using the CSS Anchor Positioning API (`anchor-name`, `position-anchor`, `position-area`, `position-try-fallbacks`) — automatically flipping to stay within the viewport near screen edges. Includes a fully documented JS `getBoundingClientRect()` fallback for browsers without anchor positioning support.

## How to use it
```html
<div class="anchor-target" data-anchor="card-1">
  <h3>Project Alpha</h3>
  <p>Right-click for actions</p>
</div>

<div class="anchor-menu" id="contextMenu" role="menu">
  <div class="anchor-menu-header">Project Alpha</div>
  <button class="anchor-menu-item">Edit</button>
  <button class="anchor-menu-item">Duplicate</button>
  <button class="anchor-menu-item">Share</button>
  <div class="anchor-menu-divider"></div>
  <button class="anchor-menu-item anchor-menu-item--danger">Delete</button>
</div>
```

```css
.anchor-target {
  anchor-name: --card-anchor;
}

.anchor-menu {
  position: fixed; /* fallback base */
  position-anchor: --card-anchor;
  position-area: bottom span-right;
  position-try-fallbacks: flip-block, flip-inline, flip-block flip-inline;
}
```

```js
const supportsAnchor = CSS.supports('anchor-name: --foo');

el.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  if (supportsAnchor) {
    el.style.anchorName = '--card-anchor';
    menu.style.positionAnchor = '--card-anchor';
  } else {
    const rect = el.getBoundingClientRect();
    menu.style.top = `${rect.bottom + 4}px`;
    menu.style.left = `${rect.left}px`;
    // ... manual edge-flip logic, see demo.html
  }
  menu.classList.add('anchor-menu--open');
});
```

## How it works
- **`anchor-name`** is assigned to the right-clicked element via JS, giving it a unique CSS anchor identifier
- **`position-anchor`** on the menu references that anchor, so `position-area: bottom span-right` places the menu below and right-aligned to the target
- **`position-try-fallbacks: flip-block, flip-inline, flip-block flip-inline`** tells the browser to try flipping the menu's position if the default placement would overflow the viewport — handled entirely by the browser's layout engine, no JS recalculation needed
- **Fallback**: `CSS.supports('anchor-name: --foo')` detects support. If false, JS computes `top`/`left` from `getBoundingClientRect()` and manually flips position if the menu would overflow — visually identical result, different mechanism

## Browser support
CSS Anchor Positioning (`anchor-name`, `position-anchor`, `position-area`, `position-try-fallbacks`) ships in Chrome/Edge 125+. The demo includes a live support badge showing which code path is active in your browser.

## Why it fits EaseMotion CSS
EaseMotion has `anchor-positioning-popover` and `css-anchor-positioning` for basic anchored popovers, but no context-menu pattern, and none demonstrate the `position-area` automatic edge-flip with a documented, tested fallback chain. This is one of the newest CSS positioning APIs with very few production-ready fallback examples anywhere — a genuinely advanced addition. `prefers-reduced-motion` removes the scale/translate entrance, keeping a simple fade.
