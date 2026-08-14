# Morphing Tooltip with SaaS Modern styling (#78856)

A modern SaaS-inspired UI component featuring a tooltip that fluidly morphs its geometry (`border-radius` and `transform` spring transitions) upon user hover or focus interactions, built using pure CSS.

## Features
- **Semantic & Accessible Structure:** Built with native `role="tooltip"` linked to trigger buttons via `aria-describedby` and full `:focus-visible` keyboard support.
- **Fluid Morphing Motion:** Uses customized cubic-bezier timing curves to transition border radii from rounded pill states to refined card containers.
- **SaaS Dark Mode Palette:** Uses indigo brand accents, high-contrast typography, and subtle border highlights.

## File Hierarchy
- `style.css` - Component variables, cubic-bezier timing rules, morphing state transformations, and carets.
- `demo.html` - Accessible HTML structure showcasing the morphing tooltip interaction.
- `README.md` - Technical specification and architecture overview.
