# Skeleton Loading Card Demo Component

A pure CSS Skeleton Loading Card system featuring linear shimmer sweep reflections, pulse glow placeholders, responsive card layout variations, and a zero-JS state switcher.

## 🚀 Features

- **100% Pure CSS & HTML**: Zero JavaScript frameworks or libraries required.
- **Linear Shimmer Sweep**: Performant background linear-gradient keyframe animation moving horizontally across card elements.
- **Zero-JS State Toggle**: Interactive switch controller using checkbox `:checked` selectors to preview both loading skeleton and rendered content states.
- **Multi-Card Variations**: Demonstrates User Profile, E-Commerce Product, and Analytics Stats card layouts.
- **Responsive Grid**: Flexbox and CSS Grid layout adapting smoothly from single-column mobile viewports to multi-card desktop arrangements.
- **Accessibility & Reduced Motion**: Full WAI-ARIA compatibility and automatic disablement of infinite shimmer animations under `@media (prefers-reduced-motion: reduce)`.

## 🛠️ Usage

Include `style.css` in your HTML document and apply standard EaseMotion skeleton classes:

```html
<link rel="stylesheet" href="submissions/examples/ease-skeleton-card-ij/style.css">

<div class="card-wrapper">
    <div class="skeleton-avatar skeleton-shimmer"></div>
    <div class="skeleton-lines">
        <div class="skeleton-line line-title skeleton-shimmer"></div>
        <div class="skeleton-line line-sub skeleton-shimmer"></div>
    </div>
</div>
```

## 🎨 CSS Custom Properties

| Variable | Description | Default Value |
| :--- | :--- | :--- |
| `--skeleton-base` | Base background color for skeleton elements | `rgba(255, 255, 255, 0.06)` |
| `--skeleton-highlight` | Shimmer sweep reflection highlight color | `rgba(255, 255, 255, 0.16)` |
| `--shimmer-duration` | Linear keyframe sweep duration | `1.8s` |
| `--primary-accent` | Theme accent color | `#3b82f6` |

## 📦 Submission Details

- **Submission Directory**: `submissions/examples/ease-skeleton-card-ij/`
- **Issue Reference**: `#75684`
- **Files Included**: `demo.html`, `style.css`, `README.md`
