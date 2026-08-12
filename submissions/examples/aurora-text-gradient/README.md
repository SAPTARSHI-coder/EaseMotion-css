# Aurora Text Gradient

## What it does
A headline with an **animated aurora borealis gradient** flowing through the text using `background-clip: text` and infinite `background-position` animation.

## Animations & Techniques
- **Gradient flow**: `background-size: 200%` with `background-position` keyframes.
- **Text clip**: `-webkit-background-clip: text` for gradient-through-text effect.
- **Glow drop-shadow**: Subtle `filter: drop-shadow` for ambient light.

## Folder structure
```
animations/aurora-text-gradient/
├── demo.html
├── style.css
├── README.md
├── pr.txt
└── issue.txt
```

## Why it fits EaseMotion CSS
Hero headline pattern — pure CSS, zero JS, infinitely composable with EaseMotion timing utilities.
