# Animated Course Progress Tracker

A responsive Animated Course Progress Tracker component that displays course completion progress, lesson status, milestones, achievement badges, and learning analytics through a modern educational dashboard interface.

## Usage

To use this component in your project, include the styles from `style.css` and use the following HTML structure:

```html
<section class="ecpt-course-tracker" style="--ecpt-completion: 72">
  <!-- Header -->
  <header class="ecpt-header">
    <div class="ecpt-title">
      <h3>Frontend Development Masterclass</h3>
    </div>
  </header>

  <!-- Progress Bar -->
  <div class="ecpt-progress">
    <div class="ecpt-progress-bar">
      <div class="ecpt-progress-fill"></div>
    </div>
  </div>

  <!-- Modules List -->
  <div class="ecpt-module-list">
    <div class="ecpt-module ecpt-module--current">
      <input
        type="checkbox"
        id="ecpt-toggle-m1"
        class="ecpt-module-toggle"
        checked
      />
      <label for="ecpt-toggle-m1" class="ecpt-module-header">
        <strong>JavaScript Essentials</strong>
        <div class="ecpt-chevron"></div>
      </label>
      <div class="ecpt-lessons-wrapper">
        <div class="ecpt-lessons-inner">
          <div class="ecpt-lessons-list">
            <div class="ecpt-lesson ecpt-lesson--completed">...</div>
            <div class="ecpt-lesson ecpt-lesson--current">...</div>
            <div class="ecpt-lesson ecpt-lesson--locked">...</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

## Philosophy & Usefulness

This component aligns with EaseMotion CSS because it:

- **Prioritizes CSS-only interactions**: Utilizes a checkbox hack and CSS Grid transitions (`grid-template-rows: 0fr` to `1fr`) to implement interactive, animated collapsible modules without JavaScript.
- **Showcases animation-first design**: Includes smooth progress fills, shimmering progress highlights, pulsing active states, rotating chevrons, and springy hover effects on cards, badges, and lessons.
- **Includes accessibility out of the box**: Supports full keyboard navigation with focus indicators and respects system accessibility preferences via `prefers-reduced-motion` media queries.
