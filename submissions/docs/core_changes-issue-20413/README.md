# Core Changes Proposal: Issue #20413

## Feature Overview
Issue #20413 requests dedicated **Skeleton Loading Utility Classes** for EaseMotion CSS.
This submission proposes adding 5 skeleton loading utilities to `core/animations.css`:

| Class | Effect |
|-------|--------|
| `.ease-skeleton` | Base placeholder with shimmer animation |
| `.ease-skeleton-text` | Renders as multiple text-line blocks |
| `.ease-skeleton-avatar` | Circular placeholder for profile images |
| `.ease-skeleton-card` | Rectangular card/image placeholder |
| `.ease-skeleton-pulse` | Pulse-opacity variant (no shimmer) |

## Proposed Implementation

### Proposed CSS to add to `core/animations.css`

```css
/* ── Skeleton Keyframes ── */
@keyframes ease-skeleton-shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

@keyframes ease-skeleton-pulse-kf {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
}

/* ── Base Skeleton ── */
.ease-skeleton {
  background: linear-gradient(
    90deg,
    rgba(200, 200, 210, 0.08) 25%,
    rgba(200, 200, 210, 0.18) 37%,
    rgba(200, 200, 210, 0.08) 63%
  );
  background-size: 200% 100%;
  animation: ease-skeleton-shimmer 1.5s ease-in-out infinite;
  border-radius: 4px;
}

/* ── Skeleton Variants ── */
.ease-skeleton-text {
  height: 1em;
  margin-bottom: 0.5em;
  width: 100%;
}
.ease-skeleton-text:last-child {
  width: 60%;
}

.ease-skeleton-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  flex-shrink: 0;
}

.ease-skeleton-card {
  width: 100%;
  height: 200px;
  border-radius: 12px;
}

.ease-skeleton-pulse {
  animation-name: ease-skeleton-pulse-kf;
  animation-duration: 1.8s;
  background: rgba(200, 200, 210, 0.08);
}
```

### Usage
```html
<div class="ease-skeleton ease-skeleton-avatar"></div>
<div>
  <div class="ease-skeleton ease-skeleton-text"></div>
  <div class="ease-skeleton ease-skeleton-text"></div>
  <div class="ease-skeleton ease-skeleton-text"></div>
</div>
<div class="ease-skeleton ease-skeleton-card"></div>
```

### Accessibility
```css
@media (prefers-reduced-motion: reduce) {
  .ease-skeleton,
  .ease-skeleton-pulse {
    animation: none;
    opacity: 0.15;
  }
}
```

## Why this is submitted here
Per CONTRIBUTING.md policy and Core Framework Protection, this feature is proposed
as a formal submission in `submissions/` rather than modifying `core/animations.css` directly.

Fixes #20413
