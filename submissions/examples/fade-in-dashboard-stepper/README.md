# CSS Fade-In Stepper for Responsive Dashboard Layouts

A pure HTML/CSS dashboard stepper that uses staggered fade-in motion to show progress across a release workflow.

## Features

- Five-step dashboard workflow with complete, active, queued, and next states.
- Staggered CSS-only fade-in animation using per-step `--delay` values.
- Horizontal desktop layout that collapses into a readable vertical mobile timeline.
- Accessible semantics with an ordered list, section labels, and `aria-current="step"`.
- `prefers-reduced-motion` support for users who prefer minimal animation.

## Files

- `demo.html`: semantic dashboard progress markup.
- `style.css`: responsive layout, visual treatment, and fade-in animation.
- `README.md`: usage notes and implementation summary.

## Usage

Copy the `fade-stepper` ordered list into a dashboard page and adjust each step's text, status class, and `--delay` value.

```html
<li class="step is-active" style="--delay: 240ms;" aria-current="step">
  <span class="step-marker" aria-hidden="true">03</span>
  <div class="step-content">
    <span class="step-kicker">In progress</span>
    <h2>Review Dashboard</h2>
    <p>QA the responsive cards, empty states, and motion timing.</p>
  </div>
</li>
```

Use `is-complete` for completed steps and `is-active` for the current step.
