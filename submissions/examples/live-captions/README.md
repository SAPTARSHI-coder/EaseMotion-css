# Live Captions Overlay

## Summary

A reusable caption-overlay pattern for surfaces that combine typed/generated text with
delayed audio playback (e.g. TTS-driven video). While the audio is being generated or
played, a caption bar shows the corresponding text so onlookers aren't left with a
silent, motionless screen.

## Why

- Closes the latency gap between "text submitted" and "audio playing" with an
  immediate visual cue.
- Gives deaf and hard-of-hearing viewers a text alternative to lip-reading or audio.
- A "Show captions" toggle keeps it opt-in, and a short scrollable history lets
  users glance back at the last few things that were said.

## Files

- `demo.html` — standalone working demo (input box, Speak button, caption bar, history)
- `style.css` — caption bar, controls, and history styling

## Behavior

1. Caption appears as soon as generation starts (`Speak` clicked).
2. Caption clears 1 second after simulated playback ends.
3. Toggle hides/shows the caption bar without stopping playback.
4. History panel keeps the last 10 captions with a timestamp.

## Accessibility note

The caption bar uses a semi-transparent dark background with white text at 18px for
contrast, matching common video-subtitle conventions. This pattern is meant to be
adapted onto any canvas/video surface where audio has a generation or playback delay.

## Notes for maintainer review

Filed against [issue #88694](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/88694),
which described this in the context of a specific TTS/lip-sync tool that isn't part of
this repository. This submission generalizes the caption-overlay UI/UX pattern itself
(markup, styling, timing behavior) so it can be reviewed and, if useful, standardized
into `ease-*` classes per the normal contribution pipeline.
