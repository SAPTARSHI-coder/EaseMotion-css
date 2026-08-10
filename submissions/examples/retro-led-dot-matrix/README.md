# Retro LED Dot Matrix Display

## What it does
A fully functional **7×42 LED dot matrix scrolling display** — the classic old-school programmable board you'd see in airports, stadiums, and storefronts. Type any custom message and watch it scroll across the grid of glowing CSS dots in real time. Supports pause, speed control, and preset messages.

## Animations & Techniques
- **CSS Grid Dot Matrix**: A `7 × 42` grid of `div.dot` elements — each styled as a small circle with `border-radius: 50%`. The grid layout is set via `grid-template-columns: repeat(42, 10px)`.
- **Active Dot Glow**: When a dot is `.on`, it receives a multi-layered `box-shadow` with `blur` and `spread` to produce the characteristic LED glow effect.
- **5×7 Pixel Font**: A custom bitmap font object maps every character to an array of 7 integers (each integer is a 5-bit row mask). The renderer reads these bitmaps and translates them into a flat pixel "strip".
- **Scrolling Loop**: A `requestAnimationFrame` loop increments an `offset` pointer across the pixel strip every N milliseconds (controlled by the speed slider). The visible 42-column window slides across the infinite looping strip.
- **CSS Scanlines**: A `::before` pseudo-element with `repeating-linear-gradient` draws horizontal scanlines across the panel for the authentic CRT-monitor look.
- **Blink Animation**: The status indicator uses `@keyframes blink` with `opacity` toggle to simulate an active power LED.

## Folder structure
```
animations/retro-led-dot-matrix/
├── demo.html
├── style.css
└── README.md
```

## Why it fits EaseMotion CSS
- An iconic, impressive demo that proves CSS is the display medium — JavaScript only drives the data logic.
- The glow, scanlines, and blink effects are 100% CSS with zero image assets.
- A perfect complement to EaseMotion's "motion that feels real" philosophy — the LED board has been a physical animation medium since the 1970s.
- Includes `prefers-reduced-motion` support (disables dot transition and blink animation).
