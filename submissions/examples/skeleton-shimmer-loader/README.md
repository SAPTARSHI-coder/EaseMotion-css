# Skeleton Shimmer Loader

## What it does
**Skeleton loading placeholders** with a sweeping shimmer highlight animation using a pseudo-element gradient sweep.

## Animations & Techniques
- **Shimmer sweep**: `translateX(-100%) → translateX(100%)` on `::after` gradient overlay.
- **Composable blocks**: Avatar, title, line, and grid variants.
- **Reduced motion**: Shimmer disabled when user prefers reduced motion.

## Folder structure
```
animations/skeleton-shimmer-loader/
├── demo.html
├── style.css
├── README.md
├── pr.txt
└── issue.txt
```

## Why it fits EaseMotion CSS
Skeleton loaders are essential UX patterns — this provides a reusable shimmer animation composable with any placeholder shape.
