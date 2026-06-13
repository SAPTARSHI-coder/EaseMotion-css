# Timeline Stepper

## Overview

A dark SaaS-style vertical roadmap timeline designed for project planning, milestone tracking, and launch progress updates.

## Features

- Vertical connected timeline layout
- Four status categories: completed, active, pending, warning
- Hover lift, node scaling, and glow accent
- Responsive layout for mobile and desktop
- Pure HTML and CSS implementation

## Usage example

```html
<link rel="stylesheet" href="style.css">
<article class="timeline-step step-active">
  <div class="step-node"></div>
  <div class="step-card">
    <div class="step-meta">
      <span class="step-count">03</span>
      <span class="step-status">Active</span>
    </div>
    <h2>Development sprint</h2>
    <p>Implement the first MVP deliverables, build connected workflows, and prepare for internal validation.</p>
    <time>Mar 18, 2026</time>
  </div>
</article>
```

## Customization

- Update color tokens in `:root` to match your brand palette.
- Adjust card `border-radius`, `box-shadow`, and hover transform in `.timeline-step` for softer or stronger motion.
- Change node size and glow by editing `.step-node` width/height and hover shadow.
- Rename status classes like `step-completed`, `step-active`, `step-warning`, and `step-pending` to fit workflow semantics.

## Why it fits EaseMotion CSS

This submission is fully self-contained and built with responsive CSS patterns only. It provides a modern timeline component with motion-rich hover states and polished visual structure, aligning with EaseMotion CSS's focus on reusable, production-ready CSS UI components.
