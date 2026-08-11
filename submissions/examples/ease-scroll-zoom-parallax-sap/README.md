# ease-scroll-zoom-parallax-sap

A hero/section image that starts zoomed in and smoothly scales down to its natural size as it scrolls into view, creating a cinematic "settle" effect.

## Usage
1. Include `style.css`.
2. Add markup: `.zoom-parallax-sap` with an `<img>` starting at `scale(1.3)`.
3. Attach the scroll-linked scale calculation from `demo.html`.

## Customization
- Starting scale (`1.3`) — higher for a more dramatic zoom-out.
- Progress calculation range — adjust how much of the viewport height counts toward "fully settled."
- Caption text/position.

## Notes
- Scale is calculated as a function of the section's position relative to the viewport (`getBoundingClientRect().top` vs `innerHeight`), clamped between 0 and 1 progress, so the effect only plays once as the section enters view rather than continuously through the whole scroll.
- `{ passive: true }` on the scroll listener avoids blocking scroll performance.
- Respects `prefers-reduced-motion`: the img's own CSS transition is removed so JS-driven scale updates apply without any additional smoothing, and since the scale itself is directly tied to scroll position (not a persistent looping animation), this satisfies the intent of the media query for this particular effect.