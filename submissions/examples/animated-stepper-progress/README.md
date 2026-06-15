# Animated Stepper Progress

A modern multi-step progress component with animated connectors,
pulsing active step, and hover lift effects — pure HTML and CSS.

## Structure
animated-stepper-progress/
├── demo.html
├── style.css
└── README.md
## Usage

```html
<div class="stepper">

  <div class="step completed">
    <div class="step-circle">✓</div>
    <div class="step-info">
      <span class="step-label">Step 1</span>
      <span class="step-title">Account</span>
    </div>
  </div>

  <div class="step-connector completed-line"></div>

  <div class="step active">
    <div class="step-circle">2</div>
    <div class="step-info">
      <span class="step-label">Step 2</span>
      <span class="step-title">Profile</span>
    </div>
  </div>

  <div class="step-connector"></div>

  <div class="step">
    <div class="step-circle">3</div>
    <div class="step-info">
      <span class="step-label">Step 3</span>
      <span class="step-title">Launch</span>
    </div>
  </div>

</div>
```

## Step States

| Class | State |
|---|---|
| `step` | Inactive / upcoming |
| `step active` | Current step (pulsing glow) |
| `step completed` | Completed step (green) |
| `step-connector` | Inactive connector line |
| `step-connector completed-line` | Completed connector (purple gradient) |

## Features
- Pure HTML & CSS — no JavaScript
- Pulsing glow animation on active step
- Gradient connector lines for completed steps
- Hover lift on each step
- Vertical layout on mobile
- Respects `prefers-reduced-motion`

## Use Cases
- Onboarding flows
- Checkout processes
- Learning platform progress
- Documentation wizards
- Dashboard workflows