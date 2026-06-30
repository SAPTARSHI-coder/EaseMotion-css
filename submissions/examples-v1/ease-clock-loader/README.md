# ⏰ Ease Clock Loader

A sleek, analog-inspired loading animation built entirely with HTML and CSS. **Ease Clock Loader** mimics the motion of a real clock with continuously rotating hour and minute hands and a ticking second hand using CSS animations—no JavaScript required.

Designed for dashboards, productivity apps, scheduling interfaces, waiting states, and modern UI systems.

---

## ✨ Features

- 🎯 Pure HTML & CSS
- ⚙️ No JavaScript or dependencies
- 🕒 Smooth rotating hour and minute hands
- ⏱️ Realistic ticking second hand using `steps(60)`
- 🎨 Multiple built-in themes
- 📏 Five responsive size variants
- 🚀 Turbo and paused animation states
- 🎛️ Easily customizable with CSS variables
- 📱 Responsive and lightweight

---

## 📂 Project Structure

```text
ease-clock-loader/
├── demo.html
├── style.css
└── README.md
```

---

# Preview

The demo showcases:

- Multiple color themes
- Responsive size variants
- Turbo processing mode
- Paused state
- Real-world loading examples
- Overlay compatibility
- CSS customization

---

# Installation

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css" />
```

Add the loader markup:

```html
<div class="ease-clock ease-clock--md ease-clock--slate">
  <div class="ease-clock__face"></div>

  <div class="ease-clock__hand ease-clock__hand--hour"></div>
  <div class="ease-clock__hand ease-clock__hand--minute"></div>
  <div class="ease-clock__hand ease-clock__hand--second"></div>

  <div class="ease-clock__center"></div>
</div>
```

---

# Built-in Themes

Choose from several predefined themes simply by adding a modifier class.

| Theme    | Class                  |
| -------- | ---------------------- |
| Default  | _(no modifier)_        |
| Slate    | `ease-clock--slate`    |
| Cream    | `ease-clock--cream`    |
| Steel    | `ease-clock--steel`    |
| Midnight | `ease-clock--midnight` |

Example:

```html
<div class="ease-clock ease-clock--md ease-clock--midnight"></div>
```

---

# Size Variants

Scale the loader using predefined size classes.

| Size        | Class            | Diameter |
| ----------- | ---------------- | -------- |
| Extra Small | `ease-clock--xs` | 32px     |
| Small       | `ease-clock--sm` | 48px     |
| Medium      | `ease-clock--md` | 64px     |
| Large       | `ease-clock--lg` | 96px     |
| Extra Large | `ease-clock--xl` | 140px    |

---

# Animation States

### Turbo Mode

Accelerates the loader for active processing.

```html
<div class="ease-clock ease-clock--turbo"></div>
```

Ideal for:

- File processing
- Payments
- AI generation
- Data analysis

---

### Paused State

Freezes the clock animation.

```html
<div class="ease-clock ease-clock--paused"></div>
```

Useful for:

- Disabled interfaces
- Completed actions
- Suspended processes

---

# CSS Customization

Override the default design using CSS custom properties.

```css
.my-clock {
  --clock-size: 80px;

  --clock-face: #faf6ef;

  --clock-hand-hour: #1e293b;
  --clock-hand-minute: #334155;
  --clock-hand-second: #e74c5e;

  --clock-dur-hour: 60s;
  --clock-dur-minute: 20s;
  --clock-dur-second: 10s;
}
```

---

# How It Works

The loader consists of:

- A circular clock face
- An hour hand
- A minute hand
- A ticking second hand
- A centered pivot

The animation relies entirely on CSS:

- `transform: rotate()`
- `@keyframes`
- `steps(60)` for realistic ticking
- CSS variables for customization

No JavaScript is used.

---

# Example Use Cases

Ease Clock Loader works well for:

- 📅 Calendar applications
- 📊 Dashboards
- ⏳ Waiting states
- 💳 Payment processing
- 📈 Report generation
- 🤖 AI processing
- 🗂️ Task scheduling
- ⚙️ Background jobs

---

# Browser Support

Supported in all modern browsers that implement:

- CSS Variables
- CSS Animations
- CSS Transforms
- CSS `steps()` timing function

---

# Customization Tips

Combine modifiers for different appearances:

```html
<!-- Small midnight clock -->
<div class="ease-clock ease-clock--sm ease-clock--midnight"></div>

<!-- Large cream theme -->
<div class="ease-clock ease-clock--lg ease-clock--cream"></div>

<!-- Turbo processing -->
<div
  class="ease-clock ease-clock--md ease-clock--steel ease-clock--turbo"
></div>

<!-- Paused state -->
<div class="ease-clock ease-clock--md ease-clock--paused"></div>
```

---

# Why Ease Clock Loader?

Unlike traditional spinning loaders, Ease Clock Loader provides a familiar, time-inspired animation that communicates waiting in a subtle, elegant way. Its analog clock aesthetic makes it particularly suitable for productivity tools, scheduling interfaces, and professional dashboards while remaining lightweight and fully customizable.

---

## 📄 License

This component is part of the **EaseMotion** collection and follows the license of the parent repository.
