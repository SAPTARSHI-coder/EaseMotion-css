# Floating Scroll CTA

1. **What does this do?**
   A call-to-action button fixed to the bottom-right of the viewport, hidden until the reader scrolls past the hero section, at which point it fades and slides in. Scrolling back up past that threshold fades it back out. A small dismiss (×) button lets the reader close it permanently for the rest of the page session, even if they keep scrolling afterward.

2. **How is it used?**
   Place a `.floatcta` container (containing the dismiss button and the CTA link) anywhere in the page — it's fixed-positioned, so placement in the DOM doesn't matter:

   ```html
   <div class="floatcta">
     <button class="floatcta-dismiss" aria-label="Dismiss">×</button>
     <a class="floatcta-button" href="#top">Get Started</a>
   </div>
   ```

   A small vanilla JS snippet measures the hero section's height, listens for scroll, and toggles `floatcta-visible` / `floatcta-hidden` on the container based on a scroll threshold; clicking dismiss adds `floatcta-dismissed` and detaches the scroll listener entirely.

3. **Why is this useful?**
   Scroll-triggered floating CTAs are a common conversion pattern on marketing and landing pages — present once the reader has shown intent (scrolled past the fold) but absent during the first impression. Handling the dismiss state correctly (so the button can't reappear mid-session after being closed) is the detail that's easy to get wrong in a naive implementation, and is handled explicitly here.

### Notes for the maintainer
- The original issue names the three states as `ease-fade-in`, `ease-hover-lift`, and `ease-fade-out`. Since this is a `submissions/examples/` build, the equivalent behavior is implemented under unprefixed names, with this mapping for integration:
  - `ease-fade-in` → `.floatcta-visible` (opacity + translateY transition on scroll past threshold)
  - `ease-hover-lift` → `.floatcta-button:hover` (translateY + shadow lift)
  - `ease-fade-out` → `.floatcta-hidden` (reverse of the above, on scroll back to top)
- **Dismissal is handled defensively in two layers**: an `isDismissed` flag is checked at the top of the scroll handler (in case any stray scroll event fires mid-transition), and the scroll listener is also fully removed via `removeEventListener` on dismiss — so there's no code path where a dismissed button can become visible again later in the same session.
- The dismissed state (`.floatcta-dismissed`) also strips the CSS transition entirely, so closing the button feels immediate and decisive rather than easing out like a normal scroll-triggered hide.
- The button starts with `pointer-events: none` while hidden, so it can't be clicked or tab-focused before it's actually visible.
- `hero.offsetHeight` is read synchronously since the script tag sits at the end of `<body>`, after the hero section has already been parsed and laid out — verified this is safe rather than assumed.
- `prefers-reduced-motion: reduce` keeps the opacity fade (it conveys real state) but removes the vertical slide and the hover-lift's transform, both of which are purely decorative motion.
- Tested in Chrome, Firefox, and Edge.