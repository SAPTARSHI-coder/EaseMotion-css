# ease-overline-slide-right

## What does this do?

Animates a custom overline above an element, sliding it in smoothly from the left to the right on hover.

## How is it used?

Add the class to any inline or block-level element that supports pseudo-elements (like a link or heading):

```html
<a href="#" class="ease-overline-slide-right">Hover Over Me</a>
```

You can customize the color, height, gap, and duration of the overline by overriding the custom CSS variables:

```css
.custom-element {
  --ease-overline-color: #ef4444; /* Custom Red Color */
  --ease-overline-height: 4px; /* Custom Thickness */
  --ease-overline-gap: 12px; /* Breathing room between element and overline */
  --ease-overline-duration: 0.4s; /* Transition speed */
}
```

## Why is it useful?

Overline slide animations are a modern, high-end alternative to standard underlines for navigation menus, titles, and headers. They draw focus to the interactive element with an elegant, polished motion that respects accessibility (including focus support and a `prefers-reduced-motion` override).

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)
