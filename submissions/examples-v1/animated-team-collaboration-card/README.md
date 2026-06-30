# Animated Team Collaboration Card

An interactive, premium team collaboration card with smooth load progress animations, pulsing status badges, overlapping avatar groups, and join channel CTAs. Designed for team directories, workspace hubs, Slack integrations, and project planners.

## What does this do?

This component provides a sleek workspace card featuring:

- **Card Hover Elevation**: Raises the card (`translateY(-8px)`) and expands its drop shadow on hover.
- **Dynamic Status Glows**: Casts a soft ambient color glow around the card matching the team status (`Active`, `Away`, or `In Meeting`).
- **CSS Load Progress Animation**: Animates the progress bar fill from `0%` to its target width on page load with pure CSS keyframes.
- **Pulsing Status Badges**: Emits a continuous, pulsing radar signal behind the badge.
- **Overlapping Avatar Stack**: Displays team member avatars that spread out slightly on card hover.
- **Glossy Sheen Reflection**: Sweeps a soft gloss sheet across the card face on hover.
- **Action Button Scale**: Highlights channel join triggers on hover.

## How is it used?

Integrate the widget template into your dashboard layout:

```html
<!-- Example of Active Team Collaboration Card -->
<div class="team-card team-active">
  <div class="team-header">
    <h3>Product Design Team</h3>
    <span class="status-badge">Active</span>
  </div>

  <p>Collaborating on dashboard redesign and user experience improvements.</p>

  <div class="avatar-group">
    <img src="avatar1.jpg" alt="Member" />
    <img src="avatar2.jpg" alt="Member" />
    <img src="avatar3.jpg" alt="Member" />
  </div>

  <div class="progress-section">
    <span>Project Progress</span>
    <div class="progress-bar">
      <div class="progress-fill"></div>
    </div>
  </div>
</div>
```

### Accents & Themes

Modify the theme by changing the class modifiers on the `.team-card` container:

- **Active**: Add `team-active` to the widget (Green accent).
- **Away**: Add `team-away` to the widget (Amber accent).
- **In Meeting / Busy**: Add `team-busy` to the widget (Purple accent).

## Why is it useful?

Team panels are a foundational layout pattern in modern intranet and management web structures. This widget:

1. **Reduces layout fatigue**: Organizes members, descriptions, active metrics, and chat hooks in a single card.
2. **Encourages instant interaction**: Makes team status recognizable immediately using color codes and pulsing rings.
3. **High-performance GPU transitions**: Leverages hardware-accelerated transforms for clean 60fps animations.

## Tech Stack

- HTML5
- CSS3 (Vanilla Custom Properties, Keyframe Animations, Grid, Flexbox)
- Inline SVGs (No external image network requests required)

## Preview

To see the widgets in action:

1. Open the [demo.html](file:///c:/Users/LENOVO/Desktop/GSSoC/Ease%20Motion/EaseMotion-css-gssoc/submissions/examples/animated-team-collaboration-card/demo.html) directly in any modern web browser.
2. Hover over cards, avatars, and CTA buttons to trigger micro-interactions.

## Contribution Notes

- Class names correspond to GSSoC contribution requirements.
- The project maintainer will refactor selectors to the `ease-*` prefix during repository integration.
