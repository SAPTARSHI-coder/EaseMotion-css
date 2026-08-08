# 🎵 Fluid Dynamic Audio Equalizer Visualizer

A modern **Fluid Dynamic Audio Equalizer Visualizer** built using **pure HTML and CSS**. It simulates an animated audio spectrum with 10 neon gradient frequency bars using staggered CSS keyframe animations.

---

## ✨ Features

- 🎶 10 animated frequency bars
- 🌈 Multi-color neon gradient fills
- ⚡ Smooth staggered bounce animation using CSS custom properties
- 🪟 Glassmorphism media player card
- 📱 Fully responsive
- ♿ `prefers-reduced-motion` support
- 🚫 No JavaScript required

---

## Folder Structure

```text
fluid-audio-equalizer/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

1. Open `demo.html` in any modern browser.
2. The equalizer bars animate automatically.
3. Customize colors, animation speed, or bar size in `style.css`.

---

## CSS Custom Properties

```css
:root{
    --bg:#050816;
    --card:#10182b;
    --text:#ffffff;
    --muted:#cbd5e1;

    --bar-width:14px;
    --bar-height:120px;
    --radius:20px;

    --gradient:linear-gradient(
        to top,
        #06b6d4,
        #3b82f6,
        #8b5cf6,
        #ec4899
    );
}
```

---

## Included Elements

- 🎵 Music Player Card
- 📊 10 Frequency Spectrum Bars
- ▶ Playing Button
- ✨ Glassmorphism Container

---

## Responsive Design

Optimized for:

- Desktop
- Laptop
- Tablet
- Mobile

---

## Accessibility

- Supports `prefers-reduced-motion`
- Semantic HTML structure
- Responsive layout
- No JavaScript dependency

---

## Browser Support

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari
- Opera

---

## License

Created as a pure HTML and CSS showcase component for the EaseMotion CSS project.