# ease-pull-to-refresh-sap

A scrollable list that reveals a rotating spinner indicator when pulled down from the top past a threshold, then simulates a refresh and reloads content.

## Usage
1. Include `style.css`.
2. Add markup: scroll container with a sticky `.refresh-indicator` (holding a `.spinner`) as the first child, followed by list content.
3. Attach the touch event handlers from `demo.html`.

## Customization
- `threshold` (JS): pull distance required to trigger refresh.
- `setTimeout(..., 1200)`: simulated refresh duration — replace with a real fetch/data reload.
- Spinner size/colors.

## Notes
- Only activates when `area.scrollTop === 0` at touch-start, so pulling only triggers refresh when already at the top of the list, not mid-scroll.
- The spinner's rotation is tied to pull distance (`--rot` custom property) while pulling, then switches to a continuous CSS animation once the refresh actually triggers — this is a demo-only touch implementation; real pull-to-refresh in production apps is often native to the OS/browser shell.
- Respects `prefers-reduced-motion`: indicator height transition and spin animation are disabled; the pull-tracking rotation itself is user-driven input feedback and remains functional.