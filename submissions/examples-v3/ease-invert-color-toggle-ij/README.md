# Invert Color Toggle

A CSS component that inverts page colors with smooth transitions, providing a dark/light theme toggle experience.

## Overview

The Invert Color Toggle uses a toggle switch to apply an `.inverted` class to the page, which swaps CSS custom property values for a complete color scheme inversion. All affected properties transition smoothly for a polished user experience.

## Features

| Feature | Description |
|---|---|
| Smooth inversion | All color-related properties transition at the configured duration |
| Toggle switch | Accessible toggle button with ARIA attributes |
| Reset button | One-click reset to the default (light) theme |
| Custom properties | Fully customizable color palette and timing |

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ict-duration` | `0.4s` | Transition duration for color inversion |
| `--ict-bg` | `#ffffff` | Page background color |
| `--ict-text` | `#1e293b` | Page text color |
| `--ict-card-bg` | `#f1f5f9` | Card background color |
| `--ict-card-border` | `#e2e8f0` | Card border color |
| `--ict-toggle-bg` | `#cbd5e1` | Toggle track background (off) |
| `--ict-toggle-active` | `#6366f1` | Toggle track background (on) |
| `--ict-toggle-thumb` | `#ffffff` | Toggle thumb color |
| `--ict-primary` | `#4f46e5` | Primary accent color |
| `--ict-heading` | `#0f172a` | Heading text color |

The `.inverted` class overrides every `--ict-*` property with darker values, creating an inverted color scheme.

## Usage

```html
<link rel="stylesheet" href="style.css">

<body>
  <button class="toggle-track" id="toggleBtn">
    <span class="toggle-thumb"></span>
  </button>
</body>

<script>
  document.getElementById("toggleBtn").addEventListener("click", () => {
    document.body.classList.toggle("inverted");
  });
</script>
```

Include the JavaScript to toggle the `.inverted` class on the `<body>` element. All child elements that use the `--ict-*` custom properties will transition automatically.
