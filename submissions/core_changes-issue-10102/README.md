# .ease-progress Progress Bar Component

Adds a progress bar component with size, color, striped, and animated variants for form completion, file uploads, and loading states.

## Problem

File uploads, form completion steps, skill meters, and loading indicators all benefit from a visual progress bar, but EaseMotion users must build one from scratch each time.

## Proposed CSS to Add to `components/progress.css`

```css
.ease-progress {
  width: 100%;
  height: 0.75rem;
  background: #e2e8f0;
  border-radius: 999px;
  overflow: hidden;
}

.ease-progress-bar {
  height: 100%;
  background: var(--ease-color-primary, #6c63ff);
  border-radius: 999px;
  transition: width 0.3s ease;
  width: 0%;
}

.ease-progress-sm { height: 0.375rem; }
.ease-progress-lg { height: 1.125rem; }

.ease-progress-success .ease-progress-bar { background: var(--ease-color-success, #22c55e); }
.ease-progress-danger .ease-progress-bar  { background: var(--ease-color-danger, #ef4444); }
.ease-progress-warning .ease-progress-bar { background: var(--ease-color-warning, #f59e0b); }
.ease-progress-info .ease-progress-bar    { background: var(--ease-color-info, #3b82f6); }

.ease-progress-striped .ease-progress-bar {
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-size: 1rem 1rem;
}

.ease-progress-animated .ease-progress-bar {
  animation: ease-kf-progress-stripes 1s linear infinite;
}

@keyframes ease-kf-progress-stripes {
  from { background-position: 1rem 0; }
  to { background-position: 0 0; }
}
```

## Usage

```html
<!-- Basic progress -->
<div class="ease-progress">
  <div class="ease-progress-bar" style="width: 65%;"></div>
</div>

<!-- Small + success -->
<div class="ease-progress ease-progress-sm ease-progress-success">
  <div class="ease-progress-bar" style="width: 100%;"></div>
</div>

<!-- Striped + animated (loading) -->
<div class="ease-progress ease-progress-striped ease-progress-animated">
  <div class="ease-progress-bar" style="width: 75%;"></div>
</div>

<!-- Width via CSS variable (for JS updates) -->
<div class="ease-progress" style="--progress: 45%">
  <div class="ease-progress-bar" style="width: var(--progress);"></div>
</div>
```

## Files
- `README.md` — this file
- `demo.html` — demo page
- `style.css` — progress component CSS
