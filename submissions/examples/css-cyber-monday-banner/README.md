# CSS Cyber Monday Banner

A cyberpunk-inspired promotional banner featuring a CSS glitch effect, animated background grid, scanline effect, and a visual countdown display.

## Features

- Pure HTML and CSS
- No JavaScript required
- Glitch-style heading animation
- Animated cyber grid background
- Scanline effect
- Responsive layout
- Accessible CTA and semantic structure
- Keyboard-visible focus state
- `prefers-reduced-motion` support
- CSS custom properties for customization

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Then use the banner structure:

```html
<section class="cyber-banner" aria-labelledby="cyber-title">
  <div class="cyber-banner__content">
    <p class="cyber-banner__eyebrow">LIMITED TIME OFFER</p>

    <h1
      id="cyber-title"
      class="cyber-banner__title"
      data-text="CYBER MONDAY"
    >
      CYBER MONDAY
    </h1>

    <a class="cyber-banner__cta" href="#deals">
      <span>EXPLORE DEALS</span>
      <span aria-hidden="true">→</span>
    </a>
  </div>
</section>
```

## Countdown

The demo uses a static visual countdown:

```html
<div class="countdown">
  <div class="countdown__unit">
    <span class="countdown__value">02</span>
    <span class="countdown__label">DAYS</span>
  </div>
</div>
```

A real countdown requires JavaScript or another runtime mechanism. This implementation intentionally keeps the component CSS-only to satisfy the feature requirements.

## Customization

Theme colors can be changed using CSS custom properties:

```css
:root {
  --cyan: #00f0ff;
  --pink: #ff2bd6;
  --purple: #8b5cf6;
  --banner-bg: #0b1024;
}
```

Animation durations and effects can also be adjusted directly in `style.css`.

## Accessibility

The component uses:

- Semantic heading structure
- Descriptive `aria-label` for the countdown
- Keyboard-visible focus styles
- Decorative effects marked with `aria-hidden`
- Reduced-motion support

## Why it fits EaseMotion CSS

This submission demonstrates several reusable CSS motion techniques in a single promotional UI pattern, including glitch text, animated backgrounds, scanlines, blinking indicators, transitions, and responsive styling.

It remains dependency-free and requires no JavaScript.