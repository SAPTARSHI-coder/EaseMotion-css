# ElasticTooltip — React Tooltip with Elastic Slide for Dark Minimalist Layouts

A fully accessible, zero-dependency React Tooltip component with an elastic slide
entrance transition, designed for dark minimalist interfaces.
Implements issue #38631.

## EaseMotion CSS Classes Used

| Position | Entry animation classes |
|----------|-------------------------|
| `top`    | `ease-fade-in ease-slide-up` |
| `bottom` | `ease-fade-in ease-slide-down` |
| `left`   | `ease-fade-in ease-slide-in-from-right` |
| `right`  | `ease-fade-in ease-slide-in-from-left` |
| `zoom` variant   | `ease-zoom-in` (added alongside position class) |
| `blur` variant   | `ease-blur-to-focus` (added alongside position class) |

The elastic feel is achieved by locally scoping
`--ease-ease: cubic-bezier(0.34, 1.56, 0.64, 1)` on `.em-tooltip`, overriding
the global timing for just this component.

## Props

| Prop       | Type                                        | Default     | Description |
|------------|---------------------------------------------|-------------|-------------|
| `content`  | `React.ReactNode`                           | —           | **Required.** Tooltip text or JSX content |
| `position` | `"top" \| "bottom" \| "left" \| "right"`   | `"top"`     | Which side the tooltip appears on |
| `variant`  | `"default" \| "zoom" \| "blur"`             | `"default"` | Extra entrance animation layered on top |
| `delay`    | `number` (ms)                               | `120`       | Show delay in milliseconds |
| `maxWidth` | `number` (px)                               | `220`       | Max bubble width in pixels |
| `disabled` | `boolean`                                   | `false`     | Suppresses tooltip entirely |
| `className`| `string`                                    | `""`        | Extra class on the host `<span>` |
| `children` | `React.ReactNode`                           | —           | **Required.** The trigger element |

## Installation

1. Copy `ElasticTooltip.jsx` and `style.css` into your project.
2. Ensure EaseMotion CSS is loaded (the component reads its CSS variables and animation classes):

```html
<!-- index.html -->
<link rel="stylesheet" href="easemotion.css" />
```

Or in JS:

```js
import "easemotion-css/easemotion.css";
```

## Usage

```jsx
import ElasticTooltip from "./ElasticTooltip";

// Basic — tooltip above the button
<ElasticTooltip content="Save your changes">
  <button>Save</button>
</ElasticTooltip>

// Different positions
<ElasticTooltip content="Copied!" position="bottom">
  <button>Copy</button>
</ElasticTooltip>

<ElasticTooltip content="Open settings" position="right">
  <span>⚙</span>
</ElasticTooltip>

// Zoom variant
<ElasticTooltip content="Premium feature" variant="zoom">
  <button>Upgrade</button>
</ElasticTooltip>

// Blur-to-focus variant
<ElasticTooltip content="Restricted action" variant="blur" position="left">
  <button>Delete</button>
</ElasticTooltip>

// Delayed show (400ms) with narrower bubble
<ElasticTooltip content="Keyboard shortcut: ⌘K" delay={400} maxWidth={160}>
  <kbd>⌘K</kbd>
</ElasticTooltip>

// Disabled (tooltip suppressed)
<ElasticTooltip content="Not available" disabled>
  <button disabled>Submit</button>
</ElasticTooltip>

// Rich JSX content
<ElasticTooltip
  content={<><strong>Pro tip:</strong> Hold Shift to select multiple</>}
  maxWidth={240}
>
  <button>Select</button>
</ElasticTooltip>
```

## Accessibility

- The tooltip `<span>` has `role="tooltip"` for screen-reader compatibility.
- The component responds to both `mouseenter`/`mouseleave` and `focus`/`blur`
  so it works with keyboard navigation.
- `@media (prefers-reduced-motion: reduce)` disables all animations by setting
  `--ease-speed-medium: 0ms` locally.

## Design Notes

- **Dark minimalist palette** — `#0d0f14` background, subtle white-alpha border,
  layered box-shadow for depth without colour.
- **Elastic easing** — `cubic-bezier(0.34, 1.56, 0.64, 1)` scoped only to the
  tooltip component so it does not affect the rest of the page.
- **Remount trick** — each time the tooltip re-opens, a new `key` is assigned,
  forcing React to remount the node and retrigger CSS animations cleanly.
