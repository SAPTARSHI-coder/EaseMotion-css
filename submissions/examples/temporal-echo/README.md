# Temporal Echo

Temporal Echo is an interactive history-replay component that allows
users to explore a sequence of events through a visual timeline.

Rather than presenting history as a conventional list, Temporal Echo
turns past events into an interactive temporal stream with fading
echoes, a moving cursor, and replay controls.

## Features

- Interactive horizontal timeline
- Chronological event positioning
- Current event highlighting
- Passed-event states
- Timeline scrubber
- Previous/next navigation
- History replay animation
- Temporal progress indicator
- Event inspector
- Event category
- Event timestamp
- Event impact
- Event ID
- Temporal snapshot
- Echo animations
- Reset functionality
- Focus interaction
- Responsive layout
- Vanilla JavaScript
- No external dependencies

## Files

```text
temporal-echo/
├── demo.html
├── style.css
└── README.md
```

## Interactions

### Select an Event

Click any event on the timeline to inspect it.

The inspector displays:

- Event title
- Timestamp
- Category
- Impact
- Description
- Event ID

### Timeline Scrubber

Drag the timeline slider to move between historical events.

### Previous / Next

Use the arrow buttons to move one event backward or forward.

### Replay History

`Replay History` automatically moves through the complete timeline
from the beginning to the latest event.

### Reset Timeline

Returns the timeline to the first historical event.

### Focus Event

Displays a confirmation message for the currently selected event.

## Event Data

Events are defined using HTML data attributes.

Example:

```html
<button
  class="event"
  data-title="Major Refactor"
  data-time="13:20"
  data-category="ENGINEERING"
  data-impact="CRITICAL"
  data-description="A major refactor improved component boundaries."
>
```

This allows the component to be easily connected to real event,
audit-log, version-history, or activity data.

## Use Cases

Temporal Echo can be adapted for:

- Git history
- Deployment history
- AI agent action logs
- Audit logs
- Application event streams
- User journey visualization
- Project milestones
- Version history
- System monitoring
- Incident timelines
- Workflow history

## Design Philosophy

Traditional timelines describe the past.

Temporal Echo makes the past feel replayable.

The active event represents the current temporal position while passed
events become echoes of the state that led to the present.

## Technical Details

Built with:

- HTML
- CSS
- Vanilla JavaScript

No external JavaScript libraries are required.

All JavaScript is contained inside `demo.html`.

## Browser Support

Designed for:

- Chrome
- Edge
- Firefox
- Safari

## License

Use and modify this component according to the license of the parent
component library.