# Interactive Credit Card Flip Form

## What it does

A real-world payment form where a beautifully designed **3D credit card automatically rotates** to show its back face when the user focuses on the CVV field — then flips back to the front when they leave. All card details update live as the user types.

## Animations & Techniques

- **CSS 3D Transform Flip**: Uses `transform-style: preserve-3d`, `perspective`, and `rotateY(180deg)` for the card flip. The back face uses `backface-visibility: hidden` to stay invisible when facing away.
- **`:focus-within` Trigger**: The flip is driven by a CSS class `.flipped` toggled by JavaScript responding to CVV input focus/blur events.
- **Smooth Easing**: Transition uses `cubic-bezier(0.645, 0.045, 0.355, 1.000)` (the classic "ease-in-out-cubic") for a weighty, physical card feel.
- **Live DOM Reflection**: JavaScript updates card number, name, expiry, and CVV text in real-time as the user types.
- **Chip & Contactless Decorations**: Pure CSS layered `div` elements replicate a chip card's gold contacts and contactless payment arcs.

## Folder structure

```
animations/credit-card-flip-form/
├── demo.html
├── style.css
└── README.md
```

## Why it fits EaseMotion CSS

- A flagship, real-world 3D CSS animation use case that developers actively search for.
- Perfectly demonstrates `transform-style: preserve-3d` and `backface-visibility`.
- Includes `prefers-reduced-motion` support.
