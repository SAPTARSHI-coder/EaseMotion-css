# Animated Bento Grid Dashboard Layout

A modern Bento Grid dashboard layout — inspired by Apple's product pages and popular portfolio sites — with elegant hover lift-and-glow animations. Pure HTML and CSS, fully responsive.

## Features

- 🍱 Bento-box style CSS Grid layout with cards of varying sizes (large, wide, tall, small)
- ✨ Hover lift + radial glow effect on every card
- 📊 Includes example card types: stat cards, description cards, and a pure-CSS mini bar chart
- 🎨 Accent color modifiers for card icons
- 📱 Fully responsive — grid re-flows at tablet and mobile breakpoints, collapsing to a single column on small screens
- ♿ Respects `prefers-reduced-motion` for accessibility
- 🧩 Pure HTML + CSS — no JavaScript dependencies

## Usage

Include `style.css`, then build a `.bento-grid` containing `.bento-card` elements. Add a size modifier class to control how much space each card takes up:

```html
<div class="bento-grid">
  <div class="bento-card bento-card--large">
    <div class="bento-icon">📊</div>
    <p class="bento-title">Revenue Growth</p>
    <p class="bento-desc">Your revenue increased by 24% this quarter.</p>
  </div>

  <div class="bento-card bento-card--tall bento-card--accent-green">
    <div class="bento-icon">👥</div>
    <p class="bento-stat">12.4k</p>
    <p class="bento-stat-label">Active Users</p>
  </div>

  <div class="bento-card bento-card--small">
    <div class="bento-icon">⭐</div>
    <p class="bento-stat">4.9</p>
    <p class="bento-stat-label">Avg. Rating</p>
  </div>
</div>