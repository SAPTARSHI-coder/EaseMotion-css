# Reveal Reduced Motion Accessibility Fix

This submission resolves Issue #11230 by patching a critical accessibility bug in `core/reveal.js`. 

## What it does
When a user has `prefers-reduced-motion: reduce` enabled on their OS, the original `reveal.js` script halts execution immediately, leaving all `.ease-reveal` elements invisible. This patched version safely loops through all `.ease-reveal` elements and adds `.ease-reveal-active` to them immediately, ensuring the content is visible without animations.

## How to use it
In this demo, the standard reveal logic is extended/patched via `reveal-patched.js`. Simply use the standard `.ease-reveal` markup.

## Why it fits
Accessibility is a core requirement for a modern CSS framework. This fix proves the concept for an eventual core update while strictly following the contribution guidelines.
