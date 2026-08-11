# Ease Tag Remove Fade Component

A lightweight ui tag layout featuring micro-interactions that cleanly handle state removal through combined opacity fades and dimensional spatial collapses.

## Features
- **Compound Keyframe Animation**: Orchestrates element translation, opacity fades, and width reductions simultaneously.
- **Fluid Layout Compensation**: Collapses spatial boundaries dynamically to let sibling nodes fill empty voids naturally.
- **Configurable Control Variables**: Leverages design-tokens (`--slide-distance`, `--animation-duration`) to adapt easily.

## Structural File Tree
```text
ease-tag-remove-fade-ij/
├── demo.html    # Layout sample hosting interactive removal script triggers
├── style.css    # Layout properties, token entries, and collapse keyframe mappings
└── README.md    # Documentation file