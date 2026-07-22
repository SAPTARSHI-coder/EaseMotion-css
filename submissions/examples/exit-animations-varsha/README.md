# Exit Animations

## What does this do?
Adds two exit animations — `slide-down-varsha` and `slide-out-left-varsha` — to pair with EaseMotion's existing entrance animations.

## How is it used?
```html
<div class="slide-down-varsha">Content</div>
<div class="slide-out-left-varsha">Content</div>
```
Trigger by adding the class via JS when you want the element to animate out (see `demo.html` for a click-to-replay example).

## Why is it useful?
EaseMotion currently ships mostly entrance animations. Symmetric exit animations let contributors and users animate elements out (dismissible items, list removal, drawers) without hand-writing custom keyframes.
