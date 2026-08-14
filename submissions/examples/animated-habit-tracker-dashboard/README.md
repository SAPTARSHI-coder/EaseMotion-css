# Animated Habit Tracker Dashboard

A responsive Animated Habit Tracker Dashboard component that displays habits, streak statistics, weekly completion progress, achievement milestones, and productivity analytics through a modern, glassmorphic layout.

## Usage

To use this component in your project, include the styles from `style.css` and use the following HTML structure:

```html
<div class="ahtd-dashboard">
  <!-- Header -->
  <header class="ahtd-header">
    <h1 class="ahtd-title">HabitFlow</h1>
  </header>

  <div class="ahtd-content">
    <!-- Main panel with habit cards -->
    <section class="ahtd-main-panel">
      <div class="ahtd-habits-grid">
        <article class="ahtd-card ahtd-card--cyan">
          <div class="ahtd-card-header">
            <h3>Stay Hydrated</h3>
            <div class="ahtd-streak">🔥 <strong>15d</strong></div>
          </div>
          <!-- Checkbox days checklist (Mon-Sun) -->
          <div class="ahtd-days-grid">
            <div class="ahtd-day-cell">
              <input
                type="checkbox"
                id="h1-mon"
                class="ahtd-day-checkbox"
                checked
              />
              <label for="h1-mon" class="ahtd-day-label">M</label>
            </div>
            ...
          </div>
        </article>
      </div>
    </section>

    <!-- Sidebar with stats -->
    <aside class="ahtd-sidebar">
      <!-- Progress circle -->
      <div class="ahtd-panel">
        <svg class="ahtd-progress-ring" width="80" height="80">
          <circle
            class="ahtd-progress-ring-fill"
            stroke="url(#ahtd-gradient)"
            style="--ahtd-ring-pct: 75;"
          />
        </svg>
      </div>
      <!-- Consistency bar chart -->
      <div class="ahtd-panel">
        <div class="ahtd-chart">
          <div class="ahtd-chart-col" style="--ahtd-bar-height: 80%;">
            <div class="ahtd-chart-bar"></div>
          </div>
          ...
        </div>
      </div>
    </aside>
  </div>
</div>
```

## Philosophy & Usefulness

This component aligns with EaseMotion CSS because it:

- **Prioritizes CSS-only interactions**: Uses the checkbox hack to enable checking/unchecking habits across the weekly calendar with springy scale pops in pure HTML and CSS.
- **Showcases animation-first design**: Includes a growing weekly bar chart, rotating and fading progress ring loading circles, flickering streak flames, and sliding translations on hover.
- **Follows accessibility practices**: Provides keyboard-navigable day triggers via `<label>` and native checkbox focus targets, has semantic structures, and stops all visual animations for `prefers-reduced-motion: reduce`.
