# TimePickerWheelSelector

A modular, copy-paste-ready React time picker that combines native momentum scrolling with EaseMotion-inspired motion styling. It supports 12-hour and 24-hour formats, keyboard navigation, reduced-motion support, and a polished wheel-style selection experience without extra dependencies.

---

## Features

- Zero external dependencies beyond React and the standard EaseMotion CSS utilities.
- Smooth wheel behavior using native scrolling, scroll snapping, and animated depth cues.
- Controlled or uncontrolled usage via the `value` and `defaultValue` props.
- Accessible keyboard support with `ArrowUp`, `ArrowDown`, `Home`, `End`, `PageUp`, and `PageDown`.
- Responsive sizing and dark/light-friendly styling via CSS variables.

---

## Installation

Copy the component file into your project and render it in any React app that already includes the EaseMotion base stylesheet.

```jsx
import TimePickerWheelSelector from "./TimePickerWheelSelector";
```

---

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `value` | `string` | `undefined` | Controlled time string like `"08:30 AM"` or `"14:30"`. |
| `defaultValue` | `string` | `undefined` | Initial uncontrolled value. |
| `onChange` | `(value: string) => void` | `undefined` | Called whenever the selected time changes. |
| `disabled` | `boolean` | `false` | Disables interaction and keyboard focus. |
| `minuteStep` | `number` | `1` | Minute interval, must be a divisor of `60`. |
| `hourFormat` | `"12" \| "24"` | `"12"` | Switches between 12-hour and 24-hour rendering. |
| `showMeridiem` | `boolean` | `true` | Shows the AM/PM wheel in 12-hour mode. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Adjusts wheel height and typography. |
| `className` | `string` | `""` | Optional wrapper class name. |
| `style` | `object` | `{}` | Inline styles for the container. |
| `animationClass` | `string` | `"ease-hover-bounce"` | Extra animation class for the wheel wrapper. |

---

## Usage Example

```jsx
import React, { useState } from "react";
import TimePickerWheelSelector from "./TimePickerWheelSelector";

function AlarmPicker() {
  const [time, setTime] = useState("09:30 AM");

  return (
    <div style={{ maxWidth: 360, margin: "2rem auto" }}>
      <h2>Set your alarm</h2>
      <TimePickerWheelSelector value={time} onChange={setTime} />
      <p>Selected: {time}</p>
    </div>
  );
}
```

---

## Demo Files

- `demo.html` opens directly in the browser and showcases the interactive picker.
- `style.css` contains the layout styling for the demo page.

---

## Accessibility

The component uses `role="listbox"`, `role="option"`, and keyboard interactions for a more usable wheel selector. It also respects `prefers-reduced-motion` so motion can be reduced automatically.

