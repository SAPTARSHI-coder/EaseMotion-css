# Signal Radar

Signal Radar is an interactive radar-style monitoring component for
visualizing distributed system signals.

It provides a visual signal field around a central monitoring node,
allowing users to inspect individual signals and understand their
current intensity and health state.

## Features

- Circular radar visualization
- Central monitoring node
- Radar range rings
- Animated radar sweep
- Crosshair grid
- Interactive signals
- Signal labels
- Signal intensity
- Signal status
- Signal source
- Signal timestamp
- Signal inspector
- Signal health indicator
- Stable signals
- Watch signals
- Critical signals
- Signal selection
- Scan Now interaction
- Scan overlay
- Scan completion notification
- System summary
- Responsive layout
- Vanilla JavaScript
- No external dependencies

## Files

```text
signal-radar/
├── demo.html
├── style.css
└── README.md
```

## Signal States

### STABLE

The signal is operating within its expected range.

### WATCH

The signal is approaching a configured threshold and should be
monitored.

### CRITICAL

The signal has moved outside the expected operating range.

## Interactions

### Signal Selection

Click any signal on the radar.

The inspector updates with:

- Signal name
- Signal source
- Signal intensity
- Signal status
- Last signal timestamp
- Signal description
- Signal health

### Scan Now

The Scan Now button starts a simulated radar scan.

During scanning:

1. The scan overlay appears.
2. The scan state is displayed.
3. The radar enters scanning mode.
4. The scan completes automatically.
5. A completion notification is displayed.

The demo simulates the interaction without requiring a backend.

## Custom Signals

Signals are defined directly through HTML data attributes.

Example:

```html
<button
  class="signal warning"
  style="--x:65%;--y:30%;"
  data-name="Search Service"
  data-source="Search Cluster / SR-02"
  data-intensity="72%"
  data-status="WATCH"
  data-time="10:31:12"
  data-description="Search latency is approaching the warning threshold."
>
```

This makes the component easy to adapt to real monitoring data.

## Potential Use Cases

Signal Radar can be used for:

- AI agent monitoring
- API monitoring
- Infrastructure dashboards
- IoT monitoring
- Network monitoring
- Cybersecurity dashboards
- Distributed systems
- Microservice observability
- Anomaly detection
- Model monitoring
- Server health dashboards
- Payment infrastructure
- Real-time operations centers

## Design Philosophy

Most monitoring dashboards represent system health using tables,
cards, and graphs.

Signal Radar instead represents the system as a field of signals.

The central node represents the monitored system while surrounding
signals represent distributed services or external signals.

Distance, intensity, and status can then be mapped to different
operational dimensions.

## Technical Details

Built using:

- HTML
- CSS
- Vanilla JavaScript

No external JavaScript libraries are required.

All JavaScript is contained inside `demo.html`.

## Browser Support

Designed for modern:

- Chrome
- Edge
- Firefox
- Safari

## License

Use and modify this component according to the license of the parent
component library.