# Micro-Interaction Animations — Bounce · Heartbeat · Shake

> A lightweight, reusable CSS animation library for micro-interactions — perfect for notifications, likes, form errors, and scroll indicators.

---

##  Overview

This package adds three **"Attention Seeker"** animations to your UI:

| Class            | Effect            | Best For                          |
| ---------------- | ----------------- | --------------------------------- |
| `.em-shake`      | Horizontal shake  | Form errors, invalid input        |
| `.em-heartbeat`  | Subtle pulse      | Like buttons, favorites, alerts   |
| `.em-bounce`     | Vertical bounce   | Scroll indicators, CTAs           |

All animations **return to their original state cleanly** after playing.

---

##  Quick Start

### 1. Include the CSS


<link rel="stylesheet" href="style.css" />
2. Add a class to any HTML element
html
<div class="em-shake">❌ Invalid input</div>
<div class="em-heartbeat">❤️ 42 likes</div>
<div class="em-bounce">⬇️ Scroll down</div>
That's it! The animation will play once and then cleanly reset.

♾️ Infinite Mode
Add the .infinite modifier class to loop the animation:

html
<div class="em-shake infinite">⚠️ Keep shaking!</div>
## Demo
Open demo.html in your browser to see all animations in action with interactive triggers.

## Browser Support
Works in all modern browsers that support CSS @keyframes:

Chrome 44+

Firefox 42+

Safari 9+

Edge 15+

Opera 31+

## Animation Details
em-shake
Duration: 0.6s

Easing: ease-in-out

Travel: ±10px maximum horizontal displacement

em-heartbeat
Duration: 0.9s

Easing: ease-in-out

Scale: peaks at 1.18x, returns to 1x

em-bounce
Duration: 0.9s

Easing: mixed (ease-in / ease-out)

Travel: up to -16px vertical displacement

🛠️ Customization
Override animation timing by adding your own CSS:

css
.my-shake {
    animation-duration: 0.3s; /* faster shake */
}

.my-bounce {
    animation-duration: 1.2s; /* slower, softer bounce */
}
📁 Folder Structure
text
micro-interaction-animations/
├── demo.html        # Interactive demonstration
├── style.css        # All CSS + animations
└── README.md        # This file
🤝 Contributing
This solution addresses Issue #83897 — GSSoC 2026.

📄 License
MIT — free for personal and commercial use.