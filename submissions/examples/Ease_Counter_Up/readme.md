# Float Label Input

> Animated floating label for form inputs — pure CSS, no JavaScript required.

---

## What does this do?

Creates an animated floating label for form inputs. The label initially appears inside the input field as a placeholder substitute and smoothly transitions above the field when the input gains focus or contains a value.

The effect is achieved entirely with CSS using `:focus` and `:placeholder-shown` pseudo-classes. No JavaScript. No dependencies.

---

## Demo states

| State | Label position | Description |
|---|---|---|
| Default (empty, unfocused) | Inside the field | Acts as a visible placeholder |
| Focused (empty) | Above the field | Floats up, scales down, changes color |
| Filled (has value) | Above the field | Stays floated even when unfocused |
| Invalid | Above the field | Border and label turn red |

---

## Installation

Copy `float-label.css` into your project and link it in your HTML:

```html
<link rel="stylesheet" href="float-label.css">
```

Or paste the relevant `.float-field` rules directly into your existing stylesheet.

---

## Usage

Wrap each input and its label in a `.float-field` container. The input must have `placeholder=" "` (a single space) — this is what `:placeholder-shown` uses to detect an empty field.

```html
<div class="float-field">
  <input
    type="text"
    id="name"
    placeholder=" "
    required
  >
  <label for="name">Full Name</label>
</div>
```

The label must come **after** the input in the DOM so the CSS sibling selector (`input:focus + label`, `input:not(:placeholder-shown) + label`) can target it.

---

## Examples

### Login form

```html
<form>
  <div class="float-field">
    <input type="email" id="email" placeholder=" " required>
    <label for="email">Email address</label>
  </div>

  <div class="float-field">
    <input type="password" id="password" placeholder=" " required>
    <label for="password">Password</label>
  </div>

  <button type="submit">Sign in</button>
</form>
```

### Registration form

```html
<form>
  <div class="float-field">
    <input type="text" id="first-name" placeholder=" " required>
    <label for="first-name">First name</label>
  </div>

  <div class="float-field">
    <input type="text" id="last-name" placeholder=" " required>
    <label for="last-name">Last name</label>
  </div>

  <div class="float-field">
    <input type="email" id="reg-email" placeholder=" " required>
    <label for="reg-email">Email address</label>
  </div>

  <div class="float-field">
    <input type="tel" id="phone" placeholder=" ">
    <label for="phone">Phone number (optional)</label>
  </div>
</form>
```

### Textarea variant

```html
<div class="float-field float-field--textarea">
  <textarea id="message" placeholder=" " rows="4"></textarea>
  <label for="message">Your message</label>
</div>
```

---

## How it works

The trick relies on three CSS rules:

```css
/* 1 — default: label sits inside the field */
.float-field label {
  position: absolute;
  top: 1rem;
  left: 0.875rem;
  font-size: 1rem;
  color: var(--label-color-default);
  pointer-events: none;
  transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
}

/* 2 — float up on focus */
.float-field input:focus + label {
  top: -0.6rem;
  font-size: 0.75rem;
  color: var(--label-color-active);
}

/* 3 — stay floated when input has a value (placeholder not shown) */
.float-field input:not(:placeholder-shown) + label {
  top: -0.6rem;
  font-size: 0.75rem;
}
```

The `placeholder=" "` (single space) on the input is the key — it gives `:placeholder-shown` something to detect, making the "empty" and "filled" states distinguishable with pure CSS.

---

## CSS custom properties

All visual tokens are overridable via CSS custom properties:

```css
:root {
  --float-label-color:        #9ca3af;  /* default label color */
  --float-label-active-color: #6366f1;  /* label color on focus */
  --float-label-error-color:  #ef4444;  /* label color on :invalid */
  --float-input-border:       #e5e7eb;  /* default border */
  --float-input-focus-border: #6366f1;  /* border on focus */
  --float-input-error-border: #ef4444;  /* border on :invalid */
  --float-transition:         0.2s ease;
}
```

Override them at the `:root` level for global changes, or scope them to a specific form:

```css
.my-form {
  --float-label-active-color: #10b981;
  --float-input-focus-border: #10b981;
}
```

---

## Supported input types

| Type | Supported | Notes |
|---|---|---|
| `text` | Yes | Full support |
| `email` | Yes | Full support |
| `password` | Yes | Full support |
| `tel` | Yes | Full support |
| `number` | Yes | Full support |
| `search` | Yes | Full support |
| `url` | Yes | Full support |
| `date` | Partial | Label stays floated by default to avoid overlap with date picker UI |
| `textarea` | Yes | Use `.float-field--textarea` modifier |
| `select` | No | Use a custom select component |
| `checkbox` / `radio` | No | Not applicable |

---

## Accessibility

- Labels are real `<label>` elements linked to inputs via `for`/`id` — fully readable by screen readers.
- The `placeholder=" "` space is visually invisible and does not interfere with assistive technology.
- Focus states are preserved and visible.
- Color changes on focus/error do not rely solely on color — border width and position also change.
- Compatible with browser autofill: autofilled inputs trigger `:not(:placeholder-shown)`, keeping the label floated.

---

## Browser support

| Browser | Support |
|---|---|
| Chrome 49+ | Full |
| Firefox 51+ | Full |
| Safari 9+ | Full |
| Edge 79+ | Full |
| IE 11 | Not supported — `:placeholder-shown` is unsupported |

For IE 11 fallback, add the `.is-filled` class via JavaScript and target it alongside `:not(:placeholder-shown)`.

---

## Why use this over placeholder-only forms?

Plain `placeholder` text disappears the moment a user starts typing, giving them no way to verify what a field was asking for. Floating labels solve this by keeping the field purpose visible at all times — before, during, and after input. This significantly reduces errors in longer forms.

Compared to always-visible labels stacked above fields, floating labels save vertical space, making forms feel lighter and less intimidating — particularly on mobile.

---

## Contributing

1. Fork the repository
2. Create a branch: `git checkout -b feature/float-label-improvement`
3. Make your changes and add a demo in `examples/`
4. Submit a pull request with a description of what changed and why

Please follow the existing code style and ensure your changes work in all supported browsers listed above.

---

## Changelog

### 1.0.0 — 2026-06-03
- Initial release
- Support for `text`, `email`, `password`, `tel`, `number`, `url`, `search`, `textarea`
- CSS custom property tokens for full theming
- `:invalid` state styling
- Autofill compatibility

---

## License

MIT — free to use in personal and commercial projects.

---

*Submitted by: @hiitarun1 · Date: 2026-06-03 · Status: Pending review*