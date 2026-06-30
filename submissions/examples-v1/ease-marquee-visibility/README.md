# ease-marquee - Tab Visibility Pause Fix

Fixes #13801 - infinite marquee animations now pause when the browser tab
is backgrounded, saving CPU and battery.

## How It Works

| API                    | Role                              |
| ---------------------- | --------------------------------- |
| Page Visibility API    | Detects tab hidden/visible state  |
| visibilitychange event | Fires on every tab switch         |
| .paused CSS class      | Sets animation-play-state: paused |

## Files

- demo.html - live demo with status badge
- style.css - marquee styles + .paused class
- README.md - this file

## Behavior

- Tab visible - animation runs normally
- Tab hidden - animation pauses (zero CPU cost)
- Respects prefers-reduced-motion

## Browser Support

Page Visibility API supported in all modern browsers.
