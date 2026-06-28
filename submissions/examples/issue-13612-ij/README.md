# Ease Text Gradient

Closes #13612

## Description
A text gradient utility class using `background-clip: text` with configurable `--ease-gradient-from` and `--ease-gradient-to` CSS variables. Produces smooth gradient text without additional markup.

## Acceptance Criteria
- `.ease-text-gradient` applies gradient background clipped to text
- Default colors: from #3b82f6 to #8b5cf6
- Customizable via `--ease-gradient-from` and `--ease-gradient-to`
- Works on any heading or text element
- Multiple preset gradient examples shown

## Files
- `style.css` — Dark theme with text gradient utility
- `demo.html` — Demo with multiple gradient combinations
