# Loading Button Spinner Centering Fix

## What it does

This submission demonstrates a fix for issue #89330, where the loading spinner in EaseMotion buttons must remain horizontally and vertically centered.

The demo verifies the spinner position across different button sizes and button variants.

## How to use

Add the `ease-btn-loading` class to an EaseMotion button:

```html
<button class="ease-btn ease-btn-primary ease-btn-loading">
  Loading
</button>
```

The loading spinner is positioned relative to the button and centered using `top: 50%`, `left: 50%`, and `transform: translate(-50%, -50%)`.

The same positioning is preserved during the spinner animation.

## Fix

The original loading spinner used both the CSS `translate` property and a
`transform` declaration containing its own translation. The submission uses
one consistent `transform: translate(-50%, -50%)` positioning approach and
preserves that translation during the rotation animation.

This keeps the spinner centered across different button dimensions.

## What is tested

The demo includes:

- Small buttons
- Default-size buttons
- Large buttons
- Extra-large buttons
- Primary buttons
- Outline buttons
- Ghost buttons
- Normal buttons
- Disabled buttons

Normal and disabled button states remain unaffected by the loading spinner styles.

## Related issue

#89330 — Centre Loading Spinner in Loading Button
