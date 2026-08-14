# Signal DNA

Signal DNA is an interactive activity-fingerprint component that
visualizes digital activity as a biological-style DNA structure.

Instead of presenting activity through a conventional timeline or
chart, events become signals embedded around a living visual genome.

## Features

- Animated DNA structure
- Dual animated strands
- Connected DNA rungs
- Interactive activity markers
- Activity hover tooltips
- Dynamic signal inspector
- Signal intensity meter
- Activity category
- Timestamp information
- Signal ID generation
- Animated scan effect
- Signal profile visualization
- Reset functionality
- Responsive design
- Vanilla JavaScript
- No external dependencies

## Files

```text
signal-dna/
├── demo.html
├── style.css
└── README.md
```

## Interactions

### Hover

Hovering over an activity marker displays a compact signal preview.

### Select

Clicking a marker updates the Signal Inspector.

The inspector displays:

- Activity name
- Activity category
- Timestamp
- Signal intensity
- Signal ID
- Activity description

### Scan Signal

The `Scan Signal` button activates a visual scanning animation and
simulates a signal analysis operation.

### Reset Signal

Restores the initial signal state.

## Activity Data

Activities are stored directly on the HTML elements using data
attributes.

Example:

```html
<button
  class="signal-marker"
  data-title="Commit"
  data-time="09:14"
  data-intensity="82"
  data-type="DEVELOPMENT"
  data-description="A significant code change was committed."
>
```

This makes it easy to replace the demo data with real application
data later.

## Use Cases

Signal DNA can be adapted for:

- GitHub activity visualization
- Developer productivity
- System monitoring
- AI agent telemetry
- User behavior analytics
- Security activity fingerprints
- Application event streams
- Personal activity journals
- Project histories
- Digital identity visualizations

## Design Philosophy

Traditional analytics often represent activity as bars, lines, or
tables.

Signal DNA takes a different approach by treating activity as a
biological fingerprint.

The DNA represents the continuous flow of activity while individual
markers represent important events.

## Technical Details

Built using:

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