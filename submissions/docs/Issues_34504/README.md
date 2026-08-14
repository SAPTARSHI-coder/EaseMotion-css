## Buttons Component

Composable, accessible, and animation-friendly button components for EaseMotion CSS.

---

### Features

* Multiple button variants (`primary`, `success`, `danger`, `outline`, `ghost`, `link`)
* Multiple sizes (`sm`, default, `lg`, `xl`)
* Full-width and pill-shaped buttons
* Icon-only button support
* Loading and disabled states
* Hover lift + glow effects
* Button grouping support
* Responsive and accessible design
* Reduced motion support

---

### Basic Usage

```html
<button class="ease-btn ease-btn-primary">
  Primary Button
</button>
```

---

### Variants

#### Primary

```html
<button class="ease-btn ease-btn-primary">
  Primary
</button>
```

#### Success

```html
<button class="ease-btn ease-btn-success">
  Success
</button>
```

#### Danger

```html
<button class="ease-btn ease-btn-danger">
  Danger
</button>
```

#### Outline

```html
<button class="ease-btn ease-btn-outline">
  Outline
</button>
```

#### Ghost

```html
<button class="ease-btn ease-btn-ghost">
  Ghost
</button>
```

#### Link

```html
<button class="ease-btn ease-btn-link">
  Link Button
</button>
```

---

### Sizes

#### Small

```html
<button class="ease-btn ease-btn-primary ease-btn-sm">
  Small
</button>
```

#### Large

```html
<button class="ease-btn ease-btn-primary ease-btn-lg">
  Large
</button>
```

#### Extra Large

```html
<button class="ease-btn ease-btn-primary ease-btn-xl">
  Extra Large
</button>
```

---

### Utility Modifiers

#### Full Width

```html
<button class="ease-btn ease-btn-primary ease-btn-block">
  Full Width
</button>
```

#### Pill Shape

```html
<button class="ease-btn ease-btn-primary ease-btn-pill">
  Pill Button
</button>
```

#### Hover Effect

```html
<button class="ease-btn ease-btn-primary ease-btn-hover">
  Hover Button
</button>
```

---

### Icon Buttons

```html
<button class="ease-btn ease-btn-primary ease-btn-icon">
  <svg><!-- icon --></svg>
</button>
```

---

### Loading State

```html
<button class="ease-btn ease-btn-primary ease-btn-loading">
  Loading
</button>
```

* Disables interactions
* Hides text visually
* Displays spinner automatically

---

### Disabled State

#### Native Disabled

```html
<button class="ease-btn ease-btn-primary" disabled>
  Disabled
</button>
```

#### Class-Based Disabled

```html
<button class="ease-btn ease-btn-disabled">
  Disabled
</button>
```

---

### Button Groups

```html
<div class="ease-btn-group">
  <button class="ease-btn ease-btn-primary">Left</button>
  <button class="ease-btn ease-btn-primary">Middle</button>
  <button class="ease-btn ease-btn-primary">Right</button>
</div>
```

---

### Accessibility

* Keyboard-visible focus rings
* Disabled interaction handling
* Reduced motion support
* Responsive mobile behavior
* Accessible hover handling for pointer devices

---

### Browser Support

* Chrome
* Firefox
* Edge
* Safari (recommended)

Supports modern browsers with CSS custom properties.

---

### Demo

Open `demo.html` directly in any browser to preview all button variants and states.

No build tools or server required.
