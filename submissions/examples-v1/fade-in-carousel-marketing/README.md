# Marketing Landing Page Fade-In Carousel

A lightweight, interaction-optimized pure CSS carousel component created for the **EaseMotion CSS** library catalog. Tailored specifically for modern SaaS marketing pages, customer testimonial showcases, and product feature highlights.

## Features & Architecture

- **Zero JavaScript Overhead:** Driven natively using hidden state radio inputs (`:checked`) and general sibling selectors (`~`).
- **Smooth Crossfade Physics:** Combines an opacity transition with a hardware-accelerated micro vertical displacement (`translateY`) for fluid presentation.
- **Bi-Directional Pure CSS Steppers:** Includes contextual arrow steppers that dynamically route back and forth between slides without JavaScript state machines.
- **Fully Accessible:** Includes keyboard navigation hooks (`space`/`enter` handlers) and responsive layout collapsing for smaller screens.

## Directory Mapping
```text
fade-in-carousel-marketing/
├── demo.html   # Main card wrapper housing testimonial content and controls
├── style.css   # Custom CSS parameters, fade-in keyframes, and layout rules
└── README.md   # Component blueprint