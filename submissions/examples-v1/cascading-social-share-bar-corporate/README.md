# Cascading Social Share Bar — Corporate Design

A lightweight, highly responsive, and accessible social sharing component built with pure HTML and CSS. It offers an elegant cascading/staggered entrance animation that draws focus to article share links using a professional corporate design aesthetic.

## What does this do?
It displays horizontal and vertical sets of sharing buttons that animate sequentially into view on page render. The buttons feature micro-animations on hover/focus (slight scale adjustments, lift, shadows, and subtle corporate platform coloring) and support full keyboard navigation and high contrast accessibility outlines.

## How is it used?

### 1. Link the Stylesheet
Import `style.css` in your project alongside the EaseMotion core files:
```html
<link rel="stylesheet" href="style.css">
```

### 2. Markup Structure

#### Horizontal Share Bar (Inline)
```html
<div class="ease-social-share-bar" aria-label="Social Share">
  <span class="ease-share__title">Share:</span>
  <div class="ease-share__container" role="list">
    <a href="#" class="ease-share__item" data-brand="linkedin" role="listitem" aria-label="Share on LinkedIn">
      <svg class="ease-share__icon" viewBox="0 0 24 24">...</svg>
      <span class="ease-share__label">LinkedIn</span>
    </a>
    <a href="#" class="ease-share__item" data-brand="twitter" role="listitem" aria-label="Share on X">
      <svg class="ease-share__icon" viewBox="0 0 24 24">...</svg>
      <span class="ease-share__label">X</span>
    </a>
  </div>
</div>
```

#### Vertical Share Bar (Floating Sidebar / Expandable)
Add the modifier class `.ease-social-share-bar--vertical`:
```html
<div class="ease-social-share-bar ease-social-share-bar--vertical" aria-label="Social Share">
  <span class="ease-share__title">Share</span>
  <div class="ease-share__container" role="list">
    <!-- Sharing items -->
  </div>
</div>
```

---

## Why is it useful?
- **Corporate UI Aesthetic**: Fits cleanly in financial, enterprise, tech, and modern editorial environments.
- **Pure CSS (No JS)**: High performance, zero runtime overhead.
- **Customizable**: Powered by CSS custom properties.
- **Robust Responsiveness**: Floating vertical bars automatically convert into fixed bottom action sheets on tablets and mobile devices, optimizing thumb placement.
- **Accessibility Included**: Built-in support for `:focus-visible` keyboard rings, semantic ARIA attributes, and respects `prefers-reduced-motion` settings.

---

## Customizable CSS Variables

All tokens are custom properties defined on `.ease-social-share-bar` block:

| Property | Default | Description |
|---|---|---|
| `--ease-share-duration` | `500ms` | Base animation transition speed |
| `--ease-share-easing` | `cubic-bezier(0.16, 1, 0.3, 1)` | Professional ease-out timing function |
| `--ease-share-stagger` | `60ms` | Step delay time for cascading elements |
| `--ease-share-spacing` | `0.75rem` | Spacing between share buttons |
| `--ease-share-radius` | `6px` | Border radius |
| `--ease-share-opacity-base` | `0.8` | Default opacity of items |
| `--ease-share-opacity-hover` | `1` | Hover state opacity of items |
| `--ease-share-shadow` | `0 4px 12px ...` | Drop shadow values |
| `--ease-share-bg` | `#ffffff` | Panel background color |
| `--ease-share-border` | `#e2e8f0` | Panel border color |
| `--ease-share-text` | `#1e293b` | Active/Hover text color |
| `--ease-share-text-muted` | `#64748b` | Default inactive text/icon color |
| `--ease-share-focus-ring` | `#0f172a` | Focus ring color |
