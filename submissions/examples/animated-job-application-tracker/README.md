# Animated Job Application Tracker

A responsive Animated Job Application Tracker component that displays application progress, interview stages, recruiter updates, application statistics, and company information through a modern career dashboard interface.

## Usage

To use this component in your project, include the styles from `style.css` and use the following HTML structure:

```html
<div class="ajat-dashboard">
  <!-- Header with statistics -->
  <header class="ajat-header">
    <h1 class="ajat-title">Application Console</h1>
    <div class="ajat-stats-summary">
      <div class="ajat-stat-card">
        <strong class="ajat-stat-val">32</strong>
        <span class="ajat-stat-label">Total Applied</span>
      </div>
      ...
    </div>
  </header>

  <div class="ajat-content">
    <!-- Main panel with job application cards -->
    <section class="ajat-main-panel">
      <div class="ajat-job-list">
        <article class="ajat-card ajat-card--interviewing">
          <div class="ajat-card-header">
            <div class="ajat-company-info">
              <div class="ajat-logo ajat-logo--notion">N</div>
              <h3>Lead Product Designer</h3>
            </div>
            <div class="ajat-status-wrapper">
              <span class="ajat-status-badge ajat-status-badge--blue"
                >Interviewing</span
              >
            </div>
          </div>

          <!-- Stepper timeline stage progress -->
          <div class="ajat-timeline-wrapper">
            <div class="ajat-timeline">
              <div class="ajat-timeline-step ajat-timeline-step--completed">
                <div class="ajat-step-marker"></div>
                <span class="ajat-step-label">Applied</span>
              </div>
              <div class="ajat-timeline-step ajat-timeline-step--active">
                <div class="ajat-step-marker"></div>
                <span class="ajat-step-label">Technical</span>
              </div>
              ...
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Sidebar with interviews and activity logs -->
    <aside class="ajat-sidebar">
      <div class="ajat-panel">
        <h3>Upcoming Interviews</h3>
        ...
      </div>
    </aside>
  </div>
</div>
```

## Philosophy & Usefulness

This component aligns with EaseMotion CSS because it:

- **Prioritizes CSS-only interactions**: Shows visual progress tracking, state transformations, logo hover animations, and glow transitions entirely using HTML and CSS.
- **Showcases animation-first design**: Includes a pulsing active interview stage marker, recruiter activity log pulse dot indicators, and springy translateY card hover lifts.
- **Follows accessibility practices**: Provides keyboard-navigable tab targets on stat cards, job cards, and interview nodes, semantic dashboard structures, and disables all animations for `prefers-reduced-motion: reduce`.
