# Sticky Nav Scroll

A navigation bar that becomes sticky on scroll with a glass-morphism effect. JS sets `--nav-opacity` (0 or 1) based on scroll position; CSS controls the background, box-shadow, and backdrop-blur transition.

## Features

- Fixed-position nav that transitions background on scroll
- Backdrop blur glass effect when scrolled
- Smooth transition on background, shadow, and blur
- Scroll-driven via `--nav-opacity` CSS variable
- Responsive layout with max-width container

## Usage

Create a `.navbar` element with `--nav-opacity` set to 0 or 1. CSS transitions handle the visual change from transparent to opaque with backdrop blur.
