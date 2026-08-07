# CSS Blur-Entrance Progress Bar for Gaming Hub Layouts

A modern gaming dashboard progress component featuring smooth blur entrance animations and animated progress indicators using pure HTML and CSS.

This component is created for the EaseMotion CSS animation showcase collection.

---

## ✨ Features

- 🎮 Gaming Hub themed progress dashboard
- 🌫️ Smooth blur entrance animation
- 📊 Animated progress bars
- ⚡ Pure CSS keyframe animations
- 🎨 Gradient progress indicators
- 📱 Fully responsive layout
- ♿ prefers-reduced-motion support
- 🚫 No JavaScript required

---

## 📂 Folder Structure


css-blur-entrance-progress-bar-gaming-hub-layouts/

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

The component uses CSS variables for customization:

:root {

    --bg:#050816;
    --card:#111827;
    --primary:#38bdf8;
    --secondary:#a855f7;
    --text:#ffffff;
    --muted:#94a3b8;

}
Variables
Variable	Description
--bg	Page background
--card	Card background
--primary	Main accent color
--secondary	Gradient color
--text	Primary text
--muted	Secondary text
⚡ Animation Details

The progress cards use a blur entrance effect:

@keyframes blurEntrance {

    from {
        opacity:0;
        filter:blur(20px);
        transform:translateY(40px);
    }

    to {
        opacity:1;
        filter:blur(0);
        transform:translateY(0);
    }

}

The progress bars animate from zero width to their target value:

@keyframes progressLoad {

    from {
        width:0;
    }

}
📱 Responsive Support

The layout adapts automatically:

Desktop → Three-column progress cards
Tablet → Flexible layout
Mobile → Single-column layout
♿ Accessibility

Reduced motion support is included:

@media(prefers-reduced-motion:reduce)

Animations are minimized for users who prefer reduced motion.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Grid
CSS Keyframes
CSS Transitions
📜 License

Open-source contribution for EaseMotion CSS.

Created as part of GSSoC-26.