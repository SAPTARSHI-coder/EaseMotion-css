# Contract Animation Safari Stutter Demo

A minimal reproduction to isolate and investigate the stuttering issue observed with the "Contract" animation in Safari browsers.

## How is it used?

Open `demo.html` in Safari and click the "Trigger Animation" button. Observe the behavior of the blue square. Repeat the same test in Chromium (Chrome/Edge) or Firefox for comparison.

## Why is it useful?

This reproduction demo isolates the animation from the rest of the framework, helping maintainers debug the specific Safari rendering issue and identify potential workarounds (e.g., hardware acceleration properties like `will-change: transform` or `transform: translateZ(0)`) without modifying core framework code during the code freeze.

## Observations

- **Safari (Observed Behavior):** The animation drops frames, stutters, and appears jerky, especially during the middle portion of the scale transition.
- **Chrome/Firefox (Expected Behavior):** The animation is smooth and plays seamlessly.
- **Potential Fixes:** Applying `transform: translateZ(0)` or `will-change: transform` to the animated element often forces hardware acceleration and can mitigate this issue in Safari. These properties are currently commented out in `style.css` so the stutter remains reproducible.
