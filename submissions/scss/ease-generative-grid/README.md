# SCSS Generative Tech Grid Mixin

Modern AI and Developer-focused landing pages (like Stripe, Vercel, or Linear) often feature intricate, high-tech grid backgrounds resembling circuitry or graph paper. Developers usually export massive, unoptimized SVG files to achieve this look.

This SCSS mixin generates a flawless, infinitely scaling, multi-layered geometric grid purely via native CSS math.

## Features
- **3-Tiered Hierarchy:** Mathematically calculates and generates a primary grid, a finer sub-grid (for detail), and a thicker super-grid (for structure).
- **Ambient Glow:** Automatically injects a perfectly centered `radial-gradient` glow behind the grid to create atmospheric depth.
- **Zero HTTP Requests:** No images or SVGs are loaded. It's rendered instantly by the browser's CSS engine.
- **Infinite Scalability:** Because it's mathematically generated via `background-size`, it tiles flawlessly across ultrawide monitors without pixelation or heavy payload sizes.

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `$bg-color` | `Color` | `#0f172a` | The base background color (usually dark). |
| `$line-color` | `Color` | `rgba(255,255,255,0.1)`| The base color of the grid lines. |
| `$glow-color` | `Color` | `rgba(59,130,246,0.15)`| The ambient glow color behind the grid. |
| `$grid-size` | `Number` | `40px` | The pixel size of the primary grid squares. |

## Usage

Import the mixin and apply it to a hero section or the body.

```scss
@import 'ease-generative-grid';

// Standard Blueprint Grid
.hero-section {
  @include ease-generative-grid();
}

// Custom Cyberpunk Grid (Smaller squares, pink glow)
.hero-cyberpunk {
  @include ease-generative-grid(
    $bg-color: #000000,
    $line-color: rgba(236, 72, 153, 0.2), // Pink lines
    $glow-color: rgba(236, 72, 153, 0.1), // Pink ambient glow
    $grid-size: 30px
  );
}

// Light Mode Architect Grid
.hero-light {
  @include ease-generative-grid(
    $bg-color: #f8fafc,
    $line-color: rgba(15, 23, 42, 0.05), // Dark lines
    $glow-color: transparent, // No glow
    $grid-size: 60px
  );
}
```

## Why it fits EaseMotion CSS
Writing out 7 stacked `linear-gradient` and `radial-gradient` functions manually, ensuring their specific `background-size` properties align mathematically (e.g., ensuring the sub-grid lines up exactly with the primary grid), is highly complex. This mixin abstracts that heavy CSS geometry into a single, highly customizable SCSS function, delivering premium tech aesthetics instantly.
