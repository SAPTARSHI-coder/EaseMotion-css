# Badge Component (#249)

### What does this do?

This submission adds a brand new CSS component (`ease-badge`) to the framework for rendering small tags, labels, and notification counts.

### How is it used?

The maintainer should copy the contents of `style.css` into a new file located at `components/badges.css` and import it into the main framework payload.

Developers use it by applying `.ease-badge` to a span element, optionally alongside a color modifier (`.ease-badge-primary`, `.ease-badge-success`, `.ease-badge-danger`, `.ease-badge-warning`) and/or the `.ease-badge-pill` shape modifier.

### Why is it useful?

1. **Context-Aware Scaling:** By utilizing `em` units for padding and font-size instead of rigid `rem` or `px`, the badge automatically perfectly proportions itself relative to its parent container. Whether you put a badge inside a giant `<h1>` or a tiny `<button>`, it scales flawlessly without needing extra utility classes.
2. **Accessible by Default:** Taking lessons from Issue #381, these badges map the bright primary/success/danger/warning background colors against `--ease-color-neutral-900` text to mathematically guarantee WCAG AA 4.5:1 contrast compliance.
