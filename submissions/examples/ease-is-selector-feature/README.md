# `:is()` Selector Utilities (`ease-is-selector-feature`)

This proposal demonstrates and implements the use of the CSS `:is()` pseudo-class for state-driven utilities within `core/utilities.css`.

## 📌 Feature Overview

The `:is()` pseudo-class allows us to group multiple selectors efficiently, dramatically reducing CSS bloat for complex interaction states (like hovering, focusing, and active states).

**Design Tokens Documented:**
- `--surface-color` / `--bg-color`: Base layer backgrounds.
- `--text-primary` / `--text-secondary`: Typography hierarchy.
- `--primary-accent`: Main interactive color.
- `--transition-speed`: Handles animation timing (automatically set to `0s` if `@media (prefers-reduced-motion: reduce)` is active).

## ⚙️ How to Use

To test this feature locally, simply open the `demo.html` file in your web browser. The styles are contained in `style.css`. 

You can apply the `:is()` grouping to components to manage multiple interaction states compactly:

```css
/* Instead of:
.card:hover, .card:focus-within, .card:active { ... }
*/

/* We use: */
.card:is(:hover, :focus-within, :active) {
  transform: translateY(-5px);
  border-color: var(--primary-accent);
}
```

*Note: As per the contributing guidelines, this proposal is implemented inside `submissions/examples/ease-is-selector-feature/` to avoid directly modifying core files and causing zero deletions. The maintainer can safely migrate these patterns to the core utility stylesheet.*

## 🔗 Related Issue
Closes Issue #18633
