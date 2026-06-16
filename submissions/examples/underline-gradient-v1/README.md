# Underline Gradient Utility

## Description

This contribution introduces a reusable CSS utility:

```css
.underline-gradient
```

The utility creates a smooth animated gradient underline that expands on hover and keyboard focus.

No JavaScript is required.

---

## Features

* Pure CSS implementation
* Animated gradient underline
* Keyboard accessible
* Works with links, headings, buttons, and inline text
* Customizable through CSS variables
* Lightweight and reusable

---

## Usage

```html
<a href="#" class="underline-gradient">
    Gradient Link
</a>
```

```html
<h2 class="underline-gradient">
    Gradient Heading
</h2>
```

```html
<button class="underline-gradient">
    Action Button
</button>
```

```html
<span class="underline-gradient inline-text">
    Hover this inline phrase
</span>
```

---

## CSS Variables

```css
:root {
    --ug-height: 3px;
    --ug-color-1: #06b6d4;
    --ug-color-2: #8b5cf6;
    --ug-color-3: #ec4899;
    --ug-duration: 0.35s;
}
```

These variables allow developers to customize:

* Underline thickness
* Gradient colors
* Animation duration

---

## Files Included

```text
underline-gradient/
├── demo.html
├── style.css
└── README.md
```

---

## Accessibility

* Supports keyboard navigation
* Uses `:focus-visible`
* Preserves semantic HTML
* No JavaScript dependencies

---

## Contribution Summary

Added a reusable animated gradient underline utility suitable for:

* Links
* Headings
* Buttons
* Inline calls-to-action

Closes #8596