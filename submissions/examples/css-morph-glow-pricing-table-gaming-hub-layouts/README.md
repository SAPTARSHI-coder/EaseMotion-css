# CSS Morph-Glow Pricing Table for Gaming Hub Layouts

A futuristic gaming pricing table featuring animated glow morphing effects and interactive pricing cards built completely with HTML and CSS.

This component is created for the EaseMotion CSS animation showcase collection.

---

## ✨ Features

- 🎮 Gaming Hub themed pricing cards
- 🌈 Morphing glow animation
- ✨ Animated gradient effects
- 🖱️ Smooth hover interactions
- ⚡ Pure CSS keyframe animations
- 📱 Responsive pricing layout
- ♿ prefers-reduced-motion support
- 🚫 No JavaScript required

---

## 📂 Folder Structure


css-morph-glow-pricing-table-gaming-hub-layouts/

├── demo.html
├── style.css
└── README.md


---

## 🚀 Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">

Open demo.html in any modern browser.

No external libraries or frameworks are required.

🎨 CSS Custom Properties

Customize the design using CSS variables:

:root {

    --bg:#050816;
    --card:#111827;
    --primary:#38bdf8;
    --secondary:#a855f7;
    --accent:#22c55e;
    --text:#ffffff;
    --muted:#94a3b8;

}
Variables
Variable	Description
--bg	Page background
--card	Pricing card background
--primary	Main highlight color
--secondary	Gradient accent color
--accent	Badge color
--text	Primary text
--muted	Secondary text
⚡ Animation Details

The glow element uses morph animation:

@keyframes morphGlow {

    from {
        transform:scale(1);
        border-radius:50%;
    }

    to {
        transform:scale(1.4);
        border-radius:40% 60% 55% 45%;
    }

}

Pricing cards include hover elevation:

.pricing-card:hover {

    transform:translateY(-15px);

}
📱 Responsive Support

The layout adapts across devices:

Desktop → Three pricing columns
Tablet → Flexible layout
Mobile → Single column cards
♿ Accessibility

Reduced motion support is included:

@media(prefers-reduced-motion:reduce)

Animations are minimized for users who prefer reduced motion.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Grid
CSS Animations
CSS Transforms
CSS Transitions
📜 License

Open-source contribution for EaseMotion CSS.

Created as part of GSSoC-26.