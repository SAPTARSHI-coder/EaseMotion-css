# Reusable React Tooltip Component (ease-tooltip-ij)

A reusable React tooltip component that leverages EaseMotion's timing tokens and native CSS variables for an elastic sliding entrance effect. It supports four positions, custom activation delays, custom markup, and is fully accessible via pointer and keyboard focus events.

---

## Folder Structure

```
submissions/react/ease-tooltip-ij/
├── Tooltip.jsx   # The React component
├── style.css     # Tooltip placements, arrows, and elastic animations
├── demo.html     # Interactive showcase
└── README.md     # Documentation (this file)
```

---

## Features

- **Elastic Slide Animations**: Implements smooth sliding transitions in all directions (`top`, `bottom`, `left`, `right`) utilizing EaseMotion's `--ease-ease-bounce` cubic-bezier and `--ease-speed-medium` speed tokens.
- **Hover Delay Support**: Optionally delay the tooltip's entrance on hover to prevent accidental triggers.
- **Rich Content**: Accepts raw strings or complex React elements/nodes inside the tooltip bubble.
- **Accessibility Included**: Fully wired for keyboard navigation (`onFocus`, `onBlur`) and includes proper ARIA roles (`role="tooltip"` and `aria-live="polite"`).

---

## Props

| Prop       | Type                                     | Default      | Description                                                            |
| ---------- | ---------------------------------------- | ------------ | ---------------------------------------------------------------------- |
| `content`  | `ReactNode` / `string`                   | **Required** | The text or element to display inside the tooltip bubble.              |
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'`      | Placement of the tooltip relative to its trigger.                      |
| `delay`    | `number`                                 | `0`          | Delay in milliseconds before showing the tooltip on hover/focus.       |
| `children` | `ReactElement`                           | **Required** | The trigger element that displays the tooltip when hovered or focused. |

---

## Installation & Setup

Copy `Tooltip.jsx` and `style.css` into your project directory. Import the component and its stylesheet:

```jsx
import React from "react";
import Tooltip from "./Tooltip";
import "./style.css"; // Make sure styles are loaded
```

---

## Usage Examples

### Basic Usage (Top Placement)

```jsx
<Tooltip content="Simple text tooltip" position="top">
  <button className="ease-btn">Hover Me</button>
</Tooltip>
```

### With Activation Delay (500ms)

```jsx
<Tooltip content="I am delayed" position="bottom" delay={500}>
  <button className="ease-btn">Delayed Tooltip</button>
</Tooltip>
```

### With Rich Content (React Elements)

```jsx
<Tooltip
  content={
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <span>🚀</span>
      <strong>Success!</strong>
    </div>
  }
  position="right"
>
  <button className="ease-btn">Rich Tooltip</button>
</Tooltip>
```

---

## Customization

You can override default color tokens and values inside your own CSS files or in `:root`:

```css
:root {
  /* Override EaseMotion token fallbacks used by the tooltip */
  --ease-color-neutral-900: #1e1b4b; /* Change tooltip background */
  --ease-color-neutral-50: #e0e7ff; /* Change tooltip text color */
  --ease-speed-medium: 400ms; /* Adjust animation speed */
}
```
