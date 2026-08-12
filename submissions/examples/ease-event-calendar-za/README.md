# CSS Event Calendar Component

## What does this do?
A complete event calendar with month navigation, day grid with event indicators, today highlighting, legend sidebar with color-coded event types, and upcoming events list.

## How is it used?
```html
<div class="ec-calendar">
  <div class="ec-nav">
    <button class="ec-nav-btn">&#9664;</button>
    <div class="ec-nav-title"><h2>June 2026</h2></div>
    <button class="ec-nav-btn">&#9654;</button>
  </div>
  <div class="ec-days">
    <div class="ec-day ec-day-today">22</div>
    <div class="ec-day ec-day-event">9</div>
  </div>
</div>
```

## Why is it useful?
Creates a professional event calendar for scheduling and planning pages. Features a month navigation bar with previous and next buttons and today shortcut, seven-day header row, grid of day cells with other-month dimming and today highlighting, event dot indicators with color coding for different event types via data attributes, a legend sidebar with color swatches, and an upcoming events list with date badges and event details including title description and time. Each event card has a colored left border matching its category. Fully responsive with sidebar stacking on mobile.
