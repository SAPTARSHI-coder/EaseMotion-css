# TimePickerWheelSelector

A production-quality, high-performance, and fully accessible scrolling wheel time picker component for React. Built on **EaseMotion CSS** design principles, it delivers an iOS-style 3D rotating drum visual effect using native momentum scrolling, CSS scroll snapping, and client-safe style injection.

---

## Features

- **Native Smooth Momentum**: Relies on native CSS `scroll-snap-type: y mandatory` to support ultra-smooth physics-based inertial scrolling out-of-the-box.
- **Dynamic 3D Perspective Cylindrical Transformation**: Computes index offsets in real-time, applying coordinate rotation (`rotateX`) and scaling changes to emulate a depth-based drum.
- **Robust Time Handler**: Tolerates invalid time strings by parsing fallback dates automatically and validates `minuteStep` sizes.
- **Accessible (WCAG AA)**: Maps semantic `role="listbox"` and `role="option"`. Supports keyboard arrow changes, roving tabIndex triggers, and prefers-reduced-motion triggers.
- **SSR Safe & Clean DOM**: Client-side stylesheets are loaded only once dynamically, avoiding layout duplicate rules and rendering issues.

---

## Installation

Copy `TimePickerWheelSelector.jsx` directly into your codebase and verify that EaseMotion core variable stylesheets are active.

```javascript
import TimePickerWheelSelector from "./TimePickerWheelSelector";
```

---

## Props

| Prop Name        | Type                              | Default               | Description                                                                                                   |
| :--------------- | :-------------------------------- | :-------------------- | :------------------------------------------------------------------------------------------------------------ |
| `value`          | `string`                          | `undefined`           | Controlled time value (e.g., `"14:30"` or `"02:30 PM"`). Activates controlled mode.                           |
| `defaultValue`   | `string`                          | `undefined`           | Uncontrolled default initial value. Fallback defaults to current system time.                                 |
| `onChange`       | `(formattedTime: string) => void` | `undefined`           | Callback fired when the selection changes, passing the formatted time string.                                 |
| `disabled`       | `boolean`                         | `false`               | Disables scrolling (`overflow: hidden`) and prevents keyboard focus.                                          |
| `minuteStep`     | `number`                          | `1`                   | Minute intervals (must be a divisor of 60: `1`, `2`, `3`, `4`, `5`, `6`, `10`, `12`, `15`, `20`, `30`, `60`). |
| `hourFormat`     | `"12" \| "24"`                    | `"12"`                | Displays a 12-hour clock (with meridiem) or 24-hour military clock.                                           |
| `showMeridiem`   | `boolean`                         | `true`                | Show/hide the AM/PM selector (only applicable when `hourFormat="12"`).                                        |
| `size`           | `"sm" \| "md" \| "lg"`            | `"md"`                | Sizing configuration controlling column widths, element heights, and margins.                                 |
| `className`      | `string`                          | `""`                  | Optional custom CSS class name for the wrapper.                                                               |
| `style`          | `object`                          | `{}`                  | Inline CSS styles for wrapper element override.                                                               |
| `animationClass` | `string`                          | `"ease-hover-bounce"` | CSS class for hover and transition interactions.                                                              |

---

## Examples

### Controlled Example

Synchronise time states with parent hooks.

```jsx
import React, { useState } from "react";
import TimePickerWheelSelector from "./TimePickerWheelSelector";

function ControlledTime() {
  const [time, setTime] = useState("09:30 AM");

  return (
    <div>
      <p>
        Selected Alarm: <strong>{time}</strong>
      </p>
      <TimePickerWheelSelector value={time} onChange={setTime} />
    </div>
  );
}
```

### Uncontrolled Example

Let the component manage internal states, fetching initial settings via `defaultValue`.

```jsx
import React from "react";
import TimePickerWheelSelector from "./TimePickerWheelSelector";

function UncontrolledTime() {
  const handleTimeChange = (newTime) => {
    console.log("Time selected:", newTime); // e.g. "14:05" or "02:05 PM"
  };

  return (
    <TimePickerWheelSelector
      defaultValue="22:15"
      hourFormat="24"
      onChange={handleTimeChange}
    />
  );
}
```

### 12-Hour Format Example

Standard 12h representation showing Hours, Minutes, and AM/PM wheels.

```jsx
import React from "react";
import TimePickerWheelSelector from "./TimePickerWheelSelector";

function TwelveHourExample() {
  return (
    <TimePickerWheelSelector
      hourFormat="12"
      showMeridiem={true}
      defaultValue="08:00 AM"
    />
  );
}
```

### 24-Hour Format Example

Hides the AM/PM column and maps hours from `0` to `23` natively.

```jsx
import React from "react";
import TimePickerWheelSelector from "./TimePickerWheelSelector";

function TwentyFourHourExample() {
  return <TimePickerWheelSelector hourFormat="24" defaultValue="17:45" />;
}
```

### Custom Minute Step Example

Filters minute intervals cleanly (e.g. 15-minute intervals).

```jsx
import React from "react";
import TimePickerWheelSelector from "./TimePickerWheelSelector";

function QuarterHourPicker() {
  return <TimePickerWheelSelector minuteStep={15} defaultValue="09:15 AM" />;
}
```

---

## Accessibility

`TimePickerWheelSelector` maps the following accessibility rules conforming to WCAG AA guidelines:

1. **ARIA Roles**:
   - Each wheel container acts as a focused `role="listbox"` with a descriptive `aria-label` (e.g., "Hours").
   - Each item behaves as a `role="option"` with `aria-selected` showing selection.
   - `aria-activedescendant` is mapped on the parent column to track target values.
2. **Keyboard Controls**:
   - `ArrowUp` / `ArrowDown`: Shifts selections to the previous/next element.
   - `Home` / `End`: Jumps to the beginning/end of the list.
   - `PageUp` / `PageDown`: Shifts selections by 5 items.
3. **Reduced Motion**:
   - Integrates media queries listening to `prefers-reduced-motion: reduce` to disable smooth scrolling transitions and 3D skew animations instantly.

---

## Customization

You can customize dimensions and colors by overriding standard variable values or targeting picker classes:

- `--ease-color-primary` (Defaults to `#6c63ff`): Focus border indicator.
- `--ease-color-surface`: Dropdown picker background.
- `--ease-color-neutral-100` / `200`: Highlight selection glass bar overlays.

To adjust sizing dynamically, pass `size="sm"` or `size="lg"`.

---

## Browser Support

Requires standard modern CSS layouts:

- **Chrome / Safari / Firefox**: Native support for scroll-snapping, linear masks, CSS 3D transforms, and prefers-color-scheme selectors.

---

## Known Limitations

- **Touchpad Scroll Sensitivity**: Scroll wheel snapping on desktop touchpad swipes behaves natively but depends on system-level scrolling speeds.
- **Scrollbar Hidden Overrides**: On older browser configurations or systems with forced overlay scrollbars, slight margins might render. Standard stylesheet overrides hide scrollbars across `-ms-` and `-webkit-` prefixes.
