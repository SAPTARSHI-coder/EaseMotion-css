# field-sizing Demo

## What does this do?

Demonstrates the CSS `field-sizing: content` property — which makes form controls (textarea, input, select) automatically resize to fit their content, without JavaScript.

## How is it used?

```css
textarea, input, select {
  field-sizing: content;
}
```

The textarea grows vertically, the input grows horizontally, and the select adjusts to its longest option — all natively.

## Why is it useful?

Auto-resizing form fields previously required JavaScript event listeners to measure scrollHeight and set explicit heights. `field-sizing: content` makes this a native CSS behavior — simpler, more performant, and accessible. This fits EaseMotion CSS's philosophy of eliminating JavaScript workarounds with declarative CSS solutions.
