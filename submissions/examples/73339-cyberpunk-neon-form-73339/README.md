# Cyberpunk Neon Form

## Overview

Implementation for EaseMotion issue #73339. The component is a responsive form with a cyberpunk neon visual language.

## Features

- Pure HTML and vanilla CSS
- Cyan and magenta edge lighting
- Responsive two-column form grid
- Clear keyboard focus states
- Dark-mode friendly palette
- Hardware-friendly transform transitions
- Reduced-motion support
- Semantic labels and native controls

## Structure

`demo.html` contains the semantic form, supporting feature cards, and accessible labels. `style.css` contains the visual system, responsive rules, focus treatment, and animation.

## Accessibility

Every input has a visible label. Native form controls remain usable with keyboard and touch input. `:focus-visible` provides a strong action-button indicator, while `prefers-reduced-motion` removes the decorative scan animation.

## Performance

The interface uses CSS gradients, shadows, transforms, and opacity rather than JavaScript-driven animation. No external libraries or assets are required.

## Usage

Open `demo.html` in a modern browser. The form can be copied into another page without adding a JavaScript dependency.

## Issue

EaseMotion CSS issue #73339.
