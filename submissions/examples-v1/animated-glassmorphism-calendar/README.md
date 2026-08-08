# Glassmorphism Calendar Widget Animation

A stylish monthly calendar widget with a frosted glass (glassmorphism) look, a pulsing highlight on today's date, and smooth hover animations. Pure HTML and CSS — no JavaScript required.

## Features

- 🧊 Frosted glass card using `backdrop-filter: blur()` over a colorful gradient background
- 📅 Full monthly grid layout, including muted leading/trailing days from adjacent months
- ✨ Today's date is highlighted with a solid fill and a gentle pulsing glow animation
- 🎯 Hover scale effect on every selectable day
- 🔵 Optional event indicator dot beneath any date
- 📱 Responsive — scales padding and font size down on small screens
- ♿ Respects `prefers-reduced-motion` for accessibility
- 🧩 Pure HTML + CSS — no JavaScript dependencies

## Usage

Include `style.css`, then build the card with a header, weekday row, and day grid:

```html
<div class="calendar-card">
  <div class="calendar-header">
    <p class="calendar-title">March 2026</p>
    <div class="calendar-nav">
      <button class="calendar-nav-btn" aria-label="Previous month">‹</button>
      <button class="calendar-nav-btn" aria-label="Next month">›</button>
    </div>
  </div>

  <div class="calendar-weekdays">
    <span>Su</span><span>Mo</span><span>Tu</span><span>We</span>
    <span>Th</span><span>Fr</span><span>Sa</span>
  </div>

  <div class="calendar-days">
    <div class="calendar-day calendar-day--muted">28</div>
    <div class="calendar-day">1</div>
    <div class="calendar-day--today calendar-day">18</div>
    <div class="calendar-day calendar-day--event">11</div>
    <!-- ...one .calendar-day per date -->
  </div>
</div>