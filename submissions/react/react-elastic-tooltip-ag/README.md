# Elastic Tooltip (React Integration)

A premium, highly interactive React Tooltip component utilizing a smooth **Elastic Slide** entrance/exit transition. Designed specifically for complex **Responsive Dashboard** interfaces where layout shifts, overflowing panels, and spacing constraints are common.

## Key Features

- 🌀 **Elastic Slide Transition**: Utilizes a spring-like cubic-bezier transition (`cubic-bezier(0.34, 1.6, 0.64, 1)`) matching EaseMotion's bounce token, providing a premium, playful, and responsive feel.
- 🧱 **Portal-Based Rendering**: Automatically mounts to `document.body` via `ReactDOM.createPortal` (configurable) to prevent cropping issues caused by parent containers with `overflow: hidden` or `overflow: scroll` (e.g. dashboard grid columns).
- 🛡️ **Viewport Collision Containment**: Detects screen edges dynamically. If the tooltip would overflow the viewport boundary, it shifts into view, and the pointer arrow adjusts automatically to continue pointing to the center of the trigger.
- 📐 **Safe Triangulation (Hover Survival)**: Implements hover triangulation. Moving the cursor directly into the tooltip content will keep it open, enabling click interactions, links, or text copying inside the tooltip.
- 🎨 **Premium Themes**: Includes modern theme variants, such as Glassmorphic (`theme="glass"`), Dashboard Accent (`theme="dashboard"` which highlights the border closest to the trigger), and neutral light/dark presets.

---

## Props Reference

The component accepts the following properties:

| Prop        | Type                                                                           | Default    | Description                                                                             |
| :---------- | :----------------------------------------------------------------------------- | :--------- | :-------------------------------------------------------------------------------------- |
| `content`   | `React.ReactNode`                                                              | _Required_ | Content or component to render inside the tooltip popup box.                            |
| `position`  | `'top' \| 'bottom' \| 'left' \| 'right'`                                       | `'top'`    | Direction of the tooltip relative to the trigger element.                               |
| `align`     | `'start' \| 'center' \| 'end'`                                                 | `'center'` | Alignment of the tooltip along the trigger's axis (only for top/bottom).                |
| `trigger`   | `'hover' \| 'focus' \| 'click' \| 'manual'`                                    | `'hover'`  | The action that triggers the tooltip to appear.                                         |
| `visible`   | `boolean`                                                                      | `false`    | Controls visibility manually when `trigger="manual"`.                                   |
| `delayShow` | `number`                                                                       | `0`        | Delay in milliseconds before showing the tooltip.                                       |
| `delayHide` | `number`                                                                       | `100`      | Delay in milliseconds before starting the hide transition (crucial for hover survival). |
| `arrow`     | `boolean`                                                                      | `true`     | Show or hide the triangle pointing arrow.                                               |
| `theme`     | `'glass' \| 'glass-light' \| 'glass-dark' \| 'dashboard' \| 'dark' \| 'light'` | `'glass'`  | Visual theme styling.                                                                   |
| `portal`    | `boolean`                                                                      | `true`     | Render in a portal at `document.body` level to prevent parent overflow clips.           |
| `width`     | `'normal' \| 'wide' \| 'full'`                                                 | `'normal'` | Controls width and wrapping. `'wide'` (280px, wraps), `'full'` (auto).                  |
| `className` | `string`                                                                       | `""`       | Additional CSS class applied to the tooltip box.                                        |
| `style`     | `object`                                                                       | `{}`       | Additional inline styles for the tooltip content.                                       |

---

## Installation & Setup

1. Copy the component files into your project folder.
2. Make sure you import the stylesheet in your bundle:

```javascript
import ElasticTooltip from "./ElasticTooltip";
```

---

## Usage Examples

### 1. Basic Hover Tooltip

Standard implementation for actions inside dashboard toolbars.

```jsx
import React from "react";
import ElasticTooltip from "./ElasticTooltip";

function App() {
  return (
    <ElasticTooltip content="Export data to CSV format" position="top">
      <button className="ease-btn ease-btn-primary">Export Report</button>
    </ElasticTooltip>
  );
}
```

### 2. Glassmorphic Tooltip in Responsive Dashboard Grid

Perfect for high-density dashboard layouts where elements are tightly packed.

```jsx
import React from "react";
import ElasticTooltip from "./ElasticTooltip";

function DashboardWidget() {
  return (
    <div
      className="dashboard-card"
      style={{ overflow: "hidden", position: "relative" }}
    >
      <h3>Active Subscriptions</h3>
      <p className="metric">$12,450</p>

      {/* portal=true (default) ensures the tooltip floats above the card borders without clipping */}
      <ElasticTooltip
        content="MRR grew by 14% compared to the previous month."
        position="bottom"
        align="start"
        theme="glass"
        width="wide"
      >
        <span className="info-badge">+14% this month</span>
      </ElasticTooltip>
    </div>
  );
}
```

### 3. Click-to-Open Interactive Popover (Hover Survival)

Perfect for showing additional metadata or complex components with links.

```jsx
import React from "react";
import ElasticTooltip from "./ElasticTooltip";

function UserProfileBadge() {
  const profileDetails = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        padding: "4px",
      }}
    >
      <strong style={{ fontSize: "14px" }}>Saptarshi Sadhu</strong>
      <span style={{ opacity: 0.8 }}>Maintainer, EaseMotion CSS</span>
      <a
        href="https://github.com/SAPTARSHI-coder"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#6c63ff",
          textDecoration: "underline",
          marginTop: "4px",
        }}
      >
        View GitHub Profile
      </a>
    </div>
  );

  return (
    <ElasticTooltip
      content={profileDetails}
      position="right"
      trigger="hover"
      theme="dashboard"
      width="wide"
      delayHide={
        200
      } /* Added delay allowing the user to hover into the tooltip portal */
    >
      <div className="avatar-trigger" style={{ cursor: "pointer" }}>
        <img src="avatar.jpg" alt="Profile" className="avatar-img" />
      </div>
    </ElasticTooltip>
  );
}
```

### 4. Focus-Triggered Accessibility Tooltip

Standard accessibly focus helper for inputs.

```jsx
import React from "react";
import ElasticTooltip from "./ElasticTooltip";

function PasswordField() {
  return (
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <ElasticTooltip
        content="Must contain at least 8 characters, one number, and one symbol."
        position="right"
        trigger="focus"
        theme="dark"
        width="wide"
      >
        <input
          type="password"
          id="password"
          placeholder="Enter secure password"
          className="form-input"
        />
      </ElasticTooltip>
    </div>
  );
}
```

---

## How It Works

1. **Mounting Delay**: To get smooth entrance transitions in React, the component mounts first (`mounted=true`) and then adds the active class (`open=true`) in the next micro-tick. On close, it removes the active class first and triggers a `setTimeout` matching the transition speed (420ms) to clean up and unmount the DOM elements.
2. **Dynamic Arrow Alignment**: When edge collision occurs and shifts the tooltip, the component measures `targetCenter - tooltipLeft` and sets it as the CSS custom property `--ease-tooltip-arrow-left` (or `--ease-tooltip-arrow-top`), shifting the arrow dynamically inside the boundaries of the tooltip box so it still points directly to the trigger.
