# Device Frame Mockup Component

### What does this do?
Adds `ease-device-frame-az` — device mockup frames that wrap content in realistic phone, tablet, laptop, and browser bezels. Pure CSS, no images required.

### How is it used?
The maintainer should copy `style.css` into `components/device-frame.css` and import it.

```html
<div class="ease-device-frame-az phone">
  <div class="device-screen-az">
    <img src="screenshot.png" alt="Mobile view">
  </div>
  <span class="device-label-az">iPhone</span>
</div>
```

Device variants: `.phone` (9:19.5 aspect, notch/dynamic island, home bar), `.phone.no-notch`, `.tablet` (4:3, pinhole camera dot), `.laptop` (16:10 screen with hinge base), `.browser` (Chrome-style toolbar with traffic light dots and URL bar).

All devices include hover-ready bezel shadows, dark mode support via `prefers-color-scheme`, and responsive sizing.

### Why is it useful?
1. **Showcase responsive designs** — present mobile, tablet, and desktop views side by side
2. **Portfolio & landing pages** — display app screenshots in realistic frames
3. **Documentation** — preview components at different breakpoints
4. **Pure CSS** — no external images, SVGs, or JavaScript needed
5. **Browser variant** — perfect for website/landing page mockups with URL bar



Submitted by: @zen-ash-dev

Date: 2026-06-08

Status: **Pending review**
