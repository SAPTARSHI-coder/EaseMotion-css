# Custom Select Dropdown Component (`ease-select-custom`)

A accessible, keyboard-navigable custom select element replacement created around strict hardware-accelerated orchestration styles.

## Design Architecture
- **Motion Profiles:** Implements a direct `.ease-select-options` container map utilizing vertical transformations (`scaleY`) originating cleanly from the top center anchor boundary.
- **Accessibility Integration:** Conforms to strict WAI-ARIA `listbox` criteria using explicit tracking flags (`aria-haspopup`, `aria-expanded`, and `aria-selected`).
- **Complete Module Isolation:** Kept away from root workspace layers to avoid checking and file tracking contamination.