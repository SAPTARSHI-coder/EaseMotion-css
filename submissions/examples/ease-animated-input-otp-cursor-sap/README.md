# ease-animated-input-otp-cursor-sap

An OTP box group with a blinking text-cursor indicator showing exactly which box will receive the next digit, backed by a single hidden real input for correct keyboard/mobile behavior.

## Usage
1. Include `style.css`.
2. Add markup: visual `.otp-box` cells + one visually hidden real `<input>` that actually captures typing.
3. Attach the render logic from `demo.html`, which mirrors the hidden input's value into the boxes and positions the blinking cursor.

## Notes
- Using one real (visually hidden) input rather than multiple visible inputs avoids the complexity of managing focus/backspace/paste across separate fields — a technique that sidesteps a lot of the auto-advance logic other OTP components need.
- The blinking cursor element is only rendered inside the box matching the current input length, so it always marks the next entry position.
- Respects `prefers-reduced-motion`: the blink animation is disabled, cursor remains solidly visible instead of flashing.