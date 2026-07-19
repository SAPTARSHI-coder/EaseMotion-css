# Animated User Profile Stats Card

An interactive, premium user profile card with animated stats, pulsing status badges, and hover scaling. Ideal for SaaS admin portals, social platforms, and team directories.

## What does this do?
This component provides a sleek user card featuring:
- **Card Hover Elevation**: Raises the card (`translateY(-8px)`) and grows its drop shadow on hover.
- **Dynamic Glow Accents**: Illuminates an ambient colored drop shadow and avatar border according to the profile's state (`online`, `active`, or `verified`).
- **Avatar Rotation & Zoom**: Zooms and slightly tilts the avatar image on hover.
- **Pulsing Status Badges**: Shows status state (`Online`, `Active`, `Verified`) with an animated pulsing radar circle.
- **Stat Hover Scaling**: Scales individual statistics columns (`scale(1.06)`) and raises them slightly on hover.
- **Declarative Progress Animation**: Automatically animates a profile completion bar from `0%` to its target value on page load.
- **View Profile Micro-interaction**: Shifts the CTA button arrow to the right on hover.

## How is it used?
Add the profile card markup to your dashboard grid:

```html
<!-- Example of Sarah Johnson's Online Card -->
<div class="profile-card user-online">
  <img src="avatar.jpg" alt="Profile Avatar" class="avatar">

  <h3>Sarah Johnson</h3>
  <p>Product Designer</p>

  <span class="status-badge">Online</span>

  <div class="stats">
    <div class="stat">
      <strong>12.5K</strong>
      <span>Followers</span>
    </div>

    <div class="stat">
      <strong>248</strong>
      <span>Projects</span>
    </div>

    <div class="stat">
      <strong>4.8K</strong>
      <span>Likes</span>
    </div>
  </div>
</div>
```

### Customizable Accents
You can swap the theme of the card by changing the status classes:
- **Online**: Add `user-online` to the `.profile-card` wrapper (Green accent).
- **Active**: Add `user-active` to the `.profile-card` wrapper (Blue accent).
- **Verified**: Add `user-verified` to the `.profile-card` wrapper (Purple accent).

## Why is it useful?
User profile cards are a foundational building block for dashboard structures. This component:
1. **Promotes visual polish**: Enhances standard data grids with smooth, GPU-accelerated transforms and keyframes.
2. **Encourages visual hierarchy**: Leverages color-coded status badges and gradient borders to guide the user's eye.
3. **Responsive-first**: Automatically switches from multi-column grids to a single-column layout on small screens.

## Tech Stack
- HTML5
- CSS3 (Vanilla Custom Variables, Keyframe Animations, Backdrop Blurs, Flexbox, Grid)
- Custom Inline SVGs (No external image network requests needed)

## Preview
To view the demo:
1. Open the [demo.html](file:///c:/Users/LENOVO/Desktop/GSSoC/Ease%20Motion/EaseMotion-css-gssoc/submissions/examples/animated-user-profile-stats-card/demo.html) directly in any modern browser.
2. Hover over cards and stat blocks to observe animations.

## Contribution Notes
- Class names correspond to GSSoC standard example templates.
- Selectors will be refactored by the project maintainer to follow the `ease-*` naming prefix upon integration.
