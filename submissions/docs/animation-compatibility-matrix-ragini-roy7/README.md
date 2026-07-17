# Animation Compatibility Matrix

## What does this add?
A documentation reference — `demo.html` — that tells developers which EaseMotion CSS animation utilities can be safely combined on the same element, which combos need care, and which will conflict, based on which CSS property each utility actually animates.

## Why is it useful?
EaseMotion CSS's utilities are composable by design (`class="ease-fade-in ease-slide-up"` is a common pattern), but nothing currently documents *why* some combinations work perfectly while others silently break. Most conflicts come down to one simple rule: **an element can only have one active `animation` or one value for `transform` at a time.** If two utility classes both declare an `animation` shorthand, the one that's later in the cascade (or more specific) wins outright — the other's keyframe never plays. If two utilities both set `transform` (directly or via a shared keyframe), whichever rule wins in the cascade overwrites the other's translate/scale/rotate instead of combining them.

This matrix is derived directly from reading `core/animations.css` — the "animates" column reflects the actual CSS property each class declares, not guesswork.

## The Matrix

### Entrance animations (one-shot, `animation: ... both`)
These all animate `opacity` + `transform` together via a dedicated keyframe. **Only one entrance animation can play per element** — since they all set the `animation` property, the last one applied in the cascade fully overrides the others (this is the single most common EaseMotion combination question).

| Animation | Compatible With | Avoid Combining With | Why |
|---|---|---|---|
| `ease-fade-in` | `ease-hover-lift`, `ease-hover-grow`, `ease-hover-glow` (post-entrance hover states) | `ease-slide-up`, `ease-zoom-in`, `ease-bounce-in`, any other entrance class | All entrance utilities set the `animation` shorthand — combining two just makes the second one win, the first never runs |
| `ease-slide-up` | Same hover utilities as above | `ease-fade-in`, `ease-zoom-in`, `ease-slide-down`, `ease-slide-in-left/right` | Same reason: one `animation` property per element |
| `ease-zoom-in` / `ease-zoom-out` | Hover utilities (applied after entrance completes) | Any other entrance class, `ease-flip`, `ease-mask-reveal` | Same `animation` property conflict |
| `ease-bounce-in` | Hover utilities | Other entrance classes | Same `animation` property conflict |
| `ease-flip` / `ease-flip-3d` | Hover utilities, `ease-card-lift` | Other entrance classes, `ease-rotate` | Both `ease-flip` and `ease-rotate` animate `transform: rotate*` — combining scrambles the rotation math |
| `ease-mask-reveal` (+ `-circle`, `-y` variants) | `ease-fade-in` *is* safe here ⚠️ partial — `clip-path` and `opacity` are different properties, so they can layer, but test timing since both are one-shot | Other `ease-mask-reveal-*` variants together, `ease-slide-*` (both would fight over `transform`) | `clip-path` doesn't conflict with `opacity`-only classes, but does conflict with anything else moving `transform` |

### Continuous / looping animations
These use `animation-iteration-count: infinite` and are meant to run indefinitely.

| Animation | Compatible With | Avoid Combining With | Why |
|---|---|---|---|
| `ease-bounce` | `ease-hover-glow`, `ease-pulse` (different properties: `transform` vs `opacity`) | `ease-rotate`, `ease-wave`, `ease-shake`, `ease-float` | All of these animate `transform` continuously — only the winning `animation` declaration actually plays |
| `ease-rotate` | `ease-pulse`, `ease-hover-glow` | `ease-bounce`, `ease-wave`, `ease-shake`, `ease-flip-3d` | Same `transform`-property collision |
| `ease-pulse` / `ease-ping` | Almost anything — both only touch `opacity`/`scale` via their own isolated keyframe and layer cleanly with non-`transform` utilities like `ease-hover-glow` (`filter`) | Each other (`ease-pulse` + `ease-ping` both use `animation`, so one wins) | Same-property rule applies even between two loop animations |
| `ease-wave` | `ease-hover-glow`, `ease-pulse` | `ease-bounce`, `ease-rotate`, `ease-shake` | `transform` collision |
| `ease-shake` | `ease-hover-glow`, `ease-pulse` | `ease-bounce`, `ease-rotate`, `ease-wave` | `transform` collision |
| `ease-float` | `ease-hover-glow`, `ease-pulse` | `ease-bounce`, `ease-rotate`, `ease-wave` | `transform` collision |
| `ease-gradient-rotation` | ✅ Almost everything — this animates `background-position`, a property nothing else in the library touches | — | No property overlap with any other utility |
| `ease-shimmer-sweep` / `ease-skeleton-shimmer` | ✅ Almost everything — animates `background-position`/`background-size` | Each other (both fight over `background`) | Only conflicts within their own family |

### Hover-triggered transitions (not `@keyframes`, just `transition:`)
These only activate on `:hover`/`:focus`, so they're much safer to combine with entrance/loop animations — the conflict risk is only when **two hover utilities both transition `transform`**.

| Utility | Animates | Compatible With | Avoid Combining With | Why |
|---|---|---|---|---|
| `ease-hover-lift` | `transform`, `box-shadow` | `ease-hover-glow` (`filter`) | `ease-hover-grow`, `ease-hover-shrink`, `ease-card-lift`, `ease-hover-squish-border` | All transition `transform` on `:hover` — combining means whichever is more specific in the cascade wins, the other's hover effect is silently dropped |
| `ease-hover-grow` | `transform` | `ease-hover-glow` | `ease-hover-lift`, `ease-hover-lift-shadow`, `ease-hover-shrink` | Same `transform` collision |
| `ease-hover-shrink` | `transform` | `ease-hover-glow` | `ease-hover-lift`, `ease-hover-grow`, `ease-card-lift` | Same `transform` collision |
| `ease-hover-glow` | `filter` | ✅ Virtually everything — no other hover utility touches `filter` | `ease-blur-to-focus` (entrance) if it hasn't finished animating `filter` yet | Only true conflict is with another `filter`-based animation still in progress |
| `ease-hover-squish-border` | `border-radius`, `transform` | `ease-hover-glow` | `ease-hover-lift`, `ease-hover-grow`, `ease-card-lift` | `transform` collision |
| `ease-card-lift` | `transform`, `box-shadow` | `ease-hover-glow` | `ease-hover-lift`, `ease-hover-grow`, `ease-hover-shrink` | `transform` collision — functionally near-identical to `ease-hover-lift`, pick one |

### Delay & duration modifiers
| Utility family | Compatible With | Notes |
|---|---|---|
| `ease-delay-*` (75–1000ms) | ✅ Any animation class | Purely adjusts `animation-delay`, no property conflict possible |
| `ease-transition-delay-*` | ✅ Any hover/transition utility | Adjusts `transition-delay` only |
| `ease-duration-fast/medium/slow` | ✅ Any animation class | Adjusts `animation-duration` only |
| `ease-reveal-delay-1` through `-5` | ✅ Use freely on sibling elements for staggered reveals | Designed specifically for this |

## The one rule to remember
> **If two classes both animate the same CSS property (`transform`, `animation`, `filter`, `background`), only one wins.** Classes that animate *different* properties (e.g. `ease-fade-in`'s `opacity` + `ease-hover-glow`'s `filter`) compose safely. When in doubt, open dev tools → Computed styles and check whether both classes are trying to write to the same property.

## Accessibility notes
- The matrix itself is a static reference table — no motion involved in the documentation page.
- `demo.html`'s live examples respect `prefers-reduced-motion` the same way the underlying utility classes do.

## Maintenance note for the maintainer
This matrix reflects the utility classes present in `core/animations.css` at the time of writing. As new `ease-*` utilities are added, please extend the relevant table above rather than starting a new one, so this stays the single source of truth.