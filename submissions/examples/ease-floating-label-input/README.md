# ease-floating-label-input

A form input where the placeholder label smoothly floats up and shrinks when the input is focused or has content, with built-in success and error validation states.

## Features

- 🎯 Smooth CSS transition for the label float/shrink (no JS required)
- 🖱️ Interactive trigger: focus and content presence (`:not(:placeholder-shown)`)
- ✅ Success and ❌ error validation states with colored borders and icons
- 🎨 Fully customizable via CSS custom properties
- 🌗 Light/dark mode support via `[data-theme]`
- 📱 Responsive sizing on smaller screens
- ♿ Accessible: proper `<label for>` association, `aria-describedby` linking hints to inputs, `aria-invalid` on error fields, `role="alert"` on the error hint
- 🧠 Respects `prefers-reduced-motion`

## Usage

```html
<div class="ease-float-label">
  <input type="text" id="name" placeholder=" " required />
  <label for="name">Full Name</label>
</div>
```

**Important:** the input's `placeholder` must be set to a single space (`" "`) — this is what allows the `:placeholder-shown` selector to detect whether the field is empty, without any JavaScript.

### Success state

```html
<div class="ease-float-label ease-float-label--success">
  <input type="email" id="email" placeholder=" " value="user@example.com" />
  <label for="email">Email Address</label>
  <svg class="ease-float-label__icon ease-float-label__icon--success">...</svg>
</div>
```

### Error state

```html
<div class="ease-float-label ease-float-label--error">
  <input type="password" id="password" placeholder=" " aria-describedby="password-hint" aria-invalid="true" />
  <label for="password">Password</label>
  <svg class="ease-float-label__icon ease-float-label__icon--error">...</svg>
  <span class="ease-float-label__hint" id="password-hint" role="alert">Password is required</span>
</div>
```

## CSS Variables

| Variable                     | Default     | Description                          |
|-------------------------------|-------------|-----------------------------------------|
| `--ease-float-bg`              | `rgba(15,23,42,0.03)` | Input background            |
| `--ease-float-border`          | `#cbd5e1`   | Default border color                   |
| `--ease-float-text`            | `#0f172a`   | Input text color                       |
| `--ease-float-label-color`     | `#64748b`   | Default label color                    |
| `--ease-float-accent`          | `#6366f1`   | Focus border/label color               |
| `--ease-float-success`         | `#10b981`   | Success state color                    |
| `--ease-float-error`           | `#ef4444`   | Error state color                      |
| `--ease-float-radius`          | `0.75rem`   | Input corner radius                    |
| `--ease-float-duration`        | `0.2s`      | Label transition duration              |
| `--ease-float-easing`          | `cubic-bezier(0.4, 0, 0.2, 1)` | Label transition easing |
| `--ease-float-font-size`       | `1rem`      | Input/label font size                  |

## Accessibility

- Every input has a properly associated `<label for>`.
- Error hints are linked via `aria-describedby` and marked `role="alert"` so screen readers announce them immediately.
- Fields in an error state carry `aria-invalid="true"`.
- Validation icons are `aria-hidden="true"` since color/border alone aren't relied on — the hint text carries the actual meaning.
- All transitions are removed under `prefers-reduced-motion: reduce`.

## Browser Support

Works in all modern browsers supporting CSS custom properties, `:placeholder-shown`, and the general sibling combinator (`~`) — Chrome, Firefox, Safari, Edge.