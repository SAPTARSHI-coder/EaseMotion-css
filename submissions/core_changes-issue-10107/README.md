# .ease-tag Chip/Tag Component

Adds a tag/chip component for displaying labels, skills, categories, and filters with removable variants and color coding.

## Problem

Filter chips, skill tags, category labels, and status pills are used throughout modern UIs, but EaseMotion has no reusable `.ease-tag` or `.ease-chip` component. The existing badge approach varies across implementations.

## Proposed CSS to Add to `components/tag.css`

```css
.ease-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.4;
  background: #e0e7ff;
  color: #4338ca;
  white-space: nowrap;
}

.ease-tag-sm { font-size: 0.65rem; padding: 0.1rem 0.4rem; }
.ease-tag-lg { font-size: 0.875rem; padding: 0.3rem 0.8rem; }

.ease-tag-success { background: #dcfce7; color: #15803d; }
.ease-tag-danger { background: #fee2e2; color: #b91c1c; }
.ease-tag-warning { background: #fef3c7; color: #b45309; }
.ease-tag-info { background: #dbeafe; color: #1d4ed8; }

.ease-tag-outline {
  background: transparent;
  border: 1px solid currentColor;
}

.ease-tag-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 0.85rem;
  line-height: 1;
  opacity: 0.7;
}
.ease-tag-btn:hover { opacity: 1; }
```

## Usage

```html
<span class="ease-tag">React</span>
<span class="ease-tag ease-tag-success ease-tag-removable">
  TypeScript
  <button class="ease-tag-btn">×</button>
</span>
<span class="ease-tag ease-tag-outline">Draft</span>
```

## Benefits
- Consistent tag/chip styling across the application
- Color variants for semantic meaning (success, danger, warning, info)
- Size variants (sm, lg)
- Removable variant with × button
- Outline variant for border-only tags
- Uses `inline-flex` for proper spacing and wrapping

## Files
- `README.md` — this file
- `demo.html` — demo page
- `style.css` — tag component CSS
