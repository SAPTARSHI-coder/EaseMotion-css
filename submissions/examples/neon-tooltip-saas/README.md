# Neon Glow Tooltip

A pure CSS animated Tooltip featuring a smooth neon glow transition designed for modern SaaS interfaces. The component is lightweight, responsive, accessible, customizable through CSS variables, and requires **zero JavaScript**.

---

# ✨ Features

- 🎨 Pure CSS implementation
- ⚡ Zero JavaScript
- 🌈 Smooth neon glow animation
- 📱 Fully responsive
- ♿ Keyboard accessible
- 🎯 Hover and focus support
- 🎛️ Customizable using CSS variables
- 📦 Lightweight
- 🧩 Easy to integrate
- 🌙 Works with dark themes
- ☀️ Supports light themes with customization
- 💻 Modern SaaS aesthetic
- 🚀 Performance friendly
- 📐 Flexible positioning
- 🔧 Developer friendly
- 🎭 Elegant transitions

---

# Preview

The tooltip appears with a soft glowing animation whenever the trigger element is hovered or focused.

It smoothly fades in while slightly scaling upward, creating a polished interaction commonly seen in premium SaaS dashboards.

---

# Demo

> Add your live demo here

```
https://your-demo-link.com
```

---

# Installation

Clone the repository.

```bash
git clone https://github.com/yourusername/neon-tooltip.git
```

Move into the project.

```bash
cd neon-tooltip
```

Open the project.

```bash
index.html
```

No build tools are required.

---

# Project Structure

```
neon-tooltip/
│
├── index.html
├── style.css
├── README.md
└── assets/
```

---

# Usage

Import the stylesheet.

```html
<link rel="stylesheet" href="style.css">
```

Add a tooltip.

```html
<div class="tooltip">
    Hover me
    <span class="tooltip-content">
        Hello World
    </span>
</div>
```

That's it.

---

# How it Works

The tooltip remains hidden using opacity and transform.

When the parent receives either

- hover
- focus-visible

the tooltip transitions into view using CSS transitions.

No JavaScript listeners are needed.

---

# Accessibility

This component is designed with accessibility in mind.

Features include:

- Keyboard focus support
- Screen-reader friendly markup
- Focus-visible animations
- Responsive sizing
- High contrast compatibility
- Motion customization

---

# Responsive Design

The tooltip automatically adjusts based on available space.

It works on:

- Desktop
- Laptop
- Tablet
- Mobile

---

# CSS Custom Properties

Every important animation parameter can be customized.

```css
:root{

--tooltip-bg:#0f172a;

--tooltip-text:#ffffff;

--tooltip-radius:12px;

--tooltip-padding:12px;

--tooltip-scale:0.9;

--tooltip-duration:300ms;

--tooltip-easing:cubic-bezier(.22,1,.36,1);

--tooltip-glow:#00e5ff;

--tooltip-shadow:0 0 25px rgba(0,229,255,.45);

}
```

---

# Available Variables

| Variable | Description |
|-----------|-------------|
| --tooltip-bg | Background color |
| --tooltip-text | Text color |
| --tooltip-radius | Border radius |
| --tooltip-padding | Padding |
| --tooltip-duration | Animation duration |
| --tooltip-scale | Initial scale |
| --tooltip-easing | Transition easing |
| --tooltip-shadow | Glow shadow |
| --tooltip-glow | Neon glow color |

---

# Animation

The tooltip animation combines multiple effects.

- Opacity
- Scale
- Blur-free rendering
- Glow enhancement
- Soft elevation

The result is a clean premium interaction.

---

# Keyboard Support

Users can navigate using the keyboard.

Supported interaction:

```
Tab
```

```
Shift + Tab
```

The tooltip appears whenever the trigger receives focus.

---

# Browser Support

Tested on modern browsers.

- Chrome
- Edge
- Firefox
- Safari
- Brave
- Opera

---

# Performance

Because everything is CSS-only:

- No JavaScript execution
- Minimal layout shifts
- GPU-friendly transforms
- Lightweight rendering

---

# Customization

Change the glow color.

```css
--tooltip-glow:#7c3aed;
```

Increase animation speed.

```css
--tooltip-duration:180ms;
```

Create slower animations.

```css
--tooltip-duration:500ms;
```

Change easing.

```css
--tooltip-easing:ease-in-out;
```

Increase scale.

```css
--tooltip-scale:.85;
```

---

# Example Theme

```css
:root{

--tooltip-bg:#111827;

--tooltip-text:#f9fafb;

--tooltip-glow:#22d3ee;

}
```

---

# Best Practices

- Keep tooltip text concise.
- Avoid placing large content inside.
- Ensure sufficient color contrast.
- Use meaningful labels.
- Keep transitions subtle.

---

# Use Cases

Ideal for:

- SaaS dashboards
- Admin panels
- Analytics tools
- Landing pages
- Documentation websites
- Design systems
- UI libraries
- Component showcases
- Portfolio websites

---

# Why Pure CSS?

Using CSS-only interactions offers several benefits.

- Smaller bundle size
- Better performance
- Easier maintenance
- No dependencies
- Improved compatibility

---

# Contributing

Contributions are welcome.

You can help by:

- Improving animations
- Reporting bugs
- Fixing issues
- Improving accessibility
- Enhancing documentation
- Suggesting new features

Please open an issue before submitting large changes.

---

# Roadmap

- [ ] Multiple placement support
- [ ] Auto dark/light themes
- [ ] Glass morphism version
- [ ] More glow presets
- [ ] Reduced motion optimization
- [ ] Animation presets
- [ ] RTL support
- [ ] Theme presets

---

# License

Distributed under the MIT License.

Feel free to use, modify, and distribute.

---

# Credits

Inspired by modern SaaS interfaces, glassmorphism trends, and contemporary UI animation principles.

---

# Built With

- HTML5
- CSS3
- CSS Variables
- Flexbox
- CSS Transforms
- CSS Transitions

---

# Author

Created for the EaseMotion Examples Library.

---

## ⭐ If you found this component useful, consider giving the project a star!