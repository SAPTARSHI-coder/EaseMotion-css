# Feature Spotlight Banner

## What it is

A responsive landing-page style banner component for product launches and feature announcements. It includes a gradient accent strip, feature badge, heading, supporting text, and CTA buttons.

## Why it fits EaseMotion CSS

This component is self-contained and built purely with HTML and CSS. It provides polished dashboard-style motion, hover glow, and responsive layout without any JavaScript or external dependencies, matching EaseMotion CSS goals.

## Usage example

```html
<link rel="stylesheet" href="style.css">
<section class="banner-grid">
  <article class="spotlight-banner banner-primary">
    <div class="accent-strip"></div>
    <div class="banner-content">
      <span class="feature-badge">New</span>
      <h2>Launch your next product faster</h2>
      <p>Build launch-ready pages with streamlined UX and motion-friendly CTA messaging.</p>
      <div class="banner-actions">
        <a class="btn btn-primary" href="#">Get started</a>
        <a class="btn btn-secondary" href="#">View tour</a>
      </div>
    </div>
  </article>
</section>
```

## Customization options

- Change `--accent-primary`, `--accent-accent`, and `--accent-soft` to update banner gradient styles.
- Adjust `.spotlight-banner` padding, border-radius, and `box-shadow` for different visual weight.
- Modify `.btn-primary` and `.btn-secondary` colors to match your brand palette.
- Update typography in `.spotlight-banner h2` and `.spotlight-banner p` for spacing and scale.
