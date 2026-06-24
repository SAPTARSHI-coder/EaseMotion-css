# Incident Channel Roster

A dark-themed, grid-layout roster for displaying incident communication channels and their real-time status. Built with hand-crafted CSS — no JavaScript, no frameworks.

## Features

- Pure CSS grid layout (`grid-template-columns: auto 1fr auto`) — no flexbox
- Minimal targeted reset (only `div`, `span`, `h1`, `p`, `a`, `strong`, `ul`)
- Staggered entry animation via `comeIn` keyframes
- Left accent bar using `::before` pseudo-element
- Color-coded status badges: primary, backup, degraded, unavailable
- Reduced-motion support via `prefers-reduced-motion`
- Responsive at 640px breakpoint — cards stack vertically
- Hover state with `translateX(6px)` lift

## Channel States

| State | Color | Description |
|-------|-------|-------------|
| Primary | Emerald (#059669) | Actively used, healthy |
| Backup | Blue (#2563eb) | Standby, operational |
| Degraded | Yellow (#ca8a04) | Partial functionality |
| Unavailable | Red (#dc2626) | Not operational |

## Example Usage

```html
<li class="channel-card" data-accent="emerald">
  <div class="channel-icon" data-accent="emerald">&#9881;</div>
  <div class="channel-info">
    <p class="channel-name">Status Page</p>
    <p class="channel-owner">Infrastructure</p>
  </div>
  <div class="channel-meta">
    <span class="channel-status" data-status="primary">Primary</span>
    <span class="channel-response">&lt; 1min</span>
  </div>
</li>
```

## Accessibility

- Semantic HTML with `<ul>` / `<li>` list structure
- `aria-*` attributes omitted intentionally (presentational component)
- Reduced-motion media query disables all animations
- Sufficient color contrast on all status badges
- Font-relative units (`rem`) for scalable text

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and custom properties
- `@media (prefers-reduced-motion)`

## Acceptance Criteria

- [x] Hand-crafted CSS with no framework dependencies
- [x] Grid-based card layout (not flexbox)
- [x] Dark theme with radial gradient accent
- [x] Six example channels with realistic incident data
- [x] Four distinct status states with unique colors
- [x] Entry animation with staggered delays
- [x] Hover state with horizontal translation
- [x] Responsive at 640px breakpoint
- [x] Reduced-motion support
- [x] No JavaScript
- [x] Documentation with channel state table

Fixes #19155
