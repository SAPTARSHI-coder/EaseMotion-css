# Component: ease-neon-pulse-button

This submission implements the `ease-neon-pulse-button` component for GSSOC issue **#45084**.

## Description

A stylish button component featuring a glowing neon border that smoothly pulses when hovered. Perfect for primary calls-to-action in dark mode layouts. Implemented using pure CSS `box-shadow` and `@keyframes` animations.

## Usage

Add the `ease-neon-pulse-button` class to any `<button>` element:

```html
<button class="ease-neon-pulse-button">
  <span>Get Started</span>
</button>
```

### Color Variants

```html
<!-- Cyan (default) -->
<button class="ease-neon-pulse-button ease-neon-cyan">
  <span>Cyan Neon</span>
</button>

<!-- Magenta -->
<button class="ease-neon-pulse-button ease-neon-magenta">
  <span>Magenta Neon</span>
</button>

<!-- Lime -->
<button class="ease-neon-pulse-button ease-neon-lime">
  <span>Lime Neon</span>
</button>
```

## CSS Customization

Override `--color-primary` to customize:

```css
.my-button {
  --color-primary: #ff6b6b;
  border-color: #ff6b6b;
}
```

## Acceptance Criteria

- ✅ Glowing neon border effect using `box-shadow`
- ✅ Smooth pulsing animation on hover using `@keyframes`
- ✅ Three color variants (cyan, magenta, lime)
- ✅ Focus visible indicators for accessibility
- ✅ `prefers-reduced-motion` support
- ✅ Pure CSS (no JavaScript required)
- ✅ Dark mode optimized
