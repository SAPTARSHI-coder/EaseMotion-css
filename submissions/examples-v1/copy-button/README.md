# 📋 Copy Button — Submission

**Issue:** #4223 — Feature: One-Click Copy Button on All Documentation Code Snippets

## What this adds

A one-click copy-to-clipboard button that auto-injects into every `.code-block`
wrapper on the docs page. Zero dependencies, pure vanilla JS + CSS.

## Features

- Appears on hover; always visible on touch screens
- Checkmark icon for 2s after successful copy
- Keyboard accessible (focus-visible ring)
- Respects prefers-reduced-motion
- Clipboard API with textarea fallback for older browsers

## How to integrate

1. Wrap every `<pre><code>` in `docs/index.html` with `<div class="code-block">`
2. Add the CSS from style.css to the docs stylesheet
3. Paste the `<script>` block before `</body>` in docs/index.html

## Files

- demo.html — live demo with 5 code blocks
- style.css — all styles for .code-block and .copy-btn
- README.md — this file

Submitted for GSSoC-26 · Issue #4223
