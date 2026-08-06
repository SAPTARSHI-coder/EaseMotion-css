# CSS Shimmer-Sweep Carousel for SaaS Showcase Layouts

A modern SaaS showcase carousel component featuring smooth shimmer-sweep hover animations, glassmorphism cards, responsive scrolling layout, and a pure CSS implementation.

Part of the EaseMotion CSS animation showcase collection.

---

## ✨ Features

- ✨ Shimmer-sweep hover animation
- 🌈 Glassmorphism SaaS cards
- 🚀 Smooth CSS transitions
- 📦 Horizontal carousel layout
- 💻 Pure HTML and CSS implementation
- 📱 Responsive across devices
- ♿ prefers-reduced-motion accessibility support
- ⚡ No JavaScript dependencies

---

## 📂 Folder Structure


css-shimmer-sweep-carousel-saas-showcase-v2/

├── demo.html
├── style.css
└── README.md


---

## 🚀 Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">

Open demo.html in any modern browser.

No JavaScript or external libraries are required.

🎨 CSS Custom Properties

Customize the component using CSS variables:

:root{

--bg:#050816;
--primary:#06b6d4;
--secondary:#8b5cf6;
--card:rgba(255,255,255,.08);
--text:#fff;

}
Variables
Variable	Description
--bg	Background color
--primary	Main accent color
--secondary	Gradient color
--card	Card glass effect
--text	Text color
✨ Animation Details

Cards use a shimmer sweep effect on hover.

Example:

.card:hover .shimmer{

animation:
shimmerMove .9s ease;

}

Animation includes:

Light sweep effect
Smooth hover transition
Card elevation effect
Slide-up entrance animation
📱 Responsive Support

The carousel supports:

Desktop
Tablet
Mobile devices

Cards automatically adjust using flexible sizing and horizontal scrolling.

♿ Accessibility

Reduced motion support is included:

@media(prefers-reduced-motion:reduce)

Animations are minimized for users who prefer reduced motion.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Animations
CSS Flexbox
Responsive Design
📜 License

Contributed to the EaseMotion CSS animation showcase collection.


