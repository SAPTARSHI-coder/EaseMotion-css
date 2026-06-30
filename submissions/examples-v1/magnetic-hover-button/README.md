# Magnetic Hover Button

## What it does
A CTA button that **magnetically pulls toward the cursor** when nearby, using smooth CSS `transform` transitions driven by minimal JavaScript for position calculation.

## Animations & Techniques
- **Spring transform**: `cubic-bezier(0.23, 1, 0.32, 1)` on `translate` for elastic return.
- **Hover scale**: Inner `.btn-bg` scales up on hover independently.
- **Distance falloff**: JS applies weaker pull when cursor is farther away.

## Folder structure
```
animations/magnetic-hover-button/
├── demo.html
├── style.css
├── README.md
├── pr.txt
└── issue.txt
```

## Why it fits EaseMotion CSS
Pairs EaseMotion-style spring easing with a tactile micro-interaction — JS only sets transform values; all motion is CSS-animated.
