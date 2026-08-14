# Animated Pricing Cards Comparison

## Overview

Animated Pricing Cards Comparison is a responsive pricing section featuring multiple plans with smooth hover interactions, highlighted recommendations, animated feature lists, and engaging call-to-action buttons.

## Features

- Three pricing tiers
- Featured plan highlighting
- Hover lift animation
- Animated feature checklist
- Interactive CTA buttons
- Responsive design
- Modern SaaS-inspired styling
- Accessibility support
- Reduced motion compatibility

## Files

```text
u-animated-pricing-cards-comparison-16830/
├── demo.html
├── style.css
└── README.md
```

## Included Plans

### Basic
- 5 Projects
- Basic Analytics
- Community Support

### Pro
- Unlimited Projects
- Advanced Analytics
- Priority Support
- API Access

### Enterprise
- Unlimited Resources
- Dedicated Support
- Enterprise Security

## Customization

Change primary colors:

```css
:root{
  --primary:#6366f1;
  --secondary:#8b5cf6;
}
```

Modify hover elevation:

```css
.pricing-card:hover{
  transform:translateY(-12px);
}
```

## Accessibility

Supports:

```css
@media(prefers-reduced-motion:reduce)
```

to disable animations for users who prefer reduced motion.

## Browser Support

- Chrome
- Edge
- Firefox
- Safari

## Why It Fits EaseMotion CSS

This example demonstrates reusable animation patterns, hover interactions, micro-interactions, and responsive UI design while remaining easy to understand and customize.

## Issue Reference

Created for Issue #16830

Animated Pricing Cards Comparison.