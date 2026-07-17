# EaseScroll — Scroll-Triggered Transitions

A lightweight, native scroll-triggered transition animation system for EaseMotion CSS.

## What is it?
This submission proposes a high-performance scroll animation system inspired by popular libraries (like AOS and GSAP ScrollTrigger). It pairs a single, highly optimized `IntersectionObserver` with CSS transition classes (`.ease-scroll-*`) that toggle on/off dynamically as elements enter or leave the viewport.

## How to use it?

### 1. Include Script & Styles
Load the script and stylesheet in your HTML:
```html
<link rel="stylesheet" href="style.css" />
<script src="scroll-trigger.js" defer></script>
```

### 2. Add Classes to Elements
Add `.ease-scroll` along with any transition variant:
```html
<div class="ease-scroll ease-scroll-fade-up">
  This fades and slides up when scrolled past!
</div>
```

### Available Transition Styles
- **Fades**: `ease-scroll-fade`, `ease-scroll-fade-up`, `ease-scroll-fade-down`, `ease-scroll-fade-left`, `ease-scroll-fade-right`
- **Slides**: `ease-scroll-slide-up`, `ease-scroll-slide-down`, `ease-scroll-slide-left`, `ease-scroll-slide-right`
- **Scales**: `ease-scroll-scale-in`, `ease-scroll-scale-out`
- **Others**: `ease-scroll-blur-in`, `ease-scroll-flip-up`, `ease-scroll-flip-down`, `ease-scroll-flip-left`, `ease-scroll-flip-right`

### Configuration Options
Customize parameters per-element using standard data attributes:
- `data-ease-scroll-duration`: Transition duration in milliseconds (e.g., `800` or `1200`).
- `data-ease-scroll-delay`: Transition delay in milliseconds (e.g., `200` or `300`).
- `data-ease-scroll-easing`: Custom easing function (e.g., `cubic-bezier(...)` or standard timing functions).
- `data-ease-scroll-threshold`: Visibility threshold from `0` to `1` (defaults to `0.15` - triggers when 15% is visible).
- `data-ease-scroll-once`: Set to `false` to repeat the animation every time the element scrolls into view (defaults to `true`).

```html
<div class="ease-scroll ease-scroll-scale-in" 
     data-ease-scroll-duration="800" 
     data-ease-scroll-delay="200" 
     data-ease-scroll-once="false"
     data-ease-scroll-threshold="0.3">
  Repeats animation on scroll back, with custom timing!
</div>
```

## Why it fits EaseMotion CSS
EaseMotion CSS is dedicated to providing high-quality, lightweight, zero-dependency, human-readable animation utilities. While scroll-driven CSS timeline animations exist in modern CSS, they follow scroll offsets strictly. This submission fills a crucial gap for scroll-triggered entrance transitions that feel alive, premium, and performant without full external libraries.
