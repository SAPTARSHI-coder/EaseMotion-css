# Team Directory Grid

## Overview

A responsive team directory grid for SaaS dashboards featuring 6 sample team members, avatar circles, role and department labels, and status indicators. The design includes a visual search field and filter chips for a polished admin interface experience.

## Features

- Responsive 3-column grid that adapts to tablets and mobile devices
- Six employee cards with avatar initials, name, role, and department
- Online, away, and offline status indicators
- Hover elevation effect with smooth transitions
- Visual search input and filter chips for UI consistency
- Modern SaaS dashboard styling with glassy dark surfaces

## Usage

```html
<link rel="stylesheet" href="style.css">
<main class="directory-panel">
  <header class="directory-header">
    <p class="eyebrow">Team Directory</p>
    <h1>Meet the team</h1>
    <p class="header-copy">Browse employee profiles with role, department, and status in a clean SaaS-style dashboard layout.</p>
  </header>

  <div class="directory-controls">
    <label class="search-field">
      <span class="search-icon">🔍</span>
      <input type="text" placeholder="Search team members" aria-label="Search team members">
    </label>
    <div class="filter-chips">
      <button class="chip active">All</button>
      <button class="chip">Design</button>
      <button class="chip">Engineering</button>
      <button class="chip">Product</button>
    </div>
  </div>

  <section class="member-grid">
    <article class="member-card online">
      <div class="member-avatar">AR</div>
      <div class="member-info">
        <p class="member-name">Ava Reyes</p>
        <p class="member-role">Lead Product Manager</p>
      </div>
      <span class="member-department">Product</span>
    </article>
    <!-- more cards -->
  </section>
</main>
```

## Why it fits EaseMotion CSS

This component is self-contained and built with pure HTML and CSS only. It demonstrates polished dashboard patterns suitable for admin and team management interfaces, including responsive grid layout, interactive hover states, and scoped visual controls without JavaScript.
