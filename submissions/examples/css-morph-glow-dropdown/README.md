# CSS Morph-Glow Dropdown

A pure CSS dropdown designed for gaming hub layouts, featuring a dynamic border-radius morphing action paired with an ambient neon glow when activated. No JavaScript required.

## How it works

Built on a standard CSS checkbox toggle pattern (`#ease-morph-dropdown-toggle`). Upon toggling, the border-radius of both the trigger element and the dropdown container smoothly morphs from a standard rounded rect (`10px`) into an asymmetrical tech shape (`16px 4px 16px 4px`) driven by a spring cubic-bezier timing function. Simultaneously, an ambient neon drop-shadow glow illuminates the dropdown border.

## Files

`demo.html`, `style.css`, `README.md`

## Custom properties

- `--ease-dropdown-duration`: Speed of morphing and state transitions (`0.4s`)
- `--ease-dropdown-radius-rest`: Rest state border-radius (`10px`)
- `--ease-dropdown-radius-morphed`: Active morphed border-radius (`16px 4px 16px 4px`)
- `--ease-dropdown-bg`: Dark surface background color (`#12131a`)
- `--ease-dropdown-border`: Neutral border color (`#232736`)
- `--ease-dropdown-text`: Primary text color (`#f3f4f6`)
- `--ease-dropdown-muted-text`: Muted text color (`#8b92a5`)
- `--ease-dropdown-accent`: Neon accent color (`#ec4899`)
- `--ease-dropdown-glow`: Box-shadow properties for the active neon glow

## Accessibility & Performance

- Utilizes GPU-friendly CSS `border-radius`, `transform`, and `opacity` transitions.
- Fully supports `@media (prefers-reduced-motion: reduce)` by disabling border-radius morphing and spring scale animations in favor of simple opacity toggles.