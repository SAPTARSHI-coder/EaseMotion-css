# ease-animated-confetti-burst-sap

**Level: Advanced**

A DOM-based confetti burst fired from a button click, with randomized colors, trajectories, and rotations.

## Usage

```html
<button onclick="burstConfettiSap(this)">Celebrate</button>
```

Requires the `burstConfettiSap()` JS function in `demo.html`.

## Notes

- No canvas dependency — each particle is a `div` with a randomized `--x`/`--y`/`--r` trajectory.
- Particles self-remove on `animationend` to avoid DOM buildup on repeated clicks.

## Browser support

All modern browsers.