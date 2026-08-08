# ease-counter-roll

An odometer-style digit roller — each digit is a vertical strip of 0–9 that slides to reveal the target number, like a mechanical counter.

## Usage
1. Include `style.css`.
2. Build each digit as a `.digit-wrap > .digit-strip` containing spans `0`–`9` (see `buildDigit()` in `demo.html`).
3. Set `transform: translateY(-Ne{m})` on `.digit-strip` where N is the target digit, to trigger the roll.

## Customization
- Font size scales the whole counter proportionally (digit height is in `em`).
- Transition duration/easing on `.digit-strip` controls roll speed/bounce.
- Background/padding on `.counter-roll` for card-style vs inline display.

## Notes
- Each digit strip contains all 10 possible digits stacked vertically; changing the number is just a `translateY` shift, not a text swap — that's what gives the mechanical roll rather than a fade/pop.
- `overflow: hidden` on `.digit-wrap` clips the strip to a single visible digit at a time.
- JS builds the strips and computes target offsets; CSS transition handles the actual roll animation.