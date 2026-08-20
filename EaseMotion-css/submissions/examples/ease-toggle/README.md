# Ease Toggle

A lightweight, CSS-only toggle switch component for the EaseMotion CSS framework.

## Overview

The **Ease Toggle** component replaces the default HTML checkbox with a modern animated toggle switch. It provides a smooth sliding knob, animated track color transition, multiple size variants, keyboard accessibility, and support for reduced-motion preferences—all without requiring JavaScript.

## Features

* Pure CSS implementation
* No JavaScript required
* Smooth knob slide animation
* Animated track color transition
* Small (`ease-toggle-sm`) and Large (`ease-toggle-lg`) size variants
* Keyboard focus support using `:focus-visible`
* Uses native checkbox for accessibility
* Supports `prefers-reduced-motion`
* Lightweight and reusable

---

## HTML Usage

```html
<label class="ease-toggle">
    <input type="checkbox">
    <span class="ease-toggle-track">
        <span class="ease-toggle-knob"></span>
    </span>
</label>
```

---

## Checked Toggle

```html
<label class="ease-toggle">
    <input type="checkbox" checked>
    <span class="ease-toggle-track">
        <span class="ease-toggle-knob"></span>
    </span>
</label>
```

---

## Small Toggle

```html
<label class="ease-toggle ease-toggle-sm">
    <input type="checkbox">
    <span class="ease-toggle-track">
        <span class="ease-toggle-knob"></span>
    </span>
</label>
```

---

## Large Toggle

```html
<label class="ease-toggle ease-toggle-lg">
    <input type="checkbox" checked>
    <span class="ease-toggle-track">
        <span class="ease-toggle-knob"></span>
    </span>
</label>
```

---

## Accessibility

* Native checkbox for screen readers.
* Keyboard focus indication using `:focus-visible`.
* Works without JavaScript.
* Honors the user's `prefers-reduced-motion` setting.

---

## Browser Support

Supported in all modern browsers that implement:

* CSS Variables
* CSS Transitions
* `:focus-visible`
* `prefers-reduced-motion`

---

## Project Structure

```
ease-toggle/
├── demo.html
├── style.css
└── README.md
```

---

## License

Submitted as a community contribution for the **EaseMotion CSS** open-source project.
