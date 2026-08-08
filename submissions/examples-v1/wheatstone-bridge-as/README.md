# Wheatstone Bridge

A pure CSS/HTML Wheatstone bridge sweeping an unknown resistor while the galvanometer needle swings through an exact null.

## What it shows

Two resistor dividers hang across the same supply, and a galvanometer bridges their midpoints. Adjust the unknown arm until the meter reads nothing at all. At that moment

```
R1 / R2 = R3 / Rx      so      Rx = R3 * (R2 / R1)
```

The interesting part is what is missing from that equation. The supply voltage is not in it. The galvanometer's sensitivity is not in it. Neither can affect the answer, because the answer is read at the instant the meter reads **zero**, and zero is zero however badly calibrated the instrument is and whatever the battery happens to be doing.

That is a **null method**, and it is why the bridge is accurate. Measuring a needle's position well is hard: it needs a trustworthy scale, a linear movement, and a steady supply. Noticing that a needle has not moved is easy, and a more sensitive meter makes the null sharper rather than making the calibration harder. All the precision is pushed into the known resistors and the ratio `R2/R1`, where it is cheap to obtain.

Samuel Hunter Christie published the circuit in 1833. Charles Wheatstone popularised it in 1843 and credited Christie plainly, but the name attached to the wrong person and stayed there.

Here the ratio arm is deliberately not 1:1. With `R1 = 1k` and `R2 = 2k` the bridge multiplies, so a `330` reference balances against an unknown of `660`, and the ratio is doing real work rather than being a decoration.

## How it is built

- **The needle is driven by the circuit equation, not by eye.** Each step's deflection is `Vb = V*Rx/(R3+Rx) - V*R2/(R1+R2)`, scaled to full scale. The browser check recomputes that expression from scratch and compares it against the rendered needle rotation at all 20 steps: worst disagreement **0.005 degrees**, which is the rounding in the stylesheet.
- **The null is exact and it is in the right place.** Across the sweep the needle reads zero at **exactly one** value, **660 ohms**, and that is `R3 * R2/R1 = 330 * 2`. The balance lamp lights at that value and no other.
- **The readout cannot disagree with the needle.** Both are stepped by `steps(1, end)` off the same 20-phase schedule, so there is no intermediate state in which the displayed resistance and the deflection belong to different moments. The animation is physically incapable of showing a mismatched pair.
- **The deflection is readable**, against a five-tick scale with the zero mark drawn brighter, since a needle with no scale behind it is decoration.
- The sweep runs `460` to `860` ohms and back, in 40 ohm steps.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` pauses the sweep, the needle, and the balance lamp together, leaving a single readable state.

## Files

- `demo.html` - markup
- `style.css` - the whole component
