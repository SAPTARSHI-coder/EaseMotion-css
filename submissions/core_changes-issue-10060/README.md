# .ease-toggle Toggle/Switch Component

Adds a custom toggle switch component with animated thumb, color variants, and keyboard accessibility.

## Problem

No toggle/switch component exists in EaseMotion CSS. Adding a visual switch requires 15+ lines of custom CSS per instance.

## Proposed CSS to Add to `components/toggle.css`

```css
/* Toggle wrapper */
.ease-toggle {
  display: inline-flex;
  align-items: center;
  gap: var(--ease-space-3, 0.75rem);
  cursor: pointer;
  user-select: none;
  font-size: 0.9rem;
  line-height: 1.5;
}

/* Visually hidden native checkbox */
.ease-toggle input {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Track */
.ease-toggle-track {
  position: relative;
  width: 2.75rem;
  height: 1.5rem;
  background: #d1d5db;
  border-radius: 9999px;
  transition: background 0.2s ease;
  flex-shrink: 0;
}

/* Checked track */
.ease-toggle input:checked + .ease-toggle-track {
  background: var(--ease-color-primary, #6c63ff);
}

/* Thumb */
.ease-toggle-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 1.25rem;
  height: 1.25rem;
  background: white;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Checked thumb */
.ease-toggle input:checked + .ease-toggle-track .ease-toggle-thumb {
  transform: translateX(1.25rem);
}

/* Focus-visible */
.ease-toggle input:focus-visible + .ease-toggle-track {
  box-shadow: 0 0 0 3px var(--ease-color-primary-alpha, rgba(108, 99, 255, 0.25));
  outline: none;
}

/* Size variants */
.ease-toggle-sm .ease-toggle-track { width: 2rem; height: 1.125rem; }
.ease-toggle-sm .ease-toggle-thumb { width: 0.85rem; height: 0.85rem; top: 2px; left: 2px; }
.ease-toggle-sm input:checked + .ease-toggle-track .ease-toggle-thumb { transform: translateX(0.875rem); }

.ease-toggle-lg .ease-toggle-track { width: 3.5rem; height: 1.875rem; }
.ease-toggle-lg .ease-toggle-thumb { width: 1.5rem; height: 1.5rem; top: 3px; left: 3px; }
.ease-toggle-lg input:checked + .ease-toggle-track .ease-toggle-thumb { transform: translateX(1.625rem); }

/* Color variants */
.ease-toggle-primary input:checked + .ease-toggle-track { background: var(--ease-color-primary, #6c63ff); }
.ease-toggle-success input:checked + .ease-toggle-track { background: var(--ease-color-success, #22c55e); }
.ease-toggle-danger  input:checked + .ease-toggle-track { background: var(--ease-color-danger, #ef4444); }

/* Disabled */
.ease-toggle input:disabled ~ * { opacity: 0.5; cursor: not-allowed; }
```

## Usage

```html
<label class="ease-toggle ease-toggle-primary">
  <input type="checkbox" checked />
  <span class="ease-toggle-track">
    <span class="ease-toggle-thumb"></span>
  </span>
  <span>Enable notifications</span>
</label>

<label class="ease-toggle ease-toggle-success ease-toggle-sm">
  <input type="checkbox" />
  <span class="ease-toggle-track">
    <span class="ease-toggle-thumb"></span>
  </span>
  <span>Small toggle</span>
</label>
```

## Accessibility
- Native `<input type="checkbox">` hidden visually but accessible to screen readers
- Keyboard: Tab to focus, Space to toggle
- `focus-visible` ring for keyboard users
- Disabled state with reduced opacity

## Files
- `README.md` — this file
- `demo.html` — demo page
- `style.css` — toggle component CSS
