# Crystallize Slider

A premium banking-inspired slider component built with pure CSS, featuring a crystal glass aesthetic, layered reflections, and smooth EaseMotion-powered animations.

Designed for fintech dashboards, banking landing pages, SaaS products, and modern product showcases.

---

## Features

- 💎 Crystal glass UI design
- ✨ Layered reflection effects
- 🔄 Pure CSS automatic slider transitions
- ⚡ Uses EaseMotion CSS animation utilities
- 🌌 Premium banking-inspired visual style
- 📱 Fully responsive layout
- ♿ Reduced-motion accessibility support
- 🚀 Zero JavaScript dependency
- 🎨 Customizable through CSS variables

---

## Preview

The slider contains three animated crystal cards:

1. **Digital Banking**
   - Secure payments
   - Modern financial experience

2. **Wealth Growth**
   - Investment tracking
   - Portfolio insights

3. **Smart Finance**
   - AI-powered money management

Each card smoothly appears using CSS animation without requiring JavaScript.

---

## Folder Structure

```
crystallize-slider-amna/
│
├── demo.html
├── style.css
└── README.md
```

---

## Usage

Include EaseMotion CSS:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/SAPTARSHI-coder/EaseMotion-css@main/easemotion.min.css"
/>
```

Include the component stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Use the slider markup from `demo.html`.

---

## EaseMotion Classes Used

This component uses existing EaseMotion utilities:

| Class | Purpose |
|------|---------|
| `ease-fade-in` | Initial component reveal |
| `ease-slide-up` | Card content animation |
| `ease-hover-grow` | Interactive button hover |
| `ease-btn` | Button styling |

---

## Animation Details

The slider is implemented completely with CSS animations.

Features include:

- Automatic card transitions
- Smooth opacity changes
- Scale-based depth effect
- Floating crystal background shapes
- Animated indicator states

No JavaScript or external dependencies are required.

---

## Customization

### Change Slider Speed

Update the animation duration:

```css
.crystal-card {
  animation: crystal-slide 15s infinite;
}
```

Example:

```css
.crystal-card {
  animation: crystal-slide 20s infinite;
}
```

---

### Customize Crystal Appearance

Modify CSS variables:

```css
:root {
  --crystal-bg: rgba(255,255,255,0.08);
  --crystal-border: rgba(255,255,255,0.22);
  --crystal-shadow: 0 30px 80px rgba(0,0,0,.45);
}
```

---

### Adjust Slider Dimensions

```css
:root {
  --slider-width: min(90vw, 900px);
  --slider-height: 540px;
}
```

---

## Accessibility

- Uses semantic HTML structure
- Includes accessible slider indicators
- Supports `prefers-reduced-motion`
- Maintains readable text contrast
- Works without keyboard-dependent interactions

---

## Browser Support

Supported on modern browsers with:

- CSS Variables
- CSS Animations
- Flexbox
- Backdrop Filter

Internet Explorer is not supported.

---

## Credits

Created as a contribution to:

**EaseMotion CSS**

An animation-first CSS framework for expressive and reusable UI components.