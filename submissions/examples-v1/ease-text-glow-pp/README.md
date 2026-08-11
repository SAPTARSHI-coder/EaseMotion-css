# ease-text-glow

A highly realistic, customizable neon text glow effect designed for hero headers, dark UIs, and interactive elements.

## What does this do?

This feature allows text to emit a soft, atmospheric colored glow. It builds a realistic glow using multiple layered `text-shadow` declarations:

- Lighter/white inner core shadows for a realistic hot filament center.
- Diffuse outer shadows to create an expansive, smooth ambient glow.

It also supports a hardware-accelerated **pulsing animation** using modern CSS Houdini (`@property`) variable interpolation.

---

## How is it used?

Simply add the `.ease-text-glow` class to any text element:

```html
<h1 class="ease-text-glow">Hello World</h1>
```

### Color Presets

You can combine `.ease-text-glow` with a preset color class for quick styling:

```html
<h1 class="ease-text-glow ease-text-glow-pink">Pink Neon</h1>
<h1 class="ease-text-glow ease-text-glow-green">Green Neon</h1>
<h1 class="ease-text-glow ease-text-glow-gold">Gold Neon</h1>
```

Available presets:

- `ease-text-glow-blue` (Default)
- `ease-text-glow-pink`
- `ease-text-glow-green`
- `ease-text-glow-purple`
- `ease-text-glow-gold`
- `ease-text-glow-orange`
- `ease-text-glow-red`

### Custom Variables

Override the custom CSS variables on your element or in your stylesheet to create custom neon colors or adjust the glow spread:

```css
.my-custom-neon {
  --ease-glow-color: #ff00ea; /* Dynamic color choice */
  --ease-glow-radius: 35px; /* Custom glow size */
}
```

```html
<h2 class="ease-text-glow my-custom-neon">Custom Glow</h2>
```

---

## Pulse Animation

Add `.ease-text-glow-pulse` to create a breathing/pulsing light effect:

```html
<div class="ease-text-glow ease-text-glow-blue ease-text-glow-pulse">
  Pulsing Neon
</div>
```

### Pulse Speed Presets

You can adjust the speed of the pulsing animation with these modifier classes:

- `.ease-text-glow-pulse-fast` (1s duration)
- _(default)_ (2s duration)
- `.ease-text-glow-pulse-slow` (4s duration)

---

## Technical Features

1. **CSS Houdini `@property`**: Registering `--ease-glow-multiplier` as a `<number>` lets the browser interpolate keyframe percentages smoothly for the pulse animation without manual `text-shadow` repetition.
2. **Graceful Degradation**: In browsers lacking `@property` support (e.g. older Firefox or Safari versions), the text renders with a beautiful, static neon glow instead of breaking.
3. **Accessibility**: Disable pulse animations automatically for users with motion sensitivities via a `prefers-reduced-motion` media query block.

---

## Preview

To view the live interactive playground and code generator, open `demo.html` directly in your browser.
