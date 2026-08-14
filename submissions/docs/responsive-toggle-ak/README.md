# Responsive Toggle

A responsive, accessible ON/OFF toggle switch with a retro arcade-inspired visual style, built with pure HTML and CSS.

## Overview

The Responsive Toggle component provides a reusable checkbox-based switch for boolean settings (e.g. dark mode, notifications, feature flags). It uses a native `<input type="checkbox">` under the hood for full keyboard and screen-reader support, with all visual states — including the sliding thumb and ON/OFF text swap — handled purely in CSS.

## Usage

Include the stylesheet and add the toggle markup, built on a native checkbox:

```html
<link rel="stylesheet" href="style.css">

<label class="retro-toggle">
  <input class="retro-toggle__input" type="checkbox">

  <span class="retro-toggle__track">
    <span class="retro-toggle__thumb"></span>
    <span class="retro-toggle__text retro-toggle__text--off">OFF</span>
    <span class="retro-toggle__text retro-toggle__text--on">ON</span>
  </span>

  <span class="retro-toggle__label">Retro Mode</span>
</label>
```

To render the toggle already switched on, add `checked` to the `<input>`:

```html
<input class="retro-toggle__input" type="checkbox" checked>
```

## CSS Classes

| Class                        | Description                                          |
|-------------------------------|-------------------------------------------------------|
| `.retro-toggle`               | Wrapping `<label>`; makes the whole control clickable |
| `.retro-toggle__input`        | The native (visually hidden) checkbox that drives state |
| `.retro-toggle__track`        | The pill-shaped track/background of the switch       |
| `.retro-toggle__thumb`        | The sliding knob inside the track                     |
| `.retro-toggle__text`         | Base class for the ON/OFF text labels inside the track |
| `.retro-toggle__text--off`    | The "OFF" label, visible when unchecked                |
| `.retro-toggle__text--on`     | The "ON" label, visible when checked                   |
| `.retro-toggle__label`        | The visible text label next to the switch              |

## States

- **Unchecked (default):** thumb sits left, "OFF" text visible, "ON" text hidden.
- **Checked:** thumb slides right, accent color applied to track/thumb, "ON" text visible, "OFF" text hidden.
- **Hover:** thumb shadow shifts to the accent green for visual feedback.
- **Active (pressed):** thumb shifts slightly to simulate a physical press.
- **Focus-visible:** a dashed outline appears around the track for keyboard users.

All state transitions are pure CSS (`:checked`, `:hover`, `:active`, `:focus-visible` — no JavaScript required).

## Responsiveness

The component adapts at two breakpoints:

- **≤600px:** the label stacks below the switch instead of sitting beside it, and surrounding spacing/shadows shrink.
- **≤420px:** the track and thumb themselves shrink further, with adjusted thumb travel distance to match.

## Accessibility

- Built on a real `<input type="checkbox">`, so it's operable via keyboard (`Tab` + `Space`) and announced correctly by screen readers.
- The checkbox is visually hidden with a clip-based technique (not `display: none`), keeping it in the accessibility tree.
- A visible `focus-visible` outline is provided for keyboard users.
- Respects `prefers-reduced-motion`: all transitions are disabled for users who request reduced motion.

## Demo

See `demo.html` for a live, styled example of the toggle in both states.

## Related Files

- `demo.html` — standalone usage example
- `style.css` — component styles
