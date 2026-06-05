# Project Roadmap Timeline Component

A modern roadmap timeline component for showcasing project milestones, completed features, ongoing development tasks, and upcoming releases. Milestones are connected with a vertical timeline and color-coded status indicators.

## Classes

| Class                         | Description                                                |
| ----------------------------- | ---------------------------------------------------------- |
| `ease-roadmap`                | Vertical timeline container with connecting line           |
| `ease-roadmap-item`           | Individual milestone item with staggered reveal            |
| `ease-roadmap-dot`            | Circular status indicator dot                              |
| `ease-roadmap-content`        | Content card with title, description, and date             |
| `ease-roadmap-date`           | Optional date label                                        |
| `ease-roadmap-item-completed` | Green dot and border for finished milestones               |
| `ease-roadmap-item-active`    | Purple dot with pulse animation for in-progress milestones |
| `ease-roadmap-item-planned`   | Default outlined dot for future milestones                 |

## Usage

```html
<div class="ease-roadmap">
  <div class="ease-roadmap-item ease-roadmap-item-completed">
    <span class="ease-roadmap-dot"></span>
    <div class="ease-roadmap-content">
      <h4>MVP Launch</h4>
      <p>Initial product released to early users.</p>
      <span class="ease-roadmap-date">Q1 2026</span>
    </div>
  </div>

  <div class="ease-roadmap-item ease-roadmap-item-active">
    <span class="ease-roadmap-dot"></span>
    <div class="ease-roadmap-content">
      <h4>User Authentication</h4>
      <p>Adding secure login and registration system.</p>
      <span class="ease-roadmap-date">Q2 2026</span>
    </div>
  </div>

  <div class="ease-roadmap-item ease-roadmap-item-planned">
    <span class="ease-roadmap-dot"></span>
    <div class="ease-roadmap-content">
      <h4>Mobile Application</h4>
      <p>Native Android and iOS support.</p>
      <span class="ease-roadmap-date">Q3 2026</span>
    </div>
  </div>
</div>
```

## Why it fits EaseMotion CSS

Pure CSS timeline pattern with staggered slide-in reveal, a pulsing status indicator for active items, and hover lift on content cards. Uses design tokens for colors and spacing. Respects `prefers-reduced-motion`.
