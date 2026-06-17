# .ease-fab Floating Action Button

Adds a fixed-position floating action button for quick actions — scroll-to-top, chat widgets, new post buttons.

## Problem

Quick-action buttons require manual `position: fixed`, `border-radius: 50%`, `box-shadow`, and `z-index` styling each time. No `.ease-fab` class abstracts this pattern.

## Proposed CSS to Add to `components/fab.css`

```css
.ease-fab {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: var(--ease-color-primary, #6c63ff);
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.ease-fab:hover { transform: scale(1.05); box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25); }
.ease-fab:active { transform: scale(0.97); }

.ease-fab-sm { width: 2.5rem; height: 2.5rem; }
.ease-fab-lg { width: 4.5rem; height: 4.5rem; }

.ease-fab-success { background: var(--ease-color-success, #22c55e); }
.ease-fab-danger  { background: var(--ease-color-danger, #ef4444); }
.ease-fab-warning { background: var(--ease-color-warning, #f59e0b); }

.ease-fab-extended {
  width: auto;
  border-radius: 999px;
  padding: 0.75rem 1.25rem;
  gap: 0.5rem;
}

.ease-fab-hidden { display: none; }
```

## Usage

```html
<!-- Scroll to top -->
<button class="ease-fab" aria-label="Scroll to top">↑</button>

<!-- Extended with text -->
<button class="ease-fab ease-fab-extended">
  <span>✉️</span>
  <span>New Message</span>
</button>

<!-- Size + color variants -->
<button class="ease-fab ease-fab-sm ease-fab-success">✓</button>
<button class="ease-fab ease-fab-lg ease-fab-danger">✕</button>

<!-- Hidden (show on scroll via JS) -->
<button class="ease-fab ease-fab-hidden">↑</button>
```

## Benefits
- Fixed bottom-right positioning with proper z-index
- Hover scale + active press feedback
- sm/default/lg sizes, primary/success/danger/warning colors
- Extended pill variant for text labels
- Hidden utility class for show-on-scroll patterns

## Files
- `README.md` — this file
- `demo.html` — demo page
- `style.css` — FAB component CSS
