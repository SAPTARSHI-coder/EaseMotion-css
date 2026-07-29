# Glassmorphism Hover Card

A modern frosted glass card component with smooth hover lift animation —
built in pure HTML and CSS.

## Structure
glassmorphism-hover-card/
├── demo.html
├── style.css
└── README.md
## Usage

```html
<div class="glass-card">
  <div class="card-icon">☁</div>
  <h2 class="card-title">Cloud Storage</h2>
  <p class="card-desc">Store and access your files from anywhere.</p>
  <div class="card-tag">Free Plan</div>
</div>
```

## Card Variants

| Class | Style |
|---|---|
| `glass-card` | Default frosted white |
| `glass-card card-purple` | Indigo tinted glass |
| `glass-card card-cyan` | Cyan tinted glass |

## Features
- Pure HTML & CSS — no JavaScript
- `backdrop-filter: blur()` frosted glass effect
- Smooth hover lift with `translateY`
- Ambient background blobs via CSS pseudo-elements
- 3 color variants included
- Fully responsive
- Respects `prefers-reduced-motion`

## Use Cases
- Dashboards
- Pricing sections
- Portfolio cards
- SaaS landing pages