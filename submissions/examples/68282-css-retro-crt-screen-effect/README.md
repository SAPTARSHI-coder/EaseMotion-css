# CSS Retro CRT Screen Effect

## Overview

A pure CSS retro CRT display that recreates the visual character of an old phosphor monitor. The example combines scanlines, screen glow, noise, a subtle reflection, terminal typography, and a blinking cursor inside a responsive monitor frame.

## Features

- Retro CRT monitor presentation
- Horizontal scanline overlay
- Animated phosphor-style screen glow
- Lightweight procedural noise texture
- Screen reflection and vignette layers
- Terminal-style content and blinking cursor
- Responsive monitor sizing
- Keyboard focus styling
- Reduced-motion support
- No JavaScript or external dependencies

## Visual Structure

The monitor is divided into separate CSS layers so each effect can be controlled independently. Scanlines and noise sit above the screen content, while the glow and reflection provide depth without changing the semantic content underneath.

The terminal content remains regular HTML text. The visual treatment is applied entirely through CSS, allowing the component to remain usable if animations are disabled.

## Files

- `demo.html` — semantic monitor and terminal structure
- `style.css` — CRT layers, typography, animation, responsive rules, and accessibility styling
- `README.md` — component documentation

## Usage

Open `demo.html` in a modern browser. No build step, package installation, JavaScript, or external asset is required.

## Accessibility

The screen provides a visible focus state when keyboard focused. The semantic terminal content remains available independently of the decorative effects. The stylesheet also respects `prefers-reduced-motion` by minimizing animation and transition duration.

## Responsive Behavior

The monitor frame, screen height, border thickness, terminal typography, and supporting detail grid adapt at tablet and mobile breakpoints. The detail cards collapse to a single column on narrow screens.

## Issue

EaseMotion CSS issue #68282.
