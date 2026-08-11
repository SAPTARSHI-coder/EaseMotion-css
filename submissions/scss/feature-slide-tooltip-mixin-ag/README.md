# Slide Tooltip Mixin

## Description
The `ease-slide-tooltip-mixin-ag` is an SCSS mixin that provides a smooth, sliding entrance animation for tooltip components. When triggered, the tooltip fades in while simultaneously sliding up into its final position, creating a polished and fluid user experience.

## Installation
Copy the `_slide-tooltip.scss` file into your project's SCSS directory and import it into your stylesheets.

## Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$duration` | Time | `0.3s` | The total duration of the slide and fade transition. |
| `$offset` | Length | `10px` | The initial vertical offset from which the tooltip slides up. |
| `$delay` | Time | `0s` | The delay before the transition begins. |

## Usage Example

```scss
@import 'path/to/slide-tooltip';

/* The container that triggers the tooltip */
.tooltip-trigger {
    position: relative;
    display: inline-block;
    cursor: help;
}

/* The tooltip element itself */
.tooltip-content {
    position: absolute;
    bottom: 120%; /* Position above the trigger */
    left: 50%;
    margin-left: -60px;
    width: 120px;
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    z-index: 1;
    
    // Apply the mixin
    @include ease-slide-tooltip-mixin-ag(0.25s, 8px, 0.1s);
}
```

```html
<div class="tooltip-trigger">
    Hover me
    <span class="tooltip-content">Tooltip text</span>
</div>
```

## Accessibility Considerations
- **Trigger Mechanisms:** Tooltips should ideally be triggered by both hover and focus events so that keyboard users can access them. The mixin inherently supports `*:hover > &` and `*:focus-within > &` states if the tooltip is nested within the trigger.
- **Reduced Motion (`prefers-reduced-motion: reduce`):** For users who prefer reduced motion, the sliding translation and the fade transition are disabled. The tooltip will appear and disappear instantly when toggled, ensuring functional access to the information without the animation overhead.
