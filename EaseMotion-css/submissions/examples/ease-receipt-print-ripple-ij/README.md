# Receipt Print Ripple

Animated receipt printing demo where items appear one by one with a stagger/ripple effect, paper rolls out from the top, and the total slides in at the end.

## Features

- Paper reveal animation via `scaleY` transform
- Staggered item entrance with `translateY` + `opacity`
- Total slides in after all items appear
- Print button to replay the animation
- Dynamic date display in receipt footer

## Usage

Toggle `.rpr-paper-animate` on the paper element, `.rpr-item-show` on each item (with staggered delay), and `.rpr-total-show` on the total row. CSS handles all transitions.
