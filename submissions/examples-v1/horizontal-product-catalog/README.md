# EaseMotion: Pure CSS Horizontal Roll Modal

A premium horizontal unrolling interaction display framework styled for haute-couture catalog entries or high-end industrial design spec sheets.

## Mechanism & Architecture
- **3D Spatial Transformations**: Utilizes a `perspective` viewport boundary parent element tracking a custom configured rotational transform-pivot (`--roll-pivot`) anchor point.
- **Horizontal Unrolling Flow**: Upon activation, the container frame handles transitions from an orthogonal profile perspective straight out to flat plane layout assignments.
- **Directional Stagger Flow**: Inner details alter their translation metrics along the X-axis (`--stagger-shift-x`), harmonizing nested visual element reveals smoothly with the unfolding orientation vectors.

## Variable Reference Hooks
Adjust internal root properties within `style.css` to modulate structural dynamics:

| Variable | Baseline Value | Operational Purpose |
| :--- | :--- | :--- |
| `--roll-duration` | `0.85s` | Complete lifecycle tracking run for the opening spatial canvas wrapper. |
| `--roll-angle-start` | `-90deg` | Perpendicular layout calculation constraint prior to deployment. |
| `--roll-pivot` | `left center` | Vector vertex pin location controlling unrolling trajectories. |
| `--stagger-shift-x` | `30px` | Horizontal displacement distance offset applied to interior modules. |