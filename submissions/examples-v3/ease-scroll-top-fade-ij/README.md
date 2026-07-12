# Scroll Top Fade

A smooth scroll-to-top button with fade-in/fade-out animation using CSS transitions and vanilla JavaScript.

## Usage

Include the stylesheet and the button markup in your page. The button appears when the user scrolls past the threshold and fades in. Clicking it smooth-scrolls to the top.

```html
<link rel="stylesheet" href="style.css">
<button class="scroll-top-btn hidden" id="scrollTopBtn">
  ↑
</button>
```

## Customization

Override these CSS custom properties in your stylesheet:

```css
:root {
  --scroll-duration: 0.3s;
  --scroll-btn-bg: #2563eb;
  --scroll-btn-color: #ffffff;
  --scroll-btn-size: 48px;
  --scroll-threshold: 300;
}
```

| Property              | Default     | Description                          |
| --------------------- | ----------- | ------------------------------------ |
| `--scroll-duration`   | `0.3s`      | Transition duration for fade in/out  |
| `--scroll-btn-bg`     | `#2563eb`   | Button background color              |
| `--scroll-btn-color`  | `#ffffff`   | Button icon / text color             |
| `--scroll-btn-size`   | `48px`      | Button width and height              |
| `--scroll-threshold`  | `300`       | Scroll Y threshold (px) to show/hide |

## License

MIT
