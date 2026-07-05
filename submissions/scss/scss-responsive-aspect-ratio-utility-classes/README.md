# Responsive Aspect Ratio Utility Classes

Responsive Aspect Ratio Utility Classes provide reusable SCSS utilities for maintaining consistent element proportions across different screen sizes.

---

## Features

- Easy-to-use SCSS mixin
- Predefined utility classes
- Modern `aspect-ratio` support
- Lightweight and reusable
- Suitable for videos, cards, images, banners, and embeds

---

## Mixin

```scss
@include ease-aspect-ratio(16, 9);
```

---

## Utility Classes

```scss
.ease-ratio-1-1
.ease-ratio-4-3
.ease-ratio-3-2
.ease-ratio-16-9
.ease-ratio-21-9
.ease-ratio-auto
```

---

## Example

```html
<div class="ease-ratio-16-9">
    <img src="image.jpg" alt="">
</div>
```

---

## CSS Compilation Result

The SCSS compiles into reusable CSS utility classes using the native `aspect-ratio` property, ensuring responsive layouts with minimal code.