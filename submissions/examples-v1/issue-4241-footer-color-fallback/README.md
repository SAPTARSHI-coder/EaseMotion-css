# Fix: Footer link hover fallback color mismatch

**Fixes issue:** #4241

## Problem
`footer.css` used `color: var(--ease-color-primary, #6366f1)` on
`.ease-footer-links a:hover`. The hardcoded fallback `#6366f1`
(Tailwind Indigo 500) does not match EaseMotion's actual brand
primary `#6c63ff`. In CDN-only setups where `core/variables.css`
does not load, the footer link hover color is visibly different
from `.ease-btn-primary`.

## Fix
Changed the fallback value in `.ease-footer-links a:hover` from
`#6366f1` to `#6c63ff`, matching the canonical brand primary used
across the rest of the library.

## Files
- `style.css` - the fix
- `demo.html` - visual test (CDN-only scenario, no variables.css)

## Testing
1. Open `demo.html` (no core/variables.css linked - simulates CDN-only)
2. Hover the primary button - color is #6c63ff
3. Hover a footer link - color now matches #6c63ff
4. Before fix: footer link hover was #6366f1 (visibly different)

## Acceptance Criteria Met
- [x] Fallback hex matches #6c63ff in footer.css
- [x] No other mismatched fallback values found in footer.css
  (audited file - only one var() with fallback present)

## Proposed integration
In `components/footer.css`, update:
.ease-footer-links a:hover {

color: var(--ease-color-primary, #6c63ff);

}
