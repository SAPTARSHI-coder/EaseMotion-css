# Loading Skeleton Components

Skeleton loading components for better perceived performance and improved user experience.

## Files

- `demo.html` - Demo page showing various skeleton loading components
- `style.css` - Skeleton component styles and animations

## Usage

Open `demo.html` in a browser to see the skeleton loading animations in action.

## Features

### Skeleton Animations
- Pulse animation (opacity effect)
- Shimmer animation (sweeping highlight effect)
- Combined effects for realistic loading appearance

### Component Variants
- Card skeleton
- User profile skeleton
- Article skeleton
- Button skeleton
- List skeleton
- Grid skeleton

### Design System
- Gray base color
- Rounded corners
- Smooth animations
- Responsive layouts

## Classes

| Class | Description |
|-------|-------------|
| `ease-skeleton-pulse-sb` | Pulse animation skeleton |
| `ease-skeleton-shimmer-sb` | Shimmer animation skeleton |
| `skeleton-card-sb` | Card skeleton |
| `skeleton-profile-sb` | Profile skeleton |
| `skeleton-article-sb` | Article skeleton |
| `skeleton-btn-sb` | Button skeleton |
| `skeleton-list-sb` | List skeleton |
| `skeleton-grid-sb` | Grid skeleton |

## Usage

Apply skeleton classes to placeholder elements:

```html
<div class="skeleton-card-sb ease-skeleton-pulse-sb">
  <div class="skeleton-image-sb"></div>
  <div class="skeleton-content-sb">
    <div class="skeleton-title-sb ease-skeleton-shimmer-sb"></div>
    <div class="skeleton-text-sb ease-skeleton-shimmer-sb"></div>
  </div>
</div>
```

Closes #45893
