# Thermal Camera View

A false-color "thermal imaging" viewfinder. It reads brightness from a video
source — either your webcam or a built-in procedural demo pattern — and maps
it through a selectable heat-map palette, HUD-style.

## What it does

- **Demo mode by default** — renders an animated procedural heat pattern so
  the component works immediately with no camera or permissions needed.
- **Optional live camera** — click "Start Camera" to opt in to
  `getUserMedia`; your webcam feed is then rendered through the same
  false-color pipeline, entirely in-browser (nothing is uploaded anywhere).
- **Four palettes** — Iron, Rainbow, White-hot, Black-hot — matching the
  common presets found on real thermal cameras.
- **Hover readout** — move the cursor over the viewfinder to see a crosshair
  and an illustrative "temperature" value derived from pixel brightness.
- **Snapshot** — downloads the current false-color frame as a PNG.
- Viewfinder HUD chrome: corner reticle brackets, scanline overlay, a
  live/demo mode badge with a blinking REC dot while live.

## Files

- `demo.html` — markup + logic (vanilla JS, no build step, no frameworks)
- `style.css` — all styling, thermal-HUD visual theme
- `README.md` — this file

## Running it

Open `demo.html` in any modern browser. It works immediately in demo mode.
To try the live camera, click "Start Camera" and allow the permission
prompt; click "Stop Camera" to return to demo mode. No server, build step,
or API key needed.

## Design notes

The visual concept is a handheld thermal-imaging viewfinder: matte black
body, phosphor-green HUD text, amber temperature readout, and faint
scanlines over the image for texture. Corner brackets frame the sensor like
a camera reticle, and a mode badge in the top-left makes it obvious whether
you're looking at the live camera or the built-in demo pattern.

Under the hood, each frame is downsampled to a small working canvas (160×120)
for performance, converted to luminance, run through a palette lookup table,
and scaled back up onto the visible canvas.

## Accessibility

- All controls are native `<button>` / palette buttons with `aria-pressed`
  state, fully keyboard operable with visible focus outlines.
- Status changes (camera starting, permission denied, mode switches) are
  announced via an `aria-live="polite"` region.
- Respects `prefers-reduced-motion` by disabling the REC-dot blink.
- Responsive down to narrow mobile widths.

## Known limitations

- This is a **false-color visualization of ordinary camera brightness**, not
  real infrared/thermal sensor data — the README, footer, and hover readout
  all say so explicitly to avoid misleading anyone.
- The on-hover temperature value is an illustrative mapping (brightness →
  an arbitrary °C range) for demo "feel" only, not a calibrated reading.
- Camera access requires a permission prompt and a browser/OS that exposes a
  webcam; if denied or unavailable, the component simply stays in demo mode
  rather than erroring out.
