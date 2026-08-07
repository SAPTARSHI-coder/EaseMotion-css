# Glitch Badge Mixin

## Description
This SCSS mixin applies a "glitch" effect to a badge element on hover. The glitch effect utilizes quick, small 2D translations to simulate a digital jitter or glitch. This makes it an engaging "Attention Seeker" hover effect, particularly suited for tech, gaming, or cyberpunk-themed interfaces.

## Usage
Import the mixin into your SCSS files and apply it to a selector. 

```scss
@import 'path/to/submissions/scss/feature-glitch-badge-mixin-ag/_glitch-badge.scss';

.my-tech-badge {
  // Apply base styling
  background-color: #10b981;
  color: #fff;
  
  // Include the mixin
  @include ease-glitch-badge-mixin-ag(0.3s);
}
```

You can customize the duration and timing function of the glitch:

```scss
.my-custom-badge {
  @include ease-glitch-badge-mixin-ag(0.5s, ease-in-out);
}
```

## Accessibility Considerations
- **Reduced Motion:** The mixin includes a `prefers-reduced-motion: reduce` media query. If the user prefers reduced motion, the erratic glitch animation is entirely disabled. Instead, the badge relies on a static opacity change (0.8) on hover/focus to provide interactive feedback safely.
- **Focus States:** The mixin applies the glitch effect on `:focus` as well as `:hover`, ensuring keyboard-only users receive the same interactive feedback.
