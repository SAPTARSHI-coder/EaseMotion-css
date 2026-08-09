# ease-split-text-reveal-sap

A heading where each word rises up from below and fades in with a staggered delay — clipped so words appear to "slide into place" from a masked region.

## Usage
1. Include `style.css`.
2. Add markup: any heading with `class="split-reveal-sap"` and plain text.
3. Include the JS from `demo.html`, which wraps each word in a clipped outer span + animated inner span.

## Customization
- `i * 0.12s` stagger interval: delay between each word's reveal.
- `translateY(110%)` starting offset and animation duration/easing.
- Font size/weight for different heading levels.

## Notes
- Uses a two-span-per-word structure: the outer `.word` span has `overflow: hidden` to act as a mask, while the inner span is the one that actually translates upward — this is what creates the "sliding up from a hidden slot" look rather than a plain fade.
- Splitting by word (not character) keeps the effect readable for longer headings without excessive animation count.
- Respects `prefers-reduced-motion`: all words appear instantly in their final position and opacity, animation is fully disabled.