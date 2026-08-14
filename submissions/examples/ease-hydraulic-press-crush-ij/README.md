# Hydraulic Press Crush

A two-post hydraulic press whose ram lowers and flattens an object on the table.

## How is it used?

Two independent transitions coordinate the crush — the arm slides down while the object squashes:

```css
.press-arm {
  transition: top 0.8s cubic-bezier(0.65, 0, 0.35, 1);
}
.press-arm.down { top: 190px; }

.object {
  transition: transform 0.45s ease, height 0.45s ease;
  transform-origin: 50% 100%;
}
.object.squashed { height: 30px; transform: translateX(-50%) scale(1.25, 0.9); }
```

The arm moves on a longer, eased transition while the object compresses on a shorter one, so the squash reads as an impact. The ball of the `::after` ram lands exactly on the object's top edge at `top: 190px`.

## Why is it useful?

Mismatched transition durations — fast on the thing being hit, slower on the thing hitting — is how you fake impact without physics. It's the same technique behind button press feedback, collision states in games, and any compress-and-release interaction.
