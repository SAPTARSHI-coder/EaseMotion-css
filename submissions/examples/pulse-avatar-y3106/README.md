# Pulse Avatar

## 1. What does this do?

A sleek personal-portfolio-inspired avatar component featuring nested concentric status rings that pulse and expand outwards continuously, complete with interactive hover zooms.

## 2. How is it used?

Wrap the avatar image and status badge inside the pulse container, specifying the status modifier (`pulse-active`, `pulse-busy`, or `pulse-idle`):

```html
<div class="pulse-avatar-container pulse-active">
  <div class="pulse-ring"></div>
  <div class="pulse-ring"></div>
  <div class="pulse-ring"></div>
  <div class="avatar-img-wrapper">
    <img src="avatar.jpg" alt="Profile" class="avatar-img" />
    <span class="status-badge"></span>
  </div>
</div>
```

## 3. Why is it useful?

It conforms fully to the EaseMotion CSS design rules:

- **Human-readable**: Semantic structure naming configurations like `pulse-avatar-container`, `pulse-ring`, and `status-badge` make layout roles directly obvious.
- **Animation-first**: Implements staggered multi-ring radial wave expansion animations with smooth opacity decay.
- **Composable**: Perfect for author profiles, team layout cards, dashboard headers, or chat list indicators.
