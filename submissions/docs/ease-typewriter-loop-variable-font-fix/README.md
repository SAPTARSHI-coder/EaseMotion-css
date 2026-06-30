# Bug Fix: ease-typewriter-loop — Variable-Width Font Compatibility (#13795)

## What Was Changed and Why

### Bug 1 — `steps(N)` misaligns on proportional fonts

**Root cause:** The `type-loop` keyframe animates `width` from `0` to `var(--text-width)` using `steps(30)`, which divides the total element width into 30 equal pixel slices. This only produces correct character-by-character stepping on monospace fonts where every character is the same width.

On proportional fonts (system-ui, Inter, Roboto, Georgia), narrow letters like `i`, `l`, `r`, `t` are 2–3× narrower than wide letters like `W`, `M`, `T`. Equal pixel slices ≠ equal character positions — the cursor visibly rushes through narrow letters and stalls on wide ones.

The original component uses `font-family: 'Courier New', monospace` which protects it from this bug. However, any user who overrides the font family to match their design system will immediately break the animation. This fix documents the constraint clearly and ships a corrected proportional-font variant.

**Fix applied — two parts:**

1. Added a `⚠️ FONT WARNING` comment directly above `.ease-typewriter-loop` in `style.css` so the constraint is visible to anyone reading or copying the component.

2. Added a new `.ease-typewriter-loop-proportional` class + `typewriterLoopFixed()` JS function that measures each character's actual rendered right edge using `Range.getBoundingClientRect()`, then steps `element.style.width` to those exact pixel values — one per character, correctly aligned regardless of font proportions. This uses the same API browsers use internally to position the text caret in `<input>` fields.

---

### Bug 2 — `--text-width: 20ch` was hardcoded for all instances

**Root cause:** Every variant class had `--text-width: 20ch` as a fixed default. The `type-loop` keyframe expands width to `var(--text-width)` at the 45–55% mark. Any string shorter than 20 characters would cause the element to expand into empty space before reversing — visible as the cursor appearing to type past the end of the text.

The original demo strings (`"Hello, World!"` = 13 chars, `"Fast typing"` = 11 chars, `"Short"` = 5 chars) are all shorter than 20ch, meaning this bug was present but subtle in the existing demo.

**Fix applied:** Removed `--text-width` from the class definitions entirely. It is now set per-instance via a `style` attribute on each element in the HTML, matching the actual character count of that string:

```html
<!-- Before (buggy — expands past "Hello, World!") -->
<div class="ease-typewriter-loop">Hello, World!</div>

<!-- After (correct — stops exactly at end of string) -->
<div class="ease-typewriter-loop" style="--text-width: 13ch">Hello, World!</div>
```

The CSS fallback `var(--text-width, 20ch)` is retained so the component doesn't break if someone forgets to set it — but the correct usage is documented clearly.

---

## Files in This Submission

- **`style.css`** — Original component CSS preserved exactly, with two additions: the font warning comment, and the new `.ease-typewriter-loop-proportional` class for the JS-driven fix.
- **`demo.html`** — Original demo preserved with all existing sections, with `--text-width` corrected per-instance, plus a new "Proportional Font Fix" section demonstrating the JS variant on system-ui.
- **`README.md`** — This file.

---

## Related Issue

Closes #13795
