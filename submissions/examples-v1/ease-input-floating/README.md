# ease-input-floating

A modern, interactive floating label input field component for [EaseMotion CSS](https://github.com/SAPTARSHI-coder/EaseMotion-css).

The label smoothly transitions from a placeholder position into a smaller floating label above the field — triggered by focus or when the field already contains a value. **Zero JavaScript. Pure CSS only.**

---

## Preview

| Empty (idle) | Focused / Filled |
|---|---|
| Label sits inside the field like a placeholder | Label floats up, scales down, changes colour |

---

## Usage

### HTML Structure

```html
<div class="ease-input-group">
  <input type="text" id="username" class="ease-input-floating" placeholder=" ">
  <label for="username" class="ease-label-floating">Username</label>
</div>
```

> ⚠️ The `placeholder=" "` (single space) is **required** — it's what makes the pure-CSS detection work.

### Include the stylesheet

```html
<link rel="stylesheet" href="style.css">
```

---

## Variants

### Basic Text Input
```html
<div class="ease-input-group">
  <input type="text" id="name" class="ease-input-floating" placeholder=" ">
  <label for="name" class="ease-label-floating">Full Name</label>
</div>
```

### Email with Native Validation
```html
<div class="ease-input-group">
  <input type="email" id="email" class="ease-input-floating" placeholder=" " required>
  <label for="email" class="ease-label-floating">Email Address</label>
</div>
```

### Password
```html
<div class="ease-input-group">
  <input type="password" id="password" class="ease-input-floating" placeholder=" " required minlength="8">
  <label for="password" class="ease-label-floating">Password</label>
</div>
```

### Pre-filled Value
```html
<div class="ease-input-group">
  <input type="text" id="city" class="ease-input-floating" placeholder=" " value="Vijayawada">
  <label for="city" class="ease-label-floating">City</label>
</div>
```

### Disabled
```html
<div class="ease-input-group">
  <input type="text" id="plan" class="ease-input-floating" placeholder=" " value="Free Plan" disabled>
  <label for="plan" class="ease-label-floating">Current Plan</label>
</div>
```

---

## How It Works (Pure CSS Technique)

The floating effect uses only CSS selectors — no JavaScript at all.

```css
/* When the user focuses the input → float the label */
.ease-input-floating:focus ~ .ease-label-floating { ... }

/* When the field has a value (placeholder is hidden) → keep label floated */
.ease-input-floating:not(:placeholder-shown) ~ .ease-label-floating { ... }

/* Filled but not focused → neutral colour, still floated */
.ease-input-floating:not(:placeholder-shown):not(:focus) ~ .ease-label-floating { ... }
```

**Selectors used:** `:focus` · `:placeholder-shown` · `:not()` · `~` (sibling combinator)

---

## Features

- ✅ Zero JavaScript — 100% pure CSS
- ✅ Smooth animation via CSS `transition` (transform + font-size + color)
- ✅ Native HTML validation support (`:valid` / `:invalid` states)
- ✅ Disabled and read-only states
- ✅ Dark mode via `@media (prefers-color-scheme: dark)`
- ✅ Reduced motion support via `@media (prefers-reduced-motion: reduce)`
- ✅ Fully accessible — real `<label for>` elements (screen reader friendly)
- ✅ Themeable via CSS custom properties

---

## CSS Custom Properties (Theming)

Override any of these in your `:root` to customise the component:

```css
:root {
  --ease-input-bg:             #ffffff;
  --ease-input-border:         #c0c8d8;
  --ease-input-border-focus:   #5a6aee;
  --ease-input-border-valid:   #22c55e;
  --ease-input-border-invalid: #ef4444;
  --ease-input-text:           #1e2233;

  --ease-label-idle:           #8892a4;
  --ease-label-float:          #5a6aee;

  --ease-input-radius:         10px;
  --ease-input-height:         3.5rem;
  --ease-transition-duration:  0.22s;
}
```

---

## File Structure

```
ease-input-floating/
├── style.css      # Component styles
├── demo.html      # Interactive demo page
└── README.md      # This file
```

---

## Closes

Resolves issue [#2761](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/2761)

---

## Author

Contributed as part of ** Girl Script Summer of Code 2026**