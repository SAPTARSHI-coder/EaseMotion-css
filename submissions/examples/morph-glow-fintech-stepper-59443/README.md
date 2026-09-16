# Morph-Glow Fintech Stepper

## What does this do?

This pure HTML and CSS component presents a four-stage fintech verification workflow with a morphing, glowing active node and matching detail panels.

## How is it used?

Place native radio controls before the ordered step labels and panels so checked-state selectors can update both the active node and visible content.

```html
<input
  class="step-control"
  type="radio"
  name="kyb-step"
  id="step-risk"
  checked
/>

<ol class="step-list">
  <li>
    <label for="step-risk">
      <span class="step-node">3</span>
      <span><strong>Risk review</strong><small>Screening checks</small></span>
    </label>
  </li>
</ol>

<div class="step-panels">
  <article class="step-panel panel-risk">...</article>
</div>
```

Main custom properties:

| Property           | Purpose                       | Default   |
| ------------------ | ----------------------------- | --------- |
| `--morph-duration` | Active-node morph duration    | `520ms`   |
| `--blue`           | Active step and review accent | `#245eea` |
| `--blue-soft`      | Glow ring and icon background | `#e3ecff` |
| `--radius`         | Shell corner radius           | `8px`     |

## Why is it useful?

The stepper makes verification state and supporting account details available without JavaScript. It fits EaseMotion CSS through native keyboard radio controls, reusable checked-state selectors, transform-based morph animation, responsive horizontal and vertical layouts, forced-color support, and a `prefers-reduced-motion` fallback.
