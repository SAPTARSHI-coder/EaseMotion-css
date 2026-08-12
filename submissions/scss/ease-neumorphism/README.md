# SCSS Neumorphism (Soft UI) Mixin

A reusable, dynamic SCSS mixin for instantly generating Neumorphic (Soft UI) styles. It automatically calculates the correct highlight and shadow hex colors based on a single base color, rendering precise dual box-shadows.

## Features
- Generates precise dual box-shadows (`lighten` and `darken` calculations).
- Supports both `outset` (extruded) and `inset` (recessed) modes.
- Configurable elevation depth and contrast ratios.
- Automatically handles the base background color.

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `$base-color` | `Color` | `#e0e5ec` | The base background color of the element and the surrounding area. |
| `$depth` | `Number` | `8px` | The intensity of the elevation (controls shadow offset and blur). |
| `$inset` | `Boolean` | `false` | If true, generates an inset shadow simulating a recessed (pressed) effect. |
| `$contrast` | `Number` | `0.15` | The contrast ratio applied to the light and dark shadow calculation. |

## Usage

Import the mixin and use it in your components. Note: Neumorphism requires the element's background color to precisely match the surrounding container's background color.

```scss
@import 'ease-neumorphism';

// Parent container
.dashboard-panel {
  background-color: #e0e5ec;
  padding: 40px;
}

// Outset Card (Extruded)
.neuo-card {
  @include ease-neumorphism($base-color: #e0e5ec, $depth: 10px);
  border-radius: 24px;
}

// Inset Button (Pressed state)
.neuo-btn:active {
  @include ease-neumorphism($base-color: #e0e5ec, $depth: 4px, $inset: true);
  border-radius: 12px;
}
```

## Why it fits EaseMotion CSS
Neumorphism is heavily reliant on complex, multi-layered box shadows. Calculating the precise light/dark hex codes manually across different UI themes is extremely tedious. This mixin abstracts the math, allowing developers to generate highly polished, consistent soft UI components instantly.
