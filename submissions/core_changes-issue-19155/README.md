# Incident Communication Channel Roster

A dark-themed, glassmorphism-based UI roster that displays incident communication channels with status indicators, response ETAs, and ownership details.

## Overview

This component provides a single-page HTML/CSS roster for incident response coordination. Channel cards are colour-coded by operational state and include a left accent bar, icon, name, owning team, status badge, and response time.

## Features

- Dark theme (`#0a0e17` base) with glassmorphism cards (`backdrop-filter: blur(12px)`)
- 4px left accent bar per channel state (green/blue/yellow/red)
- Status badges with matching coloured backgrounds
- Channel icons in coloured circular containers
- Hover `translateX(4px)` effect with shadow lift
- Staggered `slideIn` animation from the left on load
- Responsive layout for mobile viewports
- `prefers-reduced-motion` support disables all animations

## Channel States

| State       | Colour | Description                               |
|-------------|--------|-------------------------------------------|
| Primary     | Green  | Fully operational, first-response channel |
| Backup      | Blue   | Standby channel if primary is unavailable |
| Degraded    | Yellow | Partial functionality, increased latency  |
| Unavailable | Red    | Channel is down, ETA under investigation  |

## Realistic Entries

| Channel               | Team                  | State       | ETA            |
|-----------------------|-----------------------|-------------|----------------|
| Status Page           | Infrastructure Team   | Primary     | 1 min          |
| Slack Incident Channel| On-Call Engineering   | Primary     | 30 sec         |
| Conference Bridge     | INC Commander         | Backup      | 2 min          |
| Email Updates         | Communications Lead   | Backup      | 5 min          |
| SMS Alert Gateway     | SRE Team              | Degraded    | 10 min         |
| PagerDuty Integration | Platform Team         | Unavailable | Investigating  |

## Example Usage

```html
<link rel="stylesheet" href="style.css">

<header class="header">
  <h1>Incident Communication Channels</h1>
  <p>Active roster for incident response coordination</p>
</header>

<div class="channels">
  <div class="channel-card status-green">
    <div class="channel-icon">&#x1F4E1;</div>
    <div class="channel-info">
      <div class="channel-name">Status Page</div>
      <div class="channel-owner">Infrastructure Team</div>
    </div>
    <div class="channel-meta">
      <span class="status-badge">Primary</span>
      <span class="response-time">ETA: 1 min</span>
    </div>
  </div>
</div>
```

## Accessibility

- Semantic HTML (`header`, `div` grouping)
- Colour is never the sole differentiator for channel state (text labels present)
- `prefers-reduced-motion` media query disables all CSS animations
- Sufficient contrast ratios in all status states

## Browser Compatibility

- Chrome 91+, Firefox 90+, Safari 15+, Edge 91+
- Requires `backdrop-filter` support (WebKit prefix included)
- ES2015+ classList and flexbox (no JavaScript required)

## Acceptance Criteria

- [ ] Six channel cards render with correct status colours and accent bars
- [ ] Status badges display correct states (Primary, Backup, Degraded, Unavailable)
- [ ] Staggered slide-in animation plays on page load
- [ ] Hover effect slides card 4px right with shadow
- [ ] Layout is responsive down to 320px viewport width
- [ ] Reduced motion preference disables all animations
- [ ] No JavaScript used anywhere in the solution
- [ ] Left accent bar colour matches channel state

Fixes #19155
