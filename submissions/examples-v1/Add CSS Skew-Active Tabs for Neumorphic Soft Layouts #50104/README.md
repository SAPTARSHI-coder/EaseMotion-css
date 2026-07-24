# CSS Skew-Active Tabs for Neumorphic Soft Layouts

A pure CSS animated Tabs component utilizing a unique "Skew-Active" entrance transition, tailored for modern "Neumorphic Soft" UI aesthetics.

## Features

- **Pure CSS logic**: Powered entirely by the HTML radio button hack, eliminating the need for JavaScript.
- **Skew-Active Entrance**: A dynamic and bouncy entrance animation that uses `skewX` and `translateX` to give a sweeping 3D-like transition into the frame.
- **Neumorphic Soft Styling**: Uses precise inset and outset `box-shadow` techniques on soft colored backgrounds to create depth, making elements appear raised or pressed into the surface.
- **Accessible**: Screen-reader friendly and keyboard-navigable thanks to `.sr-only` class keeping radio inputs focusable.
- **Highly Customizable**: Easily adjust timings, bounce effects, angles, and colors via CSS custom properties.

## Customization

You can control the animation and neumorphic style by modifying the variables at the root of `style.css`:

```css
:root {
  /* Skew-Active Entrance Animation Parameters */
  --skew-active-angle: -12deg;
  --skew-active-x-offset: 40px;
  --skew-active-duration: 0.65s;
  --skew-active-easing: cubic-bezier(0.34, 1.56, 0.64, 1); /* Bouncy out easing */
  
  /* Neumorphic Soft Palette */
  --neu-bg: #e0e5ec;
  --neu-accent: #667eea;
  ...
}
```

## How to use

Simply open `demo.html` in your web browser. Try clicking the tabs or using the `Tab` key and arrow keys to navigate.
