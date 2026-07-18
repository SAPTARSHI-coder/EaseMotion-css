# EaseMotion HTML Fixtures: Slide Animations

This directory contains standalone, deterministic HTML fixture pages designed specifically for future automated browser testing and visual regression pipelines.

## Purpose

To ensure that EaseMotion's generated CSS classes render consistently across all supported browsers, we require static HTML documents that demonstrate individual animations in isolation. These fixtures provide stable targets for tools like Playwright, Cypress, or Puppeteer to capture screenshots and perform pixel-by-pixel comparisons against established baselines.

## Included Fixtures

- `slide-up.html` - Demonstrates the `.ease-slide-up` animation class.
- `slide-down.html` - Demonstrates the `.ease-slide-down` animation class.
- `slide-left.html` - Demonstrates the `.ease-slide-left` animation class.
- `slide-right.html` - Demonstrates the `.ease-slide-right` animation class.

## Design Principles

These fixtures adhere strictly to the following principles to maximize their utility in automated testing:

1.  **Deterministic**: They do not rely on random numbers, dynamic content, or network requests that could cause false positives in visual regression tools.
2.  **Minimal**: They contain only the essential HTML and CSS required to demonstrate the target animation. No unnecessary JavaScript is included.
3.  **High Contrast**: The demo element uses a brightly colored background (`#3b82f6`) against a neutral page background (`#f1f5f9`), ensuring that automated screenshot comparison algorithms can easily detect rendering differences.
4.  **Self-Contained**: Each HTML file references a single, shared `style.css` file within this directory, ensuring consistent layout without external dependencies.
5.  **Centered**: The demo element is perfectly centered in the viewport, providing a predictable capture area.

## Usage

In future testing pipelines, an automated script can:
1. Spin up a headless browser.
2. Load each `.html` file from this directory.
3. Wait for the animation to complete (or pause execution at specific frame intervals).
4. Capture a screenshot.
5. Compare the screenshot against an approved baseline image.
