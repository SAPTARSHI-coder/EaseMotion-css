# Audio Player Tooltip Component

A reusable React tooltip component designed for rich-media interface elements, mapping directly to structural library animation classes.

## Features

- **EaseMotion Integration**: Clean class matching mapping directly to structural animation utilities (`ease-slide-*` combined with `ease-scale-pop`).
- **Flexible Placement**: Fully supports 4 orientation configurations (`top`, `bottom`, `left`, `right`) with programmatic safety fallback mapping.
- **Enhanced Accessibility**: Complete structural alignment utilizing key dismiss triggers (`Escape`), explicit tooltip profiles (`role="tooltip"`), and mobile click toggles.
- **Type Safety validation**: Robust parameter checking via explicit React `PropTypes` validation definitions.

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `label` | `string` | — | **Required**. Text string content inside the popover layout block. |
| `position` | `string` | `"top"` | Target alignment orientation relative to host children node targets (`top`/`bottom`/`left`/`right`). |
| `delay` | `number` | `150` | Intent visibility processing pause timeline (in milliseconds). |
| `disabled` | `boolean` | `false` | Completely turns off trigger event capture loops. |

## Usage Example

```jsx
import { AudioPlayerTooltip } from "./AudioPlayerTooltip";

export default function App() {
  return (
    <AudioPlayerTooltip label="Skip Track" position="top" delay={100}>
      <button className="control-btn">
        <svg viewBox="0 0 24 24">...</svg>
      </button>
    </AudioPlayerTooltip>
  );
}
```