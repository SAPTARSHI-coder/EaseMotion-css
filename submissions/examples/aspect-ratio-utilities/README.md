# Aspect Ratio Utilities

An isolated utility package providing native box scaling constraints (`.ease-aspect-*`) to preserve fixed visual proportions across fluid grids and responsive web layouts.

## Utility Roster API

- `.ease-aspect-video`: Sets up standard widescreen bounds running exactly `16 / 9`. Ideal for video players and product cards.
- `.ease-aspect-square`: Sets up symmetrical bounds running exactly `1 / 1`. Best suited for avatar blocks, user profile structures, and social media tiles.
- `.ease-aspect-standard`: Sets up traditional retro presentation bounds running exactly `4 / 3`.
- `.ease-aspect-cinema`: Sets up ultrawide panorama proportions running exactly `21 / 9`.
- `.ease-aspect-auto`: Resets element aspect constraints back to native dimension mappings.

## Functional Controls
- **Anti-Reflow Security:** Reserves dimensional footprints on page load prior to asset hydration, preventing layout shift penalties.
- **Fluid Layout Mapping:** Scales cleanly via native `width: 100%` declarations, modifying element heights on the fly without JavaScript resizing listeners.

## Usage Layout Structure
```html

<div class="ease-aspect-video">
  <iframe src="..." style="width: 100%; height: 100%; object-fit: cover;"></iframe>
</div>
```

Closes #13467
