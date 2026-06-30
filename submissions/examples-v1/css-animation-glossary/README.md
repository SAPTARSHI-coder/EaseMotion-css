# 📖 Beginner's Glossary of CSS Animation Terms

This guide outlines the foundational mechanics of CSS animations, mapping raw platform behavior directly to configurable utility variables found within **EaseMotion-css**.

---

### Core Animation Properties

| Technical Property  | Definition                                                                                                                                                 | EaseMotion Variable / Override                                     |
| :------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------- |
| **Keyframes**       | The programmatic sequence markers (from `0%` to `100%`) outlining exactly what styles alter over an explicit duration timeline.                            | _Handled via core framework helper utilities like `.ease-bounce`._ |
| **Duration**        | The absolute timespan it takes for an animation sequence to complete a full cycle from start to finish. Evaluated in seconds (`s`) or milliseconds (`ms`). | `--ease-animation-duration`                                        |
| **Delay**           | An optional programmatic time offset specifying the execution window pause before motion triggers actively.                                                | `--ease-animation-delay`                                           |
| **Iteration Count** | The sequence playback quantity configuration. Can accept an absolute integer scale value or play perpetually using the `infinite` flag.                    | `--ease-animation-iterations`                                      |
| **Timing Function** | The internal progression acceleration profile (easing curve) managing the variance in pacing throughout a singular sequence timeline loop.                 | `--ease-animation-timing`                                          |
| **Fill Mode**       | Dictates state application assignments prior to initial sequence starts (during active delays) or post-sequence expiration execution states.               | `--ease-animation-fill`                                            |

---

### Common Easing Sub-Types

- **`linear`**: Static motion curve lacking variance. Zero acceleration or deceleration shifts.
- **`ease-in`**: Low-speed sequence launch with high-velocity back-end terminal acceleration patterns.
- **`ease-out`**: Aggressive high-velocity baseline sequence launch transitioning directly into cushioned deceleration curves at termination.
- **`ease-in-out`**: Cushioned structural launch profile accelerating inside the mid-cycle phase and mirroring deceleration attributes right at termination thresholds.
