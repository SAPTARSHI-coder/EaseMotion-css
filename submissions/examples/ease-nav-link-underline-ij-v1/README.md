# Ease Nav Link Underline Component

An accessible navigation link component implementing a fluid, modern line expansion effect animating outwards from the center on focus states.

## Features
- **Transform-Based Performance**: Uses highly performant `transform: scaleX()` transitions instead of structural `width` properties to maintain 60FPS animations.
- **Accessible Interactions**: Leverages `:focus-visible` parameters to ensure full visibility for tab-navigating keyboard users.
- **Clean Configuration Architecture**: Easily manage link padding clearances, line heights, and transition tempos strictly through customized CSS tokens.

## Structural File Tree
```text
ease-nav-link-underline-ij/
├── demo.html    # Layout sample establishing navigation element setups
├── style.css    # Transform vectors, design tokens, and inline pseudo-element properties
└── README.md    # Documentation file