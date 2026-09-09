# Memory Card Game

A CSS-animated memory card matching game with 3D card flip, match glow, mismatch shake, move counter, and win celebration.

## Overview

Players flip cards to find matching pairs. Cards use CSS `perspective` and `rotateY` for a realistic 3D flip. Matched pairs glow with a pulsing box-shadow. Mismatched cards shake before flipping back. A win overlay appears when all pairs are matched.

## Features

| Feature | Description |
|---|---|
| 3D card flip | Cards rotate on the Y-axis using CSS `perspective` and `transform-style: preserve-3d` |
| Match glow | Matched cards get a green background with a pulsing green box-shadow |
| Mismatch shake | Non-matching cards shake horizontally before flipping back |
| Move counter | Tracks the number of attempts |
| Win celebration | Overlays a pop-in card with animated checkmark and final move count |
| Reset button | Shuffles and restarts the game at any time |
| 8 emoji pairs | 16 cards in a 4x4 grid |

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--mcg-duration` | `0.5s` | Card flip transition duration |
| `--mcg-card-bg` | `#1e293b` | Background color of card front face |
| `--mcg-card-back` | `#6366f1` | Background color of card back face (default) |
| `--mcg-match-color` | `#22c55e` | Color used for matched card glow and checkmark |
| `--mcg-mismatch-color` | `#ef4444` | Background color on mismatch |
| `--mcg-radius` | `0.75rem` | Border radius for cards |

## Usage

```html
<link rel="stylesheet" href="style.css">

<div class="mcg-container">
  <div class="mcg-grid" id="mcg-grid"></div>
</div>
```

Include the provided JavaScript to initialize the game. The board is rendered dynamically from an emoji array with shuffle, flip, match detection, and win logic.
