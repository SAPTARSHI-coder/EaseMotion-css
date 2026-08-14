# CSS Numbered List Animated

An animated ordered list where numbered items reveal sequentially using pure CSS.

## Features

- Sequential list-item reveal animation
- Number pop animation
- Pure HTML and CSS
- Responsive design
- Accessible semantic ordered list
- Keyboard-friendly page structure
- Reduced-motion support
- No JavaScript required

## Files

- `demo.html` - Demo markup
- `style.css` - Component styles

## How It Works

CSS counters are used to generate the numbered list automatically.

Each list item receives a custom animation delay using the `--item-index` CSS variable.

## Accessibility

The component uses a semantic `<ol>` element so screen readers can understand
the content as an ordered list.

Users who prefer reduced motion are supported through
`prefers-reduced-motion`.

## Usage

Open `demo.html` in a browser to view the animation.

## Technologies

- HTML5
- CSS3