# Cross Device Motion Adaptation System

## What does this do?

The Cross Device Motion Adaptation System is a simulation and testing utility to profile and optimize how transitions behave across different screen sizes (Mobile, Tablet, Desktop) and device power states.

## How is it used?

Open `demo.html` directly in any modern browser:

- **Enable Responsive Scaling**: Toggle "Responsive Motion Scale" to scale the transition bounds to fit mobile phone boundaries (±67px) compared to tablet (±102px) and desktop (±142px). Unchecking it demonstrates unscaled overflows.
- **Thermal Throttling**: Toggle "Mobile Thermal Cap" to simulate frame drop jank (capping mobile rendering at 8 FPS using steps timing-functions).
- **Power Profile**: Switch the profile to Low Power Mode to verify that animations pause efficiently to preserve battery.
- **Export Media Queries**: Copy the generated CSS media queries from the right panel to dynamically scale transitions in your responsive apps.

## Why is it useful?

Large-screen animations that look great on desktop often clip offscreen, cause horizontal scrollbars, or trigger performance lag on mobile hardware.

This system solves cross-device motion adaptation by:

1. Providing side-by-side device mockups showing safe movement thresholds in real-time.
2. Simulating thermal caps and low battery modes to test animation performance under hardware limits.
3. Automatically generating responsive CSS rules using container and media queries to scale animation durations and translation offsets.

## Tech Stack

- HTML5
- CSS3 (stepped keyframes, device frame layouts, safe-area bounds dashed styling)
- JavaScript (synchronization wave triggers, viewport telemetry meters, compliance indicators)

## Preview

Open [demo.html](file:///submissions/examples/cross-device-adaptation-bv/demo.html) directly in your browser.
