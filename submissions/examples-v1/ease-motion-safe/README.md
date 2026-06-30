```markdown
# ease-motion-safe Utility Modifier

This submission introduces an accessibility-first utility class modifier tailored for `EaseMotion-css`.

## How it works

The `.ease-motion-safe` class automatically wraps animations within a standard system-level media query hook (`prefers-reduced-motion: reduce`). When active, it securely overrides heavy CSS spins, loops, or transitions to safeguard visitors experiencing vestibular issues or motion sickness.

## Files included

- `demo.html` - An interactive page to test toggling OS motion preferences.
- `style.css` - Core implementation properties of the reduced motion utility overrides.
```
