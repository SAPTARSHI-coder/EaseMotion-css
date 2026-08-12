# Component: Print Stylesheet Guide

This submission implements a print stylesheet guide for EaseMotion for issue **#13627**.

## Description

A guide showing how to properly disable EaseMotion animations for printed output. Includes a complete `@media print` block that disables animations, reveals hidden elements, and removes decorative backgrounds. Recommends using a separate print.css file with `media="print"`.

## Acceptance Criteria

- Complete `@media print` code block
- Disables all animations, transitions, and transforms
- Ensures faded/hidden elements are fully opaque in print
- Removes `animation-timeline` for scroll-driven effects
- Hides decorative background elements
- Recommends separate print stylesheet approach

## Files

- `submissions/examples/print-stylesheet-guide-ij/demo.html`
- `submissions/examples/print-stylesheet-guide-ij/style.css`
- `submissions/examples/print-stylesheet-guide-ij/README.md`
