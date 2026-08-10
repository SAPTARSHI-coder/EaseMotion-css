# CSS Glitch Text Effect

A cyberpunk-style glitch text effect using CSS `clip-path` and layered pseudo-elements — pure CSS, no JavaScript.

## 🚀 Demo
Open `demo.html` in your browser.

## ✨ Features
- Layered RGB-split glitch using `::before`/`::after` and `clip-path`
- No JavaScript dependencies
- Works on any text element via `data-text` attribute
- Fully CSS-animated

## 📁 Files
- `demo.html` — Demo page showing the effect
- `style.css` — Glitch text styles and animation
- `README.md` — This file

## 🛠️ Usage
```html
<h1 class="glitch-text" data-text="Your Text Here">Your Text Here</h1>
```
> Note: `data-text` must match the visible text — it's used by the pseudo-elements for the glitch layers.

## 👤 Author
Contributed by [aaniya22](https://github.com/aaniya22) as part of GSSoC.