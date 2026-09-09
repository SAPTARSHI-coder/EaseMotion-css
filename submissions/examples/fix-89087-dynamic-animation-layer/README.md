# Proposed Fix for Bug #89087: Dynamic Animation Classes Fail to Trigger

This directory demonstrates the root cause and provides a working proof-of-concept fix for `#89087`, where dynamic injection of animation classes (e.g. `ease-*` via `classList.add()`) fails to trigger the animation.

## 🐛 The Root Cause
Currently, in `core/animations.css`, all `@keyframes` definitions are strictly scoped inside the `@layer easemotion-utilities { ... }` block. 
Due to a known browser rendering engine defect (found in WebKit and Chromium, e.g. Chromium Issue #1445749), animations that reference `@keyframes` nested within a `@layer` fail to apply and render if the element receives the triggering class *dynamically* after the initial frame/DOM load.

## ✅ The Proposed Core Fix
The maintainers should patch `core/animations.css` by extracting all `@keyframes` definitions and moving them outside the `@layer easemotion-utilities { ... }` block (into the global, unlayered root).

Since `@keyframes` share a global namespace and are unaffected by CSS layer specificity regardless of where they are placed, unlayering them strictly prevents the browser injection clipping bug without altering the framework's CSS specificity hierarchy for utility classes!

## 🧪 About this Folder
Because GSSoC contributors are not allowed to directly edit files in `/core`, this submission reproduces the bug and fixes it locally in the `style.css` override. 

Open `demo.html` in your browser. After 1.5 seconds, the `ease-fade-in` and `ease-bounce` classes are injected dynamically via JS. Because the keyframes in `style.css` are explicitly extracted into the global scope, the animation plays flawlessly.
