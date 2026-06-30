# Functional Card CTA Buttons

## Issue

Fixes #1427 - Card CTA buttons are non-functional on Cards documentation page.

## Problem

The Cards section displayed CTA buttons such as:

- Explore
- Learn More
- Get Started

However, clicking these buttons did not trigger any action, navigation, or interaction.

## Solution

This submission provides a self-contained demo where each CTA button opens a relevant detail page:

- Explore → `animation-first.html`
- Learn More → `human-readable.html`
- Get Started → `zero-config.html`

## Files Added

```text
submissions/examples/card-cta-buttons/
├── demo.html
├── style.css
├── README.md
├── animation-first.html
├── human-readable.html
└── zero-config.html
```
