# ease-skeleton-loader

Skeleton loading shimmer for EaseMotion CSS.

## Usage

Apply the shimmer class to any element:
```css
.skeleton { background: linear-gradient(90deg, #1e293b 25%, #334155 50%, #1e293b 75%); background-size: 200% 100%; animation: shimmer 1.6s ease-in-out infinite; }
@keyframes shimmer { 0% { background-position: 200% center; } 100% { background-position: -200% center; } }
```
