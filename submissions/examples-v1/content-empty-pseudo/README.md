## content-empty-pseudo

Demonstrates the power of `::before` and `::after` pseudo-elements with `content: ""` (empty string) to create purely decorative visual elements — icons, dividers, badges, step indicators, and ribbons — without requiring extra HTML markup.

### Key Techniques

- Empty `content: ""` enables pseudo-elements that exist purely for visual decoration
- `clip-path` and pure CSS shapes (borders, transforms) generate iconography without images or icon fonts
- `position: absolute` inside relative containers allows precise placement of decorative layers
- Nested pseudo-elements (both `::before` and `::after`) combine to form complex visuals (e.g., checkmark inside circle)

### Accessibility Notes

- Decorative pseudo-elements should use `content: ""` so they are ignored by screen readers
- Do not convey critical information through pseudo-elements alone; pair with visible text or `aria-label`
- `prefers-reduced-motion` disables transitions for vestibular sensitivity
