# Typewriter Loop — Steps/Length Sync Fix

### 1. What does this do?
Fixes `.ease-typewriter-loop` so its typing animation stays smooth (one
character revealed per step) when the text length is customized, instead of
silently stuttering because the `steps()` count and the target `width` are
driven by two separate, hardcoded variables that can drift out of sync.

### 2. How is it used?
Same call pattern as the original component, just with matched size presets
so most people never touch the raw variable:

```html
<!-- Preset sizes: sm (12 chars) / md (20) / lg (32) / xl (48) -->
<span class="typewriter-fix typewriter-fix-lg">
  This types cleanly, one character at a time
</span>

<!-- One-off custom length: only ONE variable to set -->
<span class="typewriter-fix" style="--tw-chars: 27;">
  Only one variable to keep in sync now
</span>
```

### 3. Why is it useful?
The current `.ease-typewriter-loop` exposes `--ease-typewriter-length` as a
documented customization point ("Uses CSS variables for configurable text
length"), but pairs it with a second, unrelated `--ease-typewriter-steps`
variable that stays hardcoded at `12` unless *also* manually updated.
Customizing only the length (the one thing the component invites you to
change) breaks the animation — characters get revealed two-at-a-time instead
of one, which looks like a bug rather than a feature.

This fix collapses both knobs into a single source of truth
(`--tw-chars`), computing the width target from it via `calc()` so the two
values can never disagree. It keeps EaseMotion's "readable, composable,
no-build-step" philosophy — no JS, no config file, just one variable (or a
preset class) that does the right thing by construction. It also adds a
`prefers-reduced-motion` fallback that shows the full text immediately
instead of leaving a half-typed string on screen, matching the accessibility
handling used elsewhere in the framework.