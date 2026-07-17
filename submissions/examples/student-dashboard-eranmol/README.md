# ease-student-dashboard-mb

Responsive student dashboard component for issue **#48005**.

## What does this do?

A complete student dashboard component featuring a profile section, CGPA card with progress bar, attendance progress per subject, and an assignments overview. Includes hover animations and a fully responsive layout.

## How is it used?

```html
<div class="dashboard">
  <aside class="sidebar">...</aside>
  <main class="main">
    <div class="card-row">
      <div class="card profile-card">...</div>
      <div class="card cgpa-card">...</div>
    </div>
    <div class="card-row card-row-2">
      <div class="card attendance-card">...</div>
      <div class="card assignments-card">...</div>
    </div>
  </main>
</div>
```

## Why is it useful?

Educational dashboards are a common use case for web applications. This component provides a clean, accessible, and responsive layout that can be reused across student portals. It uses CSS Grid for layout, CSS custom properties for theming, and hover animations for interactivity.

## Features

- Student profile section with avatar and metadata
- CGPA card with animated progress bar
- Subject-wise attendance progress with color coding
- Assignments list with pending/done/overdue states
- Hover animations on all cards
- Sticky sidebar navigation
- Responsive layout (desktop, tablet, mobile)
- Reduced motion support via `prefers-reduced-motion`

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Self-contained dashboard demo |
| `style.css` | Full responsive CSS with hover animations |
| `README.md` | This file |
