# ⚡ Ease Skeleton Firefox Fix

Bug fix for ease-skeleton loading animation broken on Firefox.

## 🐛 Problem
The ease-skeleton shimmer animation was broken on Firefox 
because the explicit background-size property was missing.
Firefox requires background-size when using animated 
linear-gradient for shimmer effects.

## ✅ Fix Applied
Added explicit background-size: 200% 100% to the skeleton class:

```css
/* ✅ Fixed */
.ease-skeleton {
  background: linear-gradient(
    90deg,
    #1a1a2e 25%,
    #252540 50%,
    #1a1a2e 75%
  );
  background-size: 200% 100%; /* Required for Firefox */
  animation: skeleton-shimmer 1.5s ease-in-out infinite;
}
```

## 🚀 How to Use
```html
<!-- Text skeleton -->
<div class="ease-skeleton ease-skeleton--text"></div>

<!-- Title skeleton -->
<div class="ease-skeleton ease-skeleton--title"></div>

<!-- Avatar skeleton -->
<div class="ease-skeleton ease-skeleton--avatar"></div>

<!-- Image skeleton -->
<div class="ease-skeleton ease-skeleton--image"></div>
```

## 📁 Files
| File | Description |
|------|-------------|
| `demo.html` | Before vs after comparison demo |
| `style.css` | Fixed skeleton styles |
| `README.md` | Documentation |

## 🌍 Browser Support
| Browser | Before | After |
|---------|--------|-------|
| Chrome | ✅ | ✅ |
| Firefox | ❌ | ✅ |
| Safari | ✅ | ✅ |
| Edge | ✅ | ✅ |