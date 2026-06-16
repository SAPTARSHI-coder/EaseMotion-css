# .ease-input Form Input Component

Adds consistent form input styling for `<input>`, `<select>`, and `<textarea>` with size and validation variants.

## Problem

EaseMotion CSS has no input component. "Form components" is the top v1.1 planned feature. Every form requires custom CSS.

## Proposed CSS to Add to `components/input.css`

```css
/* Base input */
.ease-input {
  display: block;
  width: 100%;
  padding: 0.625rem 0.75rem;
  font-family: inherit;
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--ease-color-text, #1e293b);
  background: var(--ease-color-surface, #ffffff);
  border: 1px solid #d1d5db;
  border-radius: var(--ease-radius-md, 0.5rem);
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.ease-input:focus-visible {
  outline: none;
  border-color: var(--ease-color-primary, #6c63ff);
  box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.2);
}

/* Placeholder */
.ease-input::placeholder {
  color: #9ca3af;
}

/* Size variants */
.ease-input-sm { padding: 0.35rem 0.6rem; font-size: 0.8rem; }
.ease-input-lg { padding: 0.85rem 1rem; font-size: 1.1rem; }

/* Validation color variants */
.ease-input-success { border-color: var(--ease-color-success, #22c55e); }
.ease-input-success:focus-visible { border-color: var(--ease-color-success, #22c55e); box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.2); }
.ease-input-danger  { border-color: var(--ease-color-danger, #ef4444); }
.ease-input-danger:focus-visible  { border-color: var(--ease-color-danger, #ef4444); box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2); }

/* Dark mode */
[data-theme="dark"] .ease-input {
  background: #1f2937;
  border-color: #4b5563;
  color: #f1f5f9;
}

[data-theme="dark"] .ease-input::placeholder { color: #6b7280; }
```

## Usage

```html
<!-- Text input -->
<input class="ease-input" placeholder="Your name" />

<!-- Select -->
<select class="ease-input">
  <option>Choose an option</option>
  <option>Option 1</option>
</select>

<!-- Textarea -->
<textarea class="ease-input" rows="3" placeholder="Message"></textarea>

<!-- Size variants -->
<input class="ease-input ease-input-sm" placeholder="Small" />
<input class="ease-input ease-input-lg" placeholder="Large" />

<!-- Validation states -->
<input class="ease-input ease-input-success" value="Valid input" />
<input class="ease-input ease-input-danger" value="Invalid input" />
```

## Files
- `README.md` — this file
- `demo.html` — demo page
- `style.css` — input component CSS
