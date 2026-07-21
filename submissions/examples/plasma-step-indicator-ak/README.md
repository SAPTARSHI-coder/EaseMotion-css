# Plasma Step Indicator

A responsive plasma-inspired step indicator with a glowing animated active step built using pure HTML and CSS.

## Features

- Pure HTML and CSS (No JavaScript)
- Animated plasma glow effect
- Soft neon aura
- Responsive and accessible
- Lightweight and reusable

## Files

```text
plasma-step-indicator-ak/
├── demo.html
├── style.css
└── README.md
```

## Usage

```html
<div class="step-indicator" aria-label="Progress Indicator">

    <div class="step active" aria-current="step">
        <span>1</span>
    </div>

    <div class="line active-line" aria-hidden="true"></div>

    <div class="step">
        <span>2</span>
    </div>

    <div class="line" aria-hidden="true"></div>

    <div class="step">
        <span>3</span>
    </div>

    <div class="line" aria-hidden="true"></div>

    <div class="step">
        <span>4</span>
    </div>

</div>
```

The appearance, colors, and animation can be customized by modifying the CSS properties in `style.css`.

## Preview

Displays a retro-inspired plasma step indicator with a glowing animated active step and highlighted connector.

## Why is it useful?

This lightweight, dependency-free component provides a visually engaging progress indicator while following EaseMotion CSS's simple, reusable, animation-first philosophy.