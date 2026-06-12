# Gradient Animated Border

## What it does

A premium card with a **continuously rotating conic gradient border** animated via CSS `@property --angle` and `@keyframes`.

## Animations & Techniques

- **@property registration**: Custom `--angle` property enables smooth conic-gradient rotation.
- **Conic gradient border**: Padding trick creates border without extra elements.
- **Fallback**: Static gradient when `@property` is unsupported.

## Folder structure

```
animations/gradient-animated-border/
├── demo.html
├── style.css
├── README.md
├── pr.txt
└── issue.txt
```

## Why it fits EaseMotion CSS

Demonstrates cutting-edge CSS Houdini `@property` for animatable gradients — a premium UI pattern for pricing cards and CTAs.
