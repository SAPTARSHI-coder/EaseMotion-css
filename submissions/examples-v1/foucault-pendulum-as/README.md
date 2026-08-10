# Foucault Pendulum

A pure CSS and HTML Foucault pendulum swinging under a museum dome, its plane of swing slowly precessing until it topples the next pin on the dial.

## What it shows

- Two nested rotations doing the physics: an inner element swings the bob fast while an outer one turns the whole plane slowly, which is exactly how the real demonstration reads
- A very long swing period against a 24s precession, so the plane visibly creeps round rather than spinning
- The dial ring of degree ticks from a repeating conic gradient masked to a band, with pins standing on it and one toppling as the plane comes round
- A ribbed dome overhead and a polished brass bob with a specular highlight
- No images, no JavaScript, no external dependencies

## Usage

Open `demo.html` in any modern browser.

## Accessibility

All motion stops under `prefers-reduced-motion: reduce`.
