```markdown
# CSS Loader Animation Restart Behavior

## Issue

#74792

## Purpose

This submission validates CSS loader animation behavior when the animation
is started, stopped, restarted, or triggered repeatedly.

## Test Cases

- Animation restart
- Double initialization
- Cancel → restart
- Rapid restart
- Animation completion → re-trigger
- Duplicate animation classes

## Expected Behavior

The loader should:

1. Start correctly when triggered.
2. Restart from the beginning when requested.
3. Stop when cancelled.
4. Remain stable during rapid restart attempts.
5. Start again after animation completion.
6. Avoid unexpected behavior when the animation class is added repeatedly.

## Files

- `demo.html` — Interactive loader test page.
- `style.css` — Loader styling and animation.
- `README.md` — Test documentation.

## Testing

Open `demo.html` in a browser and use each control button.

Verify that the loader remains responsive and that every restart begins
the animation correctly without leaving the loader stuck or duplicated.
```
