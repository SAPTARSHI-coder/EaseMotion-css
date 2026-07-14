# Ghost Button Text Visibility Fix

## What does this do?

This submission fixes the visibility issue of the **Ghost** button by ensuring the button text remains clearly visible when hovered. The updated styling provides sufficient contrast between the text and background, improving readability without changing the minimal Ghost button appearance.

## How is it used?

```html
<button class="ease-btn ease-btn-ghost">
    Ghost
</button>
```

Include the accompanying `style.css` after `easemotion.min.css`:

```html
<link rel="stylesheet" href="../../easemotion.min.css">
<link rel="stylesheet" href="style.css">
```

## Why is it useful?

- Improves text readability on hover.
- Enhances accessibility with better color contrast.
- Preserves the clean and minimal design of the Ghost button.
- Provides a better user experience across different themes.

## Issue Addressed

On the documentation/demo page, hovering over the **Ghost** button caused the text to become difficult or impossible to read due to insufficient contrast between the text and the background. This submission demonstrates a styling approach that keeps the button text visible while maintaining the intended Ghost button aesthetics.