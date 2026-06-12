# Ease Timeline Component

## What does this do?

A modern, responsive **Timeline Component** designed to display chronological events, company histories, project roadmap milestones, and system activity logs. It supports vertical left-aligned lists, alternating center grids, horizontal scroll rows, compact activity feeds, themed indicators (including gradient support), and responsive collapse rules.

## How is it used?

Include `style.css` in your project and structure your HTML following these classes:

### 1. Default Vertical Timeline

Declare an unordered list with `ease-timeline` and populate it with `ease-timeline-item` items:

```html
<nav aria-label="Progress">
  <ul class="ease-timeline">
    <li class="ease-timeline-item ease-item-success">
      <div class="ease-timeline-badge">1</div>
      <div class="ease-timeline-content">
        <span class="ease-timeline-date">Oct 15, 2025</span>
        <h3 class="ease-timeline-title">Event Title</h3>
        <p class="ease-timeline-desc">
          Details about this timeline milestone event.
        </p>
      </div>
    </li>
  </ul>
</nav>
```

### 2. Alternating Centered Timeline

Add `.ease-timeline-alternating` to center-align the connector line and alternate items left and right:

```html
<ul class="ease-timeline ease-timeline-alternating">
  <!-- Odd item (Left side) -->
  <li class="ease-timeline-item ease-item-primary">...</li>

  <!-- Even item (Right side) -->
  <li class="ease-timeline-item ease-item-success">...</li>
</ul>
```

### 3. Horizontal Roadmap

Embed the list in an overflow scroll container and apply `.ease-timeline-horizontal`:

```html
<div class="timeline-wrapper-horizontal">
  <ul class="ease-timeline ease-timeline-horizontal">
    <li class="ease-timeline-item ease-item-success">
      <div class="ease-timeline-badge">Q1</div>
      <div class="ease-timeline-content">
        <h3 class="ease-timeline-title">Research</h3>
        <p class="ease-timeline-desc">Details...</p>
      </div>
    </li>
  </ul>
</div>
```

### 4. Activity Logs (Compact)

Apply `.ease-timeline-activity` and insert circular avatars/icon badges:

```html
<ul class="ease-timeline ease-timeline-activity">
  <li class="ease-timeline-item">
    <img class="activity-avatar" src="user.jpg" alt="User Profile" />
    <div class="ease-timeline-content">
      <div class="activity-header">
        <strong>Jane Smith</strong>
        <span class="activity-action">assigned task</span>
        <span class="activity-time">5m ago</span>
      </div>
    </div>
  </li>
</ul>
```

### 5. Color Theme Badges

Available states for timeline nodes:

- `.ease-item-primary` (Indigo border outline)
- `.ease-item-success` (Emerald green outline)
- `.ease-item-upcoming` (Muted gray background)
- `.ease-item-gradient` (Purple-pink linear gradient fill)

## Features

- **Alternating Shifts**: Align items center-stage or collapse them leftward.
- **Horizontal Scrollbars**: Roadmaps roll left-to-right with custom styling.
- **Collapsible Center**: On smaller screens, the alternating layout adapts to left-aligned structures.
- **Card Transformations**: Hovering over cards lifts them (`translateY`) and raises shadows (`box-shadow`).
- **Activity Log Layouts**: Space is optimized for compact header lines, code tags, and links.
- **Pure CSS**: Zero JS dependencies.

## Tech Stack

- HTML
- CSS (Flexbox flow, absolute central alignment, custom properties, hover slide effects)

## Preview

Open `demo.html` directly in your browser to inspect hover translations, check mobile width collapse transitions, and view horizontal scrolling roadmaps!

## Contribution Notes

- Class naming was handled by the contributor.
- Maintainer will rename to ease-\* convention before merging.
