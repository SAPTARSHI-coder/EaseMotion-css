# Fade-In Stepper for Creative Portfolio Layouts

A pure CSS/HTML tabbed stepper for case-study style portfolio content, where each step's content fades and rises in with a staggered, sequential reveal. No JavaScript, driven entirely by hidden radio inputs and `:checked`.

## Features

- 4-step tab navigation with a sliding underline indicator
- Each panel's child elements (eyebrow, heading, paragraph, tags) fade in with a staggered delay for a polished sequential reveal
- Smooth active-tab color transition and indicator slide
- Fully responsive, tabs become horizontally scrollable on small screens
- Respects `prefers-reduced-motion` (stagger/fade/rise fully disabled, content shown instantly)
- Zero JavaScript

## Usage

1. Copy `style.css` into your project and link it in your HTML `<head>`.
2. Copy the stepper markup from `demo.html`:
   - One hidden `<input type="radio">` per step
   - One `<label>` per step inside `.fstepper__nav` (the tab)
   - One `<section class="fstepper__panel fstepper__panel--N">` per step, with each direct piece of content wrapped in `.fstepper__item .fstepper__item--N` (N = stagger order, 1 through however many elements you have)
3. To add a step, duplicate the radio/tab/panel pattern, add a new `.fstepper__indicator` transform rule, and set width on `.fstepper__indicator` to 100% divided by total steps.

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--fstepper-primary` | `#10b981` | Active tab underline color |
| `--fstepper-primary-light` | `#6ee7b7` | Eyebrow text and active tab index color |
| `--fstepper-bg` | `#0d1117` | Page background |
| `--fstepper-panel-bg` | `#161b22` | Panel background |
| `--fstepper-border` | `rgba(255,255,255,0.08)` | Panel and tab borders |
| `--fstepper-text` | `#e6edf3` | Primary text color |
| `--fstepper-muted` | `#8b949e` | Secondary/muted text color |
| `--fstepper-fade-duration` | `0.5s` | Duration of each item's fade-in animation |
| `--fstepper-fade-ease` | `ease-out` | Easing curve for fade-in |
| `--fstepper-stagger-step` | `0.12s` | Delay increment between each staggered item |
| `--fstepper-rise-distance` | `14px` | Vertical distance items rise while fading in |

Override any of these via `:root { --fstepper-primary: #f43f5e; }` in your own stylesheet.

## Accessibility

- Radio inputs are keyboard-navigable (arrow keys switch tabs natively via native radio group behavior).
- Labels are proper `<label for="...">` elements tied to inputs for correct screen reader announcement.
- Under `prefers-reduced-motion: reduce`, all animations and transitions are removed and content is shown immediately at full opacity.

## Responsive Behavior

- Desktop/tablet: tabs share available width evenly.
- Mobile (max-width 640px): tabs shrink to content width and the nav becomes horizontally scrollable.
