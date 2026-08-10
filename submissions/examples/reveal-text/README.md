# ease-reveal-text

A cinematic masked text reveal animation where a colored block slides across text, revealing it underneath. Zero JS required.

## Classes

| Class | Effect |
|---|---|
| `.ease-reveal-text` | Block slides right revealing text |
| `.ease-reveal-text-left` | Block slides left |
| `.ease-reveal-text-up` | Block slides upward |
| `.ease-reveal-text-primary` | Uses `--ease-color-primary` block color |
| `.ease-reveal-text-dark` | Dark block |
| `.ease-reveal-text-delay-1` | 0.2s delay |
| `.ease-reveal-text-delay-2` | 0.4s delay |
| `.ease-reveal-text-delay-3` | 0.6s delay |

## Usage

```html
<h1 class="ease-reveal-text ease-reveal-text-primary">Hello World</h1>

<!-- Staggered -->
<h2 class="ease-reveal-text ease-reveal-text-delay-1">Animation</h2>
<h2 class="ease-reveal-text ease-reveal-text-delay-2">Made Simple</h2>
<h2 class="ease-reveal-text ease-reveal-text-delay-3">Zero JS</h2>
```

## How it works

Uses a `::after` pseudo-element that slides across the text using CSS `transform` + `@keyframes`. No JavaScript needed.
