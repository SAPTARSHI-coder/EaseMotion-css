# Intrinsic Layout Scaling Component (`field-sizing`)

A component workspace demonstrating modern CSS Intrinsic Sizing Engine rules (`field-sizing: content`) combined with responsive structural constraints.

## Architecture Highlights

- **Zero Script Overhead:** Bypasses legacy JavaScript calculation listeners (`element.scrollHeight`) to calculate bounding box layouts efficiently.
- **Defensive Boundary Architecture:** Employs explicit structural limitations (`min/max` width and height thresholds) to contain UI element scaling smoothly.

## Setup Schema

1. **Header Node (`.ease-input-field`):** Computes text block metrics dynamically across the inline-axis.
2. **Body Node (`.ease-textarea-field`):** Extends layout space predictably across the block-axis.
