# Claymorphism Notification Alert Badge

An interactive, pure CSS notification badge styled using **Claymorphism** design principles and integrated with **EaseMotion** CSS variables and tokens.

## Features
- **Pure CSS/HTML:** Zero JavaScript dependencies.
- **Claymorphic Styling:** Soft multi-layered shadows and inset highlights for a tactile, 3D soft-UI look.
- **Responsive Layout:** Automatically adjusts padding and typography across mobile, tablet, and desktop viewports.
- **Accessible:** Fully compliant with `prefers-reduced-motion` media queries to disable animations and transitions for sensitive users.
- **Interactive States:** Smooth hover lift and active press states built using CSS transitions.

## Variants
- `.clay-badge` (Default / Info)
- `.clay-badge--success`
- `.clay-badge--warning`
- `.clay-badge--danger`
- `.clay-badge--pulse` (Animated attention-grabbing state)

## Usage Example
```html
<div class="clay-badge-container">
  <div class="clay-badge clay-badge--danger clay-badge--pulse">
    <span class="clay-badge__dot"></span>
    5 New Alerts
  </div>
</div>
