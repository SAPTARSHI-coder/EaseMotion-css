# CSS-Only Modals & Tooltips

## What does this do?
A pure CSS modal system using the `:target` pseudo-class and tooltips using `:hover`, both with smooth transitions.

## How is it used?
Link to a modal ID to open:

    <a href="#modal-info" class="btn">Open Modal</a>
    <div id="modal-info" class="modal-overlay">
      <div class="modal">...</div>
    </div>

For tooltips, wrap content with a `tooltip-trigger`:

    <span class="tooltip-trigger">
      Hover me
      <span class="tooltip tooltip--top">Tooltip text</span>
    </span>

Directions: `tooltip--top`, `tooltip--bottom`, `tooltip--left`, `tooltip--right`.

## Why is it useful?
Delivers common UI patterns (modals, tooltips) without any JavaScript — lightweight, accessible, and easy to integrate.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open demo.html directly in your browser to see the effect.

## Contribution Notes
- Class naming was handled by the contributor
- Maintainer will rename to ease-* convention before merging
