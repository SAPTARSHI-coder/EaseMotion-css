# CSS Fade-In Stepper for Gaming Hub Layouts

A lightweight, pure CSS vertical stepper component with sequential fade-in animations, designed for gaming interfaces.

## 🚀 Features

- **Pure CSS/HTML:** No JavaScript required.
- **Sequential Animation:** Uses CSS variables (`--delay`) to orchestrate a cascading fade-in effect.
- **Gaming Aesthetic:** Dark mode by default with neon/glow accents.
- **Accessible:** Includes `prefers-reduced-motion` support to disable animations for users who prefer it.
- **Responsive:** Flexbox layout adapts seamlessly to mobile and desktop screens.

## 📂 Files Included

- `demo.html` - The showcase layout structure.
- `style.css` - Core styles and keyframe animations.

## 🛠️ Usage

1. Open `demo.html` in any modern browser.
2. The elements will sequentially fade in upon page load.
3. To adjust the animation timing, modify the `--delay` inline style on the `.fade-in-step` elements, or update `--animation-duration` in the CSS `:root`.

## 🎨 Customization (CSS Variables)

```css
:root {
  --bg-color: #0f172a;        /* Page background */
  --card-bg: #1e293b;         /* Stepper container background */
  --accent-color: #8b5cf6;    /* Active step color */
  --step-line: #334155;       /* Connecting line color */
}
```
