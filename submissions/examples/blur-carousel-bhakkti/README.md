# Blur-Entrance Carousel - Fintech Dashboard

##  Description
A modern, responsive carousel with blur-entrance animations for fintech dashboards. Cards slide in from the right with a blur-to-clear effect, creating a polished, professional feel.

##  Features

-  **Blur-Entrance Animation** - Cards start blurred and clear on entrance
-  **Staggered Delays** - Each card animates with a slight delay
-  **Fully Responsive** - Adapts to all screen sizes
-  **Smooth Navigation** - Buttons, dots, keyboard, and swipe support
- ⏱ **Auto-Play** - Automatic sliding with pause on hover
-  **Accessible** - Full keyboard support + reduced motion
-  **Fintech Styling** - Dark theme with neon accents

##  CSS Custom Properties

| Variable | Default | Description |
|----------|---------|-------------|
| `--blur-start` | `8px` | Initial blur amount |
| `--blur-end` | `0px` | Final blur amount |
| `--animation-duration` | `0.6s` | Animation speed |
| `--animation-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing function |
| `--carousel-gap` | `24px` | Gap between cards |
| `--card-width` | `280px` | Card width |
| `--card-height` | `280px` | Card height |

##  Usage

### HTML Structure

<div class="blur-card" data-delay="0">
  <!-- Card content -->
</div>
### Staggered Delays

<div class="blur-card" data-delay="0">First</div>
<div class="blur-card" data-delay="100">Second</div>
<div class="blur-card" data-delay="200">Third</div>
###  File Structure

blur-carousel-bhakkti/
├── demo.html     # Full dashboard demo
├── style.css     # All styles + animations
├── script.js     # Carousel logic
└── README.md     # Documentation
### Related Issue
Closes #59212

## GSSoC-26 Contribution
Labels: GSSoC-26, good first issue, level:easy, type:feature

MIT License © 2026