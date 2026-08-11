# Back to Top Button

A scroll-triggered navigation button with smooth scroll animation for quick access to the top of long pages.

## What does this do?

This creates a back to top button with scroll-triggered visibility using CSS `@keyframes` for appearance animation, fixed positioning, multiple size and style variants, and smooth scroll functionality.

## How is it used?

```html
<button class="back-to-top" onclick="window.scrollTo({ top: 0, behavior: 'smooth' })"></button>

<!-- Position variants -->
<button class="back-to-top back-to-top-left">...</button>
<button class="back-to-top back-to-top-center">...</button>

<!-- Size variants -->
<button class="back-to-top back-to-top-sm">...</button>
<button class="back-to-top back-to-top-lg">...</button>
<button class="back-to-top back-to-top-xl">...</button>

<!-- Style variants -->
<button class="back-to-top back-to-top-solid">...</button>
<button class="back-to-top back-to-top-outline">...</button>
<button class="back-to-top back-to-top-glass">...</button>
```

The appearance animation uses CSS `@keyframes`:

```css
@keyframes back-to-top-appear {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## Why is it useful?

Back to top buttons improve UX on long pages by providing quick navigation to the top without excessive scrolling. The scroll-triggered visibility keeps the interface clean by only showing the button when needed. Smooth scroll animation provides a better user experience compared to instant jumps. Multiple position, size, and style variants make it versatile for different design contexts. The CSS-first approach for animations and hover effects keeps the implementation lightweight, with minimal JavaScript only for scroll detection and smooth scrolling. This component demonstrates practical navigation patterns used in modern web applications for long-form content.
