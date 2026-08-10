# Interactive Stepper Wizard with Pulsing Status Nodes

> A responsive multi-step wizard stepper component with pulsing active status nodes, animated progress line fills, checkmark completion states, and full keyboard accessibility.

## Features

- **Pulsing Radar Wave Active State** — Active node features a subtle CSS keyframe radar pulse animation.
- **Checkmark Completed Nodes** — Completed steps transition seamlessly to display crisp checkmark icons.
- **Animated Connector Line Fills** — Progress connecting bars smoothly fill with gradient accents as steps complete.
- **Responsive Layout** — Displays horizontally on desktop and automatically switches to a vertical stack below `640px`.
- **Keyboard & High-Contrast Support** — Fully accessible with proper ARIA roles, `:focus-visible` states, and `@media (forced-colors: active)` high contrast mode rules.
- **Interactive Navigation** — Complete with Next/Back control buttons and direct step navigation for completed steps.

## Files

```
submissions/examples/interactive-stepper-wizard-em/
├── demo.html    — HTML structure for stepper navigation, panels, and actions
├── style.css    — Design tokens, animations, layout, and responsive breakpoints
├── script.js    — Step state navigation & panel visibility logic
└── README.md    — Component documentation
```

## State Modifier Classes

| Class | Applied To | Description |
|---|---|---|
| `.is-complete` | `.stepper__item` | Step finished: green border/glow, checkmark icon visible, connector fill at 100% |
| `.is-active` | `.stepper__item` | Current step: primary glow, pulsing ring animation, step number highlighted |
| `.is-pending` | `.stepper__item` | Locked/future step: dimmed border, gray step number |

## Usage

```html
<nav class="stepper" aria-label="Progress steps">
  <ol class="stepper__list" role="list">
    <li class="stepper__item is-complete" data-step="1">
      <div class="stepper__node" aria-hidden="true">
        <span class="stepper__check"><!-- SVG --></span>
        <span class="stepper__number">1</span>
        <span class="stepper__pulse"></span>
      </div>
      <div class="stepper__connector" aria-hidden="true">
        <div class="stepper__connector-fill"></div>
      </div>
      <span class="stepper__label">Account</span>
    </li>
    ...
  </ol>
</nav>
```

## Acceptance Criteria ✅

- [x] Progress line fills smoothly between active steps
- [x] Active node displays a subtle pulsing animation ring
- [x] Completed nodes present checkmark icons cleanly
- [x] Layout switches to a vertical stack seamlessly on screens smaller than 640px
- [x] High-contrast mode and keyboard accessibility verified
- [x] Respects `prefers-reduced-motion`

## License

MIT — Part of the [EaseMotion-css](https://github.com/SAPTARSHI-coder/EaseMotion-css) project.
