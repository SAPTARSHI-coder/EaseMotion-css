# Quicksand Sink

A treasure chest slowly swallowed by quicksand, with ripples pulsing outward and bubbles escaping the surface.

## How is it used?

Sinking is a long `bottom` transition combined with a subtle tilt and fade:

```css
.victim {
  transition: bottom 2.6s ease-in, opacity 2.6s ease-in, transform 2.6s ease-in;
}
.victim.submerged {
  bottom: 88px;
  opacity: 0.35;
  transform: scaleX(1.15) rotate(4deg);
}
```

Because the object sits above a rounded sand mound, moving it down inside the sand and fading it reads as submerging. Two half-phase ripple ellipses and two bubbles keep the surface busy with pure `scaleX` and translate loops.

## Why is it useful?

A "sink" transition — moving an element behind/into a surface while fading and compressing it — is the standard way to remove content with direction, like a card collapsing into a list or an item dropping into a tray. The expanding ripple is also a reusable notification/drop marker.
