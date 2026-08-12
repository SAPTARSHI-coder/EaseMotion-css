# Absolute Zero Hero Header

## What does this do?

Absolute Zero is a futuristic, responsive hero header built with pure HTML and CSS. It combines fluid typography, glassmorphism, gradient text, CSS masking, floating animations, background grids, and subtle micro-interactions to create a smooth zero-gravity visual effect.

## How is it used?

Place the three files in the same directory:

```text
submissions/
└── examples/
    └── absolute-zero-hero-tk/
        ├── demo.html
        ├── style.css
        └── README.md
```

Open `demo.html` directly in a browser.

The main hero structure can be reused with:

```html
<main class="hero">
    <div class="hero-grid"></div>

    <div class="orb orb-one"></div>
    <div class="orb orb-two"></div>
    <div class="orb orb-three"></div>

    <section class="hero-content">
        <div class="glass-card">
            <span class="eyebrow">EASEMOTION CSS</span>

            <h1>
                ABSOLUTE
                <span>ZERO</span>
            </h1>

            <p class="hero-description">
                Your hero description goes here.
            </p>

            <div class="hero-actions">
                <a href="#" class="hero-button primary">
                    Primary Action
                </a>

                <a href="#" class="hero-button secondary">
                    Secondary Action
                </a>
            </div>
        </div>
    </section>
</main>
```

## Why is it useful?

Hero sections are often the first visual element users see. This component provides a reusable starting point for landing pages, portfolios, product pages, creative websites, and other interfaces that need a strong visual introduction.

It demonstrates how CSS alone can create depth and motion through:

* Fluid responsive typography
* Glassmorphism layers
* Gradient text effects
* Floating CSS keyframe animations
* Background grid effects
* Masked visual transitions
* Hover micro-interactions
* Responsive layouts
* Reduced-motion accessibility support

The implementation has no external libraries, frameworks, CDNs, or JavaScript dependencies.
