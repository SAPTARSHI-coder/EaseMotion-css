# Animation Chaos Tester

A stress-testing mode that intentionally runs multiple EaseMotion utilities simultaneously using randomized durations, delays, easing functions, and interaction states.

Resolves Issue: #41590

## ✨ Features

- **Randomized Combinations**: Automatically picks random animations from the EaseMotion CSS core and applies them.
- **Specificity Testing**: Stress-tests utilities by overriding `animation-duration`, `animation-delay`, and `animation-timing-function` with random inline styles to expose edge cases.
- **Visual Feedback**: Logs applied classes and duration states directly into the DOM cards for easy debugging and monitoring.
- **Clean Implementation**: Zero external dependencies outside of `EaseMotion-css`. Simple Javascript loop utilizing `setInterval` to swap animations cleanly.
- **Beginner Friendly**: Extremely straightforward and well-documented code that makes it easy for other contributors to understand or extend.

## 🚀 How to use

Open the `demo.html` in your browser. Click **Start Chaos Test** to begin the randomized stress-testing loop, and **Stop Test** when you're done observing the behavior.
