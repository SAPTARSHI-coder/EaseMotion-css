# CSS Float-Drift Toast Component

A premium notification toast component featuring a multi-waypoint entrance animation that floats and drifts horizontally, like it is gently caught in a breeze.

> **Live Preview:** Open [demo.html](demo.html) directly in any evergreen browser to test the interactive dashboard and witness the animations in action.

---

## Minimal Usage Snippet

To include a float-drift toast on your page, use the following HTML structure:

```html
<!-- Toast Container (place at body root) -->
<div class="toast-container">
  <!-- Toast Item (Success Variant) -->
  <div class="toast ease-toast toast--success" role="status" aria-live="polite">
    <!-- Icon Section -->
    <div class="toast-icon">
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm-2 15l-5-5 1.41-1.41L8 12.17l7.59-7.59L17 6l-9 9z"
        />
      </svg>
    </div>

    <!-- Body Section -->
    <div class="toast-body">
      <strong class="toast-title">Success</strong>
      <p class="toast-message">Your changes have been saved successfully!</p>
    </div>

    <!-- Close Button -->
    <button class="toast-close" aria-label="Close notification">
      <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 1.05L10.95 0 6 4.95 1.05 0 0 1.05 4.95 6 0 10.95 1.05 12 6 7.05 10.95 12 12 10.95 7.05 6z"
        />
      </svg>
    </button>
  </div>
</div>
```

---

## CSS Custom Properties

Customize the toast style and variants using these CSS custom properties defined at `:root`:

| Property                 | Description                                                         | Default Value                           |
| :----------------------- | :------------------------------------------------------------------ | :-------------------------------------- |
| `--toast-success`        | Accent color for the success toast type.                            | `hsl(142, 76%, 36%)`                    |
| `--toast-error`          | Accent color for the error/danger toast type.                       | `hsl(346, 84%, 50%)`                    |
| `--toast-info`           | Accent color for the info toast type.                               | `hsl(217, 91%, 55%)`                    |
| `--toast-warning`        | Accent color for the warning toast type.                            | `hsl(38, 92%, 46%)`                     |
| `--toast-bg-dark`        | Background color of the glassmorphic toast container.               | `rgba(15, 23, 42, 0.95)`                |
| `--toast-border-dark`    | Border border-color for the toast container.                        | `rgba(255, 255, 255, 0.08)`             |
| `--toast-shadow`         | Complex multi-layered drop shadow for a premium floating card look. | `0 16px 36px -4px rgba(0,0,0,0.3), ...` |
| `--toast-radius`         | Border radius of the toast card.                                    | `14px`                                  |
| `--toast-width`          | Fixed desktop card width.                                           | `320px`                                 |
| `--toast-gap`            | Space between stacked toast cards.                                  | `16px`                                  |
| `--toast-padding-block`  | Top and bottom padding inside the toast card.                       | `14px`                                  |
| `--toast-padding-inline` | Left and right padding inside the toast card.                       | `18px`                                  |

---

## Accessibility (A11y)

- **Semantic Roles**: Utilizes `role="status"` and `aria-live="polite"` so that screen readers announce the toast update naturally, preventing interruptive overlay behavior.
- **Keyboard Navigation**: Close buttons have descriptive `aria-label="Close notification"` labels and support standard focus/active interactions.
- **Motion Reduction fallback**: Supports users who prefer reduced motion. All entry/exit float-drift keyframes are disabled, falling back to a clean, non-disruptive `0.2s` opacity transition:
  ```css
  @media (prefers-reduced-motion: reduce) {
    .toast {
      animation: none;
      transition: opacity 0.2s ease;
    }
  }
  ```

---

## Browser Support

Supported in all modern evergreen browsers (Chrome, Edge, Firefox, Safari) using:

- CSS Variables / Custom Properties
- CSS Keyframe animations with cubic-bezier timing functions
- CSS Media queries (max-width, prefers-reduced-motion)
- CSS Logical Properties (`inset-block-start`, `padding-inline`, etc.)
