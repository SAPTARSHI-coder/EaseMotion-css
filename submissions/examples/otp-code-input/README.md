# OTP Code Input

1. What does this do? Six one-time-code boxes where the active slot glows and the code assembles, with a dashed separator between the third and fourth digits.
2. How is it used? Build an `.otp-code-input` form of `.otp-code-input__slot` inputs (each `maxlength="1"`, `inputmode="numeric"`), separated by an `.otp-code-input__dash` span after the third slot. Any focused or `.is-active` slot gets the accent glow; filled slots tint to a soft accent background. Adjust the accent color and glow speed via `--oci-accent` and `--oci-speed`.
3. Why is it useful? It gives a polished OTP entry presentation with pure CSS focus/glow styling (the styling itself is CSS-only; JS would handle tab-advance), and respects `prefers-reduced-motion`.
