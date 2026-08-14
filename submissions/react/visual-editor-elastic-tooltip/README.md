# Visual Editor Elastic Tooltip

A fast, highly performant React tooltip component utilizing a spring-loaded Elastic Slide interaction curve designed for professional Visual Editor utilities.

## Props API Configuration

| Property | Format | Initial State | Context Purpose |
| :--- | :--- | :--- | :--- |
| `text` | `string` | *Required* | Label description describing the tool workspace action. |
| `shortcut` | `string` | `undefined` | Hotkey combo tag (e.g., "V", "Ctrl+P"). |
| `position` | `"top" \| "bottom"` | `"top"` | Sets side alignment entry pipeline. |

## Implementation Layout Example

```jsx
import { VisualEditorElasticTooltip } from './VisualEditorElasticTooltip';

export default function Toolbar() {
  return (
    <VisualEditorElasticTooltip position="bottom" shortcut="V" text="Move Tool">
      <button className="toolbar-btn">🏹</button>
    </VisualEditorElasticTooltip>
  );
}