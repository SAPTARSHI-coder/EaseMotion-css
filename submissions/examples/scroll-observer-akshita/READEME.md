# EaseMotion Runtime Scroll Observer

A standalone runtime utility that automatically triggers EaseMotion animations when elements enter the viewport using the native `IntersectionObserver` API.

## Features

- Uses the native IntersectionObserver API
- Automatically detects elements with `data-ease-scroll`
- Supports configurable observer options
- Supports animation delay and duration
- One-time or repeat animations
- Respects `prefers-reduced-motion`
- No scroll event listeners
- Modular and reusable implementation

---

## Folder Structure

```
scroll-observer-akshita/
│── demo.html
│── style.css
│── scrollObserver.js
│── config.js
└── README.md
```

---

## Installation

Include the required files in your project:

```html
<link rel="stylesheet" href="style.css">

<script src="scrollObserver.js"></script>
<script src="config.js"></script>
```

---

## Example Usage

```html
<div
    data-ease-scroll="slide-up"
    data-ease-delay="200"
    data-ease-duration="700"
    data-ease-once="true">
    Feature Card
</div>
```

---

## Configuration

```javascript
const observer = new EaseMotionObserver({
    threshold: 0.25,
    root: null,
    rootMargin: "0px 0px -10% 0px",
    once: true
});

observer.init();
```

### Available Options

| Option | Description |
|--------|-------------|
| threshold | Percentage of visibility before animation |
| root | Custom scroll container |
| rootMargin | Additional observation margin |
| once | Animate only once |

---

## Supported Data Attributes

| Attribute | Purpose |
|-----------|---------|
| data-ease-scroll | Animation name |
| data-ease-delay | Animation delay (ms) |
| data-ease-duration | Animation duration (ms) |
| data-ease-once | Animate only once |

---

## Browser Compatibility

- Chrome
- Firefox
- Safari
- Edge

---

## Accessibility

This project respects:

- `prefers-reduced-motion`
- Keyboard navigation
- Screen reader compatibility

When reduced motion is enabled:

- Animations are skipped.
- Elements are immediately visible.

---

## Performance

- Uses native IntersectionObserver
- Avoids scroll event listeners
- Efficient for large pages
- Minimal DOM operations

---

## Author

Akshita Goel