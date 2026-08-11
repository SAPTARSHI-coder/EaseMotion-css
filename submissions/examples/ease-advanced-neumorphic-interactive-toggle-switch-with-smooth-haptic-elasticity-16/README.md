# Neumorphic Interactive Toggle Switch (Compact Mobile-First Edition)

A compact, small-footprint neumorphic toggle built for mobile UIs, with a genuine multi-step spring-like "elastic" snap and a ripple pulse on toggle. Pure CSS and HTML — no JavaScript.

## How it works

**The elastic snap.** Rather than relying on a single bouncy easing curve, the thumb's motion is defined as an explicit multi-step `@keyframes` timeline: it overshoots past its target, springs back slightly the other way, overshoots again in a smaller arc, then settles — closer to how a real physical spring behaves than a single cubic-bezier curve can express. Separate keyframes handle the on/off directions since the overshoot direction differs each way.

**The ripple pulse.** The thumb has a `::after` ring that's invisible by default. When the checkbox becomes checked, the `animation` property on that ring goes from unset to an actual keyframe name — this change is what makes the browser play the animation fresh each time, giving a small pulse ring on every toggle without needing to detect "just changed" state in JavaScript.

**Mobile-first tap target.** The visible track is intentionally small (42×24px) to stay compact in dense mobile layouts, but the actual clickable/tappable area is enlarged via padding on the `.ease-toggle` label itself, so the tap target stays comfortably large without visually bloating the switch.

## Files
- `demo.html` – three toggle rows (Wi-Fi, Bluetooth, Airplane mode)
- `style.css` – all styling, custom properties, and the elastic/ripple keyframes
- `README.md` – this file

## Custom properties
- `--ease-compact-duration` – overall snap duration
- `--ease-compact-bg`, `--ease-compact-shadow-light/dark` – neumorphic surface tones
- `--ease-compact-accent` – active track and ripple color
- `--ease-compact-track-width/height`, `--ease-compact-thumb-size` – dimensions
- `--ease-compact-thumb-travel` – how far the thumb slides; keep in sync with track/thumb size if you resize

## Notes
- Pure CSS/HTML only — no JavaScript, per the framework's philosophy
- Tap target enlarged via padding, independent of the visible track size, for comfortable mobile use
- Respects `prefers-reduced-motion` — the elastic and pulse animations are disabled, and the thumb jumps directly to its resting position