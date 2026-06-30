# Animated Kanban Task Card

An interactive, premium Kanban task card component built for modern dashboards and SaaS products. Inspired by productivity platforms like Trello, Jira, Linear, ClickUp, and Notion.

## What does this do?

This component provides a sleek Kanban task card structure featuring:

- **Hover Elevation & Shadow Shift**: Elevates the card with `translateY(-6px)` and changes its shadow size dynamically.
- **Priority-Based Glow Border**: Applies an animated glowing outline around the card based on priority on hover.
- **Pulsing Priority Badges**: Animates the priority tag background with a breathing glow cycle.
- **Animated Status Indicators**: In-Progress and Completed tasks exhibit a subtle, pulsing radar ring.
- **Tactile Grab Physics**: Emulates physical click feedback by shrinking cards and updating cursors on `active`.
- **Overlapping Avatar Stack**: Avatars overlap cleanly and spread out slightly on hover for easy inspection.
- **Shimmer Sheen Reflection**: Sweeps a gloss sheen across the card face on hover.

## How is it used?

Add the task card class along with a priority helper class directly to your layout container:

```html
<!-- Example of High Priority Card -->
<div class="task-card high-priority">
  <span class="priority-badge">High</span>

  <h3>Implement Authentication Flow</h3>

  <p>Complete login, registration, and password recovery screens.</p>

  <div class="task-footer">
    <span class="due-date">Due: Jun 20</span>

    <div class="avatars">
      <img src="avatar1.jpg" alt="User" />
      <img src="avatar2.jpg" alt="User" />
    </div>
  </div>
</div>
```

### Advanced Usage (Dashboard Column Layout)

You can include live status indicators and metadata wrappers inside the card's header area:

```html
<div class="task-card medium-priority">
  <div class="card-header-meta">
    <span class="status-indicator status-in-progress">
      <span class="status-dot"></span>In Progress
    </span>
    <span class="priority-badge">Medium</span>
  </div>
  <h3>Stripe API Integration</h3>
  <p>Implement billing webhooks and checkout sessions.</p>
  ...
</div>
```

## Why is it useful?

Task cards are a cornerstone of productivity apps. By centering interactions around smooth transitions and high-performance GPU-friendly transforms, this component:

1. **Reduces visual clutter**: Fits complex metadata into a compact, elegant footprint.
2. **Improves UX/UI Polish**: Delights users with responsive micro-animations (e.g. rotating buttons, pulsing indicators, and sheen sweeps).
3. **Optimizes Layouts**: Leverages a highly responsive CSS grid adapting gracefully across mobile, tablet, and desktop devices.

## Tech Stack

- HTML5
- CSS3 (Vanilla Custom Properties, Keyframes, Transitions, Flexbox, Grid)
- Custom Inline SVGs (No external image dependencies or network calls)

## Preview

To view the demo:

1. Open the [demo.html](file:///c:/Users/LENOVO/Desktop/GSSoC/Ease%20Motion/EaseMotion-css-gssoc/submissions/examples/animated-kanban-task-card/demo.html) directly in any modern browser.
2. Hover over any task card to observe the elevation, sheen sweep, and priority glow.
3. Click and hold a card to observe the active tactile squeeze.

## Contribution Notes

- Class names align with the contributor submissions standard.
- The repository maintainer will standardize selectors to the `ease-*` prefix during integration.
