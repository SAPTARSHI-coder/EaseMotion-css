# Plasma User Badge

## 1. What does this do?

A premium, travel-inspired user badge component featuring a fluid, continuously morphing plasma gradient border outline that surrounds the user avatar, complete with interactive glowing hover states.

## 2. How is it used?

Wrap the avatar image inside the plasma badge element, specifying the rank theme variation (`theme-sunset`, `theme-ocean`, or `theme-aurora`):

```html
<div class="plasma-badge-wrapper theme-sunset">
  <div class="plasma-glow-aurora"></div>
  <div class="plasma-border-blob">
    <div class="avatar-cutout">
      <img src="avatar.jpg" alt="User Profile" class="avatar-img" />
    </div>
  </div>
</div>
```

## 3. Why is it useful?

It conforms fully to the EaseMotion CSS design guidelines:

- **Human-readable**: Semantic structure naming configurations like `plasma-border-blob` and `avatar-cutout` communicate functional roles directly.
- **Animation-first**: Implements advanced organic morphing animations (`easePlasmaMorph`) using keyframed variable border-radii and shifting hue gradients.
- **Composable**: Perfect for user profiles in social travel sheets, gamified ranking badges, SaaS dashboard headers, or community cards.
