# CSS Assignment Deadline

A responsive assignment deadline card that visually communicates
due date, remaining time, and deadline urgency using pure CSS.

## Features

- Pure HTML and CSS
- No JavaScript required
- Due date and time display
- Urgency status badge
- Animated urgency indicator
- Gradient deadline progress bar
- Responsive mobile layout
- Accessible semantic structure
- Reduced-motion support
- Modern dark UI

## Files

- `demo.html` — Assignment deadline card markup
- `style.css` — Component styling and animations

## How It Works

The urgency is represented with a gradient progress bar:

```css
.progress-fill {
  width: 75%;
  background: linear-gradient(
    90deg,
    #facc15,
    #fb923c,
    #f43f5e
  );
}