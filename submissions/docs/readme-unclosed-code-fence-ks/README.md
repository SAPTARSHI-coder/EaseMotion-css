# Bug: Unclosed Code Fence Breaks README Rendering

## What does this do?

Identifies and documents a missing closing ` ``` ` code fence in `README.md` at line 712 that causes the `### Animations`, `### Duration Helpers` sections and all their content (lines 714–742) to render incorrectly as raw code instead of formatted markdown on GitHub.

## How is it used?

The bug is visible when viewing the `## Usage and Examples` section on GitHub or any markdown viewer. The broken section starts here:

```markdown
### Development
Use the non-minified version for debugging and development:

```html
<link rel="stylesheet" href="easemotion.css" />
[PSYCHE: NO CLOSING FENCE — remaining lines 713–741 are consumed]
```

Expected:
```html
<link rel="stylesheet" href="easemotion.css" />
```

## Why is it useful?

- The Animations, Duration Helpers, Duration Table, and Looping Animation examples (30 lines of documentation) are invisible to readers browsing the README on GitHub
- This is the `## Usage and Examples` section — the primary way users learn to use the framework
- Fix is a single line addition with zero risk of breaking anything else

## Files to update in core:

- `README.md` — add ` ``` ` closing fence after line 712 (between the `<link>` tag and `### Animations`)
