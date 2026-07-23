# Toggle Switch Component — Issue #23652

## What does this do?

This submission adds a pure CSS, highly accessible, and smoothly animated toggle switch component (`.ease-switch`) styled around checkbox inputs to manage boolean configuration preferences.

## How is it used?

Wrap a standard checkbox input and a track span inside a `.ease-switch` label wrapper:

```html
<!-- Default Switch -->
<label class="ease-switch">
  <input type="checkbox" />
  <span class="ease-switch-track"></span>
</label>

<!-- Inline Label Container -->
<label class="ease-switch-container">
  <span class="ease-switch">
    <input type="checkbox" checked />
    <span class="ease-switch-track"></span>
  </span>
  <span class="ease-switch-label">Dark Mode</span>
</label>
```

Size variants:

- Small: `.ease-switch-sm`
- Large: `.ease-switch-lg`

## Why is it useful?

It provides a vital UI primitive for settings, preferences, and dark mode toggles that is completely JavaScript-free, highly performant (using GPU-accelerated CSS transforms), responsive, and conforms to keyboard accessibility requirements using native outline focus properties (`:focus-visible`).

---

## Proposed Changes in Core Code

To integrate this component, add the following CSS rules to `components/forms.css`:

```css
/* ── Toggle Switch Component ── */
.ease-switch {
  --ease-switch-width: 48px;
  --ease-switch-height: 24px;
  --ease-switch-knob: 18px;
  --ease-switch-bg: rgba(255, 255, 255, 0.08);
  --ease-switch-bg-active: var(--ease-color-primary, #6c63ff);
  --ease-switch-knob-bg: #ffffff;

  position: relative;
  display: inline-block;
  width: var(--ease-switch-width);
  height: var(--ease-switch-height);
  vertical-align: middle;
}

.ease-switch input {
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
}

.ease-switch-track {
  position: absolute;
  inset: 0;
  background: var(--ease-switch-bg);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--ease-switch-height);
  transition:
    background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.ease-switch-track::after {
  content: "";
  position: absolute;
  left: 2px;
  top: 2px;
  width: var(--ease-switch-knob);
  height: var(--ease-switch-knob);
  background: var(--ease-switch-knob-bg);
  border-radius: 50%;
  transition:
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.ease-switch input:checked + .ease-switch-track {
  background: var(--ease-switch-bg-active);
  border-color: transparent;
}

.ease-switch input:checked + .ease-switch-track::after {
  transform: translateX(
    calc(var(--ease-switch-width) - var(--ease-switch-knob) - 6px)
  );
}

.ease-switch:hover .ease-switch-track {
  border-color: rgba(255, 255, 255, 0.2);
}

.ease-switch input:focus-visible + .ease-switch-track {
  outline: 2px solid var(--ease-color-primary, #6c63ff);
  outline-offset: 2px;
}

.ease-switch input:disabled + .ease-switch-track {
  opacity: 0.4;
  cursor: not-allowed;
}

/* Size Variants */
.ease-switch-sm {
  --ease-switch-width: 38px;
  --ease-switch-height: 20px;
  --ease-switch-knob: 14px;
}

.ease-switch-sm input:checked + .ease-switch-track::after {
  transform: translateX(
    calc(var(--ease-switch-width) - var(--ease-switch-knob) - 6px)
  );
}

.ease-switch-lg {
  --ease-switch-width: 58px;
  --ease-switch-height: 30px;
  --ease-switch-knob: 24px;
}

.ease-switch-lg input:checked + .ease-switch-track::after {
  transform: translateX(
    calc(var(--ease-switch-width) - var(--ease-switch-knob) - 6px)
  );
}

.ease-switch-container {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  user-select: none;
}

.ease-switch-container.disabled {
  cursor: not-allowed;
}
```

Fixes #23652
