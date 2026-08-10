# Ease Card Hover Lift Component

An accessible, highly customizable interactive card element utilizing custom Bezier translation offsets to display crisp spatial depth layers upon focus/hover.

## Features
- **Fluid Elevation Shift**: Employs a specific custom cubic-bezier timing variable (`cubic-bezier(0.34, 1.56, 0.64, 1)`) to offer a clean bouncy depth interaction.
- **Accessible Focus Support**: Fully operational via keyboard actions using custom layout hooks (`:focus-visible`).
- **Flexible Parameters**: Adjust properties like shadow weights and lift thresholds easily with CSS variables.

## Structural File Tree
```text
ease-card-hover-lift-ij/
├── demo.html    # Context container setup handling core layout models
├── style.css    # Transform logic matrices, grid rules, and design tokens
└── README.md    # Documentation file