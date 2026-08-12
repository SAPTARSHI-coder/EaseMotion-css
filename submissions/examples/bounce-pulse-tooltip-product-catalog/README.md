# CSS Bounce-Pulse Tooltip for Product Catalog Layouts

A modern, lightweight, and fully responsive **Bounce-Pulse Tooltip** built using **pure HTML and CSS** for product catalog layouts. The tooltip smoothly appears with a bounce entrance animation followed by a subtle pulse effect, making product offers, discounts, or additional information more engaging.

This example is designed for the **EaseMotion CSS** showcase and follows the project's standards for accessibility, responsiveness, and performance.

---

## ✨ Features

- 🎯 Pure HTML5 & CSS3 (No JavaScript)
- 🎈 Bounce entrance animation
- 💓 Continuous pulse animation
- 📱 Fully responsive design
- ♿ Keyboard accessible (`:focus-visible`)
- 🌙 Compatible with light and dark themes
- ⚡ Smooth, hardware-accelerated animations
- 🎨 Easily customizable using CSS variables
- 🛑 Supports `prefers-reduced-motion`
- 🚀 Lightweight and easy to integrate

---

## 📂 Folder Structure

```
bounce-pulse-tooltip-product-catalog/
│── demo.html
│── style.css
└── README.md
```

---

## 🚀 Usage

1. Copy the `style.css` file into your project.
2. Include the stylesheet in your HTML.

```html
<link rel="stylesheet" href="style.css">
```

3. Use the tooltip markup inside your product card.

```html
<div class="product-card">
    <img src="product.jpg" alt="Wireless Headphones">

    <div class="product-info">
        <h3>Wireless Headphones</h3>
        <p>$79.99</p>

        <button class="tooltip-trigger">
            View Offer

            <span class="bounce-tooltip">
                🎉 20% OFF Today!
            </span>
        </button>
    </div>
</div>
```

---

## 🎨 CSS Custom Properties

The component is fully customizable using CSS variables.

```css
:root{
    --tooltip-bg:#222;
    --tooltip-color:#fff;
    --tooltip-radius:12px;
    --tooltip-padding:12px 16px;
    --tooltip-shadow:0 12px 30px rgba(0,0,0,.2);
    --tooltip-duration:.45s;
    --tooltip-pulse-duration:1.6s;
}
```

You can easily modify these values to match your project's design.

---

## 📱 Responsive Design

The component is designed to work seamlessly on:

- Desktop
- Laptop
- Tablet
- Mobile devices

The tooltip automatically adjusts its size and spacing for smaller screens.

---

## ♿ Accessibility

Accessibility features include:

- Keyboard navigation support
- Visible focus state using `:focus-visible`
- High contrast tooltip text
- Semantic HTML structure
- Support for users who prefer reduced motion

Example:

```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation: none !important;
        transition: none !important;
    }
}
```

---

## 🎞️ Animations

### Bounce Entrance

The tooltip enters with a smooth bounce effect for better visual feedback.

### Pulse Effect

After appearing, the tooltip gently pulses to draw attention without being distracting.

Both animations are implemented entirely using CSS keyframes.

---

## ⚙️ Customization

You can customize:

- Tooltip background color
- Text color
- Border radius
- Animation duration
- Pulse speed
- Shadow intensity
- Font size
- Width
- Position
- Arrow size

No JavaScript modifications are required.

---

## 🌟 Browser Support

Compatible with all modern browsers including:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari
- Opera

---

## 📌 Use Cases

Perfect for displaying:

- Product discounts
- Sale badges
- Coupon information
- Shipping details
- Product specifications
- Limited-time offers
- New arrivals
- Stock information

---

## 📖 Technologies Used

- HTML5
- CSS3
- CSS Variables
- CSS Keyframe Animations
- Flexbox

---

## 🤝 Contribution

This component has been created as part of the **EaseMotion CSS** component showcase and follows the project's contribution guidelines.

Feel free to customize and extend it for your own projects.

---

## 📄 License

This project follows the same license as the **EaseMotion CSS** repository.