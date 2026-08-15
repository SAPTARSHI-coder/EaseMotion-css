# Audio Player — Playhead Progress Edge Cases

## Overview

This submission provides an interactive audio player playhead demonstration
together with a focused Vitest specification for edge-case behavior.

The primary purpose is to verify that playhead progress remains safe and
predictable when playback values are outside their expected range or contain
invalid data.

## Progress Formula

For valid inputs:

```text
progress = (currentTime / duration) × 100