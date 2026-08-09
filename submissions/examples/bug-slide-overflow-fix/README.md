# Slide-In Overflow Fix

This demo addresses a mobile layout issue where `ease-slide-in-left` and `ease-slide-in-right` animations temporarily create a horizontal scrollbar.

## Problem

Previous implementations used fixed translation values such as:

```css
transform: translateX(100px);
```

On narrow mobile viewports this can extend the element beyond the viewport and trigger horizontal overflow during the animation.

## Solution

This demo introduces:

- `--ease-slide-distance` CSS custom property
- Percentage-based translations
- `overflow-x: hidden` wrapper
- Responsive behaviour
- `prefers-reduced-motion` support

## Folder Structure

```
submissions/examples/bug-slide-overflow-fix/
├── demo.html
├── style.css
└── README.md
```

## Usage

```html
<div class="animation-wrapper">

    <div class="ease-slide-in-left">
        ...
    </div>

</div>
```

## Custom Distance

```css
:root{
    --ease-slide-distance:90%;
}
```

or

```css
.my-wrapper{
    --ease-slide-distance:140%;
}
```

## Benefits

- No horizontal scrollbar on mobile
- Configurable animation distance
- Cleaner responsive animations
- No JavaScript required
- Accessibility friendly