# Animated Stepper Progress Component

A production-grade, animated stepper progress component for the **EaseMotion CSS** open-source library. Built entirely with HTML and CSS — no JavaScript, no frameworks, no dependencies.

---

## Description

The Animated Stepper Progress Component communicates multi-phase workflows in a visually compelling way. It presents five named steps — Planning, Design, Development, Testing, and Launch — with distinct visual states for completed, active, and upcoming phases.

The design language draws from **glassmorphism**, using frosted translucent cards against a deep dark background with soft indigo-violet gradient accents. Every interaction — from hover lifts to connector fills — is handled exclusively through CSS keyframes and transitions.

---

## Features

- **Responsive** — horizontal on desktop, adaptive on tablet, vertical on mobile
- **Animated Stepper** — staggered fade/slide entrance per step with spring easing
- **Hover Effects** — card lift, glow rings, shimmer sweep, gradient border rotation
- **Glassmorphism** — translucent cards, soft shadows, blur-backed blobs
- **CSS Only** — zero JavaScript, zero external frameworks
- **Accessible** — respects `prefers-reduced-motion`, uses `aria-current="step"`, semantic HTML
- **Composable** — every animation is a standalone `@keyframes` rule, easy to mix and match
- **Dark mode ready** — designed natively for dark backgrounds with CSS custom properties

---

## Usage

1. Copy the component folder into your project:

```
animated-stepper-progress/
├── demo.html
├── style.css
└── README.md
```

2. Link the stylesheet in your HTML `<head>`:

```html
<link rel="stylesheet" href="style.css" />
```

3. Copy the `.stepper` block from `demo.html` into your page.

4. Set the current active step using the `step--active` class, completed steps with `step--completed`, and future steps with `step--upcoming`.

5. Control stagger timing via the `--step-index` CSS custom property on each `.step`:

```html
<article class="step step--active" style="--step-index: 2;"></article>
```

### Step State Classes

| Class             | Description                        |
| ----------------- | ---------------------------------- |
| `step--completed` | Step is finished. Shows checkmark. |
| `step--active`    | Current step. Pulsing ring + glow. |
| `step--upcoming`  | Not yet started. Muted appearance. |

---

## Why It Fits EaseMotion CSS

EaseMotion CSS is built on three core principles: **animation-first**, **human-readable**, and **composable**. This component embodies each one:

### Animation-First

Animations are not decorative afterthoughts — they carry semantic meaning. The connector line `connectorFill` animation signals progress direction. The `pulsing` ring on the active step draws the eye naturally to the current state. The staggered `stepEntrance` sequence guides the viewer through the workflow in reading order.

### Human-Readable

Every `@keyframes` name describes what it does in plain English: `checkPop`, `glowPulse`, `shimmerSweep`, `progressExpand`. Any developer reading the CSS immediately understands the intent without needing comments. CSS custom properties like `--dur-slow`, `--ease-spring`, and `--grad-active` make the design tokens self-explanatory.

### Composable

Each animation is a self-contained `@keyframes` block. `slideUpFade` can be dropped onto any element. `pulsing` works on any circular element. `connectorFill` applies to any progress indicator. The step state classes (`step--completed`, `step--active`, `step--upcoming`) are independent modifiers that compose cleanly with the base `.step` component. Timing is coordinated through a single `--stagger` variable, so adjusting the entire entrance sequence takes one line.

---

## Animation Reference

| Name                | Applied To                | Effect                                |
| ------------------- | ------------------------- | ------------------------------------- |
| `stepEntrance`      | `.step`                   | Staggered slide-up fade on load       |
| `slideUpFade`       | Header, summary           | Smooth upward entrance                |
| `checkPop`          | `.step__check`            | Spring-scale checkmark on complete    |
| `activeCirclePulse` | `.step--active` circle    | Breathing glow on active state        |
| `pulsing`           | `.step__pulse`            | Expanding ring pulse on active        |
| `glowPulse`         | `.step__glow`             | Radial glow breathe on active         |
| `connectorFill`     | `.connector__line`        | Left-to-right fill on completed lines |
| `connectorPulse`    | Hover on connectors       | Glow intensification on hover         |
| `borderRotate`      | `::before` on hover       | Hue-rotating gradient border          |
| `shimmerSweep`      | `::after` on hover        | Light sweep across card surface       |
| `gradientShift`     | `.title-gradient`         | Slow ambient gradient drift on title  |
| `progressExpand`    | `.progress-summary__fill` | Progress bar width reveal             |
| `progressShimmer`   | `::after` on fill         | Repeating shine on progress bar       |
| `blobFloat`         | `.bg-blob`                | Slow ambient float on decorative orbs |

---

## CSS Custom Properties

All design tokens are exposed as CSS variables on `:root` for easy theming:

```css
:root {
  --grad-primary:   /* main indigo-purple gradient */ --grad-active:
    /* active state gradient */
    --grad-completed: /* completed state gradient */
    --circle-size: /* step circle diameter */
    --radius-card: /* card border radius */
    --dur-slow: /* standard animation duration */
    --ease-spring: /* spring easing curve */
    --stagger: /* per-step entrance delay */;
}
```

---

## Browser Support

All modern browsers supporting CSS custom properties, `@keyframes`, and `backdrop-filter`. Degrades gracefully in older browsers (animations simply won't play; layout and content remain intact).

---

## Folder Structure

```
animated-stepper-progress/
├── demo.html     # Full working demo
├── style.css     # Component styles and animations
└── README.md     # Documentation
```

---

## License

MIT — free to use, modify, and distribute.

Part of the **EaseMotion CSS** open-source component library.
