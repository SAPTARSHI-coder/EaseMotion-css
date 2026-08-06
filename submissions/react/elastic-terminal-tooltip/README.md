# Retro Terminal Elastic Tooltip

An accessibility-aware, hardware-accelerated React tooltip component incorporating a spring-loaded elastic micro-interaction transition styled for monochrome developer interface arrays.

## Props API Configuration

| Property | Format | Initial State | Context Purpose |
| :--- | :--- | :--- | :--- |
| `text` | `string` | *Required* | Text message displayed inside terminal layout. |
| `position` | `"top" \| "bottom"` | `"top"` | Sets slide entrance positioning alignment. |

## Implementation Layout Example

```jsx
import { ElasticTerminalTooltip } from './ElasticTerminalTooltip';

export default function TerminalCard() {
  return (
    <ElasticTerminalTooltip position="top" text="SYS_STATUS: RUNNING">
      <button style={{background: '#000', color: '#33ff33', border: '1px solid'}}>HOVER_SYSTEM_NODE</button>
    </ElasticTerminalTooltip>
  );
}