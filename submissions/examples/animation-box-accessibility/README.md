# Accessible Animation Boxes

This submission fixes Issue #38159 by making animation showcase boxes keyboard/tap accessible.  
Boxes now behave like buttons: they can be focused with Tab, activated with Enter/Space, and replay their animation.

## Usage

```html
<div class="animation-box" tabindex="0" role="button" aria-label="Replay fade-in animation">
  ease-fade-in
</div>
