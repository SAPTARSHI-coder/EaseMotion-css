# ease-clock-loader — Analog Clock Loader

## What does this do?

Adds a minimalist analog clock loader component (`ease-clock-loader`) with rotating second, minute, and hour hands. The hands sweep continuously to indicate waiting or processing states — a polished alternative to generic spinners.

## How is it used?

```html
<div class="ease-clock-loader">
  <div class="ease-clock-hand ease-clock-second"></div>
  <div class="ease-clock-hand ease-clock-minute"></div>
  <div class="ease-clock-hand ease-clock-hour"></div>
</div>
```

Three sizes are available via modifier classes:
- `.ease-clock-loader-sm` — 40px diameter
- `.ease-clock-loader` — 64px diameter (default)
- `.ease-clock-loader-lg` — 96px diameter

Customise colours via CSS custom properties:
```css
.ease-clock-loader {
  --ease-clock-border-color: #10b981;
  --ease-clock-second-color: #f59e0b;
}
```

## Why is it useful?

Existing loaders (`ease-loader-spin`, `ease-loader-pulse`, `ease-loader-ping`, `ease-loader-dots`) are abstract geometric patterns. A clock loader provides a familiar, real-time visual metaphor that users instinctively understand — the passing of time expressed through rotating hands. It fits EaseMotion CSS's philosophy of human-readable, animation-first components.

Fixes #22816
