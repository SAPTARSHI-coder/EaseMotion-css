# Message Read Receipt — Double Check Animation

**Component:** message-read-receipt  
**Issue:** [#36815](https://github.com/EaseMotion-css/EaseMotion-css/issues/36815)

A dark-themed card displaying a read-receipt indicator with a two-check SVG animation. The checks draw sequentially to mimic WhatsApp-style double ticks.

## CSS Variables

| Variable           | Default   | Description                   |
|--------------------|-----------|-------------------------------|
| `--check-color`    | `#4ade80` | Colour of the read checkmarks |
| `--unread-color`   | `#555`    | Colour for unread state       |
| `--check-size`     | `3px`     | Stroke width of checkmarks    |
| `--animate-duration`| `0.6s`   | Duration of the draw animation|

## Behaviour

- On load, both checks draw in sequence (second check delayed by `0.4 × duration`).
- The "Mark as Unread" button toggles the visual state (can be extended with JS).
- Fully responsive within the card layout.
