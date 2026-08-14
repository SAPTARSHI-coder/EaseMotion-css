# Collapsible Tree View

A file-explorer-style nested tree with expand/collapse toggles, a rotating
arrow indicator, and a subtle fade/slide-in when a branch opens.

**Level:** Advanced

## Usage

Follows the WAI-ARIA Tree View pattern: `role="tree"`, `role="treeitem"`
with `aria-expanded`, and `role="group"` for child lists. Clicking a
`.tree-toggle` flips its parent item's `aria-expanded` and the `hidden`
attribute on its child group.

## Accessibility

- Full `role="tree"`/`role="treeitem"`/`role="group"` structure with
  `aria-expanded` kept in sync with actual visibility.
- Collapsed branches use the `hidden` attribute (not just `display:none` via
  a class alone) so their content is fully removed from the accessibility
  tree and tab order when closed.
- The arrow rotation is purely decorative and driven by the same
  `aria-expanded` state already required for the ARIA pattern — no separate
  state to keep in sync.
- `prefers-reduced-motion` removes the arrow rotation transition and the
  branch open fade/slide animation.

## Notes

- This demo covers mouse/click expand-collapse and the core ARIA attributes;
  a production implementation should add Left/Right/Up/Down arrow-key
  navigation per the full ARIA Tree View keyboard pattern — noted here as a
  follow-up rather than included, to keep this submission focused.
- Uses `:scope > .tree-children` to select only the immediate child group,
  so nested toggles don't affect ancestor/descendant groups.