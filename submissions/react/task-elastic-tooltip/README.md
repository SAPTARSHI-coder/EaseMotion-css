# Task Management Elastic Tooltip

A clean, accessible React tooltip component incorporating an interactive bouncy Elastic Slide entrance transition designed for modern task manager dashboards.

## Props API Configuration

| Property | Format | Initial State | Context Purpose |
| :--- | :--- | :--- | :--- |
| `text` | `string` | *Required* | Context message displayed inside dashboard tooltip layout. |
| `position` | `"top" \| "bottom"` | `"top"` | Sets slide entrance positioning alignment. |

## Implementation Layout Example

```jsx
import { TaskElasticTooltip } from './TaskElasticTooltip';

export default function KanbanBoard() {
  return (
    <TaskElasticTooltip position="top" text="Assigned to Design Team">
      <button style={{ padding: '8px 12px', borderRadius: '4px' }}>Task #102</button>
    </TaskElasticTooltip>
  );
}