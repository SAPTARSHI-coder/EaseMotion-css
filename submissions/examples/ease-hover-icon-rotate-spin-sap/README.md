# ease-hover-icon-rotate-spin-sap

**Level: Beginner**

An icon inside a button that does a full 360° spin on hover.

## Usage

```html
<button class="icon-spin-btn-sap">
  <span class="icon-sap">🔄</span> Refresh
</button>
```

## Notes

- Works with any icon content — emoji, SVG, or icon font glyph inside `.icon-sap`.
- Rotation resets instantly on mouse-leave since there's no reverse-transition delay; add `transition-delay` if you want a smoother settle.

## Browser support

All modern browsers.