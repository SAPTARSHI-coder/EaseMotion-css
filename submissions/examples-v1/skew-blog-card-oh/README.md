# Component: Skew Blog Card

This submission implements the Skew Blog Card for GSSoC issue **#41979**.

## Description

A corporate design blog card with skew animation effects, hover interactions, and modern styling.

## Features

- **Skew Animation**: 3D perspective skew effect on hover
- **Image Transformation**: Image skews on card hover
- **Badge Support**: Featured/label badges
- **Author Section**: Avatar and name display
- **Meta Information**: Category and date
- **Mini Variant**: Compact horizontal card layout
- **Responsive Design**: Works on all screen sizes

## Usage

```html
<div class="blog-card skew-card">
  <div class="card-image">
    <img src="image.jpg" alt="Blog image">
    <span class="card-badge">Featured</span>
  </div>
  <div class="card-content">
    <div class="card-meta">
      <span class="card-category">Category</span>
      <span class="card-date">Dec 15, 2024</span>
    </div>
    <h2 class="card-title">Blog Title</h2>
    <p class="card-excerpt">Excerpt text...</p>
    <div class="card-footer">
      <div class="card-author">
        <div class="author-avatar">JD</div>
        <span class="author-name">John Doe</span>
      </div>
      <a href="#" class="card-link">Read More →</a>
    </div>
  </div>
</div>
```

## Animations

| Effect | Property |
|--------|----------|
| Initial Load | `skewFadeIn` - 3D perspective entrance |
| Hover | `perspective(1000px) rotateX(-5deg)` |
| Image Hover | `skewX(-3deg) scale(1.05)` |
| Title Hover | Color change to primary |
| Link Hover | `translateX(4px)` |

## CSS Custom Properties

```css
--color-primary: #3b82f6;
--bg-surface: rgba(26, 36, 56, 0.6);
--border-color: rgba(255, 255, 255, 0.08);
```

## Mini Variant

```html
<div class="blog-card skew-card mini">
  <div class="card-image">...</div>
  <div class="card-content">...</div>
</div>
```

## Acceptance Criteria

- ✅ Uses EaseMotion CSS perspective transforms
- ✅ Works without JavaScript
- ✅ Live demo in demo.html
- ✅ README.md included
- ✅ Responsive design
- ✅ Accessibility considerations
