# Elastic Range Slider

## What it does

A custom-styled **range slider** whose thumb performs an elastic bounce animation on release using CSS `@keyframes`.

## Animations & Techniques

- **Elastic bounce**: `scale(1 → 1.35 → 0.9 → 1)` with spring easing on `change` event.
- **Fill track**: Gradient fill width follows thumb position.
- **Accessible**: Native `<input type="range">` underneath for keyboard/screen reader support.

## Folder structure

```
animations/elastic-range-slider/
├── demo.html
├── style.css
├── README.md
├── pr.txt
└── issue.txt
```

## Why it fits EaseMotion CSS

Demonstrates spring micro-interactions on form controls — composable with EaseMotion easing tokens.
