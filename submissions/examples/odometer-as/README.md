# Odometer

### What does this do?

It shows a mechanical odometer display. Each digit is a reel that shows a vertical strip of 0 to 9, shifted so the right number sits in the window, with faint neighbors above and below for a real dial look. The last reel rolls continuously like a ticking counter.

### How is it used?

```html
<span class="reel" style="--d: 4;"><span class="strip">0123456789</span></span>
<span class="reel roll"><span class="strip">0123456789</span></span>
```

Each reel clips a `strip` of the digits 0 to 9. Setting `--d` translates the strip with `translateY(calc(10px - var(--d) * 40px))` to show that digit. A mask fades the top and bottom edges, and the `roll` variant animates the strip instead.

### Why is it useful?

Dashboards, counters, and vehicle UIs show numbers on rolling reels for a tactile, mechanical feel. This builds one with pure CSS from a single digit strip per reel, no script or images.
