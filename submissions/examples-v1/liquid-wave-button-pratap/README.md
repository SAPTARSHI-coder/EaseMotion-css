# Animated Liquid Wave Progress Button (`ease-btn-wave-pratap`)

## What does this do?

A premium, animation-first progress button component designed to show a visually engaging loading/processing state. When activated, the button fills up from bottom to top with a smooth, undulating 3D wave of liquid color.

---

## Why is this useful for EaseMotion CSS?

Traditional loading spinners are functional but generic. A liquid wave loading button provides a beautiful, responsive micro-interaction that matches the premium, modern aesthetic of EaseMotion CSS, making interfaces feel alive and dynamic.

---

## How to use it?

### HTML Structure

```html
<button class="ease-btn-wave-pratap" style="--wave-progress: 45%;">
  <span class="ease-btn-wave-text-pratap">Uploading (45%)</span>
  <div class="ease-btn-wave-liquid-container-pratap">
    <div class="ease-btn-wave-liquid-pratap"></div>
  </div>
</button>
```

### CSS Variables

You can customize the wave color theme by overriding the following CSS variables inside your stylesheet or `:root`:

```css
:root {
  --ease-btn-wave-primary: #6c63ff;
  --ease-btn-wave-secondary: #00f2fe;
  --ease-btn-wave-bg-dark: #0f172a;
}
```

### Javascript Integration

You can dynamically update the progress of the wave using a simple line of Javascript that updates the `--wave-progress` custom property:

```js
const btn = document.querySelector(".ease-btn-wave-pratap");
btn.style.setProperty("--wave-progress", "75%");
```
