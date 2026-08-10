# EaseMotion — `@starting-style` Entry Animations

Animate elements when they **first appear** in the DOM — dialogs, toasts, tooltips, popovers.

## The Problem

CSS transitions only interpolate from an element's *current* computed style. When an element first renders (e.g., `display: none → flex`), there is no "previous" state — so entry animations don't play.

## The Solution

`@starting-style` defines the initial state before the element's first render, allowing transitions to animate on entry.

## Demo

- **Without @starting-style**: modal pops in instantly — no fade or scale
- **With @starting-style**: modal fades and scales in smoothly on first render
- **Toast demo**: each dynamically created toast slides in from the right

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Side-by-side modal comparison + interactive toast demo |
| `style.css` | Both modal variants, `@starting-style` rules, toast styles |

## Usage

```css
.modal-overlay {
  display: none;
  opacity: 0;
  transition: opacity 0.3s, transform 0.3s;
}

.modal-overlay.active {
  display: flex;
  opacity: 1;
}

@starting-style {
  .modal-overlay.active {
    opacity: 0;
    transform: scale(0.95);
  }
}
```

## Browser Support

| Chrome | Firefox | Safari |
|--------|---------|--------|
| 117+ | 129+ | Not supported |

Use `@supports (at-rule(@starting-style))` for progressive enhancement.

## Affected EaseMotion Components

| Component | @starting-style Entry |
|-----------|----------------------|
| `.ease-modal` | Fade + scale in on dialog open |
| `.ease-toast` | Slide in from right on creation |
| `.ease-tooltip` | Fade in on hover trigger |
| `.ease-navbar-dropdown` | Slide down on menu open |
