# Float Label Input

> Lightweight floating labels for form fields using modern CSS. Accessible, customizable, and dependency-free.

---

## ✨ Features

- Pure CSS implementation
- No JavaScript required
- Smooth animated floating labels
- Accessible semantic labels
- Customizable with CSS variables
- Supports `input` and `textarea`
- Error state styling via `:invalid`
- Autofill-friendly
- Mobile-friendly
- Lightweight and dependency-free

---

## What does this do?

Creates an animated floating label for form inputs. The label initially appears inside the input field as a placeholder substitute and smoothly transitions above the field when the input gains focus or contains a value.

The effect is achieved entirely with CSS using `:focus` and `:placeholder-shown` pseudo-classes.

No JavaScript. No dependencies.

---

## Demo states

| State | Label position | Description |
|---|---|---|
| Default (empty, unfocused) | Inside the field | Acts as a visible placeholder |
| Focused (empty) | Above the field | Floats up, scales down, changes color |
| Filled (has value) | Above the field | Remains floated after blur |
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

Wrap each input and its label in a `.float-field` container.

The input must include:

```html
placeholder=" "
```

(a single space)

This allows `:placeholder-shown` to detect whether the field is empty.

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

### Important

The label must come **after** the input element:

```html
<input ...>
<label ...></label>
```

This is required for the sibling selectors:

```css
input:focus + label
input:not(:placeholder-shown) + label
```

---

## Examples

### Login Form

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

### Registration Form

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

### Textarea Variant

```html
<div class="float-field float-field--textarea">
  <textarea
    id="message"
    placeholder=" "
    rows="4"
  ></textarea>

  <label for="message">Your message</label>
</div>
```

---

## How it works

The component relies on three CSS rules:

### 1. Label starts inside the field

```css
.float-field label {
  position: absolute;
  top: 1rem;
  left: 0.875rem;
  font-size: 1rem;
  pointer-events: none;
}
```

### 2. Float label on focus

```css
.float-field input:focus + label {
  top: -0.6rem;
  font-size: 0.75rem;
}
```

### 3. Keep label floated when filled

```css
.float-field input:not(:placeholder-shown) + label {
  top: -0.6rem;
  font-size: 0.75rem;
}
```

The `placeholder=" "` value is the key that makes `:placeholder-shown` work as an "empty state" detector.

---

## CSS Custom Properties

All visual tokens can be customized.

```css
:root {
  --float-label-color:        #9ca3af;
  --float-label-active-color: #6366f1;
  --float-label-error-color:  #ef4444;

  --float-input-border:       #e5e7eb;
  --float-input-focus-border: #6366f1;
  --float-input-error-border: #ef4444;

  --float-transition:         0.2s ease;
}
```

---

## 🎨 Customization Examples

### Success Theme

```css
.success-form {
  --float-label-active-color: #10b981;
  --float-input-focus-border: #10b981;
}
```

### Warning Theme

```css
.warning-form {
  --float-label-active-color: #f59e0b;
  --float-input-focus-border: #f59e0b;
}
```

### Error Theme

```css
.error-form {
  --float-label-active-color: #ef4444;
  --float-input-focus-border: #ef4444;
}
```

---

## Supported Input Types

| Type | Supported | Notes |
|---|---|---|
| `text` | Yes | Full support |
| `email` | Yes | Full support |
| `password` | Yes | Full support |
| `tel` | Yes | Full support |
| `number` | Yes | Full support |
| `search` | Yes | Full support |
| `url` | Yes | Full support |
| `date` | Partial | May require additional styling |
| `textarea` | Yes | Use textarea modifier |
| `select` | No | Use a custom select component |
| `checkbox` | No | Not applicable |
| `radio` | No | Not applicable |

---

## ♿ Accessibility

This component follows common accessibility best practices:

- Uses real `<label>` elements
- Fully compatible with screen readers
- Supports keyboard navigation
- Maintains visible focus states
- Works with browser autofill
- Does not rely solely on placeholder text
- Preserves native validation behavior

For best accessibility, ensure every input has a unique `id` and matching `for` attribute.

---

## 📱 Mobile Support

The component is responsive by default and works across:

- Mobile devices
- Tablets
- Desktop browsers

The floating animation remains touch-friendly and does not interfere with virtual keyboards.

---

## ⚠️ Limitations

This component intentionally avoids JavaScript.

As a result:

- Requires `placeholder=" "` on inputs
- Native `<select>` elements are not supported
- Date inputs may require browser-specific styling
- Internet Explorer 11 is unsupported
- Relies on `:placeholder-shown`

---

## Browser Support

| Browser | Support |
|---|---|
| Chrome 49+ | Full |
| Firefox 51+ | Full |
| Safari 9+ | Full |
| Edge 79+ | Full |
| IE 11 | Not supported |

For IE 11 fallback, add an `.is-filled` class via JavaScript and target it alongside `:not(:placeholder-shown)`.

---

## Why use this over placeholder-only forms?

Traditional placeholders disappear as soon as users begin typing.

This makes it difficult to remember what information a field was requesting.

Floating labels solve this by keeping the field purpose visible at all times:

- Before input
- During input
- After input

Compared to permanently visible labels, floating labels also reduce visual clutter and save vertical space, particularly on mobile devices.

---

## 📂 Project Structure

```text
float-label/
├── float-label.css
├── README.md
└── examples/
    ├── login-form.html
    ├── registration-form.html
    └── textarea-demo.html
```

---

## 🛠️ Roadmap

Future enhancements under consideration:

- Floating labels for custom select components
- Material-style outlined variant
- Compact size modifier
- Dark mode examples
- Additional animation presets

---

## Contributing

1. Fork the repository
2. Create a branch

```bash
git checkout -b feature/float-label-improvement
```

3. Make your changes
4. Add or update examples if needed
5. Submit a pull request describing what changed and why

Please follow the existing code style and ensure changes work across all supported browsers.

---

## Changelog

### 1.0.0 — 2026-06-03

- Initial release
- Support for `text`, `email`, `password`, `tel`, `number`, `url`, `search`, and `textarea`
- CSS custom property theming
- `:invalid` error states
- Autofill compatibility
- Mobile-friendly behavior

---

## License

MIT — free to use in personal and commercial projects.

---

*Submitted by: @hiitarun1 · Date: 2026-06-03 · Status: Pending review*