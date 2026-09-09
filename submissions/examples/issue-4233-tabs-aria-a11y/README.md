# Fix: Tabs component ARIA roles and keyboard navigation

**Fixes issue:** #4233

## Problem
The CSS-only tabs used hidden radio inputs with :checked selectors,
with no ARIA roles (role="tablist"/"tab"/"tabpanel"), no aria-selected
state, and no keyboard navigation. Screen readers announced hidden
radio inputs as form controls, not tabs. Arrow keys did nothing.

## Fix
Restructured the demo markup to follow the W3C ARIA Tabs design
pattern, and added a small companion script (tabs.js) for keyboard
interaction - following the same approach as core/modal.js.

### Markup changes
- role="tablist" on the tab container
- role="tab", aria-selected, aria-controls, tabindex on each tab
- role="tabpanel", aria-labelledby on each panel
- Panels toggled via the `hidden` attribute instead of CSS :checked

### tabs.js behavior
- ArrowLeft / ArrowRight move focus and selection between tabs
  (wraps around at ends)
- Home / End jump to first / last tab
- Updates aria-selected and tabindex (roving tabindex pattern)
- Shows/hides panels via the hidden attribute
- Click also selects a tab

## Files
- `style.css` - visual styles for the new structure
- `demo.html` - accessible tabs markup
- `tabs.js` - keyboard navigation companion script

## Testing
1. Open demo.html
2. Tab to the tablist - first tab receives focus
3. Press ArrowRight/ArrowLeft - selection and panel content switches,
   aria-selected updates, focus follows the active tab
4. Press Home/End - jumps to first/last tab
5. Test with a screen reader (e.g. NVDA) - announces "tab, selected"
   correctly for the active tab

## Acceptance Criteria Met
- [x] Demo HTML includes correct ARIA roles and attributes
      (tablist, tab, tabpanel, aria-selected, aria-controls)
- [x] Arrow-key navigation supported (Left/Right/Home/End)
- [x] Screen reader announces selected tab correctly via aria-selected

## Proposed integration
- Update `components/tabs.css` with the new class structure
  (.ease-tabs, .ease-tablist, .ease-tab, .ease-tabpanel)
- Add `core/tabs.js` alongside `core/modal.js` for keyboard nav
- Update tabs documentation/demo to use the new accessible markup
  instead of radio/:checked
