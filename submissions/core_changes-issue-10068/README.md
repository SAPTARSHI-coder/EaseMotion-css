# .ease-breadcrumb Navigation Component

Adds a breadcrumb navigation component for page hierarchy — documentation sites, dashboards, and multi-step wizards.

## Problem

No breadcrumb component exists in EaseMotion CSS. Users must write custom HTML + CSS for breadcrumb trails.

## Proposed CSS to Add to `components/breadcrumb.css`

```css
/* Breadcrumb nav wrapper */
.ease-breadcrumb {
  font-size: 0.875rem;
}

/* Ordered list container */
.ease-breadcrumb-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--ease-space-1, 0.25rem);
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Each breadcrumb item */
.ease-breadcrumb-item {
  display: inline-flex;
  align-items: center;
  gap: var(--ease-space-1, 0.25rem);
}

/* Clickable link */
.ease-breadcrumb-link {
  color: var(--ease-color-primary);
  text-decoration: none;
  transition: color var(--ease-speed-fast, 150ms);
}

.ease-breadcrumb-link:hover {
  text-decoration: underline;
  color: var(--ease-color-primary-dark, #4b44cc);
}

/* Separator between items */
.ease-breadcrumb-separator {
  color: #9ca3af;
  margin: 0 var(--ease-space-1, 0.25rem);
  user-select: none;
}

/* Current page (no link) */
.ease-breadcrumb-active {
  color: #6b7280;
  font-weight: 500;
}

/* Size variants */
.ease-breadcrumb-sm {
  font-size: 0.75rem;
}

.ease-breadcrumb-lg {
  font-size: 1rem;
}
```

## Usage

```html
<nav aria-label="Breadcrumb" class="ease-breadcrumb">
  <ol class="ease-breadcrumb-list">
    <li class="ease-breadcrumb-item">
      <a href="#" class="ease-breadcrumb-link">Home</a>
      <span class="ease-breadcrumb-separator" aria-hidden="true">›</span>
    </li>
    <li class="ease-breadcrumb-item">
      <a href="#" class="ease-breadcrumb-link">Dashboard</a>
      <span class="ease-breadcrumb-separator" aria-hidden="true">›</span>
    </li>
    <li class="ease-breadcrumb-item ease-breadcrumb-active" aria-current="page">
      Settings
    </li>
  </ol>
</nav>
```

## Accessibility
- `aria-label="Breadcrumb"` on the nav element
- `aria-current="page"` on the active breadcrumb item
- `aria-hidden="true"` on separator spans
- Semantic `<ol>` for ordered hierarchy

## Files
- `README.md` — this file
- `demo.html` — breadcrumb demo page
- `style.css` — breadcrumb component CSS
