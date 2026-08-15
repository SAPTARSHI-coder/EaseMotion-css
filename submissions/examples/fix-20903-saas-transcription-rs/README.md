# SaaS Transcription Service Visual

## Issue
**Issue #20903**: Advanced: SaaS Landing — Transcription Service

## Description
This submission features a captivating CSS-only visualization for an AI Transcription SaaS landing page. It showcases an animated audio waveform that acts alongside a "scanning" effect. Below the waveform, a block of transcribed text lights up word-by-word in sequence, simulating the real-time transcription process.

## Implementation Details
- **HTML (`demo.html`)**: Defines audio bars for the waveform and individual `<span>` elements for each transcribed word.
- **CSS (`style.css`)**: 
  - **Audio Waveform**: Uses the `soundWave` keyframes to alternate the height of the bars, simulating audio frequencies.
  - **Scanner Overlay**: A linear gradient div animates across the waveform container using `left` positioning.
  - **Text Transcription**: A `transcribe` keyframe animation alters the opacity, color, and text-shadow of words. Staggered `animation-delay` creates the sequential "typing/listening" effect.

## Verification
Open `demo.html` in a web browser. Observe the bouncing audio visualizer and the scanning bar. Note how the text below illuminates word-by-word, accurately depicting an AI generating text from speech.
