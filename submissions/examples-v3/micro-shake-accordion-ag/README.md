# CSS Micro Shake Accordion

A responsive accordion built using only HTML and CSS. It uses the native `<details>` and `<summary>` elements, includes a subtle micro-shake animation, and supports keyboard navigation without JavaScript.

## What does it do?

This component creates an accessible accordion with:

- Subtle micro-shake animation when opened
- Smooth expand/collapse transition
- Hover and focus effects
- Responsive layout
- Support for reduced-motion users

## How to use it

Place `demo.html` and `style.css` in the same folder and open `demo.html` in a browser.

Example:

```html
<details class="accordion-item">
  <summary>Question</summary>
  <div class="accordion-content">
    Answer
  </div>
</details>
```

## Why is it useful?

This component provides a clean, accessible accordion that follows EaseMotion CSS's animation-first approach while keeping the implementation lightweight and easy to customize.

## Accessibility

- Native `<details>` and `<summary>` elements
- Keyboard accessible
- Visible focus styles
- Supports `prefers-reduced-motion`
- Responsive on different screen sizes

## Customization

You can customize values such as:

- Accent color
- Animation duration
- Border radius
- Shadow
- Shake intensity