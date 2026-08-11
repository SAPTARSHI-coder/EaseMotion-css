# CSS Password Generator UI

A pure CSS password generator UI component featuring an output field with copy button tooltips, character length sliders, option checkboxes, and a visual strength meter layout. No JavaScript required.

## How it works

Leverages semantic HTML forms paired with custom-styled CSS controls (`appearance: none` range sliders and hidden native checkboxes styled via sibling pseudo-elements). The strength meter UI uses CSS flex containers and active bar states designed for modular styling and integration.

## Files

`demo.html`, `style.css`, `README.md`

## Custom properties

- `--ease-pw-bg`: Card container surface background (`#0f172a`)
- `--ease-pw-card-bg`: Secondary panel background (`#1e293b`)
- `--ease-pw-input-bg`: Password field dark background (`#090a0f`)
- `--ease-pw-border`: Boundary border line color (`#334155`)
- `--ease-pw-text`: Primary headline color (`#f8fafc`)
- `--ease-pw-muted-text`: Subtitle and label color (`#94a3b8`)
- `--ease-pw-accent`: Emerald brand highlight color (`#10b981`)
- `--ease-pw-accent-glow`: Translucent glow value for active states
- `--ease-pw-radius`: Corner radius for container (`12px`)

## Accessibility & Performance

- Fully accessible form controls using standard `<label>`, `<fieldset>`, and `<legend>` tags, paired with explicit `aria-label` declarations.
- Complete support for `@media (prefers-reduced-motion: reduce)` which disables button transforms and tooltip transitions for reduced-motion environments.