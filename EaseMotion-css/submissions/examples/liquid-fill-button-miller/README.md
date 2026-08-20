# Liquid Fill Button Hover Effect

A modern button animation where a liquid-like wave rises from the bottom
and fills the button background on hover, with a smooth fluid transition
that keeps text readable throughout.

## Files
- `demo.html` - Demo with 3 color variants
- `style.css` - Component styles
- `README.md` - This file

## Usage

```html
<button class="ease-liquid-btn">Explore</button>

<!-- Color variants -->
<button class="ease-liquid-btn ease-liquid-btn--alt">Get Started</button>
<button class="ease-liquid-btn ease-liquid-btn--outline">Learn More</button>
```

## How it works

- The button starts as an outlined, transparent button with colored text.
- A pseudo-element (`::before`) sits behind the text, initially pushed
  fully below the button via `translateY(100%)`.
- On `:hover`, the pseudo-element slides up to `translateY(0%)`, filling
  the button with a gradient "liquid" color.
- The pseudo-element's top edge uses an elliptical `border-radius` that
  flattens on hover, giving the rising fill a wave-like curve.
- Text color transitions to a dark shade for contrast against the filled
  background.

## Features
- Pure CSS, no JavaScript
- Lightweight — single pseudo-element per button
- Three ready-made color variants (blue, pink, green)
- Reusable on landing pages, portfolios, dashboards, and CTAs
- Smooth `cubic-bezier` easing for a natural liquid feel
