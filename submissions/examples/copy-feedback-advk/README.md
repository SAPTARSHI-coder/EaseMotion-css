# Copy Feedback

## What does this do?

A copy-to-clipboard button that confirms success in place — the label swaps to a
checkmark, the button pulses once, and the result is announced to screen readers.

## How is it used?

```html
<button class="cpf-btn" data-target="snippet">
  <span class="cpf-btn__idle">Copy</span>
  <span class="cpf-btn__done">Copied</span>
</button>
<p class="cpf-sr" role="status" aria-live="polite"></p>
```

Adding `is-done` to the button drives the entire visual transition; the class is
removed after a timeout.

## Why is it useful?

Copy buttons are the most common interactive element in documentation, and the
usual versions have two flaws. They swap the label text directly, so the button
changes width between "Copy" and "Copied" and shoves the surrounding layout
sideways at the exact moment the user is looking at it. And they communicate
success only visually, so a screen-reader user gets no confirmation that anything
happened.

Stacking both labels in a single CSS grid cell fixes the first: the button is
always as wide as its widest state, and the swap is a pure opacity and transform
crossfade with no reflow. The `role="status"` live region fixes the second at the
cost of one visually hidden element.

The pulse uses a spring curve and completes in 420ms, short enough to read as
acknowledgement rather than decoration. Under reduced motion the scale pulse and
label travel are dropped, but the colour change and the announcement both remain,
so no user loses the confirmation itself.
