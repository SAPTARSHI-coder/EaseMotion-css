## counter-increment-section

Demonstrates CSS automatic counters for numbering chapters, sections, and subsections in a nested document structure. Uses `counter-reset`, `counter-increment`, and `counter()` to generate outlines (1, 1.1, 1.1.1) without JavaScript.

### Key Techniques

- `counter-reset` initializes counters at each nesting level (chapter, section, subsection)
- `counter-increment` advances the counter at each heading occurrence
- `counter()` composes nested counters into hierarchical labels like `1.2.3`
- Pseudo-element `::before` prepends the counter string to each heading

### Accessibility Notes

- Counters are decorative pseudo-element content; screen readers still read the heading text
- The counter numbering is purely visual and disappears if CSS is disabled
- `prefers-reduced-motion` is respected for any animated transitions
