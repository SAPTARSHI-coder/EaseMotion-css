# Skeleton Shimmer Animations — Issue #23636

## What does this do?

This submission proposes upgrading the skeleton loader component (`components/skeleton.css`) to include a moving linear shimmer sweep animation (`ease-kf-shimmer`) rather than static shapes, keeping the loading container fixed in place.

## How is it used?

Apply `.ease-skeleton` to any wrapper element, along with shape presets like `.ease-skeleton-text`, `.ease-skeleton-circle`, and `.ease-skeleton-rect`:

```html
<!-- Text Skeleton line -->
<div class="ease-skeleton ease-skeleton-text"></div>

<!-- Profile Image circle -->
<div class="ease-skeleton ease-skeleton-circle"></div>

<!-- Card Image box -->
<div class="ease-skeleton ease-skeleton-rect"></div>
```

The sweep velocity and linear colors can be customized. The animation automatically pauses if the user prefers reduced motion.

## Why is it useful?

Modern UX design relies on skeleton components to indicate active network operations. Having a moving shimmer indicator instead of static gray states gives the illusion of faster responsiveness and avoids visual layout shift.

---

## Proposed Changes in Core Code

To resolve this issue, the following updates are proposed for `components/skeleton.css`:

### File: `components/skeleton.css`

Replace the `.ease-skeleton` style block:

```css
@keyframes ease-kf-shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.ease-skeleton {
  background: linear-gradient(
    90deg,
    var(--ease-color-surface, #e2e8f0) 25%,
    rgba(255, 255, 255, 0.4) 50%,
    var(--ease-color-surface, #e2e8f0) 75%
  );
  background-size: 200% 100%;
  animation: ease-kf-shimmer 1.5s ease-in-out infinite;
  border-radius: var(--ease-radius-md, 8px);
  min-height: 1rem;
}

.ease-skeleton-text {
  height: 1em;
  width: 100%;
  margin-bottom: 0.5em;
}

.ease-skeleton-circle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.ease-skeleton-rect {
  width: 100%;
  height: 150px;
}

@media (prefers-reduced-motion: reduce) {
  .ease-skeleton {
    animation: none !important;
    background: var(--ease-color-surface, #e2e8f0);
  }
}
```

Fixes #23636
