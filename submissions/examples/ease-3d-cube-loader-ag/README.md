# CSS 3D Cube Loader

A pure CSS 3D spinning cube loader — no JavaScript required.

## 🚀 Demo

Open `demo.html` in your browser to see it in action.

## ✨ Features

- Built entirely with CSS `perspective` and `transform-style: preserve-3d`
- Smooth infinite rotation animation
- Six independently styled cube faces
- No JavaScript dependencies
- Easy to customize via the `--size` CSS variable

## 📁 Files

- `demo.html` — Demo page showing the loader
- `style.css` — Cube loader styles and animation
- `README.md` — This file

## 🛠️ Usage

1. Copy `style.css` into your project.
2. Add the following markup wherever you want the loader:

```html
<div class="cube-loader">
  <div class="cube">
    <div class="cube__face cube__face--front"></div>
    <div class="cube__face cube__face--back"></div>
    <div class="cube__face cube__face--right"></div>
    <div class="cube__face cube__face--left"></div>
    <div class="cube__face cube__face--top"></div>
    <div class="cube__face cube__face--bottom"></div>
  </div>
</div>
```

3. Adjust size by overriding `--size` on `.cube-loader`.

## 🎨 Customization

| Variable | Default | Description |
|----------|---------|--------------|
| `--size` | `60px` | Width/height of the cube |

## 👤 Author

Contributed by [aaniya22](https://github.com/aaniya22) as part of GSSoC.