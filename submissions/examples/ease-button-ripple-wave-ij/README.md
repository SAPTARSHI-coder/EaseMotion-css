# Button Ripple Wave

A Material-inspired button ripple effect built with pure CSS and vanilla JavaScript. Click any button to see a ripple wave expand from the point of interaction.

## Usage

Include the `style.css` and add the following markup:

```html
<button class="ripple-btn" data-color="#6C63FF" data-bg="#6C63FF" data-text="#fff">
  Click Me
</button>
```

The accompanying JavaScript (in `demo.html`) listens for clicks, creates a `<span class="ripple">` positioned at the click coordinates, and animates it with a radial-gradient scale-up and fade-out.

## CSS Variables

| Variable              | Default   | Description                    |
| --------------------- | --------- | ------------------------------ |
| `--ripple-duration`   | `0.6s`    | Duration of the ripple animation |
| `--ripple-color`      | `#6C63FF` | Color of the ripple wave       |
| `--ripple-opacity`    | `0.4`     | Starting opacity of the ripple |
| `--btn-bg`            | `#6C63FF` | Button background color        |
| `--btn-text-color`    | `#ffffff` | Button text color              |
| `--btn-border-radius` | `8px`     | Button border radius           |

## Customization

Override variables inline or via CSS to style individual buttons:

```html
<button class="ripple-btn" style="--ripple-duration: 1s; --ripple-color: #e74c3c;">
  Custom
</button>
```

## Browser Support

All modern browsers that support CSS custom properties and CSS keyframe animations.

## License

MIT
