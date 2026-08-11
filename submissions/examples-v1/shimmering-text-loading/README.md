# ✨ Shimmering Text Loading Effect

A pure CSS shimmering text loading effect with multiple variants — no JavaScript required.

## 🎬 Preview

Dark background with text that animates a left-to-right sweeping light, similar to skeleton loaders on Facebook/YouTube, applied directly to text.

## 📁 Files

| File | Description |
|------|-------------|
| `demo.html` | Full demo with all variants |
| `style.css` | All styles and keyframe animations |
| `README.md` | This file |

## 🎨 Variants Included

- **Default** — Cool blue-purple shimmer
- **Gold** — Warm golden shimmer for premium feel
- **Cyan** — Bright cyan shimmer for techy/data UIs
- **Heading sizes** — XL, LG, MD heading shimmer
- **Speed variants** — Slow, normal, fast animation speeds

## 🔧 How it works

The shimmer effect uses three CSS properties working together:

```css
background: linear-gradient(90deg, #dark 20%, #light 50%, #dark 80%);
background-size: 200% auto;
background-clip: text;
-webkit-text-fill-color: transparent;
animation: shimmer 1.8s linear infinite;

@keyframes shimmer {
  0%   { background-position: 200% center; }
  100% { background-position: -200% center; }
}
```

The gradient is larger than the element (`background-size: 200%`) and its position is animated, creating the sweeping light effect.

## ♿ Accessibility

Respects `prefers-reduced-motion` — animation is disabled for users who prefer reduced motion, showing a static gradient instead.

## 🚀 Usage

```html
<link rel="stylesheet" href="style.css" />

<!-- Default shimmer -->
<p class="shimmer-text shimmer-default">Loading...</p>

<!-- Gold shimmer -->
<p class="shimmer-text shimmer-gold">Loading...</p>

<!-- Cyan shimmer -->
<p class="shimmer-text shimmer-cyan">Loading...</p>

<!-- Speed control -->
<p class="shimmer-text shimmer-default speed-fast">Loading...</p>
<p class="shimmer-text shimmer-default speed-slow">Loading...</p>
```

## 🌐 Browser Support

| Browser | Support |
|---------|---------|
| Chrome  | ✅ Full |
| Firefox | ✅ Full |
| Safari  | ✅ Full (via -webkit- prefix) |
| Edge    | ✅ Full |

## 📄 License

MIT — Part of the EaseMotion CSS open source library.
