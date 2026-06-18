# CSS Top Layer Stacking

## Overview
This example demonstrates the CSS top layer — a stacking context reserved for interactive overlay elements like dialogs (via <dialog>), popovers ([popover]), and fullscreen elements. The top layer always renders above all other content, including elements with z-index.

## Features
- **::backdrop** — pseudo-element behind top layer items for backdrop styling
- **:modal** — pseudo-class targeting modal dialogs
- **:popover-open** — pseudo-class targeting open popovers
- **Multiple top layer items** — stacking order of multiple dialogs/popovers
- **	ransition-behavior: allow-discrete** — smooth entry/exit animations for top layer elements

## How to Use
1. Use <dialog> with .showModal() or [popover] with .showPopover() to place elements in the top layer
2. Style ::backdrop to create overlay backgrounds
3. Use :modal and :popover-open pseudo-classes for styling open states

## Browser Support
- Chrome 133+
- Edge 133+
- Firefox 135+
- Safari 18.4+
