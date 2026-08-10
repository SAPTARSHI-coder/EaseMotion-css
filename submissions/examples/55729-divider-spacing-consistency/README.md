# Divider — Spacing Consistency Fix (#55729)

A CSS-only fix for the bug where divider components have inconsistent vertical spacing when placed between different sections or elements, making adjacent sections look visually cramped.

## The Bug

Divider components have inconsistent vertical spacing when placed between different sections or elements. On some layouts, the divider appears too close to surrounding content, reducing readability and visual balance.

## The Fix

The solution uses the CSS `margin-block` property to ensure equal spacing above and below:

```css
.divider {
    border: 0;
    height: 1px;
    background: var(--divider-color);
    margin-block: var(--divider-spacing);  /* Equal top & bottom margins */
}
```

## How It Works

- `margin-block: var(--divider-spacing)` applies equal `margin-top` and `margin-bottom` using CSS logical properties
- `border: 0` removes the default `<hr>` border for consistent styling
- `height: 1px` ensures a consistent line thickness
- The spacing value is customizable via the `--divider-spacing` CSS variable
- Works consistently across all screen sizes and layouts

## Features

- Pure CSS implementation — no JavaScript
- Consistent vertical spacing above and below
- Three divider variants: solid (default), dashed, dotted
- Customizable spacing via CSS custom properties
- Dark mode support
- `prefers-reduced-motion` support
- Semantic HTML with `aria-hidden` for decorative dividers

## Files

```text
submissions/examples/55729-divider-spacing-consistency/
├── demo.html
├── style.css
└── README.md
```

## Usage

1. Open `demo.html` in a modern web browser.
2. Observe that all dividers have consistent spacing above and below.
3. Resize the browser to see the responsive behavior.

## Browser Support

All modern browsers supporting:

- CSS Logical Properties (`margin-block`)
- CSS Custom Properties
