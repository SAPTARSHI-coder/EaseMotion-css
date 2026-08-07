# ease-input-float-label

Submission for Issue #51346

## What this adds

A reusable animated floating label form input component where
the placeholder label animates upward and shrinks on focus or
when the field is filled. Pure CSS via `:focus` and
`:not(:placeholder-shown)` — zero JavaScript required.

## How It Works

```css
/* Label floats up when focused OR when field has value */
.ease-input-float-label input:focus ~ label,
.ease-input-float-label input:not(:placeholder-shown) ~ label {
  top: 0.55rem;
  transform: translateY(0) scale(0.82);
  color: var(--float-color-focus);
}
```

The key trick: `placeholder=" "` (a single space) on the
input makes `:placeholder-shown` work correctly — the label
stays floated when the field has real content.

## HTML Structure

```html
<div class="ease-input-float-label">
  <input type="text" id="name" placeholder=" " />
  <label for="name">Full Name</label>
</div>
```

**Note:** `placeholder=" "` (single space) is required.
Label must come **after** the input in the DOM.

## Classes

### Input Styles
| Class | Description |
|---|---|
| `ease-input-float-label` | Default bordered style |
| `ease-input-float-label--underline` | Underline only with sweep animation |
| `ease-input-float-label--outlined` | Rounded border with label on border |
| `ease-input-float-label--filled` | Filled background, bottom border only |

### Validation States
| Class | Description |
|---|---|
| `ease-input-float-label--error` | Red border + label |
| `ease-input-float-label--success` | Green border + label |

### Modifiers
| Class | Description |
|---|---|
| `ease-input-float-label--icon` | Adds left padding for icon |
| `ease-input-float-label--sm` | Smaller padding + font |
| `ease-input-float-label--lg` | Larger padding + font |

### Focus Color Variants
| Class | Color |
|---|---|
| default | Green (#4ade80) |
| `--blue` | Blue (#60a5fa) |
| `--purple` | Purple (#a78bfa) |
| `--pink` | Pink (#f472b6) |

### Helper Element
```html
<div class="ease-input-float-label__helper">Helper text here</div>
```

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--float-color-focus` | #4ade80 | Label + border color on focus |
| `--float-border-default` | #334155 | Default border color |
| `--float-duration` | 0.22s | Animation speed |
| `--float-bg` | #1e293b | Input background |

## Accessibility

- Semantic `<label for="id">` linked to input — screen reader friendly
- `:focus-visible` styles preserved
- `aria-describedby` can be added for helper text
- Respects `prefers-reduced-motion` — all transitions disabled

## Theme Support

Supports `data-theme="neon"`, `data-theme="dracula"`, `data-theme="dark"`.
