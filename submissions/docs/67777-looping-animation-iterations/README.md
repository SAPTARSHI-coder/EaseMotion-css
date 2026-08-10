# Looping Animation Iteration Coverage

This submission documents and demonstrates regression coverage for
custom animation iteration handling.

## Covered Cases

- Default `--ease-animation-iterations` behavior
- Custom value `1`
- Custom value `3`
- Custom value `5`
- `infinite` iteration behavior
- Multiple animations using the same custom property
- Non-looping animations remaining unaffected

## Usage

The animation iteration count can be customized using the
`--ease-animation-iterations` CSS custom property.

```css
.element {
  --ease-animation-iterations: 3;
}