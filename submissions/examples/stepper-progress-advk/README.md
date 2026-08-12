# Stepper Progress

## What does this do?

A multi-step progress indicator (checkout, onboarding wizard) where each
step's connecting line only reaches back to the previous dot, and is coloured
based solely on the current step's own `.stp-done` state.

## How is it used?

```html
<ol class="stp-list">
  <li class="stp-step stp-done"><span class="stp-dot">1</span><span class="stp-label">Cart</span></li>
  <li class="stp-step stp-current"><span class="stp-dot">2</span><span class="stp-label">Shipping</span></li>
  <li class="stp-step"><span class="stp-dot">3</span><span class="stp-label">Payment</span></li>
</ol>
```

Add `stp-done` to every completed step and `stp-current` to exactly one
in-progress step; later steps get neither class.

## Why is it useful?

A connecting-line stepper naturally wants to know two things to colour a
segment correctly: is the step before this one done, and is this one done?
Trying to read a sibling's class from CSS needs a previous-sibling
combinator, which doesn't exist. This layout sidesteps that by exploiting a
property of the state itself: a step only carries `.stp-done` once every
step before it is also done, so each segment can be coloured from a single
class on the step it belongs to (`.stp-step.stp-done::before`) rather than
needing to inspect the sibling to its left.

The list stays a real `<ol>`, so screen readers announce step position and
count natively, and the whole thing survives with no JavaScript if the
step classes are toggled server-side on each page load rather than
client-side.
