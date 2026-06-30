# Ease Callout Zd

## What does this do?

A set of animated callout/feature highlight boxes with colored left accents, icons, slide-in entrance animation, hover lift effect, optional badges, and stacked layout — built with pure HTML and CSS.

## How is it used?

```html
<!-- Basic callout -->
<div class="cl-callout cl-blue">
  <div class="cl-icon cl-icon-blue">ℹ</div>
  <div class="cl-content">
    <div class="cl-title">New Analytics Dashboard</div>
    <div class="cl-desc">Track your key metrics with real-time analytics.</div>
  </div>
</div>

<!-- With badge -->
<div class="cl-callout cl-green">
  <div class="cl-icon cl-icon-green">✓</div>
  <div class="cl-content">
    <span class="cl-badge cl-badge-green">New</span>
    <div class="cl-title">Team Collaboration</div>
    <div class="cl-desc">Invite teammates and collaborate in real time.</div>
  </div>
</div>

<!-- Stacked -->
<div class="cl-stack">
  <div class="cl-callout cl-blue">...</div>
  <div class="cl-callout cl-green">...</div>
</div>
```

Colors: cl-blue, cl-green, cl-orange, cl-purple

## Why is it useful?

Callout boxes are essential for documentation, feature announcements, onboarding tips, and highlighting important information in dashboards. This component provides a clean, reusable pattern with distinctive color-coded left accents, slide-in animations, icon pop effects, hover lift, and stacked support — all pure CSS with prefers-reduced-motion support.
