# CSS Card With Sidebar

A responsive CSS-only card component with a dedicated left sidebar for an icon, category label, and item number.

## Features

- Pure CSS implementation
- Responsive sidebar layout
- Icon and content separation
- Hover lift animation
- Animated sidebar icon
- Status indicator
- Reusable information details
- Responsive mobile layout
- Reduced-motion support
- Forced-colors support
- No JavaScript required

## Files

- `demo.html` — Component demonstration
- `style.css` — Component styles
- `README.md` — Documentation

## Usage

Include the stylesheet and use the card structure:

```html
<article class="profile-card">
  <aside class="card-sidebar" aria-label="Profile category">
    <div class="sidebar-icon" aria-hidden="true">
      <span>✦</span>
    </div>

    <span class="sidebar-label">Featured</span>
    <span class="sidebar-number">01</span>
  </aside>

  <div class="card-content">
    <div class="card-top">
      <span class="category">Design System</span>
      <span class="status">
        <span aria-hidden="true"></span>
        Active
      </span>
    </div>

    <h2>Build better interfaces with motion</h2>

    <p>
      Create polished interfaces using reusable components,
      purposeful transitions, and accessible interaction patterns.
    </p>

    <a class="card-link" href="#explore">
      Explore collection
      <span aria-hidden="true">→</span>
    </a>
  </div>
</article>