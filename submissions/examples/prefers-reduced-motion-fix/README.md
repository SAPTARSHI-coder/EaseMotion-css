# Prefers Reduced Motion Accessibility Fix

### What does this do?

This submission provides precise, targeted `@media (prefers-reduced-motion: reduce)` resets and fallbacks for all entrance, exit, looping, and hover classes in EaseMotion CSS, replacing the global `*` wildcard reset that disables benign transitions and introduces layout visibility bugs.

---

### How is it used?

The maintainer should replace the legacy wildcard rule at the bottom of `core/animations.css` (lines 688–696) with the production media query blocks inside `style.css`.

No modifications are needed on the user side; standard class usage (e.g., `<div class="ease-slide-up">`) automatically detects user OS settings and applies the appropriate overrides:

1. **Entrances** (`.ease-slide-up`, `.ease-zoom-in`, `.ease-flip`, etc.) gracefully transition to standard opacity fades (`ease-kf-fade-in`) instead of sliding or spinning across the viewport.
2. **Exits** (`.ease-shake-card-exit`, `.ease-bounce-button-exit`, etc.) gracefully transition to standard opacity fades (`ease-kf-fade-out`) instead of shaking or scaling violently.
3. **Loops & Skeletons** (`.ease-bounce`, `.ease-rotate`, `.ease-skeleton-shimmer`, `.ease-btn-loading::after`, etc.) freeze completely via `animation: none` to prevent constant visual distraction.
4. **Hover Interactions** (`.ease-hover-grow`, `.ease-card-lift`, `.ease-hover-morph-card`, etc.) suppress physical translations/scales (`transform: none`), while keeping harmless, non-motion-based color and shadow transitions intact.
5. **Typewriter Layouts** (`.ease-typewriter-loop`) disable typing movements but force `width: auto` and remove `overflow: hidden`, ensuring the text remains fully visible and readable.

---

### Why is it useful?

1. **Fixes Accessibility Anti-Patterns**: The global `* { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }` wildcard kills _all_ transitions on a webpage. Harmless transitions like button hover background-color fades, focus border-color glow transitions, and light mode/dark mode theme fades are completely disabled despite having no impact on vestibular disorders. This fix selectively disables only motion-heavy properties (transforms, translations, bounces, infinite loops) while keeping benign color transitions functional.
2. **Prevents Layout and Visibility Failures**: Under the legacy wildcard system, typewriter animations (`.ease-typewriter-loop`) remain permanently hidden at `width: 0` because the animation is cancelled. Similarly, exit animations with delays can get stuck in incomplete states. This fix explicitly handles layout-critical properties to guarantee content visibility under reduced-motion.
3. **Graceful Fallbacks over Complete Halts**: Rather than cutting off elements immediately mid-animation or skipping entrance effects entirely, mapping entrances to simple opacity fades (`ease-kf-fade-in`) maintains design continuity and polished UX without compromising accessibility.
