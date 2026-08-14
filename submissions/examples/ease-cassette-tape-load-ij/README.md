# Cassette Tape Load

A cassette deck where the tape slides into the well with a springy settle and the reels start spinning.

## How is it used?

Toggling `.loaded` on the cassette moves it into the deck and flips the reels to `running`:

```css
.cassette {
  top: 62px;
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), top 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.cassette.loaded { top: 82px; }
.cassette.loaded .reel { animation-play-state: running; }
```

`animation-play-state` lets one toggle pause or play the reel spin without restarting the timeline — the counter-rotating reels use `animation-direction: reverse` on the second reel.

## Why is it useful?

This is a tidy pairing of a transitioned entry motion with an independently-gated infinite animation. The play/pause pattern via a class switch is the same mechanism behind audio players, weather widgets and any "widget starts animating when visible" behavior, all without touching the animation timeline itself.
