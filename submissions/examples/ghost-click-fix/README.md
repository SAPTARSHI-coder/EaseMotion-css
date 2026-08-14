# Ghost Click Fix

A CSS pattern that solves the incredibly common layout bug where elements that have faded out (using `opacity: 0`) act as invisible shields, intercepting and swallowing mouse clicks meant for the interactive UI elements beneath them.

## Features
- **The Bug Context**: In CSS, `opacity: 0` makes an element invisible, but it *does not* remove it from the browser's interaction layer (hit-testing). If a toast notification, a modal, or an absolute overlay simply animates to `opacity: 0` and remains in the DOM, it will invisibly cover the buttons beneath it, causing "ghost clicks" where the user clicks a visible button but nothing happens.
- **The Fix**: 
  - Instead of relying on JavaScript to calculate when the animation ends and apply `display: none`, we can handle this purely in CSS.
  - By adding `visibility: visible` at the start of the `@keyframes` and `visibility: hidden` at the `100%` mark, the browser is smart enough to wait for the `opacity` transition to finish before flipping the `visibility` state.
  - Unlike `opacity: 0`, `visibility: hidden` physically removes the element from the mouse interaction tree, allowing clicks to pass directly through it to the elements below.

## Usage
Open `demo.html` in your browser. 
Wait 3 seconds for the notifications to fade out, then attempt to click the blue buttons.
- On the **Buggy** side, clicking the button does nothing, because the invisible orange toast is blocking your cursor.
- On the **Fixed** side, clicking the button successfully triggers the alert, because the green toast properly set `visibility: hidden` at the end of its fade.

## Files
- `demo.html`: The HTML structure demonstrating the stacked absolute positioning.
- `style.css`: The styling engine containing the `@keyframes` that combine `opacity` and `visibility`.
