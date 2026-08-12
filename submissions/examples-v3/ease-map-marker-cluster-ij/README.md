# Map Marker Cluster

A map marker cluster component that expands into individual markers with a burst animation. Click a cluster bubble to explode it into separate markers; click elsewhere to collapse.

## Usage

Include `style.css` and `demo.html` in your project. Customise animations via CSS custom properties:

| Property | Default | Description |
|---|---|---|
| `--mmc-duration` | `0.5s` | Base animation duration |
| `--mmc-cluster-color` | `#e74c3c` | Cluster bubble colour |
| `--mmc-marker-color` | `#3498db` | Individual marker colour |
| `--mmc-expand-color` | `#2ecc71` | Expanded cluster colour |
| `--mmc-radius` | `50%` | Cluster bubble border radius |

## Behaviour

- Click any **cluster bubble** to expand it into individual markers with a staggered burst.
- Click the expanded cluster or anywhere outside to collapse.
- Each marker carries a label and a pin styled with a rotated square and inner dot.
