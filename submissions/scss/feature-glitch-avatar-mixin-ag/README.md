# Glitch Avatar Mixin

## Description
The `ease-glitch-avatar-mixin-ag` is an SCSS mixin that provides a dynamic "glitch" entrance animation. It uses translations, scaling, and colored `drop-shadow` filters (cyan and magenta) to simulate a digital screen glitch. This effect is perfect for gaming interfaces, cyberpunk-themed sites, or bringing a tech-focused avatar to life on initial load.

## Installation & Usage
Import the `_glitch-avatar.scss` file into your styles.

```scss
@import 'path/to/feature-glitch-avatar-mixin-ag/glitch-avatar';

.my-user-avatar {
  /* Basic avatar styling */
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  
  /* Apply the glitch entrance animation */
  @include ease-glitch-avatar-mixin-ag(0.6s);
}
```

## Parameters
The mixin accepts the following optional parameters:
- `$duration`: How long the glitch animation lasts. Default is `0.6s`.
- `$easing`: The timing function. Default is `cubic-bezier(0.25, 0.46, 0.45, 0.94)`.

## How It Works
The `@keyframes ease-glitch-avatar-keyframes-ag` shifts the element slightly back and forth using `translate` and `scale`. Simultaneously, it applies aggressive cyan and magenta `drop-shadow` filters that alternate positions, mimicking RGB color separation seen in digital glitches, before settling into its final state at `40%` and staying static until `100%`.

## Accessibility Considerations
- **Reduced Motion**: The glitch effect includes intense flashing and erratic movement which can trigger discomfort or seizures in sensitive individuals. Therefore, a `@media (prefers-reduced-motion: reduce)` media query is strictly enforced. It completely bypasses the glitch keyframes and replaces them with a smooth, simple opacity fade (`ease-glitch-avatar-fallback-ag`).
