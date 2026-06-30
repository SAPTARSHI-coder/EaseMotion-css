# Glassmorphism Profile Card Hover Effect

## Overview

A modern, responsive profile card component featuring a glassmorphism aesthetic with backdrop-filter blur. The card includes a smooth hover lift effect, animated social media icons with platform-specific hover states, and a gradient border glow that appears on hover — all implemented in pure CSS with zero JavaScript.

## Features

- Glassmorphism background using `backdrop-filter: blur(16px)`
- Smooth hover lift with cubic-bezier easing and scale transform
- Gradient border glow on hover via `::before` pseudo-element
- Animated social media icons (GitHub, Twitter, LinkedIn, Dribbble, Website)
- Platform-specific hover colors for social icons
- Avatar placeholder with gradient initials
- Gradient accent bar at the top of the card
- Background orbs for visual depth
- Responsive flexbox grid layout
- Mobile-optimized breakpoint
- Reduced-motion accessibility support

## Use Cases

- Portfolio websites
- Team member directories
- User profile sections
- About pages
- Landing page testimonials
- Social media link aggregators

## Example Usage

```html
<div class="profile-card">
  <div class="card-accent"></div>
  <div class="avatar-wrap">
    <div class="avatar-placeholder">A</div>
  </div>
  <div class="card-name">Alex Rivera</div>
  <div class="card-role">UI/UX Designer</div>
  <div class="card-bio">
    Crafting beautiful, accessible interfaces with a passion for motion design.
  </div>
  <div class="social-row">
    <a href="#" class="social-icon github" aria-label="GitHub">G</a>
    <a href="#" class="social-icon twitter" aria-label="Twitter">T</a>
    <a href="#" class="social-icon linkedin" aria-label="LinkedIn">L</a>
  </div>
</div>
```

## Animation Behavior

1. Card fades in with a `translateY(20px)` offset on page load.
2. On hover, the card lifts 10px upward with a `scale(1.02)` and a `cubic-bezier(0.34, 1.56, 0.64, 1)` easing.
3. A gradient border glow fades in around the card edges.
4. Social media icons bounce upward with `translateY(-4px) scale(1.1)` on hover.
5. Avatar border color shifts and scales slightly on card hover.

## Accessibility

This component respects the user's motion preferences through the `prefers-reduced-motion` media query, which disables all animations and transitions.

## Browser Compatibility

Compatible with modern browsers supporting:

- CSS Animations
- CSS Transforms
- CSS Backdrop Filter
- CSS Keyframes
- Media Queries
- CSS Custom Properties

## Acceptance Criteria

- Uses CSS keyframes.
- Smooth and reusable animation.
- Lightweight implementation.
- Accessible design.
- Easy integration into existing projects.
- Consistent with EaseMotion CSS principles.
