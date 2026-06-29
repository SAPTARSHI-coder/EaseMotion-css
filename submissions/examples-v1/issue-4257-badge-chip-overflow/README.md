# Fix: Overflow protection for .ease-badge and .ease-chip

**Fixes issue:** #4257

## Problem
`.ease-badge` and `.ease-chip` had no `max-width`, `overflow: hidden`,
or `text-overflow: ellipsis`. Dynamic labels longer than ~30 characters
overflowed their parent container, breaking flex/grid layouts -
especially noticeable on 320px mobile viewports.

## Fix
- Added `max-width: 100%`, `overflow: hidden`, `text-overflow: ellipsis`,
  and `white-space: nowrap` to `.ease-badge` and `.ease-chip` - truncates
  long content with an ellipsis by default.
- Added `.ease-badge-wrap` and `.ease-chip-wrap` modifier classes for
  cases where wrapping is preferred over truncation.

## Files
- `style.css` - the fix
- `demo.html` - visual test on 320px viewport

## Testing
1. Open `demo.html`, resize browser to 320px width
2. Confirm default badge/chip truncates with `...`
3. Confirm `-wrap` modifier wraps text cleanly instead of truncating
4. No overlap with adjacent elements

## Proposed integration
- Add overflow rules to `.ease-badge` in `components/badges.css`
- Add overflow rules to `.ease-chip` in `components/chip.css`
- Add `.ease-badge-wrap` / `.ease-chip-wrap` modifiers to same files
