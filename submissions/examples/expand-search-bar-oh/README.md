# Component: Animated Expanding Search Bar

This submission implements the Animated Expanding Search Bar for issue **#47326**.

## Description

Animated search bar that expands on click with smooth transitions.

## Features

- **Expand Animation**: Smooth width transition on click
- **Auto Focus**: Input focuses when expanded
- **Multiple Variants**: Default, pill, rounded styles
- **Gradient Buttons**: Colorful gradient options
- **Hover Effects**: Scale and shadow on button

## Usage

```html
<div class="search-wrapper">
  <input type="text" class="search-input" placeholder="Search...">
  <button class="search-btn" onclick="toggleSearch(this)">
    <span>🔍</span>
  </button>
</div>
```

## JavaScript

```javascript
function toggleSearch(btn) {
  const wrapper = btn.closest('.search-wrapper');
  wrapper.classList.toggle('active');
  if (wrapper.classList.contains('active')) {
    wrapper.querySelector('.search-input').focus();
  }
}
```

## Variants

| Variant | Class | Style |
|---------|-------|-------|
| Default | none | Circular button |
| Pill | `.pill` | Gradient purple button |
| Rounded | `.rounded` | Gradient green button |

## Acceptance Criteria

- ✅ Expanding animation on click
- ✅ Auto focus on input
- ✅ Multiple style variants
- ✅ Hover effects on button
- ✅ README.md included
