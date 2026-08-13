# EaseMotion — `transition-behavior: allow-discrete`

Smoothly transition discrete CSS properties like `display` and `overlay` — no more instant toggles.

## The Problem

Discrete properties (`display`, `visibility`, `overlay`) cannot be smoothly transitioned by default. When you toggle `display: none → block`, it snaps instantly — even with `opacity` and `transform` transitions.

## The Solution

`transition-behavior: allow-discrete` (Chromium 117+) enables transitions on discrete properties. Combined with `@starting-style` for entry animations, components can fade in/out smoothly when toggling `display`.

## Demo

- **normal**: `display` toggles instantly — no transition
- **allow-discrete**: `display` fades in/out smoothly with `opacity` and `transform`

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Side-by-side comparison: normal vs allow-discrete |
| `style.css` | Toggle panels, `@starting-style`, `transition-behavior` rules |

## Proposed Utility

In `core/utilities.css`:

```css
.ease-allow-discrete {
  transition-behavior: allow-discrete;
}
```

## Component Usage

```css
.ease-modal-panel {
  transition:
    opacity 0.3s,
    transform 0.3s,
    display 0.3s allow-discrete;
}

@starting-style {
  .ease-modal-panel.active {
    opacity: 0;
    transform: scale(0.95);
  }
}
```

## Affected Components

| Component | Discrete Property | Transition |
|-----------|-----------------|------------|
| `.ease-modal` | `display: none → flex` | opacity + transform + display allow-discrete |
| `.ease-toast` | `display: none → block` | opacity + translate + display allow-discrete |
| `.ease-tooltip` | `visibility: hidden → visible` | opacity + visibility allow-discrete |
| `.ease-sidebar` | `display: none → block` | translate + display allow-discrete |

## Browser Support

| Chrome | Firefox | Safari |
|--------|---------|--------|
| 117+ | 129+ | 17.2+ |
