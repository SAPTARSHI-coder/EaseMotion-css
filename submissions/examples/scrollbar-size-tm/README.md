# Scrollbar Width

Demonstrates the CSS scrollbar-width property for controlling scrollbar thickness in Firefox, enabling thin and hidden scrollbar designs without JavaScript.

## Features

- `scrollbar-width: auto` — platform-native scrollbar width (default)
- `scrollbar-width: thin` — reduced scrollbar thickness (~8px vs ~16px)
- `scrollbar-width: none` — completely hidden scrollbar (content still scrollable)
- Three-way side-by-side comparison demo
- Compact sidebar layout demo
- Dark mode and reduced-motion support

## Usage

```html
<!-- Thin scrollbar for compact layouts -->
<aside class="ease-scrollbar-thin">
  <!-- scrollable content -->
</aside>

<!-- Hidden scrollbar with keyboard-only scrolling -->
<div class="ease-scrollbar-none">
  <!-- content still scrolls, just no visible bar -->
</div>
```

For cross-browser thin scrollbars, combine with webkit pseudo-elements:

```css
.ease-scrollbar-thin {
  scrollbar-width: thin;
  scrollbar-color: #6c63ff #f1f5f9;
}
.ease-scrollbar-thin::-webkit-scrollbar { width: 6px; }
.ease-scrollbar-thin::-webkit-scrollbar-track { background: #f1f5f9; }
.ease-scrollbar-thin::-webkit-scrollbar-thumb { background: #6c63ff; border-radius: 3px; }
```

## Why is it useful?

Default scrollbars consume 14-16px of horizontal space. In narrow sidebars, compact panels, and mobile-inspired designs, this space is precious. Thin scrollbars:

- Save 8-10px per scrollbar
- Look more modern and less Windows 95
- Are the standard in macOS and many modern design systems
- Work great with dark themes where full-width scrollbars can look jarring

## Browser Support

- Firefox 64+: `scrollbar-width` property natively supported
- Chrome/Safari: Use `::-webkit-scrollbar` pseudo-elements instead
- This submission provides Firefox-native scrollbar-width utilities

## Implementation Notes

This submission uses EaseMotion's CSS custom properties for consistent theming. Dark mode via `prefers-color-scheme: dark` and reduced motion via `prefers-reduced-motion` are fully supported.
