# Sci-Fi HUD: Retro Arcade Pixel Variation

A pure CSS and HTML cyberpunk sci-fi HUD featuring a retro arcade pixel aesthetic with chunky borders, neon colors, and classic scanline/blinking effects.

## Usage

Include the HTML structure in your layout and the CSS file in your head:

```html
<link rel="stylesheet" href="style.css">
<!-- Using Press Start 2P font for the retro arcade feel -->
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
```

Apply the classes to your elements, for example:

```html
<div class="hud-container-retro">
  <div class="hud-header">
    <h1 class="hud-title-retro">SYS.MAINFRAME</h1>
  </div>
  <div class="hud-main-retro">
     <!-- HUD Panels with retro styling -->
     <div class="panel-retro">...</div>
  </div>
</div>
```

## Why it's useful

This variation introduces a nostalgic 8-bit/16-bit arcade feel to modern sci-fi UI designs, providing an accessible and performant CSS-only alternative to image-heavy or canvas-based HUDs. It leverages native CSS animations and gradients for effects like scanlines and radar sweeps, aligning with the EaseMotion CSS philosophy of clean, lightweight styling.
