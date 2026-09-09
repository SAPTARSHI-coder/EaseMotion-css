# Fix: Conflicting ease-transition shorthand and individual transition-property declarations

Resolves #30485

## The Problem

The `.ease-transition` utility set the `transition` **shorthand**
property (e.g. `transition: all 300ms ease;`), while some components
separately declared individual **longhand** transition properties
(`transition-property`, `transition-duration`,
`transition-timing-function`) on the same element. CSS shorthand
properties reset *all* of their longhand sub-properties to their initial
value whenever applied — so whichever declaration (shorthand or
longhand) came later in the cascade silently erased the other's intent.
A component's custom easing curve could vanish entirely if a shorthand
utility was applied after it, or a utility's intended duration could be
wiped out by a component's own shorthand declaration.

## The Fix

**Never use the `transition` shorthand anywhere in the codebase.** Every
transition-related declaration — in both utilities and component
defaults — now uses the longhand properties exclusively:

```css
transition-property: background-color, transform;
transition-duration: var(--ease-duration-base);
transition-timing-function: var(--ease-ease-standard);
```

Because longhand properties only ever affect their own single
sub-property, a duration utility and a component's easing curve are now
entirely orthogonal — they compose freely regardless of cascade order,
since neither one can reset the other's value. A component can override
just `transition-timing-function` (e.g. for a bouncy custom easing)
without touching `transition-property` or `transition-duration` at all.

Cascade layers (`components` < `utilities`, same pattern as the #30483
and #30484 fixes) are retained for the narrower case where two rules
genuinely target the *same* longhand property — e.g. two competing
duration utilities — ensuring deterministic precedence in that case too.

## Files

| File | Purpose |
|---|---|
| `demo.html` | Side-by-side comparison: a recreated "old/broken" shorthand-vs-longhand conflict, and the fixed longhand-only version, plus a live readout |
| `style.css` | The actual fix — documents the bug in `.conflict-demo-old` for comparison, and shows the longhand-only pattern in `.ease-transition` |
| `script.js` | Reads computed `transition-property` / `-duration` / `-timing-function` on the fixed card to prove all three compose correctly |

## How to Test

1. Open `demo.html` in a browser.
2. Hover **Block 1** (old conflict) — notice the background color
   transitions smoothly but the scale/transform jumps instantly with no
   easing, because the shorthand reset `transition-property` to a single
   value, silencing the longhand `transform` declaration.
3. Hover **Block 2** (fixed) — both the color transition AND the custom
   bouncy easing on the transform apply together correctly.
4. Check the live readout in **Block 3** — confirms
   `transition-property: background-color, transform`,
   `transition-duration: 350ms`, and the custom cubic-bezier easing are
   all simultaneously active on the same element.

## Notes

- This fix establishes a project-wide rule: any future utility or
  component touching transitions should use the longhand properties
  only. The shorthand `transition` property should be treated as
  off-limits in the framework's source to prevent this class of bug from
  recurring.