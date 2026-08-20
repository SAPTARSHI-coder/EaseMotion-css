# Expandable Search Bar Component

Resolves Issue #59856.

This submission provides a sleek, modern expandable search bar component. Initially, the component displays as a circular pill containing only a search icon. Upon receiving focus, it smoothly expands into a full-width text input field.

## Implementation Details
- **`style.css`**: Defines the `.ease-search-expandable` container. The expansion logic uses the CSS pseudo-class `:focus-within` on the container, which targets the nested `<input>` element and animates its width from `0px` to `250px`. Standard variables such as `--ease-out-expo` ensure the `width`, `padding`, and `opacity` transition gracefully and consistently with the library's design language.
- **`demo.html`**: A clean, accessible demonstration showcasing the search bar, complete with an inline SVG magnifying glass icon.

## Integration
Once the core directory contribution freeze is lifted, these styles can be securely integrated into `components/search-bar.css`.
