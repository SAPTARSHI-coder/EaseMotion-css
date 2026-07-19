# Glow Border Button Animation

## Overview

A reusable button animation featuring an animated glowing border created entirely with CSS.

## Features

- Pure CSS
- Animated glow border
- Responsive layout
- Multiple button sizes
- Multiple color variants
- Reduced motion support
- No JavaScript

## Usage

```html
<button class="glow-btn">
  Get Started
</button>
```

### Large Button

```html
<button class="glow-btn glow-large">
  Download Now
</button>
```

### Blue Variant

```html
<button class="glow-btn glow-blue">
  Learn More
</button>
```

### Orange Variant

```html
<button class="glow-btn glow-orange">
  Subscribe
</button>
```

## Accessibility

A reduced-motion fallback is included using:

```css
@media (prefers-reduced-motion: reduce)
```

This disables the animated border for users who prefer less motion.

## Why it fits EaseMotion CSS

This component follows the EaseMotion CSS philosophy by providing a reusable animation-focused UI effect that remains lightweight, accessible, customizable, and JavaScript-free.