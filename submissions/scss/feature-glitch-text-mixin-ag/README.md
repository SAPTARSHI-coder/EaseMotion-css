# Glitch Text Mixin

## Description
The `ease-glitch-text-mixin-ag` provides a dynamic cyber/retro "glitch" effect that activates when a user hovers over or focuses on a text element. It works by rapidly shifting `text-shadow` layers (cyan and magenta by default) and applying micro-translations to simulate screen tear or digital noise.

## Installation & Usage
Import the `_glitch-text.scss` file into your styles.

```scss
@import 'path/to/feature-glitch-text-mixin-ag/glitch-text';

.glitch-heading {
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
  background: #111;
  padding: 10px;
  
  /* Apply the mixin */
  @include ease-glitch-text-mixin-ag(0.3s, linear);
  
  /* Optionally override colors */
  --glitch-color-1-ag: lime;
  --glitch-color-2-ag: red;
}
```

## Parameters
The mixin accepts the following optional parameters:
- `$duration`: How long one loop of the glitch animation lasts. Default is `0.3s` for a rapid, chaotic feel.
- `$easing`: The timing function. Default is `linear` to keep the chaotic shifting consistent.

You can customize the glitch shadow colors using CSS variables:
- `--glitch-color-1-ag`: Default `#0ff` (Cyan)
- `--glitch-color-2-ag`: Default `#f0f` (Magenta)

## Accessibility Considerations
- **Focus States**: The mixin applies the glitch effect on both `:hover` and `:focus-visible` to ensure keyboard users can experience the interaction.
- **Reduced Motion**: Glitch effects can trigger photosensitive reactions or discomfort. A strictly enforced `@media (prefers-reduced-motion: reduce)` block disables the animation loop entirely. Instead of flashing, it applies a static, calm `text-shadow` to indicate hover/focus state without any movement.
