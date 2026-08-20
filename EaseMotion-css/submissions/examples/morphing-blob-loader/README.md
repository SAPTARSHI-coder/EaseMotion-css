# Morphing Blob Loader

## What it does
An **organic loading indicator** where layered blobs morph their `border-radius` and rotate continuously — creating a liquid, amoeba-like motion.

## Animations & Techniques
- **Border-radius morphing**: Four-value `border-radius` percentages animate between organic shapes.
- **Layered blobs**: Three semi-transparent gradients with offset animation delays.
- **Rotation + scale**: Combined transforms add depth without JavaScript.

## Folder structure
```
animations/morphing-blob-loader/
├── demo.html
├── style.css
├── README.md
├── pr.txt
└── issue.txt
```

## Why it fits EaseMotion CSS
Shows that complex organic motion is achievable with a single `@keyframes` rule on `border-radius` — a technique directly composable with EaseMotion easing tokens.
