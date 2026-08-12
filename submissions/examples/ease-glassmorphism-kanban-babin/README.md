# Glassmorphism Kanban Board Showcase

A sleek, interactive glassmorphic task management board powered by pure EaseMotion CSS animations and backdrop blur effects.

## 1. What does this do?
This component renders an ultra-modern Kanban board layout with glassmorphism translucent panels, smooth hover state transformations, dynamic status indicators, and subtle glowing pulse keyframe animations on active tasks.

## 2. How is it used?
Include the CSS stylesheet in your project and wrap your task elements in `.ease-glass-panel` and `.ease-card-hover` containers:

```html
<section class="kanban-column ease-glass-panel">
  <article class="kanban-card ease-card-hover" tabindex="0">
    <h3 class="card-title">Task Title</h3>
  </article>
</section>
```

## 3. Why is it useful?
- Provides a clean, modern aesthetic for dashboards and productivity tools.
- Uses hardware-accelerated CSS transforms (`translateY`, `scale`) for smooth 60fps interaction.
- Accessible keyboard focus states out of the box with zero JavaScript dependencies.
