# Component: Scroll-to-Top Button

This submission implements the Scroll-to-Top Button for issue **#47342**.

## Description

Animated scroll-to-top button with fade-in and hover effects.

## Features

- **Fade-in Animation**: Appears after scrolling past threshold
- **Hover Effects**: Lift and shadow on hover
- **Multiple Variants**: Circle, pill, and icon styles
- **Fixed Position**: Bottom-right corner
- **Smooth Scroll**: JavaScript smooth scrolling

## Usage

```html
<button class="scroll-btn" onclick="scrollToTop()">
  <span>↑</span>
</button>
```

## JavaScript

```javascript
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
```

## Variants

| Variant | Class | Description |
|---------|-------|-------------|
| Circle | `.circle` | Round button |
| Pill | `.pill` | Rounded rectangle with text |
| Icon | `.icon` | Small circular icon |

## Acceptance Criteria

- ✅ Fades in after scrolling
- ✅ Smooth scroll animation
- ✅ Hover lift effect
- ✅ Multiple variants
- ✅ README.md included
