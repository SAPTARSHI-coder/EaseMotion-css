# .ease-radio Custom Radio Button Component

Adds a custom radio button component with animated indicator, color variants, and keyboard accessibility.

## Problem

No framework-level radio button styling exists. Native browser defaults are shown. No group wrapper aligns radio items.

## Proposed CSS to Add to `components/radio.css`

```css
/* Group wrapper */
.ease-radio-group {
  display: flex;
  flex-direction: column;
  gap: var(--ease-space-3, 0.75rem);
}

.ease-radio-horizontal {
  flex-direction: row;
}

/* Label item */
.ease-radio-item {
  display: inline-flex;
  align-items: center;
  gap: var(--ease-space-3, 0.75rem);
  cursor: pointer;
  font-size: 0.9rem;
  line-height: 1.5;
}

/* Visually hidden native input */
.ease-radio-item input {
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

/* Custom indicator circle */
.ease-radio-indicator {
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid #9ca3af;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
  flex-shrink: 0;
}

/* Checked state — border color */
.ease-radio-item input:checked + .ease-radio-indicator {
  border-color: var(--ease-color-primary, #6c63ff);
}

/* Checked state — inner dot */
.ease-radio-item input:checked + .ease-radio-indicator::after {
  content: '';
  width: 0.65rem;
  height: 0.65rem;
  background: var(--ease-color-primary, #6c63ff);
  border-radius: 50%;
  animation: ease-kf-radio-fill 0.2s ease-out both;
}

@keyframes ease-kf-radio-fill {
  from { transform: scale(0); }
  to   { transform: scale(1); }
}

/* Focus-visible ring */
.ease-radio-item input:focus-visible + .ease-radio-indicator {
  box-shadow: 0 0 0 3px var(--ease-color-primary-alpha, rgba(108, 99, 255, 0.25));
  outline: none;
}

/* Color variants */
.ease-radio-primary input:checked + .ease-radio-indicator { border-color: var(--ease-color-primary, #6c63ff); }
.ease-radio-primary input:checked + .ease-radio-indicator::after { background: var(--ease-color-primary, #6c63ff); }

.ease-radio-success input:checked + .ease-radio-indicator { border-color: var(--ease-color-success, #22c55e); }
.ease-radio-success input:checked + .ease-radio-indicator::after { background: var(--ease-color-success, #22c55e); }

.ease-radio-danger input:checked + .ease-radio-indicator { border-color: var(--ease-color-danger, #ef4444); }
.ease-radio-danger input:checked + .ease-radio-indicator::after { background: var(--ease-color-danger, #ef4444); }

/* Disabled state */
.ease-radio-item input:disabled ~ * {
  opacity: 0.5;
  cursor: not-allowed;
}
```

## Usage

```html
<div class="ease-radio-group">
  <label class="ease-radio-item">
    <input type="radio" name="plan" checked />
    <span class="ease-radio-indicator"></span>
    <span>Free Plan</span>
  </label>
  <label class="ease-radio-item">
    <input type="radio" name="plan" />
    <span class="ease-radio-indicator"></span>
    <span>Pro Plan — $19/mo</span>
  </label>
  <label class="ease-radio-item ease-radio-danger">
    <input type="radio" name="plan" disabled />
    <span class="ease-radio-indicator"></span>
    <span>Enterprise (unavailable)</span>
  </label>
</div>
```

## Accessibility
- Native `<input type="radio">` hidden visually but accessible to screen readers
- Keyboard: Tab to focus, Arrow keys to navigate, Space to select
- `focus-visible` ring for keyboard users
- Disabled state with reduced opacity

## Files
- `README.md` — this file
- `demo.html` — radio button demo
- `style.css` — radio component CSS
