# Twinkling Stars Effect

**What is it?**
A night sky scene with 30 individually positioned stars that twinkle at different rates and intensities, plus a glowing crescent moon.

**How it works**
Each `.star` div uses CSS custom property `--d` for its unique animation duration. The `twinkle` keyframe scales opacity and size. Stars with `box-shadow` glow more brightly. Random `animation-delay` values desynchronize the twinkle pattern.

**Why this approach**
Pure CSS with custom properties keeps the HTML clean while allowing per-star timing. No JavaScript needed -- each star naturally drifts in and out of phase.
