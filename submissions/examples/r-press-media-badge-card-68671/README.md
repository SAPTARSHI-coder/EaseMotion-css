# CSS Press/Media Badge Card

A polished pure CSS press/media mention card featuring a publication logo, press badge, quote excerpt, and subtle hover interaction.

## Features

- Pure HTML and CSS
- No JavaScript
- Publication logo/mark
- Press/media badge
- Quote excerpt
- Read-mention link
- Subtle hover lift
- Shimmer highlight on hover
- Responsive layout
- Keyboard focus support
- Reduced-motion support

## Usage

```html
<article class="press-card">
  <div class="press-header">
    <div class="publication-mark" aria-hidden="true">
      <span>TN</span>
    </div>

    <div class="publication-info">
      <span class="publication-name">
        TechNova
      </span>

      <span class="publication-type">
        Technology &amp; Design
      </span>
    </div>

    <span class="press-badge">
      FEATURED
    </span>
  </div>

  <blockquote>
    “A thoughtful approach to motion design.”
  </blockquote>

  <div class="press-footer">
    <span>Featured in TechNova</span>

    <a href="#" class="read-link">
      Read mention
    </a>
  </div>
</article>