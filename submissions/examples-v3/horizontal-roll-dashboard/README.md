# EaseMotion: Analytics Ledger Horizontal Roll Modal

A performance-tuned layout engineered specifically to match dashboard reporting tools and system administration frameworks without adding structural script calculation overhead.

## Mechanics Overview
- **Rotational Roll Vectors**: Utilizing 3D `perspective` coordinate systems on the wrapper canvas block, the layout unrolls along the vertical axis from a deep sideways profile position (`-110deg`) outward into zero-degree flat view alignments.
- **Directional Slide Staggering**: Internal structural elements drift dynamically along the X-axis (`--stagger-drift-x`) backwards into position, aligning their translation flow direction with the parent panel’s unrolling reveal sweep.

## Customizable Configuration Properties
Adjust the behavior parameters inside the root scope of `style.css`:

| Variable | Default Metric | Purpose |
| :--- | :--- | :--- |
| `--roll-duration` | `0.7s` | Complete lifecycle runtime for the panel expansion sequence. |
| `--roll-degrees` | `-110deg` | Starting rotation bounds mapping out the spatial deployment sweep. |
| `--roll-origin` | `left center` | Anchor vertex coordinate pinning down the rotation edge path. |
| `--stagger-drift-x` | `-20px` | Linear structural translation drift offset for nested child nodes. |