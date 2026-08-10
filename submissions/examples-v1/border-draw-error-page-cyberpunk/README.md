# Border Draw Error Page — Cyberpunk (`border-draw-error-page`)

An intermediate error page component with a sequential CSS border draw animation, glitch effect on the error code, scanline sweep, diagnostic status bars, and a clipped-corner cyberpunk button style. Zero JavaScript.

## EaseMotion Keyframes

| Keyframe | Effect |
|---|---|
| `ease-border-draw-top/right/bottom/left` | Four border segments draw in sequence over 1.6s total |
| `ease-glitch-x` | Error code shifts horizontally with `clip-path` slice every 8s |
| `ease-glitch-shadow` | Chromatic aberration text-shadow fires in sync with glitch |
| `ease-scanline-sweep` | Horizontal cyan line sweeps the panel every 2.8s |
| `ease-fade-up` | Staggered content entrance from load |
| `ease-flicker` | Periodic opacity flicker on the 404 code |
| `ease-blink-cursor` | Terminal cursor blinks at 1s |
| `ease-hud-in` | Sub-label collapses from wide letter-spacing |
| `ease-bar-charge` | Diagnostic bars fill from 0 to target width |
| `ease-corner-pulse` | Corner accent squares pulse with a magenta glow |
| `ease-static-noise` | Background noise texture shifts every frame |

## Animation Sequence

```
0.2s — top border draws left → right
0.6s — right border draws top → bottom
1.0s — bottom border draws right → left
1.4s — left border draws bottom → top
1.6s — corners begin pulsing
1.6s — error code appears with flicker
1.7s — title, body, diagnostics, actions fade up (staggered)
2.8s — scanline sweeps begin looping
  8s — glitch fires, repeats on 8s interval
```

## Border Draw Technique

Each of the four `.b-*` elements is an absolutely-positioned `div` with `background: var(--magenta)`. Width/height starts at `0` and animates to `100%` with staggered `animation-delay`:

```css
.b-top    { height: 2px; animation: ease-border-draw-top    0.4s ... 0.2s both; }
.b-right  { width:  2px; animation: ease-border-draw-right  0.4s ... 0.6s both; }
.b-bottom { height: 2px; animation: ease-border-draw-bottom 0.4s ... 1.0s both; }
.b-left   { width:  2px; animation: ease-border-draw-left   0.4s ... 1.4s both; }
```

## Cyberpunk Button Style

Buttons use `clip-path: polygon(...)` to cut the top-right and bottom-left corners — no image assets or complex borders required:

```css
clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
```

## Accessibility

- `prefers-reduced-motion` disables all animations; border segments become fully visible immediately
- Buttons are native `<a>` elements — keyboard focusable
- Body text communicates the error clearly independent of visual effects
- Color is never the sole indicator of status (diagnostic labels accompany bars)

## Workspace Tree Map

```
submissions/examples/border-draw-error-page-pari/
├── demo.html
├── style.css
└── README.md
```

---
Crafted with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**