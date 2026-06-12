# Animated Team Performance Leaderboard

An interactive, premium team leaderboard component featuring ranked list items, custom medal badge styles, top performer glowing highlights, SVG avatar zooms, performance progress fills, and responsive columns. Ideal for SaaS insights panels, team dashboards, employee recognition pages, and analytics products.

## Key Features

- **Row Hover Elevation**: Lifts rows slightly (`translateY(-4px)`) and expands their drop-shadows on hover.
- **Top Performer Highlighting**: Places a special highlight border on the top performer (`.top-performer`) along with a gold glowing shadow overlay.
- **Glossy Sheen reflection**: Sweeps a diagonal gloss reflection line across the row on hover.
- **CSS Load-In Progress Fills**: Fills the performance progress bars smoothly on page load from `0%` to their custom target values (`--percent`) via GPU-optimized keyframe animations.
- **Rank Medal Badges**: Renders custom colored rings representing top rankings (#1 Gold, #2 Silver, #3 Bronze).
- **Achievement Badges**: Integrates badge categories (e.g. `MVP`, `Velocity`, `Quality`) with pulsing scale animations.
- **Offline-First Avatars**: Employs URL-encoded inline SVG Data URIs representing initials for instant offline preview loading.
- **Fully Responsive**: Adapts columns gracefully. Drops progress indicators and tags on mobile viewports to focus on ranks, avatars, names, and scores.

## File Structure

```text
submissions/examples/animated-team-performance-leaderboard/
├── demo.html
├── style.css
└── README.md
```

## HTML Structure

```html
<div class="leaderboard">
  <!-- Top Performer #1 -->
  <div class="leaderboard-item top-performer">
    <span class="rank">#1</span>

    <img src="data:image/svg+xml;utf8,..." alt="User Avatar" class="avatar">

    <div class="user-info">
      <h4>Sarah Johnson</h4>
      <p>Product Designer</p>
    </div>

    <!-- Progress Indicator -->
    <div class="performance-progress">
      <div class="progress-bar">
        <div class="progress-fill" style="--percent: 98%;"></div>
      </div>
    </div>

    <!-- Achievement Badges -->
    <div class="badges">
      <span class="badge badge-mvp">MVP</span>
    </div>

    <span class="score">98%</span>
  </div>
</div>
```

## CSS Customizations

You can customize colors, dimensions, and transitions via variables inside `style.css`:

```css
:root {
  /* Cards */
  --l-card-bg: rgba(30, 41, 59, 0.4);
  --l-card-hover-bg: rgba(30, 41, 59, 0.75);
  
  /* Medals */
  --l-color-gold: #fbbf24;
  --l-color-silver: #94a3b8;
  --l-color-bronze: #d97706;
  
  /* Primary Accent */
  --l-color-primary: #6366f1;
}
```

To set the progress fill percentage dynamically on a row, assign the `--percent` inline variable to the `.progress-fill` node:
```html
<div class="progress-fill" style="--percent: 92%;"></div>
```

## How to View

1. Navigate to `submissions/examples/animated-team-performance-leaderboard/`.
2. Open `demo.html` in any web browser to preview interactions and animations.
3. Resize the window to see columns drop and adjust layout ratios for tablet and mobile screens.

## Contribution Standards

- Submit code within the target folder only; do not modify parent directories.
- Selectors will be refactored by the repository maintainer to follow the GSSoC `ease-*` naming prefix conventions upon integration.
