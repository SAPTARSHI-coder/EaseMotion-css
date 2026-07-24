# Floating Action Button with Expand Animation

A circular Floating Action Button (FAB) that expands into a stack of secondary action buttons, built using pure HTML and CSS (no JavaScript).

## What it does

- A hidden checkbox plus the "checkbox hack" (`:checked ~ sibling`) drives the expand/collapse state.
- Clicking the main FAB rotates its `+` icon into an `x` and reveals three action buttons.
- Each action button animates in with a staggered delay (via a `--i` custom property) and a translate + scale transition.
- Fully responsive — button sizes and spacing shrink on smaller screens.

## How to use

1. Copy `demo.html` and `style.css` into your project.
2. Open `demo.html` directly in a browser — no build step or server required.
3. Reuse the `.fab-container` structure. Add or remove `.fab-action` labels inside `.fab-actions`, giving each one an incrementing `--i` inline style (`--i: 1`, `--i: 2`, etc.) to control its stacking order and animation delay. Wrap each action in an `<a>` or attach a click handler if you want it to actually perform an action.

## Why it fits EaseMotion CSS

- Pure HTML/CSS, no JavaScript required for the animation itself.
- Beginner-friendly: reuses the same "checkbox hack" pattern as other components, with a simple `--i` stagger trick.
- Meets all requirements from issue #48344: circular FAB, smooth expand/collapse animation, responsive layout, pure HTML & CSS, beginner-friendly.