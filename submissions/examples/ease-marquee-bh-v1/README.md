# ease-marquee Infinite Scrolling Ticker Utility

## What does this do?

A pure-CSS, seamless infinite horizontal scroll for logos, tags, or announcement text. Content duplicates once and slides continuously via `@keyframes`, pausing on hover.

## How is it used?

```html
<div class="ease-marquee">
  <div class="ease-marquee-track">
    <span>Fast</span>
    <span>Lightweight</span>
    <span>Composable</span>
    <span>Zero Deps</span>
    <span>Fast</span>
    <span>Lightweight</span>
    <span>Composable</span>
    <span>Zero Deps</span>
  </div>
</div>
```

### CSS Classes

| Class | Purpose |
|-------|---------|
| `.ease-marquee` | Container for the marquee (hides overflow) |
| `.ease-marquee-track` | Inner track with sliding content |
| `.ease-marquee-slow` | Slower animation variant |
| `.ease-marquee-fast` | Faster animation variant |

## Why is it useful?

Logo walls ("as seen in"), tag clouds, and announcement bars are very common landing-page patterns. Doing it smoothly without JS (and without jank) is a well-known but fiddly CSS trick worth standardizing:

- ✅ Pure CSS, no JavaScript required
- ✅ Seamless infinite scroll
- ✅ Pauses on hover for accessibility
- ✅ Smooth GPU-accelerated animation
- ✅ Customizable speed variants
