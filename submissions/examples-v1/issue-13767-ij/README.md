# ease-wishlist-heart

**Closes #13767**

Heart icon with an outline-to-filled toggle, scale pop animation, and a particle burst effect.

## Acceptance Criteria

- [ ] `.heart-icon` toggles between outline (grayscale) and filled (colored) state
- [ ] `.heart-icon.liked` triggers a scale pop keyframe animation
- [ ] A radial burst effect via `::after` pseudo-element on like
- [ ] Like count updates on each click

## Files

- `style.css` – Heart toggle, heartPop keyframes, particle burst
- `demo.html` – Interactive heart with click-to-like and counter
- `README.md` – Issue documentation
