# ease-glitch-skew: Text/Element Glitch with Skew Offset

A retro cyberpunk glitch animation that rapidly skews and distorts elements with color-split offsets using ::before and ::after pseudo-elements.

## Classes

| Class | Effect |
|-------|--------|
| `ease-glitch-skew` | Always-on glitch skew animation |
| `ease-glitch-skew-hover` | Glitch triggers on hover |

## Usage

```html
<!-- Always on -->
<span class="ease-glitch-skew" data-text="GLITCH">GLITCH</span>

<!-- Hover trigger -->
<span class="ease-glitch-skew-hover" data-text="HOVER ME">HOVER ME</span>

<!-- Button -->
<button class="ease-glitch-skew-hover" data-text="EXECUTE">EXECUTE</button>
```

> **Note:** `data-text` must match the element's text content for the color split to work.

## Customization

```css
:root {
  --ease-glitch-color-1: #ff0040; /* red channel offset */
  --ease-glitch-color-2: #00ffff; /* cyan channel offset */
}
```

## Features
- skewX/skewY rapid random offsets
- Color split via ::before/::after pseudo-elements
- Fast 0.3s animation cycle
- Always-on and hover-trigger variants
- Retro cyberpunk aesthetic
- Respects prefers-reduced-motion