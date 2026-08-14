:root {
    --bg: #070711;
    --card: #121225;
    --primary: #00f5ff;
    --secondary: #b300ff;
    --accent: #ff00aa;
    --text: #ffffff;
    --muted: #b8b8c8;
    --radius: 24px;
}


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


body {
    min-height: 100vh;
    background:
        radial-gradient(circle at top, #20204d, var(--bg));
    font-family: "Segoe UI", sans-serif;
    color: var(--text);
}


/* Main Layout */

.catalog {
    width: min(1200px, 90%);
    margin: auto;
    padding: 70px 0;
}


.hero {
    text-align: center;
    margin-bottom: 50px;
}


.hero h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    background: linear-gradient(
        90deg,
        var(--primary),
        var(--secondary)
    );
    -webkit-background-clip: text;
    color: transparent;
}


.hero p {
    margin-top: 15px;
    color: var(--muted);
}



/* Product Grid */

.products {
    display: grid;
    grid-template-columns: repeat(
        auto-fit,
        minmax(260px, 1fr)
    );
    gap: 30px;
}



/* Product Card */

.product-card {

    position: relative;

    padding: 35px 25px;

    background:
        linear-gradient(
            145deg,
            rgba(255,255,255,0.08),
            rgba(255,255,255,0.02)
        );

    border-radius: var(--radius);

    overflow: hidden;

    border: 1px solid rgba(255,255,255,0.12);

    backdrop-filter: blur(15px);

    transition:
        transform .4s ease,
        box-shadow .4s ease;

}


.product-card::before {

    content: "";

    position: absolute;

    inset: -80px;

    background:
        conic-gradient(
            var(--primary),
            var(--secondary),
            var(--accent),
            var(--primary)
        );

    opacity: 0;

    filter: blur(50px);

    transition: .5s;

}



.product-card:hover::before {

    opacity: .45;

    animation: glowRotate 4s linear infinite;

}



.product-card:hover {

    transform:
        translateY(-12px)
        scale(1.03);

    box-shadow:
        0 25px 60px rgba(0,245,255,.25);

}



.product-card > * {

    position: relative;

    z-index: 2;

}



@keyframes glowRotate {

    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }

}



/* Icon */

.product-icon {

    width: 70px;
    height: 70px;

    display: grid;
    place-items: center;

    margin-bottom: 20px;

    font-size: 35px;

    border-radius: 50%;

    background:
        rgba(255,255,255,.1);

}



/* Text */

.product-card h2 {

    font-size: 1.5rem;

    margin-bottom: 12px;

}



.product-card p {

    color: var(--muted);

    line-height: 1.6;

}



/* Morph Glow Popover */

.popover {

    position: absolute;

    left: 20px;

    right: 20px;

    bottom: 20px;

    padding: 20px;


    background:
        rgba(10,10,30,.95);


    border-radius: 18px;


    transform:

        translateY(120%)

        scale(.7);


    opacity: 0;


    filter: blur(8px);


    transition:

        .5s cubic-bezier(.68,-0.55,.27,1.55);


    border:

        1px solid rgba(0,245,255,.4);

}



.product-card:hover .popover {


    transform:

        translateY(0)

        scale(1);


    opacity: 1;


    filter: blur(0);


    box-shadow:

        0 0 30px rgba(0,245,255,.35);

}



.popover h3 {

    margin-bottom: 12px;

    color: var(--primary);

}



.popover ul {

    list-style: none;

}



.popover li {

    padding: 6px 0;

    color: var(--muted);

}



/* Responsive */

@media(max-width:600px){

    .catalog{

        padding:40px 0;

    }


    .product-card{

        padding:25px 20px;

    }


    .popover{

        position: relative;

        left:auto;
        right:auto;
        bottom:auto;

        margin-top:25px;

        transform:none;

        opacity:1;

        filter:none;

    }

}



/* Reduced Motion */

@media(prefers-reduced-motion: reduce){

    *,
    *::before,
    *::after{

        animation:none !important;

        transition:none !important;

    }

}

morph-glow-popover-product-catalog/

├── demo.html
├── style.css
└── README.md


---

## 🚀 Usage

Add the folder inside:


submissions/examples/


Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">

The component works directly with HTML elements and CSS hover states.

Example:

<article class="product-card">

    <h2>Product Name</h2>

    <div class="popover">
        Product details
    </div>

</article>

The popover automatically appears when users hover over the product card.

🎨 CSS Custom Properties

The component uses CSS variables for easy customization.

:root {

    --bg: #070711;
    --card: #121225;
    --primary: #00f5ff;
    --secondary: #b300ff;
    --accent: #ff00aa;
    --text: #ffffff;
    --muted: #b8b8c8;
    --radius: 24px;

}
Variables
Variable	Description
--bg	Main background color
--card	Product card background
--primary	Main glow color
--secondary	Secondary gradient color
--accent	Highlight accent
--text	Text color
--muted	Secondary text color
--radius	Border radius
🎭 Animation Details
Morph Glow Effect

The card uses animated gradients with:

@keyframes glowRotate

Features:

Rotating glow layer
Soft blur effect
Dynamic color transition
Popover Animation

Popover uses:

transform
opacity
filter
transition

to create:

Scale transformation
Smooth upward movement
Blur-to-clear reveal
♿ Accessibility

Reduced motion support is included:

@media(prefers-reduced-motion: reduce)

When enabled:

Animations are disabled
Transitions are minimized
Content remains fully accessible
📱 Responsive Design

Optimized for:

Desktop
Tablet
Mobile devices

Mobile layouts automatically adjust the popover positioning for better usability.

🛠 Technologies Used
HTML5
CSS3
CSS Variables
CSS Grid
CSS Animations
CSS Transitions
Backdrop Filter
Browser Support

Compatible with modern browsers supporting:

CSS Variables
Flexbox/Grid
CSS Animations
Backdrop Filter
Author

Created for EaseMotion CSS
GSSoC 2026 Contribution 🚀