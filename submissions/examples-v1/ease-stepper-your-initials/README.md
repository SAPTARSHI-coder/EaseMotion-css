# ease-stepper

Pure CSS multi-step progress indicator for EaseMotion CSS. Horizontal and vertical layouts, animated connectors, collapsible panels, and 4 visual states — all without JavaScript.

## Features

- **Horizontal layout** — Classic top-aligned stepper for checkout flows, wizards
- **Vertical layout** — Left-aligned timeline for task lists, documentation
- **4 visual states** — Pending, active, completed, error
- **Animated connector lines** — Gradient sweep animation on step progression
- **Collapsible panels** — Expandable content areas using checkbox hack
- **Error state** — Shake animation with red styling for validation failures
- **Size variants** — Small (compact), default, large (spacious)
- **Color themes** — Primary, success, info, danger
- **Icon mode** — Replace numbers with emoji/icons via `data-icon`
- **Dark mode** — `.ease-stepper-dark` for dark-themed applications
- **Responsive** — Horizontal collapses to vertical on mobile (&lt;640px)
- **Accessible** — Checkbox hack for panel toggle, `focus-visible`, `prefers-reduced-motion`
- **Zero JavaScript** — All state, animation, and interaction is CSS-only

## Usage

### Basic Horizontal Stepper

```html
&lt;div class="ease-stepper"&gt;
  &lt;div class="ease-step-item ease-step-item-completed"&gt;
    &lt;div class="ease-step-connector"&gt;&lt;/div&gt;
    &lt;div class="ease-step-label"&gt;
      &lt;div class="ease-step-circle"&gt;&lt;span class="ease-step-number"&gt;1&lt;/span&gt;&lt;/div&gt;
      &lt;div class="ease-step-content"&gt;
        &lt;div class="ease-step-title"&gt;Step One&lt;/div&gt;
        &lt;div class="ease-step-desc"&gt;Completed&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  
  &lt;div class="ease-step-item ease-step-item-active"&gt;
    &lt;div class="ease-step-connector"&gt;&lt;/div&gt;
    &lt;div class="ease-step-label"&gt;
      &lt;div class="ease-step-circle"&gt;&lt;span class="ease-step-number"&gt;2&lt;/span&gt;&lt;/div&gt;
      &lt;div class="ease-step-content"&gt;
        &lt;div class="ease-step-title"&gt;Step Two&lt;/div&gt;
        &lt;div class="ease-step-desc"&gt;In progress&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  
  &lt;div class="ease-step-item"&gt;
    &lt;div class="ease-step-connector"&gt;&lt;/div&gt;
    &lt;div class="ease-step-label"&gt;
      &lt;div class="ease-step-circle"&gt;&lt;span class="ease-step-number"&gt;3&lt;/span&gt;&lt;/div&gt;
      &lt;div class="ease-step-content"&gt;
        &lt;div class="ease-step-title"&gt;Step Three&lt;/div&gt;
        &lt;div class="ease-step-desc"&gt;Pending&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;