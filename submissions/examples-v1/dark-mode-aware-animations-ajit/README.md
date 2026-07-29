# Dark Mode Aware Animations

A CSS-only demonstration showing animation utilities that automatically adapt to light and dark themes.

## Features

- 🌙 `prefers-color-scheme: dark` support
- 🎛 Manual `data-theme="dark"` override
- ✨ Adaptive glow animation
- 💠 Adaptive shadow pulse animation
- 🌊 Dark-mode optimized shimmer effect
- 🎨 CSS variables for easy customization
- 🚀 No JavaScript required for automatic detection

## Folder Structure

```
dark-mode-aware-animations-ajit/
├── demo.html
├── style.css
└── README.md
```

## Usage

```html
<div class="ease-glow">Glow</div>

<div class="ease-shadow-pulse">
    Shadow Pulse
</div>

<div class="ease-shimmer">
    Shimmer
</div>
```

The component automatically adapts using:

```css
@media (prefers-color-scheme: dark){
    /* Reduced animation intensity */
}
```

For applications with custom theme toggles:

```css
body[data-theme="dark"]{
    /* Dark mode override */
}
```

Open `demo.html` directly in any modern browser.

## Browser Support

- Chrome ✅
- Firefox ✅
- Edge ✅
- Safari ✅