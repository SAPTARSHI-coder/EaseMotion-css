# Radial Pulse Aura

## What does this do?

Generates pulsating radiating background circles around status dots, avatars, or notification indicators to signify activity or draw visual focus.

## How is it used?

Apply the `radial-pulse-aura-uj` class to a status indicator marker or avatar container:

```html
<span class="status-marker radial-pulse-aura-uj"></span>
```

You can customize the pulse color by defining the `--pulse-color` CSS custom property:

```css
.status-marker {
  --pulse-color: #10b981; /* green status pulse */
}
```

## Why is this useful?

It provides a lightweight, pure CSS animation indicating state changes (e.g. online presence, live recordings, notification states) without requiring JavaScript interval timers or layout shifts. It includes full support for prefers-reduced-motion to keep the experience accessible.
