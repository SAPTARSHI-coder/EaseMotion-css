# Clip Path Avatar Component

## 1. What does this do?

A collection of clip-path avatar shapes (hexagon, octagon, and squircle) that transition smoothly into circular shapes on hover with glowing gradient borders and animations.

## 2. How is it used?

Wrap an image in a clip-path wrapper to display standard shapes (like hexagon or squircle) with matching border properties:

```html
<div class="avatar-clip-wrapper avatar-hexagon">
  <img src="avatar.jpg" alt="User Profile" class="avatar-clip-img" />
</div>
```

## 3. Why is it useful?

It fits seamlessly into EaseMotion CSS's core philosophy:

- **Human-readable**: Naming conventions like `avatar-clip-wrapper` and shape classes clearly state visual styles.
- **Animation-first**: Uses matching coordinate counts in `clip-path` parameters to enable fluid, morphing transitions on user interactions.
- **Composable**: Modular classes can be applied to individual avatars, user profiles, or grouped layout feeds.
