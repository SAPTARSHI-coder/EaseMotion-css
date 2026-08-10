# CSS Dyslexia Mode Toggle (#71033)

A zero-JS CSS component that toggles dyslexia-friendly typography adjustments (enhanced letter spacing, word spacing, line height, and fallback fonts) across parent document containers.

## Features
- Pure CSS state cascade driven by `:has()` and semantic checkbox state triggers.
- Customized dyslexia font stack (`OpenDyslexic`, `Comic Sans MS`, `Trebuchet MS`).
- Full keyboard support (`Space` / `Enter` toggle, focus visible ring).
- High Contrast (`forced-colors`) and `prefers-reduced-motion` safety rules.
