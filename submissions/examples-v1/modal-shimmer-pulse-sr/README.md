# Shimmer Pulse Pricing Modal (SR)

A modern **Pure CSS** animated modal featuring a smooth shimmer sweep and pulse transition. The component is designed with a premium SaaS pricing interface aesthetic and requires **no JavaScript**.

---

## ✨ Features

- Pure HTML & CSS (No JavaScript)
- CSS-only modal using the checkbox technique
- Smooth shimmer sweep animation
- Pulse scale entrance animation
- Glassmorphism design
- SaaS pricing card layout
- Responsive on desktop, tablet, and mobile
- Keyboard accessible
- CSS Custom Properties for easy customization
- Modern hover and focus interactions
- Self-contained demo

---

## 📁 Files

```text
modal-shimmer-pulse-sr/
├── demo.html
├── style.css
└── README.md
```

---

## 🚀 Usage

Open `demo.html` directly in your browser.

The modal is opened using the **View Pricing** button and closed using either:

- Close (✕) button
- Cancel button
- Clicking the overlay

No JavaScript is required.

---

## 🎨 CSS Custom Properties

The component exposes several CSS variables for easy customization.

| Variable | Description |
|----------|-------------|
| `--modal-width` | Maximum modal width |
| `--radius` | Border radius |
| `--duration` | Animation duration |
| `--ease` | Animation timing function |
| `--pulse-scale` | Pulse animation scale |
| `--bg` | Background color |
| `--surface` | Modal background |
| `--primary` | Primary gradient color |
| `--secondary` | Secondary gradient color |
| `--shadow` | Modal shadow |

Example:

```css
:root{
    --duration:.6s;
    --pulse-scale:1.03;
    --primary:#6d7dff;
}
```

---

## ♿ Accessibility

The component includes accessibility improvements such as:

- `role="dialog"`
- `aria-modal="true"`
- `aria-labelledby`
- `aria-describedby`
- Keyboard focus support
- Visible focus styles using `:focus-visible`

---

## 📱 Responsive

Optimized for:

- Desktop
- Tablet
- Mobile

The modal automatically adjusts its width, spacing, typography, and button layout for smaller screens.

---

## 🌐 Browser Support

Works in all modern browsers including:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

---

## 📄 License

This submission is provided for the EaseMotion CSS examples library and follows the repository contribution guidelines.