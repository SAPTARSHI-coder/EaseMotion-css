# ease-gradient-text-animated

Animated gradient text for EaseMotion CSS.

## Usage

```css
.gradient-text {
  background-image: linear-gradient(90deg, #6c63ff, #a78bfa, #6c63ff);
  background-size: 200% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: sweep 3s ease-in-out infinite;
}
@keyframes sweep {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: 200% center;
  }
}
```

Variants: shimmer (purple), rainbow (6-color), fire (red-orange), ocean (cyan-blue).
