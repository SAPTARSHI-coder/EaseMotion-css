# Submission Component: Ripple Like Button

## Overview

A compact, pure-CSS “like” toggle that uses a visually hidden checkbox and an animated ripple halo to provide polished feedback without JavaScript.

## ✨ Submission Files

- `demo.html` — Browser-ready preview with three responsive variants in different contexts.
- `style.css` — Scoped component styles that reuse EaseMotion variables, timing tokens, and the shared `ease-kf-ping` animation.

## 🎛️ Interaction Architecture

1. **Hidden Toggle Control:** The label wraps a visually hidden checkbox so the control stays semantic, keyboard accessible, and screen-reader friendly.
2. **Ripple Halo Animation:** When the checkbox becomes checked, a pseudo-element expands and fades using the library’s shared ping keyframe and easing tokens.
3. **Stateful Feedback:** The icon switches from an outlined heart to a filled heart and the label turns to the danger accent to signal an active state.

## ♿ Accessibility Notes

The control exposes an `aria-label` and remains operable by keyboard, so assistive technologies can announce the active state clearly without requiring JavaScript.
