# ease-voice-message (`ease-voice-message-ssh`)

A voice message recording UI component with a microphone icon, pinging recording dot, animated waveform bars, recording timer, and stop/cancel controls — built with **pure HTML + CSS**. No JavaScript, no external libraries.

---

## 1. What does this do?

It renders a polished voice-message recording widget like those found in chat apps (WhatsApp, Discord, Telegram, Slack). Tapping the microphone switches the component from an idle state to an active recording state with a pulsing red dot (`ease-ping` animation), animated audio waveform bars, a timer display, and dedicated stop/cancel buttons. State is managed entirely with hidden checkboxes and CSS `:checked` selectors.

---

## 2. How is it used?

The component uses two hidden checkboxes (`#recording-state` and `#cancel-state`) plus three `<label>` triggers (mic, stop, cancel). Switching between idle / recording / cancelled views happens entirely in CSS.

```html
<section class="voice-recorder">
  <input type="checkbox" id="recording-state" class="voice-recorder__state" />
  <input type="checkbox" id="cancel-state" class="voice-recorder__state" />

  <!-- Idle state -->
  <div class="voice-recorder__idle">
    <label for="recording-state" class="voice-recorder__mic-btn">
      <svg class="voice-recorder__mic-icon">...</svg>
    </label>
    <span class="voice-recorder__idle-label">Tap the microphone to start recording</span>
  </div>

  <!-- Active recording state -->
  <div class="voice-recorder__active">
    <label for="cancel-state" class="voice-recorder__cancel-btn">✕</label>

    <div class="voice-recorder__center">
      <div class="voice-recorder__indicator">
        <span class="voice-recorder__dot">
          <span class="voice-recorder__ping"></span>
        </span>
        <span class="voice-recorder__rec-label">REC</span>
      </div>

      <div class="voice-recorder__waveform">
        <span class="wave-bar"></span>
        <span class="wave-bar"></span>
        <!-- … 25 bars total … -->
      </div>

      <div class="voice-recorder__timer">0:08</div>
    </div>

    <label for="recording-state" class="voice-recorder__stop-btn">
      <svg>...</svg>
    </label>
  </div>

  <!-- Cancelled state -->
  <div class="voice-recorder__cancelled">
    <span>❌ Recording cancelled.</span>
    <label for="cancel-state" class="voice-recorder__reset-btn">Reset</label>
  </div>
</section>
```

### Available animations

| Keyframe        | Element                       | Effect                                        |
| --------------- | ----------------------------- | --------------------------------------------- |
| `ease-ping`     | `.voice-recorder__ping`       | Continuous radar-style pulse on recording dot |
| `wave-bounce`   | `.wave-bar`                   | Staggered scaleY bounce for waveform bars     |
| `ease-fade-in`  | active/cancelled state swap   | Smooth fade-up on state change                |

Just open `demo.html` in any modern browser — no server, no build step, no dependencies. Click the mic to start, the paper-plane to stop, or the ✕ to cancel.

---

## 3. Why does it fit EaseMotion CSS?

This submission embodies EaseMotion CSS's animation-first, CSS-only philosophy:

- **`ease-ping` animation** — the exact animation name requested in the issue, used on the recording dot for that signature radar-pulse feel.
- **Pure CSS state management** — idle / recording / cancelled views are switched entirely with hidden checkboxes and the `:checked` sibling-selector pattern. No JavaScript.
- **Realistic audio waveform** — 25 gradient bars with staggered `wave-bounce` animations (varying delays and heights) create an organic, audio-reactive look without any JS.
- **Smooth state transitions** — every state swap uses `ease-fade-in` for a fluid, professional feel.
- **Accessible** — semantic `<label>` controls for keyboard/screen-reader compatibility, ARIA labels on the waveform and timer, and full `prefers-reduced-motion` support.
- **Responsive** — adapts gracefully to mobile (smaller buttons, condensed waveform, smaller timer).
- **Self-contained** — all icons are inline SVG. Zero external assets, zero CDN.

Voice messaging is a core UI primitive for any modern chat or social app. This component gives EaseMotion CSS a reusable, accessible, animated recorder ready for any framework to wire to the actual `MediaRecorder` API.

---

## Acceptance Criteria (matches issue #19881)

- [x] Microphone icon + recording dot (`ease-ping`)
- [x] Animated waveform bars during recording
- [x] Recording timer display
- [x] Stop / cancel controls

---

## Browser Support

Works on all modern browsers:

- ✅ Chrome / Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Opera (latest)

---

## Author

Submitted by **@soumyasekharshee265-ux** as part of issue [#19881](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/19881).