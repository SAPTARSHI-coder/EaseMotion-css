# CSS Bounce-Pulse Accordion for SaaS Showcase

A modern, lightweight, pure CSS/HTML accordion component designed specifically for SaaS platforms. It features a unique "bounce-pulse" animation when toggling open, creating a premium feel without the need for JavaScript.

## 🚀 Features

- **Pure CSS / HTML**: Zero JavaScript dependency.
- **Smooth Animations**: Utilizes CSS transitions and keyframe animations (`pulse-bounce`).
- **Responsive**: Fully adapts to desktop, tablet, and mobile devices.
- **Accessible**: Supports `prefers-reduced-motion` for a more comfortable user experience.
- **SaaS Focused**: Elegant dark mode design with sleek typography and subtle interactions.

## 📂 File Structure

- `demo.html` - The HTML structure demonstrating the accordion.
- `style.css` - The styles and animations for the accordion.
- `README.md` - Documentation for the component.

## 🎨 Usage

1. Open `demo.html` in your browser.
2. Click on any of the accordion headers (Features & Capabilities, Pricing & Plans, Security & Compliance) to observe the bounce-pulse effect.
3. The content slides smoothly into view while the icon animates and pulses.

## 🛠 Customization

You can easily modify the look and feel by tweaking the CSS Custom Properties (Variables) defined in `:root`:

```css
:root {
  --primary-color: #6366f1; /* Adjust to match your brand */
  --bg-color: #0f172a;      /* Page background */
  --card-bg: #1e293b;       /* Accordion item background */
  --text-main: #f8fafc;     /* Primary text color */
  --text-muted: #94a3b8;    /* Secondary text color */
  --border-radius: 12px;    /* Rounded corners */
  --transition-speed: 0.4s; /* Animation speed */
}
```

## 🏷️ Difficulty Level
Easy
