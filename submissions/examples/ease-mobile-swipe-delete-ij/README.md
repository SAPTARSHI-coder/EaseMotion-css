# ease-mobile-swipe-delete

A swipe-to-delete interaction for mobile-style list rows. Swiping a row to the left reveals a red delete action behind it. The row content translates via `--offset` CSS variable, and the transition uses a spring-like cubic-bezier curve when snapping back.

## Usage

Open `demo.html` in a browser. Click and drag any row to the left; release past the threshold to reveal the delete action, or snap back if under threshold.

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--swipe-threshold` | `80px` | The swipe distance required to reveal delete |
| `--delete-color` | `#ef4444` | Background color of the delete action |
| `--transition-speed` | `0.3s` | Speed of the snap-back transition |

## Notes

- JavaScript sets `--offset` based on drag distance
- CSS handles all visual transitions via the `--offset` property
- Touch and mouse input are both supported
