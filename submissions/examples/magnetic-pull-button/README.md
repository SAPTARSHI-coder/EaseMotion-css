# Magnetic Pull Button

1. What does this do? A primary button whose surface pulls toward the cursor on hover and snaps back on leave, with a springy easing curve.
2. How is it used? Wrap a `.magnetic-pull-button__btn` in a `.magnetic-pull-button` span (the wrapper gives a larger hover hit area). On hover/focus the button translates by `--tx`/`--ty` and snaps back on leave. To make it track the pointer for real, set `--tx`/`--ty` from a small mousemove script on the wrapper; otherwise the CSS defaults apply. Adjust the accent and snap speed via `--mpb-accent` and `--mpb-speed`.
3. Why is it useful? It adds a playful magnetic pull effect with pure CSS defaults (no JavaScript required for the hover behavior), keyboard focus support, and `prefers-reduced-motion` support that disables the translate.
