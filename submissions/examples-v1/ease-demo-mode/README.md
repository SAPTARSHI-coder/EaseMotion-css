# ease-demo

`ease-demo` is an automatic documentation mode utility that cycles UI components through interactive states for component showcases, design systems, and documentation sites.

## Overview

This feature automatically transitions components through default, hover, focus, active, disabled, and loading states. It loops continuously, pauses when the user interacts, and resumes after a short period of inactivity.

## Installation

1. Add the `submissions/examples/ease-demo-mode/` folder to the repository.
2. Include `easemotion.css` first, then `style.css`, and finally `script.js`.

```html
<link rel="stylesheet" href="easemotion.css" />
<link rel="stylesheet" href="submissions/examples/ease-demo-mode/style.css" />
<script src="submissions/examples/ease-demo-mode/script.js"></script>
```

## Usage examples

Wrap your showcase area with the `.ease-demo` class and optionally configure states with data attributes:

```html
<div
  class="ease-demo"
  data-ease-demo-states="default hover focus active disabled loading"
>
  <!-- UI components go here -->
</div>
```

### Enable or disable individual states

```html
<div class="ease-demo" data-ease-demo-states="default hover active">
  <!-- only default, hover, and active states are cycled -->
</div>
```

## Configuration options

Customize playback speed and theme via CSS custom properties:

```css
:root {
  --ease-demo-speed: 1.25;
  --ease-demo-transition: 260ms ease;
}
```

Interactive controls include:

- Play
- Pause
- Restart
- Playback speed selector
- Loop toggle

The current active state is displayed inside the demo panel.

## Browser compatibility

Works in modern browsers that support:

- CSS custom properties
- CSS transitions
- JavaScript `requestAnimationFrame` and `setTimeout`
- `prefers-reduced-motion`

## Accessibility considerations

- Respects `prefers-reduced-motion` by disabling automatic playback.
- Pauses automatically when the user interacts with any component.
- Uses semantic controls and labels for playback.

## Known limitations

- Loading state is simulated using visual overlay styling rather than actual network events.
- The demo uses a fixed set of states and does not export/import state sequences yet.
- Component-specific states like dropdown open/close are not included in this initial version.

## Future enhancement ideas

- Add export/import for demo sequences.
- Support more component states such as open/closed and selected.
- Add a visual timeline with event markers.
- Support user-defined state durations per component.

---

Submitted by: @your-github-username
