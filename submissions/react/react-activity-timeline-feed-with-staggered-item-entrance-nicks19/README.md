# Activity Timeline Feed with Staggered Entrance

A polished React component that renders chronological events, such as system logs, user activity, or project milestones. It utilizes EaseMotion CSS to choreograph a staggered entrance animation, bringing the timeline to life immediately upon mounting.

## Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `activities` | `Array<Object>` | `[]` | **Required.** Array of event objects (see structure below) |
| `className` | `string` | `''` | Additional custom CSS classes for the root container |

### Activity Object Structure
```typescript
{
  id?: string | number,
  title: string,          // e.g., "Deployed to Production"
  time: string,           // e.g., "2 hours ago"
  description?: string,   // Additional context
  icon?: ReactNode,       // Optional SVG to replace the standard dot marker
  user?: {
    name: string,
    avatar?: string       // URL to image
  }
}
```

## Installation

1. Copy `ActivityTimeline.jsx` and `style.css` into your project components directory.
2. Ensure you have React installed. No other dependencies are required.

## Usage Example

```jsx
import React from 'react';
import ActivityTimeline from './ActivityTimeline';

function App() {
  const events = [
    {
      title: "Repository created",
      time: "Oct 12, 2023",
      description: "Initialize project structure and configuration.",
      user: { name: "Alice", avatar: "https://i.pravatar.cc/150?u=a04258" }
    },
    {
      title: "First commit pushed",
      time: "Oct 13, 2023"
    }
  ];

  return (
    <div style={{ padding: '40px', maxWidth: '500px' }}>
      <ActivityTimeline activities={events} />
    </div>
  );
}

export default App;
```

## Why it fits EaseMotion CSS

- **Staggered Orchestration**: When the component mounts, it dynamically assigns CSS `animation-delay` based on the item index (`index * 0.1s`). The items execute the `.ease-timeline-slide-up` keyframes, moving from `opacity: 0, translateY(20px)` to visible state using the `cubic-bezier(0.34, 1.56, 0.64, 1)` spring curve. This creates a highly satisfying "waterfall" visual effect that draws the eye down the list.
- **Hover Responsiveness**: Hovering over an event card shifts it right by `4px` (`translateX`) and elevates its box-shadow. Simultaneously, the timeline marker (dot or icon) scales up, reinforcing the connection between the marker on the track and the content box.
